import Link from 'next/link'
import { Shield, Lock, Eye, Trash2, Server, Brain } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bare-bg px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-bare-accent hover:text-bare-accent-hover mb-8 inline-block">
          ← Back
        </Link>

        <h1 className="font-display text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-bare-muted mb-8">
          <strong className="text-bare-text">Last updated:</strong> November 2024
        </p>

        <div className="prose prose-bare space-y-6 text-bare-muted">
          {/* TL;DR */}
          <section className="card bg-bare-accent-soft border-bare-accent/20">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">TL;DR</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Eye className="w-4 h-4 text-bare-accent mt-0.5 flex-shrink-0" />
                <span>We only have <strong>read-only</strong> access to your Monzo account</span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="w-4 h-4 text-bare-accent mt-0.5 flex-shrink-0" />
                <span>Your Monzo tokens are encrypted with <strong>AES-256-GCM</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Brain className="w-4 h-4 text-bare-accent mt-0.5 flex-shrink-0" />
                <span>Juno AI uses Anthropic&apos;s Claude — we send <strong>limited transaction data</strong> for coaching (not your full history)</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-bare-accent mt-0.5 flex-shrink-0" />
                <span>You control your own Monzo OAuth app — revoke access anytime</span>
              </li>
              <li className="flex items-start gap-2">
                <Trash2 className="w-4 h-4 text-bare-accent mt-0.5 flex-shrink-0" />
                <span>Delete your account and all data anytime from Settings</span>
              </li>
            </ul>
          </section>

          {/* What we collect */}
          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">What we collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Email address</strong> — for authentication and account recovery</li>
              <li><strong>Monzo account data</strong> (read-only) — balance, transactions, account info</li>
              <li><strong>Your preferences</strong> — Juno personality, payday settings, bill configurations</li>
              <li><strong>Monzo OAuth credentials</strong> — your client ID and secret (encrypted)</li>
            </ul>
          </section>

          {/* Your Monzo OAuth App */}
          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Your Monzo OAuth App</h2>
            <p className="mb-4">
              Unlike most apps, bare.money doesn&apos;t use a shared Monzo API key. You create your own OAuth client at{' '}
              <a href="https://developers.monzo.com" target="_blank" rel="noopener noreferrer" className="text-bare-accent hover:underline">
                developers.monzo.com
              </a>.
            </p>
            <p className="mb-4">
              This means <strong>you have full control</strong>. You can:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>See exactly what permissions the app has</li>
              <li>Revoke access instantly from your Monzo developer dashboard</li>
              <li>Delete your OAuth app entirely if you stop using bare.money</li>
            </ul>
          </section>

          {/* How we store your data */}
          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">How we store your data</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-bare-safe flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-bare-text">Encryption at rest</p>
                  <p className="text-sm">All Monzo tokens and OAuth credentials are encrypted using AES-256-GCM before storage.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Server className="w-5 h-5 text-bare-safe flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-bare-text">Secure infrastructure</p>
                  <p className="text-sm">Data is stored on encrypted databases with strict access controls.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-bare-safe flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-bare-text">HTTPS everywhere</p>
                  <p className="text-sm">All data in transit is encrypted via TLS.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Juno AI & Anthropic */}
          <section className="card border-bare-warning/30 bg-bare-warning/5">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-bare-warning" />
              Juno AI &amp; Anthropic
            </h2>
            <p className="mb-4">
              Juno, your AI money coach, is powered by <strong>Anthropic&apos;s Claude</strong>. To give you contextual advice, we send:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li><strong>Safe-to-spend amount</strong> — your current available balance</li>
              <li><strong>Category totals</strong> — aggregated spending by category</li>
              <li><strong>Recent transactions</strong> — a small number of recent transactions (amount, merchant name, and description)</li>
              <li><strong>Bill status</strong> — upcoming bills and due dates</li>
            </ul>
            <p className="mb-4">
              We do <strong>not</strong> send:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Your full transaction history</li>
              <li>Your Monzo account number or sort code</li>
              <li>Any personally identifiable information beyond transaction details</li>
            </ul>
            <p className="text-sm">
              Anthropic&apos;s privacy policy applies to data processed by Claude:{' '}
              <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-bare-accent hover:underline">
                anthropic.com/privacy
              </a>
            </p>
          </section>

          {/* What we don't do */}
          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">What we DON&apos;T do</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We <strong>never</strong> move your money — read-only access only</li>
              <li>We <strong>never</strong> sell your data to anyone</li>
              <li>We <strong>never</strong> share your data with third parties except Anthropic for Juno AI (as described above)</li>
              <li>We <strong>never</strong> use tracking cookies or analytics that identify you</li>
              <li>We <strong>never</strong> use your data for advertising</li>
            </ul>
          </section>

          {/* Data retention */}
          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Data retention</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Transaction data</strong> — cached for up to 90 days to calculate safe-to-spend</li>
              <li><strong>Account data</strong> — retained until you delete your account</li>
              <li><strong>Monzo tokens</strong> — deleted immediately when you disconnect Monzo</li>
            </ul>
          </section>

          {/* Your rights */}
          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Your rights</h2>
            <p className="mb-4">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Access</strong> — request a copy of your data</li>
              <li><strong>Rectification</strong> — correct inaccurate data</li>
              <li><strong>Erasure</strong> — delete your account and all data</li>
              <li><strong>Portability</strong> — export your data in a machine-readable format</li>
            </ul>
            <p>
              To exercise these rights, go to <strong>Settings → Delete Account</strong> or contact us at the email below.
            </p>
          </section>

          {/* Disconnect & delete */}
          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Disconnect &amp; delete</h2>
            <p className="mb-4">
              <strong>Disconnect Monzo:</strong> Go to Settings → Connected Accounts → Disconnect. This immediately deletes your Monzo tokens and cached transaction data.
            </p>
            <p>
              <strong>Delete account:</strong> Go to Settings → Delete Account. This permanently deletes all your data including email, preferences, and any stored information.
            </p>
          </section>

          {/* Contact */}
          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Contact</h2>
            <p className="mb-2">
              Questions about privacy? Reach out:
            </p>
            <p>
              Email: <a href="mailto:privacy@bare.money" className="text-bare-accent hover:underline">privacy@bare.money</a>
            </p>
          </section>

          {/* Changes */}
          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. Significant changes will be announced via the app. Continued use after changes means you accept the updated policy.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
