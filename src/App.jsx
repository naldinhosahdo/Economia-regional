import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MapView from './components/MapView';
import StatsBar from './components/StatsBar';
import { neighborhoods } from './data/neighborhoods';

export default function App() {
  const [activeLayer, setActiveLayer] = useState('score');
  const [selected, setSelected] = useState(null);

  const handleNeighborhoodClick = (n) => {
    setSelected(prev => prev?.id === n?.id ? null : n);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#0f172a' }}>
      <StatsBar neighborhoods={neighborhoods} activeLayer={activeLayer} />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <div style={{ width: 240, flexShrink: 0 }}>
          <Sidebar
            neighborhoods={neighborhoods}
            activeLayer={activeLayer}
            onLayerChange={setActiveLayer}
            onNeighborhoodClick={handleNeighborhoodClick}
            selectedId={selected?.id}
          />
        </div>
        <div style={{ flex: 1, position: 'relative' }}>
          <MapView
            neighborhoods={neighborhoods}
            activeLayer={activeLayer}
            selectedNeighborhood={selected}
            onSelect={handleNeighborhoodClick}
          />
        </div>
      </div>
    </div>
  );
}
