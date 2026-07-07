import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Saathi — Your Hindi Study Companion',
  description: 'Ask any school question in Hindi or Hinglish. Get a simple explanation + practice quiz — all in Hindi.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
