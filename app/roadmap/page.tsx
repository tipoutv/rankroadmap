export default function RoadmapPage() {
  return (
    <>
      <h1>Roadmap</h1>

      <div className="card">
        <h2>Objectif</h2>
        <p>Atteindre Gold avec plus de constance</p>
      </div>

      <div className="grid grid-3" style={{ marginTop: 16 }}>
        <div className="card">
          <h3>Routine</h3>
          <ul>
            <li>10 min Range – HS only</li>
            <li>15 min DM – crosshair</li>
            <li>2 ranked max</li>
          </ul>
        </div>

        <div className="card">
          <h3>À éviter</h3>
          <ul>
            <li>Peeks sans info</li>
            <li>Overpeek défense</li>
            <li>Jouer tilt</li>
          </ul>
        </div>

        <div className="card">
          <h3>Conseil clé</h3>
          <p>Qualité & constance &gt; volume.</p>
        </div>
      </div>
    </>
  )
}
