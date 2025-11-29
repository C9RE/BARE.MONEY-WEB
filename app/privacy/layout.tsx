import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How bare.money handles your data. Read-only Monzo access, AES-256 encryption, no data selling. Your privacy matters.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | bare.money',
    description: 'How bare.money protects your financial data. Read-only access, encryption, no data selling.',
    url: 'https://bare.money/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
