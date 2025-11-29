import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'bare.money - No B.S. Budgeting for UK',
  description: 'The bare truth about your money. Connect Monzo, track spending, get AI coaching from Juno. Free forever.',
  keywords: ['budgeting', 'monzo', 'uk', 'finance', 'money', 'ai', 'juno'],
  openGraph: {
    title: 'bare.money - No B.S. Budgeting',
    description: 'The bare truth about your money. Connect Monzo, track spending, get AI coaching from Juno.',
    url: 'https://bare.money',
    siteName: 'bare.money',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'bare.money - No B.S. Budgeting',
    description: 'The bare truth about your money. Connect Monzo, track spending, get AI coaching from Juno.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bare-bg">
        {children}
      </body>
    </html>
  )
}
