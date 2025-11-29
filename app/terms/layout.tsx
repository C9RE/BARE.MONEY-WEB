import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for bare.money budgeting app. Free to use, read-only bank access, AI coaching disclaimer.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | bare.money',
    description: 'Terms and conditions for using bare.money budgeting app.',
    url: 'https://bare.money/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
