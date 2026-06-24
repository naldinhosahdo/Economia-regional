import { useState } from 'react';
import { tierLabels, trendIcon, trendColor } from '../data/neighborhoods';

const scoreColor = (score) => {
  if (score >= 80) return '#f59e0b';
  if (score >= 65) return '#10b981';
  if (score >= 50) return '#3b82f6';
  return '#ef4444';
};

const freqColor = {
  'diário': '#10b981',
  'semanal': '#3b82f6',
  'quinzenal': '#8b5cf6',
  'mensal': '#f59e0b',
  'trimestral': '#f97316',
  'semestral': '#94a3b8',
  'ocasional': '#64748b',
};

const tabs = [
  { id: 'overview', label: 'Visão Geral' },
  { id: 'economy', label: 'O que compram' },
  { id: 'services', label: 'Serviços' },
  { id: 'hustles', label: 'Bicos / Renda Extra' },
  { id: 'problems', label: 'Problemas' },
];

export default function NeighborhoodPopup({ data }) {
  const [tab, setTab] = useState('overview');
  if (!data) return null;

  return (
    <div className="text-sm text-slate-200 font-sans">
      {/* Header */}
      <div
        className="rounded-t-xl px-4 py-3"
        style={{
          background: `linear-gradient(135deg, ${data.color}22, ${data.color}44)`,
          borderBottom: `1px solid ${data.color}33`,
        }}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-base font-bold text-white">{data.name}</span>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ background: `${data.color}33`, color: data.color }}
              >
                {tierLabels[data.tier]}
              </span>
            </div>
            <div className="text-xs text-slate-400">{data.population.toLocaleString('pt-BR')} moradores · R$ {data.avgIncome.toLocaleString('pt-BR')}/mês renda média</div>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-2xl font-black leading-none" style={{ color: scoreColor(data.score) }}>{data.score}</div>
            <div className="text-xs text-slate-500">score</div>
          </div>
        </div>

        {/* Economy trend row */}
        <div className="flex items-center gap-3 mt-2 text-xs">
          <span
            className="font-semibold"
            style={{ color: trendColor[data.economyTrend] }}
          >
            {trendIcon[data.economyTrend]} {data.economyTrend}
          </span>
          <span className="text-slate-500">·</span>
          <span className="text-slate-400">{data.dominantActivity}</span>
          <span className="text-slate-500">·</span>
          <span className="text-slate-500">Informal: {data.informalEconomy}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-700 bg-slate-800/50 overflow-x-auto">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-3 py-2 text-xs font-medium whitespace-nowrap transition-all border-b-2 ${
              tab === t.id
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="px-4 py-3 space-y-3 max-h-64 overflow-y-auto">

        {tab === 'overview' && (
          <>
            {/* Opportunity */}
            <div
              className="rounded-lg p-3 border"
              style={{ background: '#f59e0b11', borderColor: '#f59e0b33' }}
            >
              <div className="text-xs font-semibold text-amber-400 mb-1">🎯 OPORTUNIDADE DE NEGÓCIO</div>
              <div className="text-xs text-slate-300 leading-relaxed">{data.opportunity}</div>
            </div>

            {/* Economy profile */}
            <div className="text-xs text-slate-400 leading-relaxed border-l-2 pl-3" style={{ borderColor: data.color }}>
              {data.economyProfile}
            </div>

            {/* Key stats grid */}
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg p-2.5 bg-slate-800">
                <div className="text-xs text-slate-500 mb-1">Aluguel médio</div>
                <div className="font-bold text-white text-sm">R$ {data.avgRent.toLocaleString('pt-BR')}</div>
                <div className={`text-xs mt-0.5 ${data.rentTrend > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {data.rentTrend > 0 ? '▲' : '▼'} {Math.abs(data.rentTrend)}% a.a.
                </div>
              </div>
              <div className="rounded-lg p-2.5 bg-slate-800">
                <div className="text-xs text-slate-500 mb-1">Emprego</div>
                <div className="font-bold text-white text-sm capitalize">{data.employmentRate}</div>
                <div className="text-xs text-slate-500 mt-0.5">nível de emprego</div>
              </div>
            </div>
          </>
        )}

        {tab === 'economy' && (
          <>
            <div className="text-xs text-slate-500 mb-1">O que as pessoas mais compram</div>
            <div className="space-y-2">
              {data.topPurchases.map((item, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg px-3 py-2 bg-slate-800">
                  <span className="text-xs text-slate-300">{item.name}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: `${freqColor[item.freq]}22`, color: freqColor[item.freq] }}
                  >
                    {item.freq}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-3">
              <div className="text-xs text-slate-500 mb-2">Produtos mais vendidos no bairro</div>
              <div className="flex flex-wrap gap-1.5">
                {data.topProducts.map(p => (
                  <span key={p} className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-300">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {tab === 'services' && (
          <>
            <div className="text-xs text-slate-500 mb-2">Serviços mais procurados e ofertados</div>
            <div className="space-y-1.5">
              {data.topServices.map((s, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg px-3 py-2 bg-slate-800">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-xs text-slate-300">{s}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'hustles' && (
          <>
            <div className="text-xs text-slate-500 mb-2">Como as pessoas complementam a renda</div>
            <div className="space-y-1.5">
              {data.sideHustles.map((h, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg px-3 py-2 bg-slate-800">
                  <span className="text-amber-400 text-xs">💼</span>
                  <span className="text-xs text-slate-300">{h}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'problems' && (
          <>
            <div className="text-xs text-slate-500 mb-2">Principais problemas relatados</div>
            <div className="space-y-1.5">
              {data.mainProblems.map((p, i) => (
                <div key={i} className="flex items-start gap-2 rounded-lg px-3 py-2 bg-slate-800">
                  <span className="text-red-400 text-xs mt-0.5 flex-shrink-0">⚠</span>
                  <span className="text-xs text-slate-300 leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
