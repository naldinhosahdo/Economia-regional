import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import NeighborhoodPopup from './NeighborhoodPopup';

const informalToNum = (v) => {
  if (v.includes('muito alta')) return 1.0;
  if (v.includes('alta')) return 0.75;
  if (v.includes('média')) return 0.5;
  if (v.includes('baixa')) return 0.25;
  if (v.includes('muito baixa')) return 0.1;
  return 0.5;
};

const employmentToNum = (v) => {
  const m = { 'alto': 1.0, 'médio': 0.55, 'baixo': 0.2 };
  return m[v] ?? 0.5;
};

const trendToNum = (v) => {
  const m = { 'crescendo': 1.0, 'estável': 0.5, 'retraindo': 0.1 };
  return m[v] ?? 0.5;
};

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

// Green → Yellow → Red scale
const valueToColor = (v) => {
  if (v >= 0.7) return `rgb(${Math.round(80 + v * 170)}, ${Math.round(220 - v * 60)}, 60)`;
  if (v >= 0.4) return `rgb(240, ${Math.round(150 + v * 80)}, 40)`;
  return `rgb(230, ${Math.round(v * 120)}, 50)`;
};

// For informal economy, higher = more red (warning)
const informalColor = (v) => {
  const r = Math.round(100 + v * 150);
  const g = Math.round(200 - v * 150);
  return `rgb(${r}, ${g}, 50)`;
};

const getColor = (n, layer) => {
  const v = getLayerValue(n, layer);
  if (layer === 'informal') return informalColor(v);
  return valueToColor(v);
};

function FlyTo({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) map.flyTo(coords, 14, { duration: 1.2 });
  }, [coords, map]);
  return null;
}

export default function MapView({ neighborhoods, activeLayer, selectedNeighborhood, onSelect }) {
  const [flyTo, setFlyTo] = useState(null);

  useEffect(() => {
    if (selectedNeighborhood) setFlyTo(selectedNeighborhood.coords);
  }, [selectedNeighborhood]);

  return (
    <MapContainer
      center={[-3.7658, -38.5423]}
      zoom={12}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© OpenStreetMap contributors'
      />
      <FlyTo coords={flyTo} />

      {neighborhoods.map((n) => {
        const color = getColor(n, activeLayer);
        const isSelected = selectedNeighborhood?.id === n.id;
        const value = getLayerValue(n, activeLayer);

        return (
          <CircleMarker
            key={n.id}
            center={n.coords}
            radius={isSelected ? 30 : Math.round(16 + value * 12)}
            pathOptions={{
              fillColor: color,
              fillOpacity: isSelected ? 0.9 : 0.7,
              color: isSelected ? '#ffffff' : color,
              weight: isSelected ? 2.5 : 1,
            }}
            eventHandlers={{ click: () => onSelect(n) }}
          >
            <Tooltip
              direction="top"
              className="neighborhood-tooltip"
              offset={[0, -14]}
            >
              <div>
                <strong>{n.name}</strong>
                <div style={{ fontSize: 11, color: '#94a3b8' }}>{n.dominantActivity}</div>
              </div>
            </Tooltip>

            {isSelected && (
              <Popup
                className="custom-popup"
                maxWidth={360}
                closeOnClick={false}
                eventHandlers={{ remove: () => onSelect(null) }}
              >
                <NeighborhoodPopup data={n} />
              </Popup>
            )}
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
