import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://bare.money'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#8B5CF6',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'bare.money - No B.S. Budgeting for UK',
    template: '%s | bare.money',
  },
  description: 'The bare truth about your money. Connect your Monzo account, track spending in real-time, and get honest AI coaching from Juno. Free forever, open source.',
  keywords: ['budgeting app', 'monzo integration', 'uk finance', 'money management', 'ai financial coach', 'safe to spend', 'budget tracker', 'personal finance uk', 'juno ai', 'open source budgeting'],
  authors: [{ name: 'bare.money' }],
  creator: 'bare.money',
  publisher: 'bare.money',
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'bare.money - No B.S. Budgeting for UK',
    description: 'The bare truth about your money. Connect Monzo, track spending, get AI coaching from Juno. Free forever.',
    url: siteUrl,
    siteName: 'bare.money',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'bare.money - No B.S. Budgeting for UK',
    description: 'The bare truth about your money. Connect Monzo, track spending, get AI coaching from Juno. Free forever.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you have them:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'bare.money',
      description: 'No B.S. Budgeting for UK',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteUrl}/docs?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'bare.money',
      url: siteUrl,
      description: 'Free, open-source budgeting app for UK with Monzo integration and AI coaching.',
      sameAs: [],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${siteUrl}/#app`,
      name: 'bare.money',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'GBP',
      },
      description: 'Connect your Monzo account and see your real safe-to-spend amount. AI-powered financial coaching from Juno.',
      featureList: [
        'Monzo bank integration',
        'Real-time safe-to-spend calculation',
        'AI financial coaching',
        'Bill tracking',
        'Income management',
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bare-bg">
        {children}
      </body>
    </html>
  )
}
