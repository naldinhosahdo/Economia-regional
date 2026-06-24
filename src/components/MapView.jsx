import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import NeighborhoodPopup from './NeighborhoodPopup';

const volumeToNumber = (v) => {
  const m = { 'muito alto': 1.0, 'alto': 0.8, 'médio': 0.5, 'baixo': 0.3, 'muito baixo': 0.1 };
  return m[v] ?? 0.5;
};

const getLayerValue = (n, layer) => {
  switch (layer) {
    case 'score': return n.score / 100;
    case 'rent': return Math.min(n.avgRent / 5000, 1);
    case 'delivery': return volumeToNumber(n.deliveryVolume);
    case 'moto': return volumeToNumber(n.motoApps);
    case 'gaps': return n.gaps.length / 5;
    default: return n.score / 100;
  }
};

const layerColor = (value, layer) => {
  if (layer === 'rent') {
    const r = Math.round(value * 245 + 10);
    const g = Math.round((1 - value) * 180 + 50);
    return `rgb(${r}, ${g}, 50)`;
  }
  if (layer === 'gaps') {
    return `rgb(245, ${Math.round((1 - value) * 100 + 100)}, 50)`;
  }
  const r = Math.round(value * 245 + 10);
  const g = Math.round(value * 180 + 50);
  const b = 50;
  return `rgb(${r}, ${g}, ${b})`;
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
      zoomControl={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© OpenStreetMap contributors'
      />
      <FlyTo coords={flyTo} />

      {neighborhoods.map((n) => {
        const value = getLayerValue(n, activeLayer);
        const radius = 400 + value * 600;
        const color = layerColor(value, activeLayer);
        const isSelected = selectedNeighborhood?.id === n.id;

        return (
          <CircleMarker
            key={n.id}
            center={n.coords}
            radius={isSelected ? 28 : 22}
            pathOptions={{
              fillColor: color,
              fillOpacity: isSelected ? 0.85 : 0.65,
              color: isSelected ? '#ffffff' : color,
              weight: isSelected ? 2.5 : 1,
            }}
            eventHandlers={{
              click: () => onSelect(n),
            }}
          >
            <Tooltip
              permanent={false}
              direction="top"
              className="neighborhood-tooltip"
              offset={[0, -12]}
            >
              <div>
                <strong>{n.name}</strong>
                <div style={{ fontSize: 11, color: '#94a3b8' }}>{n.topBusiness}</div>
              </div>
            </Tooltip>

            {isSelected && (
              <Popup
                className="custom-popup"
                maxWidth={340}
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
