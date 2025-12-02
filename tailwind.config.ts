import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background - using CSS variables for theme switching
        'bare-bg': 'var(--bare-bg)',
        'bare-bg-soft': 'var(--bare-bg-soft)',
        'bare-card': 'var(--bare-card)',
        'bare-card-border': 'var(--bare-card-border)',

        // Status colors
        'bare-safe': '#22C55E',
        'bare-gold': '#10B981',
        'bare-warning': '#F59E0B',
        'bare-danger': '#EF4444',

        // Text - using CSS variables for theme switching
        'bare-text': 'var(--bare-text)',
        'bare-muted': 'var(--bare-muted)',

        // Accent (purple)
        'bare-accent': '#8B5CF6',
        'bare-accent-hover': '#7C3AED',
        'bare-accent-soft': 'var(--bare-accent-soft)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
      },
    },
  },
  plugins: [],
}

export default config
