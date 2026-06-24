import { tierLabels, tierColors, trendIcon, trendColor } from '../data/neighborhoods';

const scoreColor = (score) => {
  if (score >= 80) return '#f59e0b';
  if (score >= 65) return '#10b981';
  if (score >= 50) return '#3b82f6';
  return '#ef4444';
};

const layers = [
  { id: 'score', label: '💰 Score Econômico', desc: 'Potencial geral do bairro' },
  { id: 'income', label: '👛 Renda Média', desc: 'Poder de compra dos moradores' },
  { id: 'rent', label: '🏠 Aluguel', desc: 'Custo de instalação' },
  { id: 'informal', label: '🏪 Economia Informal', desc: 'Concentração de trabalho informal' },
  { id: 'trend', label: '📈 Tendência', desc: 'Crescimento ou retração' },
  { id: 'employment', label: '👷 Emprego', desc: 'Nível de empregabilidade' },
];

export default function Sidebar({ neighborhoods, activeLayer, onLayerChange, onNeighborhoodClick, selectedId }) {
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
        <div className="text-xs text-slate-600 mt-2 leading-relaxed">
          Enxergue oportunidades econômicas em cada bairro
        </div>
      </div>

      {/* Layer selector */}
      <div className="px-3 py-3 border-b border-slate-800">
        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Visualizar por</div>
        <div className="space-y-0.5">
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
              <div className="text-slate-600 text-xs">{l.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="px-3 py-2.5 border-b border-slate-800">
        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Tipo de bairro</div>
        <div className="grid grid-cols-2 gap-1">
          {Object.entries(tierLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: tierColors[key] }} />
              <span className="text-xs text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rankings */}
      <div className="flex-1 overflow-y-auto px-3 py-3">
        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Ranking econômico</div>
        <div className="space-y-0.5">
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
              <span className="text-slate-700 text-xs w-4 font-mono flex-shrink-0">{i + 1}</span>
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: n.color }} />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-slate-300 truncate">{n.name}</div>
                <div className="flex items-center gap-1">
                  <span className="text-xs" style={{ color: trendColor[n.economyTrend] }}>
                    {trendIcon[n.economyTrend]}
                  </span>
                  <span className="text-xs text-slate-600 truncate">{n.dominantActivity}</span>
                </div>
              </div>
              <div className="text-xs font-bold flex-shrink-0" style={{ color: scoreColor(n.score) }}>
                {n.score}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-3 border-t border-slate-800">
        <div className="text-xs text-slate-600 text-center">Clique no mapa para explorar</div>
      </div>
    </div>
  );
}
