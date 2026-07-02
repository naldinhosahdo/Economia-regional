import { tierColors, trendIcon, trendColor } from '../data/neighborhoods';

export default function RankingView({ neighborhoods, onOpen }) {
  const sorted = [...neighborhoods].sort((a, b) => b.score - a.score);

  return (
    <div className="rank">
      <div className="rank-head">Ranking econômico · {sorted.length} bairros</div>
      {sorted.map((n, i) => (
        <button className="rank-card" key={n.id} onClick={() => onOpen(n)}>
          <div className="rank-pos">{i + 1}</div>
          <div className="rank-body">
            <div className="rank-line1">
              <span className="dot" style={{ background: tierColors[n.tier] }} />
              <span className="rank-name">{n.name}</span>
              <span className="rank-score">{n.score}</span>
            </div>
            <div className="meter">
              <div className="meter-fill" style={{ width: `${n.score}%` }} />
            </div>
            <div className="rank-line2">
              <span>Renda R$ {n.avgIncome.toLocaleString('pt-BR')}</span>
              <span>·</span>
              <span>Aluguel R$ {n.avgRent.toLocaleString('pt-BR')}</span>
              <span style={{ color: trendColor[n.economyTrend] }}>
                {trendIcon[n.economyTrend]} {n.economyTrend}
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
