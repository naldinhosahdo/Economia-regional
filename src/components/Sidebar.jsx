import { tierLabels, tierColors } from '../data/neighborhoods';

const scoreColor = (score) => {
  if (score >= 80) return '#f59e0b';
  if (score >= 65) return '#10b981';
  if (score >= 50) return '#3b82f6';
  return '#ef4444';
};

export default function Sidebar({ neighborhoods, activeLayer, onLayerChange, onNeighborhoodClick, selectedId }) {
  const layers = [
    { id: 'score', label: '💰 Score Geral', desc: 'Potencial econômico' },
    { id: 'rent', label: '🏠 Aluguel', desc: 'Custo por m²' },
    { id: 'delivery', label: '📦 Delivery', desc: 'Volume de entregas' },
    { id: 'moto', label: '🏍️ Motoboys', desc: 'Concentração de apps' },
    { id: 'gaps', label: '⚡ Gaps', desc: 'O que falta' },
  ];

  const sorted = [...neighborhoods].sort((a, b) => b.score - a.score);

  return (
    <div className="flex flex-col h-full bg-slate-900 border-r border-slate-800 overflow-hidden">
      {/* Logo */}
      <div className="px-4 py-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-sm font-black text-slate-900">$</div>
          <div>
            <div className="font-bold text-white text-sm">MoneyMaps</div>
            <div className="text-xs text-slate-500">Fortaleza · CE</div>
          </div>
        </div>
      </div>

      {/* Layer selector */}
      <div className="px-3 py-3 border-b border-slate-800">
        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Visualizar por</div>
        <div className="space-y-1">
          {layers.map(l => (
            <button
              key={l.id}
              onClick={() => onLayerChange(l.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all ${
                activeLayer === l.id
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <div className="font-medium">{l.label}</div>
              <div className="text-slate-500 text-xs">{l.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="px-3 py-3 border-b border-slate-800">
        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Legenda</div>
        <div className="space-y-1">
          {Object.entries(tierLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: tierColors[key] }} />
              <span className="text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rankings */}
      <div className="flex-1 overflow-y-auto px-3 py-3">
        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Ranking de bairros</div>
        <div className="space-y-1">
          {sorted.map((n, i) => (
            <button
              key={n.id}
              onClick={() => onNeighborhoodClick(n)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center gap-2 ${
                selectedId === n.id
                  ? 'bg-slate-700 border border-slate-600'
                  : 'hover:bg-slate-800'
              }`}
            >
              <span className="text-slate-600 text-xs w-4 font-mono">{i + 1}</span>
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: n.color }} />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-slate-300 truncate">{n.name}</div>
                <div className="text-xs text-slate-600">R${n.avgRent.toLocaleString('pt-BR')}/mês</div>
              </div>
              <div className="text-xs font-bold" style={{ color: scoreColor(n.score) }}>{n.score}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-slate-800">
        <div className="text-xs text-slate-600 text-center">Dados representativos · 2024</div>
      </div>
    </div>
  );
}
