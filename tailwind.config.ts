import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background
        'bare-bg': '#F8F9FA',
        'bare-bg-soft': '#FFFFFF',
        'bare-card': '#FFFFFF',
        'bare-card-border': '#E8ECF0',

        // Status colors
        'bare-safe': '#22C55E',
        'bare-gold': '#10B981',
        'bare-warning': '#F59E0B',
        'bare-danger': '#EF4444',

        // Text
        'bare-text': '#1A1A2E',
        'bare-muted': '#6B7280',

        // Accent (purple)
        'bare-accent': '#8B5CF6',
        'bare-accent-hover': '#7C3AED',
        'bare-accent-soft': '#EDE9FE',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 6px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}

export default config
