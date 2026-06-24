export default function StatsBar({ neighborhoods, activeLayer }) {
  const totalPop = neighborhoods.reduce((s, n) => s + n.population, 0);
  const avgScore = Math.round(neighborhoods.reduce((s, n) => s + n.score, 0) / neighborhoods.length);
  const topOpportunity = [...neighborhoods].sort((a, b) => b.score - a.score)[0];
  const mostDelivery = neighborhoods.filter(n => n.deliveryVolume === 'muito alto').length;

  const layerLabels = {
    score: 'Score Econômico',
    rent: 'Aluguel Médio',
    delivery: 'Volume de Delivery',
    moto: 'Concentração de Motoboys',
    gaps: 'Gaps de Mercado',
  };

  return (
    <div className="flex items-center gap-4 px-4 py-2.5 bg-slate-900/95 border-b border-slate-800 text-xs backdrop-blur">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-amber-500 pulse-dot inline-block" />
        <span className="text-slate-400">Visualizando: </span>
        <span className="text-amber-400 font-semibold">{layerLabels[activeLayer]}</span>
      </div>

      <div className="w-px h-4 bg-slate-700" />

      <div className="flex items-center gap-1">
        <span className="text-slate-500">Bairros mapeados:</span>
        <span className="text-white font-bold">{neighborhoods.length}</span>
      </div>

      <div className="w-px h-4 bg-slate-700" />

      <div className="flex items-center gap-1">
        <span className="text-slate-500">População total:</span>
        <span className="text-white font-bold">{(totalPop / 1000).toFixed(0)}k</span>
      </div>

      <div className="w-px h-4 bg-slate-700" />

      <div className="flex items-center gap-1">
        <span className="text-slate-500">Score médio:</span>
        <span className="text-emerald-400 font-bold">{avgScore}</span>
      </div>

      <div className="w-px h-4 bg-slate-700" />

      <div className="flex items-center gap-1">
        <span className="text-slate-500">Zonas alto delivery:</span>
        <span className="text-blue-400 font-bold">{mostDelivery}</span>
      </div>

      <div className="flex-1" />

      <div className="text-slate-600 text-xs">
        Clique em um bairro para ver detalhes
      </div>
    </div>
  );
}
