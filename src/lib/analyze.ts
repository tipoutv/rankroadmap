export type PlayerStat = {
  rank: string
  kd: number
  hs_percent: number
}

export type AnalysisResult = {
  problems: string[]
  strengths: string[]
}

export function analyzeStats(stats: PlayerStat[]): AnalysisResult {
  if (stats.length === 0) {
    return {
      problems: ['Aucune donnée disponible'],
      strengths: [],
    }
  }

  // On analyse la DERNIÈRE stat
  const last = stats[0]

  const problems: string[] = []
  const strengths: string[] = []

  // K/D
  if (last.kd < 1) {
    problems.push(
      'Ton K/D est inférieur à 1 : tu perds plus de duels que tu n’en gagnes.'
    )
  } else {
    strengths.push('Ton K/D est correct, tu gagnes tes duels.')
  }

  // Headshot %
  if (last.hs_percent < 18) {
    problems.push(
      'Ton pourcentage de headshots est bas : ton crosshair placement est à travailler.'
    )
  } else {
    strengths.push('Ton aim (headshots) est correct.')
  }

  // Rang (exemple simple)
  if (last.rank.includes('Silver')) {
    problems.push(
      'En Silver, la constance et le positionnement font la différence.'
    )
  }

  if (problems.length === 0) {
    strengths.push('Aucun problème majeur détecté.')
  }

  return { problems, strengths }
}
