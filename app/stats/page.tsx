export default function StatsPage() {
  return (
    <>
      <h1>Stats détaillées</h1>

      <div className="grid grid-3">
        <div className="card">
          <h3>K/D</h3>
          <div className="stat-value bad">0.97</div>
        </div>

        <div className="card">
          <h3>Headshot %</h3>
          <div className="stat-value bad">18%</div>
        </div>

        <div className="card">
          <h3>Lecture coach</h3>
          <p style={{ color: 'var(--muted)' }}>
            Le souci est plus tactique que mécanique. Priorité au positionnement.
          </p>
        </div>
      </div>
    </>
  )
}
