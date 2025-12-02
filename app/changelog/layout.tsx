import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'What\'s new in bare.money. See the latest features, improvements, and fixes.',
  alternates: {
    canonical: '/changelog',
  },
  openGraph: {
    title: 'Changelog | bare.money',
    description: 'What\'s new in bare.money. See the latest features, improvements, and fixes.',
    url: 'https://bare.money/changelog',
  },
}

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
