import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bare-bg px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-bare-accent hover:text-bare-accent-hover mb-8 inline-block">
          ← Back
        </Link>

        <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-bare space-y-6 text-bare-muted">
          <p className="text-lg">
            <strong className="text-bare-text">Last updated:</strong> November 2024
          </p>

          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">What we collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Your email address (for authentication)</li>
              <li>Monzo account data (read-only): balance, transactions, account info</li>
              <li>Your app preferences (Juno personality, notification settings)</li>
            </ul>
          </section>

          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">What we DON&apos;T do</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We <strong>never</strong> move your money - read-only access only</li>
              <li>We <strong>never</strong> sell your data</li>
              <li>We <strong>never</strong> share your data with third parties</li>
              <li>We <strong>never</strong> use your data for advertising</li>
            </ul>
          </section>

          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Security</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>All Monzo tokens are encrypted at rest (AES-256-GCM)</li>
              <li>HTTPS everywhere</li>
              <li>We don&apos;t store your Monzo password - OAuth2 only</li>
            </ul>
          </section>

          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Your rights</h2>
            <p>You can delete your account and all data at any time from Settings. When you disconnect Monzo, we delete all your transaction data immediately.</p>
          </section>

          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Contact</h2>
            <p>Questions? Reach out via GitHub or email.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
