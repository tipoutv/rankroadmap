type Analysis = {
  problems: string[]
  strengths: string[]
}

export type RoadmapItem = {
  title: string
  actions: string[]
}

export function generateRoadmap(analysis: Analysis): RoadmapItem[] {
  const roadmap: RoadmapItem[] = []

  // Aim / duels
  if (analysis.problems.some(p => p.includes('K/D'))) {
    roadmap.push({
      title: 'Gagner plus de duels',
      actions: [
        '15 min de DM focus crosshair placement',
        'Éviter les peeks sans info',
        'Prendre des duels isolés (1v1)'
      ]
    })
  }

  // Headshots
  if (analysis.problems.some(p => p.includes('headshots'))) {
    roadmap.push({
      title: 'Améliorer le crosshair placement',
      actions: [
        '10 min range (headshots only)',
        'Crosshair à hauteur de tête en permanence',
        'Pré-aim aux angles communs'
      ]
    })
  }

  // Rang Silver (exemple ciblé)
  if (analysis.problems.some(p => p.includes('Silver'))) {
    roadmap.push({
      title: 'Sortir du Silver',
      actions: [
        'Jouer un rôle principal (pas switch chaque game)',
        'Communiquer infos simples (positions, HP)',
        'Éviter les fights inutiles en début de round'
      ]
    })
  }

  if (roadmap.length === 0) {
    roadmap.push({
      title: 'Maintenir le niveau',
      actions: [
        'Continuer la routine actuelle',
        'Rester constant sur 5–7 games',
        'Review 1 game par session'
      ]
    })
  }

  return roadmap
}
