import '@/app/globals.css'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <nav
          style={{
            borderBottom: '1px solid #1f2027',
            padding: 16,
            display: 'flex',
            gap: 20,
          }}
        >
          <strong>RankRoadmap</strong>
          <Link href="/dashboard">Overview</Link>
          <Link href="/stats">Stats</Link>
          <Link href="/roadmap">Roadmap</Link>
        </nav>

        <main style={{ padding: 24 }}>{children}</main>
      </body>
    </html>
  )
}
