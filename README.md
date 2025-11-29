# bare.money - Marketing Website

> No B.S. budgeting for UK. The marketing landing page for bare.money.

This is the **marketing website** that lives at `bare.money`. It promotes the Juno budgeting app at `juno.bare.money`.

## Domain Structure

| Domain | Purpose |
|--------|---------|
| `bare.money` | This site - marketing/landing page + docs |
| `juno.bare.money` | The app - budgeting PWA with Juno AI |

## Tech Stack

- **Next.js 16** with App Router
- **React 19** with TypeScript 5.7
- **Tailwind CSS 3.4** with custom `bare-*` theme
- **Framer Motion 11** for animations
- **Lucide React** for icons
- **Static Export** - `output: 'export'` for optimal performance

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, features, testimonials, CTA |
| `/docs` | Documentation with sticky sidebar navigation |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Deployment

Deployed on **Railway** with auto-merge enabled:

1. Push to `main` branch
2. Railway automatically builds and deploys
3. Live at `bare.money`

### Auto-Merge

This repo uses GitHub auto-merge. When a PR is approved, it automatically merges to `main` and triggers a Railway deployment.

## Theme

Uses custom Tailwind theme matching the Juno app:

### Colors

```
bare-bg: #F8F9FA          // Main background
bare-card: #FFFFFF         // Card backgrounds
bare-card-border: #E8ECF0  // Card borders

bare-safe: #22C55E         // Green - success
bare-gold: #10B981         // Emerald - achievement
bare-warning: #F59E0B      // Amber - warning
bare-danger: #EF4444       // Red - error

bare-text: #1A1A2E         // Primary text
bare-muted: #6B7280        // Secondary text

bare-accent: #8B5CF6       // Purple - primary brand
bare-accent-hover: #7C3AED // Purple - hover state
bare-accent-soft: #EDE9FE  // Light purple background
```

### Components

- `.card` - White card with border and shadow
- `.btn-primary` - Purple button
- `.btn-secondary` - Light purple button
- `.gradient-text` - Purple gradient for logo

## Structure

```
├── app/
│   ├── page.tsx          # Landing page (hero, features, testimonials, FAQ)
│   ├── layout.tsx        # Root layout with SEO meta tags
│   ├── globals.css       # Tailwind + custom component styles
│   ├── docs/
│   │   └── page.tsx      # Documentation with sticky sidebar
│   ├── privacy/
│   │   └── page.tsx      # Privacy policy
│   └── terms/
│       └── page.tsx      # Terms of service
├── public/               # Static assets
├── tailwind.config.ts    # Theme configuration
├── next.config.ts        # Static export config
├── CLAUDE.md             # AI assistant instructions
└── package.json
```

## Tone of Voice

- **No bullshit** - Straight talk, no corporate speak
- **Punchy** - Short sentences, active voice
- **Relatable** - Talk like a friend, not a bank
- **UK-focused** - Use £, UK spelling (colour, realise)
- **Honest** - Don't overpromise

## Related

- **App repo:** [github.com/C9RE/BARE.MONEY](https://github.com/C9RE/BARE.MONEY)
- **App URL:** [juno.bare.money](https://juno.bare.money)

## License

MIT
