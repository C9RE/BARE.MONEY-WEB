'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Wallet,
  Brain,
  Receipt,
  Shield,
  Settings,
  HelpCircle,
  ChevronRight,
  ExternalLink,
  Flame,
  Scale,
  Heart,
  Lock
} from 'lucide-react'

const sections = [
  { id: 'getting-started', title: 'Getting Started', icon: Wallet },
  { id: 'monzo-setup', title: 'Monzo Setup', icon: Settings },
  { id: 'safe-to-spend', title: 'Safe-to-Spend', icon: Receipt },
  { id: 'juno-ai', title: 'Juno AI Coach', icon: Brain },
  { id: 'bills-income', title: 'Bills & Income', icon: Receipt },
  { id: 'security', title: 'Security', icon: Shield },
  { id: 'faq', title: 'FAQ', icon: HelpCircle },
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-bare-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-bare-card-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-bare-muted hover:text-bare-text transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="font-display text-xl font-bold">
              <span className="gradient-text">bare</span>
              <span className="text-bare-muted">.money</span>
              <span className="text-bare-muted font-normal ml-2">/ docs</span>
            </h1>
          </div>
          <a
            href="https://juno.bare.money"
            className="btn-primary text-sm py-2 px-4"
          >
            Open App
          </a>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-12">
          {/* Sticky Sidebar - Desktop */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                      activeSection === section.id
                        ? 'bg-bare-accent text-white'
                        : 'text-bare-muted hover:bg-bare-card hover:text-bare-text'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{section.title}</span>
                  </button>
                )
              })}
            </nav>
          </aside>

          {/* Mobile Navigation */}
          <div className="lg:hidden mb-8 overflow-x-auto">
            <div className="flex gap-2 pb-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? 'bg-bare-accent text-white'
                      : 'bg-bare-card text-bare-muted'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <main className="space-y-16">
            {/* Getting Started */}
            <section id="getting-started" className="scroll-mt-24">
              <h2 className="font-display text-3xl font-bold text-bare-text mb-6">
                Getting Started
              </h2>
              <div className="prose prose-bare space-y-6">
                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Welcome to bare.money
                  </h3>
                  <p className="text-bare-muted mb-4">
                    bare.money is a no-nonsense budgeting app that connects to your Monzo account
                    and tells you the truth about your finances. No complicated categories, no
                    spreadsheets - just your real &quot;safe-to-spend&quot; number.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-bare-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                      <div>
                        <p className="font-medium text-bare-text">Create an account</p>
                        <p className="text-bare-muted text-sm">Sign up with your email at juno.bare.money</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-bare-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                      <div>
                        <p className="font-medium text-bare-text">Set up Monzo credentials</p>
                        <p className="text-bare-muted text-sm">Create a Monzo developer app and enter your credentials</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-bare-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                      <div>
                        <p className="font-medium text-bare-text">Connect your bank</p>
                        <p className="text-bare-muted text-sm">Authorise read-only access to your Monzo account</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-bare-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                      <div>
                        <p className="font-medium text-bare-text">Set your payday</p>
                        <p className="text-bare-muted text-sm">Tell us when you get paid so we can calculate properly</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Monzo Setup */}
            <section id="monzo-setup" className="scroll-mt-24">
              <h2 className="font-display text-3xl font-bold text-bare-text mb-6">
                Monzo Setup
              </h2>
              <div className="space-y-6">
                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Why do I need my own Monzo credentials?
                  </h3>
                  <p className="text-bare-muted mb-4">
                    bare.money is open source, which means we don&apos;t have a shared Monzo API key.
                    Each user creates their own developer app on Monzo - this is actually more secure
                    because you have full control over your own credentials.
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Step-by-step setup
                  </h3>
                  <ol className="space-y-4 text-bare-muted">
                    <li className="flex gap-3">
                      <span className="font-bold text-bare-accent">1.</span>
                      <div>
                        <p>Go to <a href="https://developers.monzo.com" target="_blank" rel="noopener noreferrer" className="text-bare-accent hover:underline inline-flex items-center gap-1">developers.monzo.com <ExternalLink size={14} /></a></p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-bare-accent">2.</span>
                      <p>Sign in with your Monzo account</p>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-bare-accent">3.</span>
                      <p>Click &quot;New OAuth Client&quot;</p>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-bare-accent">4.</span>
                      <div>
                        <p>Fill in the details:</p>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li><strong>Name:</strong> bare.money (or anything you like)</li>
                          <li><strong>Logo URL:</strong> Leave blank</li>
                          <li><strong>Redirect URL:</strong> <code className="bg-bare-bg px-2 py-1 rounded">https://juno.bare.money/api/monzo/callback</code></li>
                          <li><strong>Description:</strong> Personal budgeting</li>
                          <li><strong>Confidentiality:</strong> Confidential</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-bare-accent">5.</span>
                      <p>Copy your <strong>Client ID</strong> and <strong>Client Secret</strong></p>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-bare-accent">6.</span>
                      <p>In bare.money, go to Settings → Connected Accounts → Enter your credentials</p>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-bare-accent">7.</span>
                      <p>Click &quot;Connect Monzo&quot; and approve in your Monzo app</p>
                    </li>
                  </ol>
                </div>

                <div className="card bg-bare-accent/5 border-bare-accent/20">
                  <h3 className="font-display text-lg font-semibold text-bare-accent mb-2 flex items-center gap-2">
                    <Lock size={18} /> Security Note
                  </h3>
                  <p className="text-bare-muted text-sm">
                    Your Monzo credentials are encrypted with AES-256-GCM before being stored.
                    We use read-only access - we can never move your money.
                  </p>
                </div>
              </div>
            </section>

            {/* Safe-to-Spend */}
            <section id="safe-to-spend" className="scroll-mt-24">
              <h2 className="font-display text-3xl font-bold text-bare-text mb-6">
                Safe-to-Spend
              </h2>
              <div className="space-y-6">
                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    What is Safe-to-Spend?
                  </h3>
                  <p className="text-bare-muted mb-4">
                    Safe-to-spend is the amount you can actually spend without messing up your bills.
                    It&apos;s not your balance - it&apos;s your balance minus everything that&apos;s already spoken for.
                  </p>
                  <div className="bg-bare-bg rounded-xl p-4 font-mono text-sm">
                    <p className="text-bare-text">Safe-to-Spend = Balance - Bills Before Payday - Savings Buffer</p>
                  </div>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    How it works
                  </h3>
                  <div className="space-y-4 text-bare-muted">
                    <div className="flex items-start gap-3">
                      <ChevronRight className="text-bare-accent flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-medium text-bare-text">Bills before payday</p>
                        <p className="text-sm">Any bills due before your next payday are reserved from your current balance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ChevronRight className="text-bare-accent flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-medium text-bare-text">Bills after payday</p>
                        <p className="text-sm">Bills due after payday come from your payday income, not current balance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ChevronRight className="text-bare-accent flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-medium text-bare-text">Shortfall protection</p>
                        <p className="text-sm">If post-payday bills exceed expected income, we reserve the difference now</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ChevronRight className="text-bare-accent flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-medium text-bare-text">Weekend handling</p>
                        <p className="text-sm">Bills due Sat/Sun show as Monday (when direct debits actually process)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Example
                  </h3>
                  <div className="space-y-2 text-bare-muted">
                    <p>Balance: <strong className="text-bare-text">£500</strong></p>
                    <p>Bills before Thursday payday: <strong className="text-bare-text">£200</strong></p>
                    <p>Rent (Friday, after payday): <strong className="text-bare-text">£800</strong></p>
                    <p>Expected payday: <strong className="text-bare-text">£1,500</strong></p>
                    <hr className="border-bare-card-border my-3" />
                    <p>Rent comes from payday income ✓</p>
                    <p className="text-lg">Safe-to-spend: <strong className="text-bare-safe">£300</strong></p>
                  </div>
                </div>
              </div>
            </section>

            {/* Juno AI */}
            <section id="juno-ai" className="scroll-mt-24">
              <h2 className="font-display text-3xl font-bold text-bare-text mb-6">
                Juno AI Coach
              </h2>
              <div className="space-y-6">
                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Meet Juno
                  </h3>
                  <p className="text-bare-muted mb-4">
                    Juno is your AI money coach powered by Claude. She analyses your spending and
                    gives you honest feedback - no sugarcoating. You can chat with her about your
                    finances or just check the dashboard for quick status updates.
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Personality Modes
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-bare-bg rounded-xl">
                      <p className="font-semibold text-bare-text mb-1 flex items-center gap-2"><Flame size={16} className="text-bare-danger" /> Brutal</p>
                      <p className="text-bare-muted text-sm">&quot;What happened here? That&apos;s three takeaways in two days.&quot;</p>
                    </div>
                    <div className="p-4 bg-bare-bg rounded-xl">
                      <p className="font-semibold text-bare-text mb-1 flex items-center gap-2"><Scale size={16} className="text-bare-accent" /> Balanced</p>
                      <p className="text-bare-muted text-sm">&quot;Bit tight this week, but you&apos;ll survive if you watch the spending.&quot;</p>
                    </div>
                    <div className="p-4 bg-bare-bg rounded-xl">
                      <p className="font-semibold text-bare-text mb-1 flex items-center gap-2"><Heart size={16} className="text-bare-safe" /> Gentle</p>
                      <p className="text-bare-muted text-sm">&quot;Things are looking a bit stretched - maybe ease up on extras.&quot;</p>
                    </div>
                  </div>
                  <p className="text-bare-muted text-sm mt-4">
                    Change your personality in Settings → Juno Personality
                  </p>
                </div>
              </div>
            </section>

            {/* Bills & Income */}
            <section id="bills-income" className="scroll-mt-24">
              <h2 className="font-display text-3xl font-bold text-bare-text mb-6">
                Bills & Income
              </h2>
              <div className="space-y-6">
                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Automatic Bill Detection
                  </h3>
                  <p className="text-bare-muted mb-4">
                    bare.money automatically detects recurring payments from your transaction history.
                    When we spot a bill, we&apos;ll suggest adding it. You can also add bills manually.
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Income Sources
                  </h3>
                  <p className="text-bare-muted mb-4">
                    Set up your income sources so we know when payday is. We support:
                  </p>
                  <ul className="space-y-2 text-bare-muted">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="text-bare-accent" size={16} />
                      <span>Monthly salary (specific day of month)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="text-bare-accent" size={16} />
                      <span>Weekly income (specific day of week)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="text-bare-accent" size={16} />
                      <span>Multiple income sources</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Security */}
            <section id="security" className="scroll-mt-24">
              <h2 className="font-display text-3xl font-bold text-bare-text mb-6">
                Security
              </h2>
              <div className="space-y-6">
                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    How we protect your data
                  </h3>
                  <div className="space-y-4 text-bare-muted">
                    <div className="flex items-start gap-3">
                      <Shield className="text-bare-safe flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-medium text-bare-text">Read-only access</p>
                        <p className="text-sm">We can never move your money - only view transactions and balance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-bare-safe flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-medium text-bare-text">AES-256-GCM encryption</p>
                        <p className="text-sm">All Monzo tokens and credentials are encrypted at rest</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-bare-safe flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-medium text-bare-text">Your own credentials</p>
                        <p className="text-sm">You control your own Monzo API app - revoke access anytime</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-bare-safe flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-medium text-bare-text">No data selling</p>
                        <p className="text-sm">We never sell or share your financial data with anyone</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-bare-safe flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-medium text-bare-text">Passkey authentication</p>
                        <p className="text-sm">Use Face ID or Touch ID for secure, passwordless login</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Disconnect anytime
                  </h3>
                  <p className="text-bare-muted">
                    Go to Settings → Connected Accounts → Disconnect Monzo. This immediately
                    deletes your tokens and transaction data. You can also revoke access from
                    your Monzo developer dashboard.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-display text-3xl font-bold text-bare-text mb-6">
                FAQ
              </h2>
              <div className="space-y-4">
                <FAQItem
                  question="Why is my safe-to-spend different from my balance?"
                  answer="Safe-to-spend accounts for upcoming bills before your next payday. Your balance shows everything, but safe-to-spend shows what you can actually spend without missing bills."
                />
                <FAQItem
                  question="Why do I need to set up my own Monzo credentials?"
                  answer="bare.money is open source. Instead of sharing one API key, each user creates their own. This is actually more secure - you have full control and can revoke access anytime."
                />
                <FAQItem
                  question="Can bare.money move my money?"
                  answer="No. We use read-only access to Monzo. We can see your transactions and balance, but we can never initiate payments or move money."
                />
                <FAQItem
                  question="Why isn't my bill showing as paid?"
                  answer="Bills are marked paid when we detect a matching transaction. Make sure the payment has cleared in Monzo. If it's still not showing, you can manually mark it as paid."
                />
                <FAQItem
                  question="How do I change Juno's personality?"
                  answer="Go to Settings → Juno Personality. Choose from Brutal, Balanced, or Gentle."
                />
                <FAQItem
                  question="Is this really free?"
                  answer="Yes, completely free forever. No premium tier, no hidden fees. We built this for ourselves and decided to share it."
                />
                <FAQItem
                  question="Why only Monzo?"
                  answer="Monzo has the best API for real-time data. We may add other UK banks in the future via Open Banking."
                />
              </div>
            </section>

            {/* CTA */}
            <section className="card bg-bare-accent text-white text-center py-8">
              <h3 className="font-display text-2xl font-bold mb-4">
                Ready to get started?
              </h3>
              <p className="text-white/80 mb-6">
                Free forever. No credit card required.
              </p>
              <a
                href="https://juno.bare.money"
                className="inline-block bg-white text-bare-accent font-semibold px-8 py-3 rounded-xl hover:bg-bare-bg transition-colors"
              >
                Open bare.money
              </a>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <h4 className="font-display font-semibold text-bare-text pr-4">
          {question}
        </h4>
        <ChevronRight
          className={`w-5 h-5 text-bare-muted flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-90' : ''
          }`}
        />
      </button>
      {isOpen && (
        <p className="text-bare-muted mt-4">
          {answer}
        </p>
      )}
    </div>
  )
}
