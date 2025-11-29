import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Learn how to use bare.money - setup guide for Monzo integration, safe-to-spend calculation, Juno AI coach, bill tracking, and security features.',
  alternates: {
    canonical: '/docs',
  },
  openGraph: {
    title: 'Documentation | bare.money',
    description: 'Complete guide to bare.money - Monzo setup, safe-to-spend, AI coaching, and more.',
    url: 'https://bare.money/docs',
  },
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
