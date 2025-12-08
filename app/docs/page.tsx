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
  Lock,
  Copy,
  Check,
  AlertTriangle,
  Calculator,
  RefreshCw
} from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

const sections = [
  { id: 'getting-started', title: 'Getting Started', icon: Wallet },
  { id: 'monzo-setup', title: 'Monzo Setup', icon: Settings },
  { id: 'safe-to-spend', title: 'Safe-to-Spend', icon: Calculator },
  { id: 'juno-ai', title: 'Juno AI Coach', icon: Brain },
  { id: 'bills-income', title: 'Bills & Income', icon: Receipt },
  { id: 'security', title: 'Security & Privacy', icon: Shield },
  { id: 'troubleshooting', title: 'Troubleshooting', icon: RefreshCw },
  { id: 'faq', title: 'FAQ', icon: HelpCircle },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute right-2 top-2 p-2 rounded-lg bg-bare-card hover:bg-bare-bg transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check className="w-4 h-4 text-bare-safe" />
      ) : (
        <Copy className="w-4 h-4 text-bare-muted" />
      )}
    </button>
  )
}

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="bg-bare-bg border-2 border-dashed border-bare-card-border rounded-lg p-6 flex flex-col items-center justify-center text-center"
      role="img"
      aria-label={`Placeholder: ${label} screenshot coming soon`}
    >
      <div className="w-10 h-10 rounded-full bg-bare-card-border/50 flex items-center justify-center mb-3">
        <svg className="w-5 h-5 text-bare-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <p className="text-xs font-medium text-bare-muted">{label}</p>
      <p className="text-xs text-bare-muted/70 mt-1">Screenshot coming soon</p>
    </div>
  )
}

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
    <div className="min-h-screen bg-bare-bg transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-bare-card/95 backdrop-blur-lg border-b border-bare-card-border transition-colors duration-300">
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
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="https://juno.bare.money"
              className="text-bare-accent hover:text-bare-accent-hover text-sm font-medium"
            >
              Open App →
            </a>
          </div>
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
                    bare.money connects to your Monzo account and calculates your <strong>safe-to-spend</strong> — the amount you can actually spend without messing up your bills. No spreadsheets, no complicated categories.
                  </p>

                  <div className="bg-bare-bg rounded-xl p-4 mb-6">
                    <p className="text-sm text-bare-muted mb-2">The simple formula:</p>
                    <p className="font-mono text-bare-text font-medium">
                      Safe-to-Spend = Balance − Bills Before Payday
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-bare-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                      <div>
                        <p className="font-medium text-bare-text">Create an account</p>
                        <p className="text-bare-muted text-sm">Sign up with your email at <a href="https://juno.bare.money" className="text-bare-accent hover:underline">juno.bare.money</a></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-bare-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                      <div>
                        <p className="font-medium text-bare-text">Set up your Monzo OAuth app</p>
                        <p className="text-bare-muted text-sm">Create your own credentials at developers.monzo.com (see below)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-bare-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                      <div>
                        <p className="font-medium text-bare-text">Connect Monzo</p>
                        <p className="text-bare-muted text-sm">Authorise read-only access (we can never move your money)</p>
                        <p className="text-bare-muted text-sm mt-2">After signing in, <strong>approve the connection in your Monzo app</strong> when prompted. Then return to Juno and tap &quot;Retry&quot; to complete the connection.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-bare-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                      <div>
                        <p className="font-medium text-bare-text">Set your payday</p>
                        <p className="text-bare-muted text-sm">Tell us when you get paid so we can calculate properly</p>
                        <p className="text-bare-muted text-sm mt-2">Juno syncs your newest transactions first, then backfills older history. Your initial sync may fetch up to ~1,000 transactions so your recent activity is always available.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-bare-accent-soft border-bare-accent/20">
                  <h3 className="font-display text-lg font-semibold text-bare-accent mb-2">
                    Why Monzo only?
                  </h3>
                  <p className="text-bare-muted text-sm">
                    Monzo has the best API for real-time transaction data. We may add other UK banks via Open Banking in the future.
                  </p>
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
                    Why do I need my own credentials?
                  </h3>
                  <p className="text-bare-muted mb-4">
                    For security, bare.money doesn&apos;t use a shared Monzo API key. Each user creates their own OAuth client at Monzo. This is actually <strong>more secure</strong>:
                  </p>
                  <ul className="space-y-2 text-bare-muted">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-bare-accent flex-shrink-0 mt-1" size={16} />
                      <span>You have full control over your own credentials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-bare-accent flex-shrink-0 mt-1" size={16} />
                      <span>You can revoke access anytime from Monzo&apos;s developer portal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-bare-accent flex-shrink-0 mt-1" size={16} />
                      <span>No shared API key that could be compromised</span>
                    </li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Step-by-step setup
                  </h3>
                  <ol className="space-y-6 text-bare-muted">
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-bare-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                      <div className="flex-1">
                        <p className="font-medium text-bare-text mb-2">Go to Monzo Developer Portal</p>
                        <p className="text-sm mb-2">Open <a href="https://developers.monzo.com" target="_blank" rel="noopener noreferrer" className="text-bare-accent hover:underline inline-flex items-center gap-1">developers.monzo.com <ExternalLink size={14} /></a> and sign in with your Monzo account.</p>
                        <ScreenshotPlaceholder label="Monzo developer portal login page" />
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-bare-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                      <div className="flex-1">
                        <p className="font-medium text-bare-text mb-2">Create a new OAuth Client</p>
                        <p className="text-sm">Click &quot;New OAuth Client&quot; in the Clients section.</p>
                        <div className="mt-2">
                          <ScreenshotPlaceholder label="New OAuth Client button" />
                        </div>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-bare-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                      <div className="flex-1">
                        <p className="font-medium text-bare-text mb-2">Fill in the details</p>
                        <div className="space-y-3 mt-3">
                          <div className="bg-bare-bg rounded-lg p-3">
                            <p className="text-xs text-bare-muted mb-1">Name</p>
                            <p className="text-sm font-medium text-bare-text">bare.money</p>
                            <p className="text-xs text-bare-muted mt-1">(or anything you like)</p>
                          </div>
                          <div className="bg-bare-bg rounded-lg p-3">
                            <p className="text-xs text-bare-muted mb-1">Logo URL</p>
                            <p className="text-sm text-bare-muted italic">Leave blank</p>
                          </div>
                          <div className="bg-bare-bg rounded-lg p-3 relative">
                            <p className="text-xs text-bare-muted mb-1">Redirect URL (important!)</p>
                            <code className="block text-sm font-mono text-bare-accent break-all pr-10">https://juno.bare.money/api/monzo/callback</code>
                            <CopyButton text="https://juno.bare.money/api/monzo/callback" />
                          </div>
                          <div className="bg-bare-bg rounded-lg p-3">
                            <p className="text-xs text-bare-muted mb-1">Description</p>
                            <p className="text-sm font-medium text-bare-text">Personal budgeting app</p>
                          </div>
                          <div className="bg-bare-bg rounded-lg p-3">
                            <p className="text-xs text-bare-muted mb-1">Confidentiality</p>
                            <p className="text-sm font-medium text-bare-text">Confidential</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-bare-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                      <div className="flex-1">
                        <p className="font-medium text-bare-text mb-2">Copy your credentials</p>
                        <p className="text-sm mb-2">After creating the client, you&apos;ll see your <strong>Client ID</strong> and <strong>Client Secret</strong>. Copy both — you&apos;ll need them in bare.money.</p>
                        <ScreenshotPlaceholder label="Client ID and Secret display" />
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-bare-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">5</span>
                      <div className="flex-1">
                        <p className="font-medium text-bare-text mb-2">Enter credentials in bare.money</p>
                        <p className="text-sm">In the app, go to <strong>Settings → Connected Accounts</strong> and paste your Client ID and Client Secret.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-bare-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">6</span>
                      <div className="flex-1">
                        <p className="font-medium text-bare-text mb-2">Connect and approve</p>
                        <p className="text-sm">Click &quot;Connect Monzo&quot; and approve access in your Monzo app when prompted.</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="card bg-bare-accent/5 border-bare-accent/20">
                  <h3 className="font-display text-lg font-semibold text-bare-accent mb-2 flex items-center gap-2">
                    <Lock size={18} /> Security Note
                  </h3>
                  <p className="text-bare-muted text-sm">
                    Your Monzo credentials are encrypted with AES-256-GCM before being stored. We only have read-only access — we can never move your money.
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
                    What is safe-to-spend?
                  </h3>
                  <p className="text-bare-muted mb-4">
                    Your bank balance lies to you. It shows everything in your account, but doesn&apos;t account for bills that are about to come out. <strong>Safe-to-spend</strong> is the amount you can actually spend without missing your bills.
                  </p>
                </div>

                <div className="card bg-bare-bg border-none">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4 flex items-center gap-2">
                    <Calculator className="text-bare-accent" size={20} />
                    The Formula
                  </h3>
                  <div className="bg-bare-card rounded-xl p-6 border border-bare-card-border mb-4 transition-colors duration-300">
                    <div className="font-mono text-center space-y-2">
                      <p className="text-2xl font-bold text-bare-text">Safe-to-Spend</p>
                      <p className="text-bare-muted">=</p>
                      <p className="text-xl text-bare-text">Current Balance</p>
                      <p className="text-bare-muted">−</p>
                      <p className="text-xl text-bare-text">Bills Due Before Payday</p>
                      <p className="text-bare-muted">−</p>
                      <p className="text-xl text-bare-text">Shortfall Buffer*</p>
                    </div>
                  </div>
                  <p className="text-sm text-bare-muted">
                    *If bills due after payday exceed your expected income, we reserve the difference now.
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Example
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-bare-bg rounded-lg p-3">
                        <p className="text-bare-muted">Current balance</p>
                        <p className="font-bold text-bare-text text-lg">£1,200</p>
                      </div>
                      <div className="bg-bare-bg rounded-lg p-3">
                        <p className="text-bare-muted">Payday</p>
                        <p className="font-bold text-bare-text text-lg">Thursday</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-bare-warning pl-4">
                      <p className="font-medium text-bare-text">Bills before Thursday:</p>
                      <ul className="text-bare-muted text-sm mt-1 space-y-1">
                        <li>Netflix — £15.99 (Tuesday)</li>
                        <li>Gym — £35.00 (Wednesday)</li>
                      </ul>
                      <p className="font-medium text-bare-warning mt-2">Total: £50.99</p>
                    </div>

                    <div className="border-l-4 border-bare-safe pl-4">
                      <p className="font-medium text-bare-text">Bills after Thursday:</p>
                      <ul className="text-bare-muted text-sm mt-1 space-y-1">
                        <li>Rent — £800 (Friday)</li>
                      </ul>
                      <p className="text-sm text-bare-muted mt-2">Paid from payday income ✓</p>
                    </div>

                    <div className="bg-bare-safe/10 rounded-xl p-4 text-center">
                      <p className="text-bare-muted text-sm">Your safe-to-spend</p>
                      <p className="font-display text-4xl font-bold text-bare-safe">£1,149.01</p>
                      <p className="text-bare-muted text-sm mt-1">until Thursday</p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    How it handles edge cases
                  </h3>
                  <div className="space-y-4 text-bare-muted">
                    <div className="flex items-start gap-3">
                      <ChevronRight className="text-bare-accent flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-medium text-bare-text">Weekend bills</p>
                        <p className="text-sm">Direct debits due Sat/Sun are shown as Monday (when they actually process)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ChevronRight className="text-bare-accent flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-medium text-bare-text">Shortfall protection</p>
                        <p className="text-sm">If post-payday bills exceed expected income, we reserve the difference from your current balance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ChevronRight className="text-bare-accent flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-medium text-bare-text">Variable paydays</p>
                        <p className="text-sm">Supports &quot;last Friday of month&quot;, specific dates, and weekly pay</p>
                      </div>
                    </div>
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
                    Juno is your AI money coach powered by Anthropic&apos;s Claude. She analyses your spending patterns and gives you honest, contextual feedback — referencing actual merchants, amounts, and your current financial status.
                  </p>
                  <p className="text-bare-muted">
                    You can chat with Juno about your finances or just check the dashboard for quick status updates that appear with a smooth typewriter effect.
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Smart Time-Based Greetings
                  </h3>
                  <p className="text-bare-muted mb-4">
                    Juno knows what time it is. She greets you appropriately based on your local time:
                  </p>
                  <div className="space-y-2">
                    <div className="bg-bare-bg rounded-lg p-3">
                      <p className="text-sm text-bare-muted">Morning (5am - 12pm)</p>
                      <p className="text-bare-text font-medium">&quot;Good morning, Sarah...&quot;</p>
                    </div>
                    <div className="bg-bare-bg rounded-lg p-3">
                      <p className="text-sm text-bare-muted">Afternoon (12pm - 5pm)</p>
                      <p className="text-bare-text font-medium">&quot;Good afternoon, Sarah...&quot;</p>
                    </div>
                    <div className="bg-bare-bg rounded-lg p-3">
                      <p className="text-sm text-bare-muted">Evening (5pm onwards)</p>
                      <p className="text-bare-text font-medium">&quot;Good evening, Sarah...&quot;</p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Contextual Insights
                  </h3>
                  <p className="text-bare-muted mb-4">
                    Unlike generic budgeting advice, Juno&apos;s insights reference your actual spending — specific merchants, amounts, and patterns:
                  </p>
                  <div className="bg-bare-bg rounded-xl p-4 border border-bare-card-border">
                    <p className="text-sm italic text-bare-text">
                      &quot;Good morning, Law. That Tesco trip yesterday was hefty. You&apos;ve got £85 safe to spend this week, but council tax hits in 3 days — keep that in mind.&quot;
                    </p>
                  </div>
                  <p className="text-bare-muted text-sm mt-4">
                    Insights are 30-40 words — long enough to be useful, short enough to scan at a glance.
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Dynamic Status Colours
                  </h3>
                  <p className="text-bare-muted mb-4">
                    Juno&apos;s insight changes colour based on your financial status — so you can tell at a glance how you&apos;re doing:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-bare-safe/10 rounded-lg border border-bare-safe/20">
                      <div className="w-3 h-3 rounded-full bg-bare-safe"></div>
                      <div>
                        <p className="font-medium text-bare-safe">Green — Healthy</p>
                        <p className="text-sm text-bare-muted">More than £50 safe to spend</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-bare-warning/10 rounded-lg border border-bare-warning/20">
                      <div className="w-3 h-3 rounded-full bg-bare-warning"></div>
                      <div>
                        <p className="font-medium text-bare-warning">Amber — Caution</p>
                        <p className="text-sm text-bare-muted">£20 to £50 safe to spend</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-bare-danger/10 rounded-lg border border-bare-danger/20">
                      <div className="w-3 h-3 rounded-full bg-bare-danger"></div>
                      <div>
                        <p className="font-medium text-bare-danger">Red — Alert</p>
                        <p className="text-sm text-bare-muted">Less than £20 or shortfall detected</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    What Juno sees
                  </h3>
                  <p className="text-bare-muted mb-4">
                    When you chat with Juno, we send <strong>summaries</strong> of your spending — not raw transaction data:
                  </p>
                  <ul className="space-y-2 text-bare-muted text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="text-bare-safe flex-shrink-0 mt-0.5" size={16} />
                      <span>Spending by category (e.g., &quot;£120 on eating out this week&quot;)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-bare-safe flex-shrink-0 mt-0.5" size={16} />
                      <span>Your safe-to-spend amount</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-bare-safe flex-shrink-0 mt-0.5" size={16} />
                      <span>Upcoming bill dates and amounts</span>
                    </li>
                  </ul>
                  <p className="text-bare-muted text-sm mt-4">
                    We don&apos;t send raw merchant names or transaction descriptions to protect your privacy.
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Personality Modes
                  </h3>
                  <p className="text-bare-muted mb-4">
                    Everyone handles feedback differently. Choose how Juno talks to you:
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-bare-bg rounded-xl">
                      <p className="font-semibold text-bare-text mb-1 flex items-center gap-2"><Flame size={16} className="text-bare-danger" /> Brutal</p>
                      <p className="text-xs text-bare-muted mb-2">Direct, no sugar-coating, strong but clean language</p>
                      <p className="text-bare-text text-sm italic">&quot;Three Uber Eats orders in two days? That&apos;s £45 you didn&apos;t need to spend. Get your act together.&quot;</p>
                    </div>
                    <div className="p-4 bg-bare-bg rounded-xl">
                      <p className="font-semibold text-bare-text mb-1 flex items-center gap-2"><Scale size={16} className="text-bare-accent" /> Balanced</p>
                      <p className="text-xs text-bare-muted mb-2">Witty and honest, like a friend who keeps it real</p>
                      <p className="text-bare-text text-sm italic">&quot;Bit tight this week. You&apos;ve got £200 left — maybe hold off on non-essentials unless you fancy beans on toast until payday.&quot;</p>
                    </div>
                    <div className="p-4 bg-bare-bg rounded-xl">
                      <p className="font-semibold text-bare-text mb-1 flex items-center gap-2"><Heart size={16} className="text-bare-safe" /> Gentle</p>
                      <p className="text-xs text-bare-muted mb-2">Supportive and encouraging while still being honest</p>
                      <p className="text-bare-text text-sm italic">&quot;Things are a bit stretched, but you&apos;re managing. Just ease up on extras if you can — you&apos;ve got this.&quot;</p>
                    </div>
                  </div>
                  <p className="text-bare-muted text-sm mt-4">
                    Change Juno&apos;s personality in <strong>Settings → Juno Personality</strong>
                  </p>
                </div>

                <div className="card border-bare-warning/30 bg-bare-warning/5">
                  <h3 className="font-display text-lg font-semibold text-bare-text mb-2 flex items-center gap-2">
                    <AlertTriangle size={18} className="text-bare-warning" />
                    Not financial advice
                  </h3>
                  <p className="text-bare-muted text-sm">
                    Juno is an AI assistant for general guidance only. Always verify important financial decisions and consult a professional advisor when needed.
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
                    Automatic bill detection
                  </h3>
                  <p className="text-bare-muted mb-4">
                    bare.money automatically detects recurring payments from your transaction history. When we spot a likely bill, we&apos;ll suggest adding it. You can also add bills manually.
                  </p>
                  <p className="text-bare-muted text-sm">
                    Bills are matched by merchant and approximate amount, so if Netflix increases their price, we&apos;ll still recognise it.
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Income sources
                  </h3>
                  <p className="text-bare-muted mb-4">
                    Set up your income so we know when payday is. We support:
                  </p>
                  <ul className="space-y-2 text-bare-muted">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="text-bare-accent" size={16} />
                      <span><strong>Monthly salary</strong> — specific day (e.g., 25th) or pattern (e.g., last Friday)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="text-bare-accent" size={16} />
                      <span><strong>Weekly income</strong> — specific day of week</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="text-bare-accent" size={16} />
                      <span><strong>Multiple sources</strong> — freelance + salary, etc.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Security */}
            <section id="security" className="scroll-mt-24">
              <h2 className="font-display text-3xl font-bold text-bare-text mb-6">
                Security & Privacy
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
                        <p className="text-sm">We can never move your money — only view transactions and balance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lock className="text-bare-safe flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-medium text-bare-text">AES-256-GCM encryption</p>
                        <p className="text-sm">All Monzo tokens and OAuth credentials are encrypted at rest</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-bare-safe flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-medium text-bare-text">You control your OAuth app</p>
                        <p className="text-sm">Revoke access anytime from developers.monzo.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-bare-safe flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-medium text-bare-text">No data selling</p>
                        <p className="text-sm">We never sell or share your financial data</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4 flex items-center gap-2">
                    <Brain size={20} className="text-bare-accent" />
                    Juno & Anthropic
                  </h3>
                  <p className="text-bare-muted mb-4">
                    Juno uses Anthropic&apos;s Claude AI. When you use Juno, we send:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-bare-muted text-sm mb-4">
                    <li>Transaction summaries (categories + amounts)</li>
                    <li>Safe-to-spend amount</li>
                    <li>Bill status</li>
                  </ul>
                  <p className="text-bare-muted text-sm">
                    We don&apos;t send raw merchant names or personally identifiable information.
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Disconnect anytime
                  </h3>
                  <p className="text-bare-muted">
                    Go to <strong>Settings → Connected Accounts → Disconnect Monzo</strong>. This immediately deletes your tokens and transaction data. You can also revoke access from your Monzo developer dashboard.
                  </p>
                </div>

                <div className="text-center">
                  <Link href="/privacy" className="text-bare-accent hover:underline font-medium">
                    Read our full Privacy Policy →
                  </Link>
                </div>
              </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="scroll-mt-24">
              <h2 className="font-display text-3xl font-bold text-bare-text mb-6">
                Troubleshooting
              </h2>
              <div className="space-y-6">
                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Reconnecting to Monzo
                  </h3>
                  <p className="text-bare-muted mb-4">
                    If you see an &quot;insufficient permissions&quot; error, it usually means your Monzo Developer App was changed or the connection was removed from Monzo&apos;s side.
                  </p>
                  <p className="text-bare-muted mb-4">
                    <strong>To fix this:</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-bare-muted text-sm">
                    <li>Go to <strong>Settings → Connected Accounts → Disconnect Monzo</strong></li>
                    <li>Check your credentials at <a href="https://developers.monzo.com" target="_blank" rel="noopener noreferrer" className="text-bare-accent hover:underline">developers.monzo.com</a></li>
                    <li>Re-enter your Client ID and Client Secret in Juno</li>
                    <li>Reconnect and approve access in your Monzo app</li>
                  </ol>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Forcing a Fresh Sync
                  </h3>
                  <p className="text-bare-muted mb-4">
                    Juno syncs your <strong>newest transactions first</strong>, then backfills older history. This ensures your recent activity always appears, even if you have a large transaction history.
                  </p>
                  <ul className="space-y-2 text-bare-muted text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-bare-accent flex-shrink-0 mt-1" size={16} />
                      <span>Initial sync can fetch up to ~1,000 transactions across multiple pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-bare-accent flex-shrink-0 mt-1" size={16} />
                      <span>Juno registers webhooks with Monzo for near real-time updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-bare-accent flex-shrink-0 mt-1" size={16} />
                      <span>After spending, new transactions should appear within seconds</span>
                    </li>
                  </ul>
                  <p className="text-bare-muted text-sm mt-4">
                    Webhooks are enabled automatically the next time you open the app. If transactions seem delayed, try closing and reopening Juno.
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-display text-xl font-semibold text-bare-text mb-4">
                    Monzo SCA (Strong Customer Authentication)
                  </h3>
                  <p className="text-bare-muted mb-4">
                    Monzo may ask you to re-approve access after long periods of inactivity or after large syncs. This is normal security behaviour.
                  </p>
                  <ul className="space-y-2 text-bare-muted text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-bare-accent flex-shrink-0 mt-1" size={16} />
                      <span>If Juno shows &quot;Needs approval,&quot; check your Monzo app for a notification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-bare-accent flex-shrink-0 mt-1" size={16} />
                      <span>Approve the access request in Monzo, then return to Juno</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-bare-accent flex-shrink-0 mt-1" size={16} />
                      <span>Tap &quot;Retry&quot; in Juno to complete the connection</span>
                    </li>
                  </ul>
                  <p className="text-bare-muted text-sm mt-4">
                    This approval step prevents the Activity page from appearing empty — Juno now waits for you to confirm before fetching data.
                  </p>
                </div>

                <div className="card bg-bare-accent-soft border-bare-accent/20">
                  <h3 className="font-display text-lg font-semibold text-bare-accent mb-2">
                    Still having issues?
                  </h3>
                  <p className="text-bare-muted text-sm">
                    If problems persist after trying the steps above, try disconnecting Monzo completely and setting up the connection again from scratch. This clears any stale tokens and ensures a fresh start.
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
                  answer="Safe-to-spend subtracts upcoming bills before your next payday. Your balance shows everything, but safe-to-spend shows what you can actually spend without missing bills."
                />
                <FAQItem
                  question="Why do I need my own Monzo credentials?"
                  answer="For security, bare.money doesn't use a shared API key. Each user creates their own OAuth app. This is more secure — you have full control and can revoke access anytime from developers.monzo.com."
                />
                <FAQItem
                  question="Can bare.money move my money?"
                  answer="No. We use read-only access to Monzo. We can see your transactions and balance, but we can never initiate payments or transfers."
                />
                <FAQItem
                  question="What data does Juno see?"
                  answer="Juno sees spending summaries (categories + amounts), your safe-to-spend amount, bill status, and recent transaction patterns. She uses this to give contextual insights that reference specific merchants and amounts."
                />
                <FAQItem
                  question="How do I change Juno's personality?"
                  answer="Go to Settings → Juno Personality. Choose from Brutal (direct, no sugar-coating), Balanced (witty friend who keeps it real), or Gentle (supportive and encouraging)."
                />
                <FAQItem
                  question="Is this really free?"
                  answer="Yes, completely free forever. No premium tier, no hidden fees. We built this for ourselves and decided to share it."
                />
                <FAQItem
                  question="Why only Monzo?"
                  answer="Monzo has the best API for real-time data. We may add other UK banks via Open Banking in the future."
                />
                <FAQItem
                  question="Can I use this on my phone?"
                  answer="Yes! It works as a PWA (add to home screen) on any device. Just visit juno.bare.money on your phone and add it to your home screen."
                />
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-bare-accent py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-display text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h3>
          <p className="text-white/80 mb-8">
            Free forever. No credit card required.
          </p>
          <a
            href="https://juno.bare.money"
            className="inline-block bg-white text-bare-accent font-semibold px-8 py-3 rounded-xl hover:bg-bare-bg transition-colors"
          >
            Open bare.money
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bare-bg border-t border-bare-card-border py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg font-bold">
            <span className="gradient-text">bare</span>
            <span className="text-bare-muted">.money</span>
          </p>
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
            <Link href="/changelog" className="hover:text-bare-text transition-colors">
              Changelog
            </Link>
            <Link href="/status" className="hover:text-bare-text transition-colors">
              Status
            </Link>
          </div>
        </div>
      </footer>
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
