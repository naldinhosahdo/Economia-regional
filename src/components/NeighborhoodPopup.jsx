import { tierLabels } from '../data/neighborhoods';

const volumeBar = (level) => {
  const map = { 'muito alto': 5, 'alto': 4, 'médio': 3, 'baixo': 2, 'muito baixo': 1 };
  const filled = map[level] || 0;
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <div
          key={i}
          className="h-2 w-4 rounded-sm"
          style={{ background: i <= filled ? '#10b981' : '#1e3a2f' }}
        />
      ))}
    </div>
  );
};

const rentTrend = (val) => {
  if (val > 0) return <span className="text-emerald-400 text-xs font-bold">▲ +{val}% a.a.</span>;
  if (val < 0) return <span className="text-red-400 text-xs font-bold">▼ {val}% a.a.</span>;
  return <span className="text-slate-400 text-xs">→ estável</span>;
};

const scoreColor = (score) => {
  if (score >= 80) return '#f59e0b';
  if (score >= 65) return '#10b981';
  if (score >= 50) return '#3b82f6';
  return '#ef4444';
};

export default function NeighborhoodPopup({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="text-sm text-slate-200 font-sans">
      {/* Header */}
      <div
        className="rounded-t-xl px-4 py-3 flex items-center justify-between"
        style={{ background: `linear-gradient(135deg, ${data.color}22, ${data.color}44)`, borderBottom: `1px solid ${data.color}44` }}
      >
        <div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-white">{data.name}</span>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: `${data.color}33`, color: data.color }}
            >
              {tierLabels[data.tier]}
            </span>
          </div>
          <div className="text-xs text-slate-400 mt-0.5">{data.population.toLocaleString('pt-BR')} moradores</div>
        </div>
        <div className="text-right">
          <div
            className="text-2xl font-black"
            style={{ color: scoreColor(data.score) }}
          >
            {data.score}
          </div>
          <div className="text-xs text-slate-500">score</div>
        </div>
      </div>

      <div className="px-4 py-3 space-y-3">
        {/* Opportunity highlight */}
        <div
          className="rounded-lg p-3 border"
          style={{ background: '#f59e0b11', borderColor: '#f59e0b33' }}
        >
          <div className="text-xs font-semibold text-amber-400 mb-1">🎯 OPORTUNIDADE DETECTADA</div>
          <div className="text-xs text-slate-300 leading-relaxed">{data.opportunity}</div>
        </div>

        {/* Rent */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-500 mb-0.5">Aluguel médio/mês</div>
            <div className="font-bold text-white">
              R$ {data.avgRent.toLocaleString('pt-BR')}
              <span className="text-slate-500 font-normal text-xs ml-1">/ 50m²</span>
            </div>
          </div>
          {rentTrend(data.rentTrend)}
        </div>

        {/* Income */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-slate-500">Renda média</div>
          <div className="text-white font-medium text-xs">R$ {data.avgIncome.toLocaleString('pt-BR')}/mês</div>
        </div>

        {/* Delivery & Motos */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg p-2 bg-slate-800">
            <div className="text-xs text-slate-500 mb-1.5">📦 Delivery</div>
            {volumeBar(data.deliveryVolume)}
            <div className="text-xs text-slate-400 mt-1">{data.deliveryVolume}</div>
          </div>
          <div className="rounded-lg p-2 bg-slate-800">
            <div className="text-xs text-slate-500 mb-1.5">🏍️ Motoboys</div>
            {volumeBar(data.motoApps)}
            <div className="text-xs text-slate-400 mt-1">{data.motoApps}</div>
          </div>
        </div>

        {/* Top sales */}
        <div>
          <div className="text-xs text-slate-500 mb-1.5">🔥 O que mais vende</div>
          <div className="flex flex-wrap gap-1">
            {data.topSales.map(s => (
              <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">{s}</span>
            ))}
          </div>
        </div>

        {/* Gaps */}
        <div>
          <div className="text-xs text-slate-500 mb-1.5">⚡ O que falta (gaps)</div>
          <div className="flex flex-wrap gap-1">
            {data.gaps.map(g => (
              <span key={g} className="text-xs px-2 py-0.5 rounded-full border text-amber-300" style={{ borderColor: '#f59e0b44', background: '#f59e0b11' }}>{g}</span>
            ))}
          </div>
        </div>

        {/* Service demand */}
        <div>
          <div className="text-xs text-slate-500 mb-1.5">📈 Serviços em demanda</div>
          <div className="flex flex-wrap gap-1">
            {data.serviceDemand.map(s => (
              <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-emerald-900/40 text-emerald-400 border border-emerald-800">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
