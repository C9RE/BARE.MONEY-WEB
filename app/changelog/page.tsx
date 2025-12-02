'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, Wrench, AlertTriangle, ArrowUp, Calendar, Tag } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

interface ChangelogEntry {
  version: string
  date: string
  summary: string
  features?: string[]
  improvements?: string[]
  fixes?: string[]
  breaking?: string[]
}

const changelog: ChangelogEntry[] = [
  {
    version: '1.0.0',
    date: '2 December 2024',
    summary: 'Initial public release with full feature set',
    features: [
      'Safe-to-Spend dashboard with real-time balance tracking',
      'Juno AI Coach with three personality modes (Brutal, Balanced, Gentle)',
      'Transaction history with search, filtering, and category icons',
      'Automatic bill detection from recurring transactions',
      'Manual bill management with nicknames and payment tracking',
      'Income tracking with weekly/monthly support and multiple sources',
      'Monzo OAuth integration with real-time webhooks',
      'Magic link authentication for passwordless sign-in',
      'Passkey support (WebAuthn) for secure, fast login',
      'Biometric lock (Face ID/Touch ID) for added security',
      'Full PWA support with native iOS experience',
      'Haptic feedback throughout the app',
      'Portal view with quick stats and filterable cards',
      'Bill countdown and payday countdown widgets',
      '90-day transaction history sync from Monzo',
      'AES-256-GCM encryption for all sensitive data',
    ],
  },
]

function VersionBadge({ version }: { version: string }) {
  const isLatest = version === changelog[0].version
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold ${
      isLatest
        ? 'bg-bare-accent text-white'
        : 'bg-bare-accent-soft text-bare-accent'
    }`}>
      <Tag className="w-3.5 h-3.5" />
      v{version}
    </span>
  )
}

function CategorySection({
  icon,
  title,
  items,
  colorClass
}: {
  icon: React.ReactNode
  title: string
  items: string[]
  colorClass: string
}) {
  return (
    <div className="mt-4">
      <h4 className={`flex items-center gap-2 font-semibold text-sm mb-2 ${colorClass}`}>
        {icon}
        {title}
      </h4>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-bare-muted">
            <span className="text-bare-card-border mt-1.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-bare-bg px-6 py-12 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="text-bare-accent hover:text-bare-accent-hover transition-colors">
            ← Back
          </Link>
          <ThemeToggle />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-4xl font-bold mb-4">Changelog</h1>
          <p className="text-bare-muted mb-8">
            What&apos;s new in bare.money. All the features, fixes, and improvements.
          </p>
        </motion.div>

        {/* Latest Release Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="card bg-bare-accent-soft border-bare-accent/20 mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-bare-accent" />
            <span className="text-sm font-semibold text-bare-accent uppercase tracking-wide">Latest Release</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <VersionBadge version={changelog[0].version} />
            <span className="text-bare-muted text-sm flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {changelog[0].date}
            </span>
          </div>
          <p className="text-bare-text font-medium">{changelog[0].summary}</p>
        </motion.section>

        {/* Changelog Entries */}
        <div className="space-y-6">
          {changelog.map((entry, index) => (
            <motion.section
              key={entry.version}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-3">
                <VersionBadge version={entry.version} />
                <span className="text-bare-muted text-sm flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {entry.date}
                </span>
              </div>

              <p className="text-bare-text font-medium border-b border-bare-card-border pb-4">
                {entry.summary}
              </p>

              {entry.features && entry.features.length > 0 && (
                <CategorySection
                  icon={<Sparkles className="w-4 h-4" />}
                  title="Features"
                  items={entry.features}
                  colorClass="text-bare-safe"
                />
              )}

              {entry.improvements && entry.improvements.length > 0 && (
                <CategorySection
                  icon={<ArrowUp className="w-4 h-4" />}
                  title="Improvements"
                  items={entry.improvements}
                  colorClass="text-bare-accent"
                />
              )}

              {entry.fixes && entry.fixes.length > 0 && (
                <CategorySection
                  icon={<Wrench className="w-4 h-4" />}
                  title="Fixes"
                  items={entry.fixes}
                  colorClass="text-bare-warning"
                />
              )}

              {entry.breaking && entry.breaking.length > 0 && (
                <CategorySection
                  icon={<AlertTriangle className="w-4 h-4" />}
                  title="Breaking Changes"
                  items={entry.breaking}
                  colorClass="text-bare-danger"
                />
              )}
            </motion.section>
          ))}
        </div>

        {/* Version History Table */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="card mt-8"
        >
          <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Version History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-bare-card-border">
                  <th className="text-left py-2 pr-4 text-bare-muted font-medium">Version</th>
                  <th className="text-left py-2 pr-4 text-bare-muted font-medium">Date</th>
                  <th className="text-left py-2 text-bare-muted font-medium">Summary</th>
                </tr>
              </thead>
              <tbody>
                {changelog.map((entry) => (
                  <tr key={entry.version} className="border-b border-bare-card-border last:border-0">
                    <td className="py-3 pr-4">
                      <span className="font-mono text-bare-accent">v{entry.version}</span>
                    </td>
                    <td className="py-3 pr-4 text-bare-muted whitespace-nowrap">{entry.date}</td>
                    <td className="py-3 text-bare-text">{entry.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-bare-card-border">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <h2 className="font-display text-lg font-bold">
                <span className="gradient-text">bare</span>
                <span className="text-bare-muted">.money</span>
              </h2>
              <span className="text-bare-muted text-sm">— No B.S. budgeting</span>
            </div>
            <div className="flex items-center gap-6 text-bare-muted text-sm">
              <Link href="/privacy" className="hover:text-bare-text transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-bare-text transition-colors">
                Terms
              </Link>
              <Link href="/docs" className="hover:text-bare-text transition-colors">
                Docs
              </Link>
              <Link href="/status" className="hover:text-bare-text transition-colors">
                Status
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
