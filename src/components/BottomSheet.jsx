import { useState } from 'react';
import { tierLabels, tierColors, trendIcon, trendColor } from '../data/neighborhoods';

const tabs = [
  { id: 'buy', label: 'Compras' },
  { id: 'services', label: 'Serviços' },
  { id: 'hustles', label: 'Renda extra' },
  { id: 'problems', label: 'Problemas' },
];

export default function BottomSheet({ data, onClose }) {
  const [tab, setTab] = useState('buy');
  const tierColor = tierColors[data.tier];

  return (
    <>
      <div className="sheet-backdrop" onClick={onClose} />
      <div className="sheet">
        <div className="sheet-handle" onClick={onClose} />
        <button className="sheet-close" onClick={onClose} aria-label="Fechar">✕</button>

        <div className="sheet-scroll">
          {/* Header */}
          <div className="sheet-top">
            <div>
              <div className="sheet-name">{data.name}</div>
              <div className="sheet-tags">
                <span
                  className="tier-chip"
                  style={{ background: `${tierColor}26`, color: tierColor }}
                >
                  {tierLabels[data.tier]}
                </span>
                <span className="sheet-sub" style={{ color: trendColor[data.economyTrend] }}>
                  {trendIcon[data.economyTrend]} {data.economyTrend}
                </span>
              </div>
              <div className="sheet-sub" style={{ marginTop: 6 }}>
                {data.dominantActivity} · {data.population.toLocaleString('pt-BR')} moradores
              </div>
            </div>
            <div className="sheet-score">
              <div className="sheet-score-num">{data.score}</div>
              <div className="sheet-score-cap">score</div>
            </div>
          </div>

          {/* Stat tiles */}
          <div className="tiles">
            <div className="tile">
              <div className="tile-label">Renda média</div>
              <div className="tile-value">R$ {data.avgIncome.toLocaleString('pt-BR')}</div>
            </div>
            <div className="tile">
              <div className="tile-label">Aluguel</div>
              <div className="tile-value">R$ {data.avgRent.toLocaleString('pt-BR')}</div>
              <div className={`tile-delta ${data.rentTrend >= 0 ? 'delta-up' : 'delta-down'}`}>
                {data.rentTrend >= 0 ? '▲' : '▼'} {Math.abs(data.rentTrend)}% a.a.
              </div>
            </div>
            <div className="tile">
              <div className="tile-label">Informal</div>
              <div className="tile-value">{data.informalEconomy.match(/\d+/)?.[0] ?? '–'}%</div>
              <div className="tile-delta" style={{ color: 'var(--muted)' }}>da economia</div>
            </div>
          </div>

          {/* Opportunity */}
          <div className="opp">
            <div className="opp-title">🎯 Oportunidade de negócio</div>
            <div className="opp-text">{data.opportunity}</div>
          </div>

          <div className="profile">{data.economyProfile}</div>

          {/* Tabs */}
          <div className="tabs">
            {tabs.map((t) => (
              <button
                key={t.id}
                className={`tab ${tab === t.id ? 'tab-on' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === 'buy' && (
            <>
              <div className="section-label">O que as pessoas mais compram</div>
              {data.topPurchases.map((p) => (
                <div className="row" key={p.name}>
                  <span>{p.name}</span>
                  <span className="freq">{p.freq}</span>
                </div>
              ))}
              <div className="section-label">Produtos mais vendidos</div>
              <div className="pill-wrap">
                {data.topProducts.map((p) => (
                  <span className="pill" key={p}>{p}</span>
                ))}
              </div>
            </>
          )}

          {tab === 'services' && (
            <>
              <div className="section-label">Serviços mais procurados</div>
              {data.topServices.map((s) => (
                <div className="row" key={s}>
                  <span>{s}</span>
                </div>
              ))}
            </>
          )}

          {tab === 'hustles' && (
            <>
              <div className="section-label">Como as pessoas fazem renda extra</div>
              {data.sideHustles.map((h) => (
                <div className="row" key={h}>
                  <span className="row-ico">💼</span>
                  <span style={{ flex: 1 }}>{h}</span>
                </div>
              ))}
            </>
          )}

          {tab === 'problems' && (
            <>
              <div className="section-label">Principais problemas do bairro</div>
              {data.mainProblems.map((p) => (
                <div className="problem-row" key={p}>
                  <span className="problem-ico">⚠</span>
                  <span>{p}</span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
