export default function Dashboard() {
  return (
    <>
      <h1>Overview</h1>

      <div className="grid grid-3">
        <div className="card">
          <h3>Rank</h3>
          <div className="stat-value">Silver 2</div>
          <span className="badge">Actuel</span>
        </div>

        <div className="card">
          <h3>K/D</h3>
          <div className="stat-value bad">0.97</div>
          <div className="progress" style={{ '--w': '36%' } as React.CSSProperties}>
            <div />
          </div>
        </div>

        <div className="card">
          <h3>Headshots</h3>
          <div className="stat-value bad">18%</div>
          <div className="progress" style={{ '--w': '48%' } as React.CSSProperties}>
            <div />
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 20 }}>
        <h2>Diagnostic rapide</h2>
        <ul>
          <li className="bad">Duels perdus trop souvent</li>
          <li className="bad">Crosshair placement irrégulier</li>
          <li className="good">Volume de jeu suffisant</li>
        </ul>
      </div>
    </>
  )
}
