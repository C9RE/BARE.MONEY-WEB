import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'System Status',
  description: 'Check the current status of bare.money services. Real-time updates on app, API, and authentication systems.',
  alternates: {
    canonical: '/status',
  },
  openGraph: {
    title: 'System Status | bare.money',
    description: 'Check the current status of bare.money services.',
    url: 'https://bare.money/status',
  },
}

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
