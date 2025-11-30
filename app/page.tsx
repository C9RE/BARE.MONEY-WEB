'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Wallet, Brain, Receipt, Shield, Smartphone, Zap, Star, ChevronDown, Lock, Key } from 'lucide-react'

export default function LandingPage() {
  return (
    <>
      {/* ========== MOBILE LAYOUT ========== */}
      <main className="lg:hidden min-h-screen bg-bare-bg">
        {/* Mobile Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-bare-card-border px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-display text-2xl font-bold">
              <span className="gradient-text">bare</span>
              <span className="text-bare-muted">.money</span>
            </h1>
            <a
              href="https://juno.bare.money"
              className="btn-primary text-sm py-2 px-4"
            >
              Get Started Free
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-6 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-bare-accent font-semibold text-sm uppercase tracking-wide mb-4">
              Monzo budgeting for UK
            </p>

            <h2 className="font-display text-4xl font-bold text-bare-text mb-4 leading-tight">
              Always know what you can actually spend
            </h2>

            <p className="text-bare-muted text-lg mb-8">
              Your balance minus your bills equals your safe-to-spend.
              <span className="text-bare-text font-medium"> No guessing. No spreadsheets.</span>
            </p>

            {/* Mini App Preview */}
            <div className="card mx-auto max-w-xs mb-8">
              <div className="text-center mb-4">
                <p className="text-bare-muted text-sm mb-1">Safe to spend</p>
                <p className="font-display text-4xl font-bold text-bare-safe">£847</p>
                <p className="text-bare-muted text-sm mt-1">until Thursday</p>
              </div>
              <div className="flex items-start gap-3 pt-4 border-t border-bare-card-border">
                <div className="w-8 h-8 rounded-full bg-bare-accent flex items-center justify-center flex-shrink-0">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-bare-text">Juno</p>
                  <p className="text-sm text-bare-muted">Looking solid. Just watch the Deliveroo habit.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-bare-muted">
              <span className="flex items-center gap-2">
                <UKFlag />
                <span>UK only</span>
              </span>
              <span className="text-bare-card-border">|</span>
              <span>Requires Monzo</span>
              <span className="text-bare-card-border">|</span>
              <span>Free forever</span>
            </div>
          </motion.div>
        </section>

        {/* Trust Section */}
        <section className="px-6 py-8 bg-white border-y border-bare-card-border">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            <p className="text-xs text-bare-muted uppercase tracking-wide font-semibold text-center mb-4">Your data is safe</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-bare-muted">
                <Shield className="w-4 h-4 text-bare-safe flex-shrink-0" />
                <span>Read-only access</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-bare-muted">
                <Lock className="w-4 h-4 text-bare-safe flex-shrink-0" />
                <span>AES-256 encrypted</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-bare-muted">
                <Key className="w-4 h-4 text-bare-safe flex-shrink-0" />
                <span>You control OAuth</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-bare-muted">
                <Link href="/privacy" className="text-bare-accent hover:underline">
                  Privacy Policy →
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="font-display text-2xl font-bold text-bare-text mb-2">
              Everything you need, nothing you don&apos;t
            </h3>
            <p className="text-bare-muted">
              Connect Monzo. Set payday. Done.
            </p>
          </motion.div>

          <div className="space-y-4">
            <MobileFeatureCard
              icon={<Wallet className="w-5 h-5" />}
              title="Real-time balance"
              description="Live data from Monzo. Know exactly where you stand."
            />
            <MobileFeatureCard
              icon={<Brain className="w-5 h-5" />}
              title="Juno AI coach"
              description="Your personal money coach who tells it like it is."
            />
            <MobileFeatureCard
              icon={<Receipt className="w-5 h-5" />}
              title="Smart bill tracking"
              description="Auto-detects bills and reserves money before you spend."
            />
            <MobileFeatureCard
              icon={<Zap className="w-5 h-5" />}
              title="Safe-to-spend"
              description="Factors in bills, payday, and commitments automatically."
            />
            <MobileFeatureCard
              icon={<Shield className="w-5 h-5" />}
              title="Read-only access"
              description="We can see transactions but never move your money."
            />
            <MobileFeatureCard
              icon={<Smartphone className="w-5 h-5" />}
              title="Works everywhere"
              description="PWA on any device. iOS app with Face ID coming soon."
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 px-6"
          >
            <h3 className="font-display text-2xl font-bold text-bare-text mb-2">
              What people are saying
            </h3>
            <p className="text-bare-muted">Real feedback from real users</p>
          </motion.div>

          {/* Horizontal scroll testimonials */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 px-6 pb-4" style={{ width: 'max-content' }}>
              <MobileTestimonialCard
                quote="The safe-to-spend number is a game changer. I finally stopped guessing."
                author="Sarah T."
                role="Marketing Manager"
              />
              <MobileTestimonialCard
                quote="I used to check my balance, panic, then spend anyway. Now the anxiety is gone."
                author="James M."
                role="Software Developer"
              />
              <MobileTestimonialCard
                quote="Juno called me out on my Uber Eats addiction. Brutal, but needed."
                author="Emma K."
                role="Freelance Designer"
              />
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="px-6 py-12 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="font-display text-2xl font-bold text-bare-text">
              Up and running in 2 minutes
            </h3>
          </motion.div>

          <div className="space-y-6">
            <MobileStepCard
              number="1"
              title="Connect Monzo"
              description="One tap to link your account. Read-only, always."
            />
            <MobileStepCard
              number="2"
              title="Set your payday"
              description="Tell us when you get paid. We'll handle the rest."
            />
            <MobileStepCard
              number="3"
              title="Live your life"
              description="Check your safe-to-spend anytime. Juno keeps you honest."
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="font-display text-2xl font-bold text-bare-text">
              Questions? Answered.
            </h3>
          </motion.div>

          <div className="space-y-3">
            <FAQItem
              question="Is it really free?"
              answer="Yes, completely free forever. No premium tier, no hidden fees. We built this for ourselves and decided to share it."
            />
            <FAQItem
              question="Is my data safe?"
              answer="Absolutely. We use read-only access to Monzo - we can see your transactions but can never move your money. Your tokens are encrypted at rest."
            />
            <FAQItem
              question="What's 'safe-to-spend'?"
              answer="It's your actual balance minus upcoming bills before your next payday. Instead of seeing £500 and thinking you're rich, you'll see the £200 you can actually spend."
            />
            <FAQItem
              question="Who is Juno?"
              answer="Juno is your AI money coach powered by Claude. She analyses your spending and gives you straight talk - no sugarcoating."
            />
            <FAQItem
              question="Why only Monzo?"
              answer="Monzo has the best API for real-time data. We may add other UK banks in the future through Open Banking."
            />
            <FAQItem
              question="Can I use this on my phone?"
              answer="Yes! It works as a PWA (add to home screen) on any device, and there's a native iOS app with Face ID support coming soon."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16 bg-bare-accent">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="font-display text-3xl font-bold text-white mb-4">
              Ready to see the truth?
            </h3>
            <p className="text-white/80 mb-8">
              Free forever. No credit card. No bullshit.
            </p>
            <a
              href="https://juno.bare.money"
              className="inline-block bg-white text-bare-accent font-semibold text-lg px-8 py-4 rounded-xl hover:bg-bare-bg transition-colors"
            >
              Get Started
            </a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 bg-white border-t border-bare-card-border">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <h1 className="font-display text-lg font-bold">
                <span className="gradient-text">bare</span>
                <span className="text-bare-muted">.money</span>
              </h1>
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
            </div>
          </div>
        </footer>
      </main>

      {/* ========== DESKTOP LAYOUT ========== */}
      <main className="hidden lg:block min-h-screen bg-bare-bg">
        {/* Navigation */}
        <nav className="w-full px-12 py-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h1 className="font-display text-3xl font-bold">
              <span className="gradient-text">bare</span>
              <span className="text-bare-muted">.money</span>
            </h1>
            <div className="flex items-center gap-6">
              <Link
                href="/docs"
                className="text-bare-muted font-medium hover:text-bare-text transition-colors"
              >
                Docs
              </Link>
              <a
                href="https://juno.bare.money"
                className="text-bare-accent font-semibold hover:text-bare-accent-hover transition-colors"
              >
                Sign In
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-12 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-left"
              >
                <p className="text-bare-accent font-semibold text-sm uppercase tracking-wide mb-4">
                  Monzo budgeting for UK
                </p>

                <h2 className="font-display text-6xl font-bold text-bare-text mb-6 leading-tight">
                  Always know what you can actually spend
                </h2>

                <p className="text-bare-muted text-xl mb-8 max-w-lg">
                  Your balance minus your bills equals your safe-to-spend.
                  <span className="text-bare-text font-medium"> No guessing. No spreadsheets.</span>
                </p>

                <div className="flex gap-4 mb-8">
                  <a
                    href="https://juno.bare.money"
                    className="btn-primary text-center text-lg px-8 py-4"
                  >
                    Get Started Free
                  </a>
                </div>

                <div className="flex gap-6 text-sm text-bare-muted">
                  <span className="flex items-center gap-2">
                    <UKFlag />
                    <span>UK only</span>
                  </span>
                  <span className="text-bare-card-border">|</span>
                  <span>Requires Monzo</span>
                  <span className="text-bare-card-border">|</span>
                  <span>Free forever</span>
                </div>
              </motion.div>

              {/* Right: Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex justify-center"
              >
                <div className="relative">
                  {/* Phone frame */}
                  <div className="w-72 h-[580px] bg-bare-card rounded-[3rem] shadow-card border-8 border-bare-text/10 overflow-hidden">
                    {/* Screen content mockup */}
                    <div className="h-full bg-bare-bg p-6 pt-12">
                      {/* Status bar mockup */}
                      <div className="flex justify-between text-xs text-bare-muted mb-8">
                        <span>9:41</span>
                        <span>100%</span>
                      </div>

                      {/* Balance mockup */}
                      <div className="text-center mb-8">
                        <p className="text-bare-muted text-sm mb-2">Safe to spend</p>
                        <p className="font-display text-5xl font-bold text-bare-safe">£847</p>
                        <p className="text-bare-muted text-sm mt-2">until Thursday</p>
                      </div>

                      {/* Juno mockup */}
                      <div className="card mb-6">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-bare-accent flex items-center justify-center flex-shrink-0">
                            <Brain className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-bare-text">Juno</p>
                            <p className="text-sm text-bare-muted">Looking solid. Just watch the Deliveroo habit.</p>
                          </div>
                        </div>
                      </div>

                      {/* Bills preview mockup */}
                      <div className="card">
                        <p className="text-sm font-medium text-bare-text mb-3">Due this week</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-bare-muted">Netflix</span>
                            <span className="text-bare-text">£15.99</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-bare-muted">Spotify</span>
                            <span className="text-bare-text">£10.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-bare-accent/10 rounded-full blur-3xl"></div>
                  <div className="absolute -z-10 bottom-10 -left-10 w-40 h-40 bg-bare-safe/10 rounded-full blur-3xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="px-12 py-6 bg-white border-y border-bare-card-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center gap-12"
            >
              <p className="text-sm text-bare-muted uppercase tracking-wide font-semibold">Your data is safe</p>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-sm text-bare-muted">
                  <Shield className="w-4 h-4 text-bare-safe" />
                  <span>Read-only access</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-bare-muted">
                  <Lock className="w-4 h-4 text-bare-safe" />
                  <span>AES-256 encrypted</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-bare-muted">
                  <Key className="w-4 h-4 text-bare-safe" />
                  <span>You control your OAuth app</span>
                </div>
                <Link href="/privacy" className="text-bare-accent hover:underline text-sm">
                  Privacy Policy →
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-12 py-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h3 className="font-display text-4xl font-bold text-bare-text mb-4">
                Everything you need, nothing you don&apos;t
              </h3>
              <p className="text-bare-muted text-lg max-w-2xl mx-auto">
                Connect Monzo. Set payday. See what you can actually spend. That&apos;s it.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Wallet className="w-6 h-6" />}
                title="Real-time balance"
                description="Live data from Monzo. Know exactly where you stand, right now."
                delay={0.1}
              />
              <FeatureCard
                icon={<Brain className="w-6 h-6" />}
                title="Juno AI coach"
                description="Your personal money coach who tells it like it is. No sugarcoating."
                delay={0.2}
              />
              <FeatureCard
                icon={<Receipt className="w-6 h-6" />}
                title="Smart bill tracking"
                description="Auto-detects your bills and reserves the money before you spend it."
                delay={0.3}
              />
              <FeatureCard
                icon={<Zap className="w-6 h-6" />}
                title="Safe-to-spend"
                description="Factors in bills, payday timing, and upcoming commitments automatically."
                delay={0.4}
              />
              <FeatureCard
                icon={<Shield className="w-6 h-6" />}
                title="Read-only access"
                description="We can see your transactions but never move your money. Ever."
                delay={0.5}
              />
              <FeatureCard
                icon={<Smartphone className="w-6 h-6" />}
                title="Works everywhere"
                description="PWA on any device. Native iOS app with Face ID. Your choice."
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-12 py-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h3 className="font-display text-4xl font-bold text-bare-text mb-4">
                What people are saying
              </h3>
              <p className="text-bare-muted text-lg">
                Real feedback from real users
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="The safe-to-spend number is a game changer. I finally stopped guessing and started knowing exactly what I could spend without screwing up my bills."
                author="Sarah T."
                role="Marketing Manager"
                delay={0.1}
              />
              <TestimonialCard
                quote="I used to check my balance, panic, then spend anyway. Now I just look at what's actually left to spend and the anxiety is gone. Simple as that."
                author="James M."
                role="Software Developer"
                delay={0.2}
              />
              <TestimonialCard
                quote="Juno called me out on my Uber Eats addiction within the first week. Brutal, but needed. Already saved £200 this month."
                author="Emma K."
                role="Freelance Designer"
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-12 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h3 className="font-display text-4xl font-bold text-bare-text mb-4">
                Up and running in 2 minutes
              </h3>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-12">
              <StepCard
                number="1"
                title="Connect Monzo"
                description="One tap to link your account. Read-only, always."
                delay={0.1}
              />
              <StepCard
                number="2"
                title="Set your payday"
                description="Tell us when you get paid. We'll handle the rest."
                delay={0.2}
              />
              <StepCard
                number="3"
                title="Live your life"
                description="Check your safe-to-spend anytime. Juno keeps you honest."
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-12 py-24">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h3 className="font-display text-4xl font-bold text-bare-text mb-4">
                Questions? Answered.
              </h3>
            </motion.div>

            <div className="space-y-4">
              <FAQItem
                question="Is it really free?"
                answer="Yes, completely free forever. No premium tier, no hidden fees. We built this for ourselves and decided to share it."
              />
              <FAQItem
                question="Is my data safe?"
                answer="Absolutely. We use read-only access to Monzo - we can see your transactions but can never move your money. Your tokens are encrypted at rest, and we don't sell or share your data with anyone."
              />
              <FAQItem
                question="What's 'safe-to-spend'?"
                answer="It's your actual balance minus upcoming bills before your next payday. Instead of seeing £500 and thinking you're rich, you'll see the £200 you can actually spend without missing rent."
              />
              <FAQItem
                question="Who is Juno?"
                answer="Juno is your AI money coach powered by Claude. She analyses your spending and gives you straight talk - no sugarcoating. You can set her personality from brutal to gentle in settings."
              />
              <FAQItem
                question="Why only Monzo?"
                answer="We're starting with Monzo because it has the best API for real-time data. We may add other UK banks in the future through Open Banking."
              />
              <FAQItem
                question="Can I use this on my phone?"
                answer="Yes! It works as a PWA (add to home screen) on any device, and there's a native iOS app with Face ID support coming to the App Store."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-12 py-24 bg-bare-accent">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="font-display text-4xl font-bold text-white mb-4">
              Ready to see the truth?
            </h3>
            <p className="text-white/80 text-lg mb-8">
              Free forever. No credit card. No bullshit.
            </p>
            <a
              href="https://juno.bare.money"
              className="inline-block bg-white text-bare-accent font-semibold text-lg px-8 py-4 rounded-xl hover:bg-bare-bg transition-colors"
            >
              Get Started
            </a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="px-12 py-12 bg-white border-t border-bare-card-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="font-display text-xl font-bold">
                  <span className="gradient-text">bare</span>
                  <span className="text-bare-muted">.money</span>
                </h1>
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
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

// Mobile feature card with icon
function MobileFeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="card flex items-start gap-4"
    >
      <div className="w-10 h-10 rounded-xl bg-bare-accent-soft flex items-center justify-center text-bare-accent flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-display font-semibold text-bare-text mb-1">{title}</h4>
        <p className="text-bare-muted text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

// Mobile testimonial card
function MobileTestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string
  author: string
  role: string
}) {
  return (
    <div className="card w-72 flex-shrink-0">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-bare-warning text-bare-warning" />
        ))}
      </div>
      <p className="text-bare-text text-sm mb-4">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-semibold text-bare-text text-sm">{author}</p>
        <p className="text-bare-muted text-xs">{role}</p>
      </div>
    </div>
  )
}

