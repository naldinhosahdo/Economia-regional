const layerLabels = {
  score:      '💰 Score Econômico',
  income:     '👛 Renda Média',
  rent:       '🏠 Aluguel',
  informal:   '🏪 Economia Informal',
  trend:      '📈 Tendência Econômica',
  employment: '👷 Nível de Emprego',
};

export default function StatsBar({ neighborhoods, activeLayer }) {
  const totalPop = neighborhoods.reduce((s, n) => s + n.population, 0);
  const avgIncome = Math.round(neighborhoods.reduce((s, n) => s + n.avgIncome, 0) / neighborhoods.length);
  const growing = neighborhoods.filter(n => n.economyTrend === 'crescendo').length;
  const avgScore = Math.round(neighborhoods.reduce((s, n) => s + n.score, 0) / neighborhoods.length);

  return (
    <div className="flex items-center gap-4 px-4 py-2.5 bg-slate-900/95 border-b border-slate-800 text-xs backdrop-blur overflow-x-auto">
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <span className="w-2 h-2 rounded-full bg-amber-500 pulse-dot inline-block" />
        <span className="text-slate-500">Camada:</span>
        <span className="text-amber-400 font-semibold">{layerLabels[activeLayer]}</span>
      </div>

      <div className="w-px h-4 bg-slate-700 flex-shrink-0" />

      <div className="flex items-center gap-1 flex-shrink-0">
        <span className="text-slate-500">Bairros:</span>
        <span className="text-white font-bold">{neighborhoods.length}</span>
      </div>

      <div className="w-px h-4 bg-slate-700 flex-shrink-0" />

      <div className="flex items-center gap-1 flex-shrink-0">
        <span className="text-slate-500">População:</span>
        <span className="text-white font-bold">{(totalPop / 1000).toFixed(0)}k</span>
      </div>

      <div className="w-px h-4 bg-slate-700 flex-shrink-0" />

      <div className="flex items-center gap-1 flex-shrink-0">
        <span className="text-slate-500">Renda média:</span>
        <span className="text-emerald-400 font-bold">R$ {avgIncome.toLocaleString('pt-BR')}</span>
      </div>

      <div className="w-px h-4 bg-slate-700 flex-shrink-0" />

      <div className="flex items-center gap-1 flex-shrink-0">
        <span className="text-slate-500">Em crescimento:</span>
        <span className="text-emerald-400 font-bold">{growing} bairros</span>
      </div>

      <div className="w-px h-4 bg-slate-700 flex-shrink-0" />

      <div className="flex items-center gap-1 flex-shrink-0">
        <span className="text-slate-500">Score médio:</span>
        <span className="text-blue-400 font-bold">{avgScore}</span>
      </div>

      <div className="flex-1" />

      <div className="text-slate-600 flex-shrink-0">Clique em um bairro para explorar</div>
    </div>
  );
}
