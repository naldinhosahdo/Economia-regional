import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Sequential blue ramp (dark surface): darkest = lowest, lightest = highest
const ramp = ['#184f95', '#1c5cab', '#256abf', '#2a78d6', '#3987e5', '#5598e7', '#6da7ec', '#86b6ef'];

const informalToNum = (v) => {
  if (v.includes('muito alta')) return 1.0;
  if (v.includes('muito baixa')) return 0.1;
  if (v.includes('alta')) return 0.75;
  if (v.includes('média')) return 0.5;
  if (v.includes('baixa')) return 0.25;
  return 0.5;
};

const employmentToNum = (v) => ({ alto: 1.0, 'médio': 0.55, baixo: 0.2 }[v] ?? 0.5);
const trendToNum = (v) => ({ crescendo: 1.0, 'estável': 0.5, retraindo: 0.1 }[v] ?? 0.5);

const getLayerValue = (n, layer) => {
  switch (layer) {
    case 'score':      return n.score / 100;
    case 'income':     return Math.min(n.avgIncome / 10000, 1);
    case 'rent':       return Math.min(n.avgRent / 5000, 1);
    case 'informal':   return informalToNum(n.informalEconomy);
    case 'trend':      return trendToNum(n.economyTrend);
    case 'employment': return employmentToNum(n.employmentRate);
    default:           return n.score / 100;
  }
};

const layerLegend = {
  score:      'Score econômico',
  income:     'Renda média',
  rent:       'Aluguel médio',
  informal:   'Economia informal',
  trend:      'Tendência econômica',
  employment: 'Nível de emprego',
};

const valueLabel = (n, layer) => {
  switch (layer) {
    case 'score':      return `Score ${n.score}`;
    case 'income':     return `R$ ${n.avgIncome.toLocaleString('pt-BR')}/mês`;
    case 'rent':       return `R$ ${n.avgRent.toLocaleString('pt-BR')}/mês`;
    case 'informal':   return `Informal: ${n.informalEconomy}`;
    case 'trend':      return n.economyTrend;
    case 'employment': return `Emprego ${n.employmentRate}`;
    default:           return '';
  }
};

function FlyTo({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) map.flyTo(coords, 13.5, { duration: 0.9 });
  }, [coords, map]);
  return null;
}

function InvalidateOnShow({ visible }) {
  const map = useMap();
  useEffect(() => {
    if (visible) setTimeout(() => map.invalidateSize(), 60);
  }, [visible, map]);
  return null;
}

export default function MapView({ neighborhoods, activeLayer, selected, onSelect, visible }) {
  return (
    <>
      <MapContainer
        center={[-3.7758, -38.5323]}
        zoom={12}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />
        <FlyTo coords={selected?.coords} />
        <InvalidateOnShow visible={visible} />

        {neighborhoods.map((n) => {
          const v = getLayerValue(n, activeLayer);
          const fill = ramp[Math.min(ramp.length - 1, Math.floor(v * ramp.length))];
          const isSel = selected?.id === n.id;

          return (
            <CircleMarker
              key={n.id}
              center={n.coords}
              radius={isSel ? 26 : 13 + v * 12}
              pathOptions={{
                fillColor: fill,
                fillOpacity: 0.82,
                color: isSel ? '#ffffff' : 'rgba(255,255,255,0.35)',
                weight: isSel ? 2.5 : 1,
              }}
              eventHandlers={{ click: () => onSelect(n) }}
            >
              <Tooltip direction="top" className="neighborhood-tooltip" offset={[0, -12]}>
                <div>
                  <strong>{n.name}</strong>
                  <div style={{ fontSize: 11, color: '#c3c2b7', fontWeight: 400 }}>
                    {valueLabel(n, activeLayer)}
                  </div>
                </div>
              </Tooltip>
            </CircleMarker>
          );
        })}
      </MapContainer>

      <div className="map-legend">
        <div className="map-legend-title">{layerLegend[activeLayer]}</div>
        <div className="map-legend-bar" />
        <div className="map-legend-ends">
          <span>menor</span>
          <span>maior</span>
        </div>
      </div>
    </>
  );
}
