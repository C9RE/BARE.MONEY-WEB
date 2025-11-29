import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bare-bg px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-bare-accent hover:text-bare-accent-hover mb-8 inline-block">
          ← Back
        </Link>

        <h1 className="font-display text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-bare space-y-6 text-bare-muted">
          <p className="text-lg">
            <strong className="text-bare-text">Last updated:</strong> November 2024
          </p>

          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">The basics</h2>
            <p>bare.money is a free budgeting tool. We provide it as-is, with no guarantees. Don&apos;t rely on it for critical financial decisions - always check your actual bank account.</p>
          </section>

          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Your responsibilities</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Keep your login credentials secure</li>
              <li>Don&apos;t abuse the service</li>
              <li>Don&apos;t try to hack or exploit the system</li>
            </ul>
          </section>

          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Our responsibilities</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We&apos;ll do our best to keep the service running</li>
              <li>We&apos;ll protect your data as described in our Privacy Policy</li>
              <li>We&apos;ll never access your money - read-only, always</li>
            </ul>
          </section>

          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Juno AI</h2>
            <p>Juno is an AI assistant. Her advice is for entertainment and general guidance only - not professional financial advice. Use your own judgment.</p>
          </section>

          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Liability</h2>
            <p>We&apos;re not liable for any financial decisions you make based on this app. The &quot;safe-to-spend&quot; calculation is an estimate - always verify with your actual bank balance.</p>
          </section>

          <section className="card">
            <h2 className="font-display text-xl font-semibold text-bare-text mb-4">Changes</h2>
            <p>We may update these terms. Continued use means you accept the new terms.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