// Mobile step card
function MobileStepCard({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="flex items-start gap-4"
    >
      <div className="w-10 h-10 rounded-full bg-bare-accent text-white font-display font-bold flex items-center justify-center flex-shrink-0">
        {number}
      </div>
      <div>
        <h4 className="font-display font-semibold text-bare-text mb-1">{title}</h4>
        <p className="text-bare-muted text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
  delay = 0,
}: {
  quote: string
  author: string
  role: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="card"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-bare-warning text-bare-warning" />
        ))}
      </div>
      <p className="text-bare-text mb-4">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-semibold text-bare-text">{author}</p>
        <p className="text-bare-muted text-sm">{role}</p>
      </div>
    </motion.div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="card hover:shadow-card-hover transition-shadow"
    >
      <div className="w-12 h-12 rounded-xl bg-bare-accent-soft flex items-center justify-center text-bare-accent mb-4">
        {icon}
      </div>
      <h4 className="font-display font-semibold text-bare-text text-lg mb-2">{title}</h4>
      <p className="text-bare-muted text-sm">{description}</p>
    </motion.div>
  )
}

function StepCard({
  number,
  title,
  description,
  delay = 0,
}: {
  number: string
  title: string
  description: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <div className="w-12 h-12 rounded-full bg-bare-accent text-white font-display font-bold text-xl flex items-center justify-center mx-auto mb-4">
        {number}
      </div>
      <h4 className="font-display font-semibold text-bare-text text-lg mb-2">{title}</h4>
      <p className="text-bare-muted">{description}</p>
    </motion.div>
  )
}

function FAQItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="card"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <h4 className="font-display font-semibold text-bare-text text-lg pr-4">
          {question}
        </h4>
        <ChevronDown
          className={`w-5 h-5 text-bare-muted flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="text-bare-muted mt-4"
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  )
}

// UK Flag SVG component to avoid emoji rendering issues
function UKFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 60 42" className="rounded-sm overflow-hidden">
      <clipPath id="uk-clip">
        <rect width="60" height="42" rx="2" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        {/* Blue background */}
        <rect width="60" height="42" fill="#012169"/>
        {/* White diagonals */}
        <path d="M0,0 L60,42 M60,0 L0,42" stroke="#FFFFFF" strokeWidth="7"/>
        {/* Red diagonals */}
        <path d="M0,0 L60,42" stroke="#C8102E" strokeWidth="4"/>
        <path d="M60,0 L0,42" stroke="#C8102E" strokeWidth="4"/>
        {/* White cross */}
        <path d="M30,0 V42 M0,21 H60" stroke="#FFFFFF" strokeWidth="10"/>
        {/* Red cross */}
        <path d="M30,0 V42 M0,21 H60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  )
}
