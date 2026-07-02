import { useState } from 'react';
import MapView from './components/MapView';
import RankingView from './components/RankingView';
import BottomSheet from './components/BottomSheet';
import { neighborhoods } from './data/neighborhoods';

const layers = [
  { id: 'score', label: 'Score' },
  { id: 'income', label: 'Renda' },
  { id: 'rent', label: 'Aluguel' },
  { id: 'informal', label: 'Informalidade' },
  { id: 'trend', label: 'Tendência' },
  { id: 'employment', label: 'Emprego' },
];

export default function App() {
  const [view, setView] = useState('map');
  const [layer, setLayer] = useState('score');
  const [selected, setSelected] = useState(null);

  const openNeighborhood = (n) => {
    setSelected(n);
    setView('map');
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-row">
          <div className="brand">
            <span className="brand-mark">$</span>
            <div>
              <div className="brand-name">MoneyMaps</div>
              <div className="brand-sub">Fortaleza · CE</div>
            </div>
          </div>
        </div>
        <div className="chips">
          {layers.map((l) => (
            <button
              key={l.id}
              className={`chip ${layer === l.id ? 'chip-on' : ''}`}
              onClick={() => setLayer(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </header>

      <main className={`content view-${view}`}>
        <aside className="side">
          <RankingView neighborhoods={neighborhoods} onOpen={openNeighborhood} />
        </aside>
        <div className="mapwrap">
          <MapView
            neighborhoods={neighborhoods}
            activeLayer={layer}
            selected={selected}
            onSelect={setSelected}
            visible={view === 'map'}
          />
        </div>
      </main>

      <nav className="bottomnav">
        <button className={view === 'map' ? 'on' : ''} onClick={() => setView('map')}>
          <span className="nav-ico">🗺️</span>
          Mapa
        </button>
        <button className={view === 'rank' ? 'on' : ''} onClick={() => setView('rank')}>
          <span className="nav-ico">🏆</span>
          Ranking
        </button>
      </nav>

      {selected && <BottomSheet data={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
