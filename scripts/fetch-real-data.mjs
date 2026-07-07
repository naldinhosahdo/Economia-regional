// Fetches real business data for Fortaleza from OpenStreetMap (Overpass API),
// counts businesses per category per neighborhood, computes real gaps vs the
// city-wide density, and writes src/data/real-data.json (bundled into the app).
//
// Runs in CI before the build. Never exits non-zero: on any failure the app
// keeps the previous/committed JSON and the deploy proceeds.

import { writeFileSync } from 'node:fs';
import { neighborhoods } from '../src/data/neighborhoods.js';

const BBOX = '-3.90,-38.66,-3.68,-38.40'; // south,west,north,east — Fortaleza
const ENDPOINTS = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://overpass.private.coffee/api/interpreter',
];

// category id → { label, match: (tags) => boolean }
const CATEGORIES = {
  farmacia:    { label: 'Farmácias',        match: (t) => t.amenity === 'pharmacy' },
  academia:    { label: 'Academias',        match: (t) => t.leisure === 'fitness_centre' },
  padaria:     { label: 'Padarias',         match: (t) => t.shop === 'bakery' },
  supermercado:{ label: 'Supermercados',    match: (t) => t.shop === 'supermarket' },
  mercadinho:  { label: 'Mercadinhos',      match: (t) => t.shop === 'convenience' },
  restaurante: { label: 'Restaurantes',     match: (t) => t.amenity === 'restaurant' },
  lanchonete:  { label: 'Lanchonetes',      match: (t) => t.amenity === 'fast_food' },
  banco:       { label: 'Bancos',           match: (t) => t.amenity === 'bank' },
  lavanderia:  { label: 'Lavanderias',      match: (t) => t.shop === 'laundry' || t.shop === 'dry_cleaning' },
  petshop:     { label: 'Pet shops',        match: (t) => t.shop === 'pet' },
  salao:       { label: 'Salões/barbearias',match: (t) => t.shop === 'hairdresser' || t.shop === 'beauty' },
  clinica:     { label: 'Clínicas médicas', match: (t) => t.amenity === 'clinic' || t.amenity === 'doctors' },
  dentista:    { label: 'Dentistas',        match: (t) => t.amenity === 'dentist' },
  escola:      { label: 'Escolas',          match: (t) => t.amenity === 'school' },
  creche:      { label: 'Creches',          match: (t) => t.amenity === 'kindergarten' },
};

const QUERY = `[out:json][timeout:180];
(
  nwr["amenity"~"^(pharmacy|restaurant|fast_food|bank|clinic|doctors|dentist|school|kindergarten)$"](${BBOX});
  nwr["shop"~"^(bakery|supermarket|convenience|laundry|dry_cleaning|pet|hairdresser|beauty)$"](${BBOX});
  nwr["leisure"="fitness_centre"](${BBOX});
);
out center tags;`;

async function fetchOverpass() {
  for (const url of ENDPOINTS) {
    try {
      console.log(`Trying ${url} ...`);
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'data=' + encodeURIComponent(QUERY),
        signal: AbortSignal.timeout(200_000),
      });
      if (!res.ok) { console.log(`  status ${res.status}, trying next`); continue; }
      const json = await res.json();
      if (json.elements?.length) return json.elements;
      console.log('  empty response, trying next');
    } catch (e) {
      console.log(`  failed: ${e.message}`);
    }
  }
  return null;
}

function elementCoords(el) {
  if (el.lat != null) return [el.lat, el.lon];
  if (el.center) return [el.center.lat, el.center.lon];
  return null;
}

function categorize(tags) {
  for (const [id, c] of Object.entries(CATEGORIES)) {
    if (c.match(tags)) return id;
  }
  return null;
}

// Distance in meters between two [lat, lon] points (equirectangular, fine at city scale)
function distM([lat1, lon1], [lat2, lon2]) {
  const x = (lon2 - lon1) * Math.cos(((lat1 + lat2) / 2) * Math.PI / 180);
  const y = lat2 - lat1;
  return Math.sqrt(x * x + y * y) * 111_320;
}

const MAX_ASSIGN_M = 1500; // POI further than this from every center is discarded

export function buildDataset(elements) {
  const counts = {};
  for (const n of neighborhoods) counts[n.id] = Object.fromEntries(Object.keys(CATEGORIES).map((c) => [c, 0]));

  let assigned = 0;
  for (const el of elements) {
    const tags = el.tags || {};
    const cat = categorize(tags);
    const pos = elementCoords(el);
    if (!cat || !pos) continue;
    let best = null;
    let bestD = Infinity;
    for (const n of neighborhoods) {
      const d = distM(pos, n.coords);
      if (d < bestD) { bestD = d; best = n; }
    }
    if (best && bestD <= MAX_ASSIGN_M) { counts[best.id][cat]++; assigned++; }
  }

  // City-wide density per 10k inhabitants (only over covered neighborhoods)
  const totalPop = neighborhoods.reduce((s, n) => s + n.population, 0);
  const cityTotals = {};
  for (const cat of Object.keys(CATEGORIES)) {
    cityTotals[cat] = neighborhoods.reduce((s, n) => s + counts[n.id][cat], 0);
  }

  const byNeighborhood = {};
  for (const n of neighborhoods) {
    const c = counts[n.id];
    const gaps = [];
    const strengths = [];
    for (const cat of Object.keys(CATEGORIES)) {
      if (cityTotals[cat] < 10) continue; // too sparse in OSM to benchmark
      const expected = (cityTotals[cat] / totalPop) * n.population;
      if (expected >= 1.5 && c[cat] === 0) gaps.push(cat);
      else if (expected >= 2 && c[cat] < expected * 0.35) gaps.push(cat);
      else if (expected >= 1 && c[cat] >= expected * 2.2) strengths.push(cat);
    }
    byNeighborhood[n.id] = { counts: c, gaps, strengths };
  }

  return {
    updatedAt: new Date().toISOString(),
    source: 'OpenStreetMap (Overpass API)',
    categoryLabels: Object.fromEntries(Object.entries(CATEGORIES).map(([id, c]) => [id, c.label])),
    cityTotals,
    assigned,
    byNeighborhood,
  };
}

async function main() {
  const elements = await fetchOverpass();
  if (!elements) {
    console.log('All Overpass endpoints failed — keeping existing real-data.json');
    return;
  }
  console.log(`Fetched ${elements.length} elements`);
  const dataset = buildDataset(elements);
  console.log(`Assigned ${dataset.assigned} businesses to neighborhoods`);
  console.log('City totals:', JSON.stringify(dataset.cityTotals));
  const json = JSON.stringify(dataset);
  writeFileSync(new URL('../src/data/real-data.json', import.meta.url), json);
  writeFileSync(new URL('../public/real-data.json', import.meta.url), json);
  console.log('Wrote src/data/real-data.json and public/real-data.json');
}

// Only run when executed directly (not when imported by tests)
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())) {
  main().catch((e) => {
    console.error('fetch-real-data failed:', e);
    // never fail the build
  });
}
