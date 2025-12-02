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
        // Status colors (same in both modes)
        'bare-safe': '#22C55E',
        'bare-gold': '#10B981',
        'bare-warning': '#F59E0B',
        'bare-danger': '#EF4444',

        // Accent (purple) - same in both modes
        'bare-accent': '#8B5CF6',
        'bare-accent-hover': '#7C3AED',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
