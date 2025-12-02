'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme()

  // Show a placeholder button during SSR/hydration to prevent layout shift
  if (!mounted) {
    return (
      <button
        className={`p-2 rounded-xl bg-bare-card border border-bare-card-border transition-colors ${className}`}
        aria-label="Toggle theme"
        disabled
      >
        <div className="w-5 h-5" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-xl bg-bare-card border border-bare-card-border hover:bg-bare-accent-soft transition-colors ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {theme === 'light' ? (
          <Sun className="w-5 h-5 text-bare-warning" />
        ) : (
          <Moon className="w-5 h-5 text-bare-accent" />
        )}
      </motion.div>
    </button>
  )
}
