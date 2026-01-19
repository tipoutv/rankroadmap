import { supabase } from './supabase'

export type PlayerStats = {
  rank: string
  kd: number
  hs_percent: number
}

export async function saveStats(stats: PlayerStats) {
  const { data } = await supabase.auth.getUser()
  if (!data.user) throw new Error('Not logged in')

  await supabase.from('player_stats').insert({
    user_id: data.user.id,
    rank: stats.rank,
    kd: stats.kd,
    hs_percent: stats.hs_percent,
  })
}

export async function getMyStats() {
  const { data } = await supabase.auth.getUser()
  if (!data.user) return []

  const { data: stats } = await supabase
    .from('player_stats')
    .select('*')
    .eq('user_id', data.user.id)
    .order('created_at', { ascending: false })

  return stats ?? []
}
