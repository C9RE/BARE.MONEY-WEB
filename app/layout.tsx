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
    default: 'bare.money - Know What You Can Actually Spend | Monzo Budgeting UK',
    template: '%s | bare.money',
  },
  description: 'Free budgeting app for Monzo users in the UK. See your safe-to-spend amount — your balance minus upcoming bills. AI coaching from Juno. Read-only access, open source.',
  keywords: ['monzo budgeting', 'safe to spend', 'uk budgeting app', 'monzo app', 'money management uk', 'ai financial coach', 'juno ai', 'open source budgeting', 'personal finance uk', 'budget tracker monzo'],
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
    title: 'bare.money - Know What You Can Actually Spend',
    description: 'Free Monzo budgeting for UK. Your balance minus your bills = safe-to-spend. AI coaching from Juno. Read-only, open source.',
    url: siteUrl,
    siteName: 'bare.money',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'bare.money - Know what you can actually spend',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'bare.money - Know What You Can Actually Spend',
    description: 'Free Monzo budgeting for UK. Your balance minus your bills = safe-to-spend. AI coaching from Juno.',
    images: ['/og-image.svg'],
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
      description: 'Know what you can actually spend. Monzo budgeting for UK.',
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
      description: 'Free, open-source Monzo budgeting app for UK. Calculate your safe-to-spend and get AI coaching from Juno.',
      sameAs: [
        'https://github.com/C9RE/BARE.MONEY',
      ],
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
      description: 'Connect your Monzo account and see your real safe-to-spend amount. Balance minus bills = what you can actually spend. AI coaching from Juno.',
      featureList: [
        'Monzo bank integration (read-only)',
        'Real-time safe-to-spend calculation',
        'AI financial coaching with Juno',
        'Automatic bill detection',
        'Income and payday management',
        'AES-256 encrypted tokens',
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
