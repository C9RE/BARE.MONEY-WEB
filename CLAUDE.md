# Claude Instructions for bare.money (Marketing Website)

## Branding

**Brand name:** bare.money (always lowercase)

- **Correct:** bare.money, "the bare.money app"
- **Incorrect:** Bare Money, Bare.Money, BARE.MONEY, Bare.money

**Logo treatment:**
```jsx
<span className="gradient-text">bare</span>
<span className="text-bare-muted">.money</span>
```

**Mascot:** Purple bear (bear/bare wordplay)

**App name:** Juno (the AI coach and the app itself live at juno.bare.money)

**Contact:** hello@bare.money

## Project Overview

This is the **marketing website** for bare.money. It lives at `bare.money` and promotes the Juno budgeting app at `juno.bare.money`.

This is a **static marketing site** - no backend, no database, no auth. Landing page + docs that drives users to sign up at juno.bare.money.

## Domain Structure

- **bare.money** - This site (marketing/landing page + docs)
- **juno.bare.money** - The app (separate repo: C9RE/BARE.MONEY)

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **TypeScript 5.7**
- **Tailwind CSS 3.4** - custom theme matching the app
- **Framer Motion 11** - for animations
- **Lucide React** - for icons
- **Static Export** - `output: 'export'` in next.config.ts

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, features, testimonials, CTA |
| `/docs` | Documentation with sticky sidebar navigation |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Design System

### Theme Colors (Tailwind)

These are configured in `tailwind.config.ts` and MUST be used consistently:

```typescript
colors: {
  // Backgrounds
  'bare-bg': '#F8F9FA',        // Main page background (light grey)
  'bare-bg-soft': '#FFFFFF',   // Slightly lighter
  'bare-card': '#FFFFFF',      // Card backgrounds
  'bare-card-border': '#E8ECF0', // Card borders

  // Status colors
  'bare-safe': '#22C55E',      // Green - positive/success
  'bare-gold': '#10B981',      // Emerald - achievement
  'bare-warning': '#F59E0B',   // Amber - warning
  'bare-danger': '#EF4444',    // Red - danger/error

  // Text
  'bare-text': '#1A1A2E',      // Primary text (dark navy)
  'bare-muted': '#6B7280',     // Secondary text (grey)

  // Accent (Purple - primary brand colour)
  'bare-accent': '#8B5CF6',        // Primary purple
  'bare-accent-hover': '#7C3AED',  // Darker on hover
  'bare-accent-soft': '#EDE9FE',   // Light purple background
}
```

### Typography

- **Font**: System font stack (no custom fonts for performance)
- **Display class**: `font-display` for headings
- **Sizes**: Use Tailwind defaults (text-sm, text-base, text-lg, etc.)
- **Weights**: `font-medium`, `font-semibold`, `font-bold`

### Component Patterns

#### Cards
```jsx
<div className="card">
  {/* Content */}
</div>
```
Defined in globals.css as:
```css
.card {
  @apply bg-white rounded-2xl p-4 border border-bare-card-border shadow-card;
}
```

#### Buttons
```jsx
// Primary (purple)
<button className="btn-primary">Get Started</button>

// Secondary (light purple)
<button className="btn-secondary">Learn More</button>
```

#### Gradient Text (Logo)
```jsx
<span className="gradient-text">bare</span>
<span className="text-bare-muted">.money</span>
```

### Spacing

- Use Tailwind spacing: `p-4`, `p-6`, `py-12`, `px-6`
- Section padding: `py-24` desktop, `py-12` mobile
- Max width container: `max-w-6xl mx-auto`
- Card padding: `p-4` or `p-6`

### Responsive Design

- **Mobile-first** - always design mobile first
- **Breakpoints**: `lg:` for desktop (1024px+)
- **Hide/show**: `lg:hidden` / `hidden lg:block`
- Use grid/flex with responsive modifiers: `lg:grid-cols-2`, `lg:grid-cols-3`

### Animations (Framer Motion)

Standard animation pattern:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

For scroll-triggered:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1, duration: 0.5 }}
>
```

### Icons

Use Lucide React. Common icons:
- `Wallet` - balance/money
- `Brain` - Juno AI
- `Receipt` - transactions/bills
- `Shield` - security
- `Settings` - settings
- `ChevronRight`, `ChevronDown` - navigation
- `ArrowRight`, `ArrowLeft` - CTAs/navigation
- `Star` - testimonials
- `ExternalLink` - external links

Import pattern:
```jsx
import { Wallet, Brain, Receipt } from 'lucide-react'
```

## Landing Page Structure

### Header (Mobile)
- Logo centered
- No navigation (single page scroll)

### Header (Desktop)
- Logo left
- Sign In link right → juno.bare.money

### Hero Section
- Mobile: Centered, stacked layout
- Desktop: Two columns (text left, phone mockup right)
- Headline: "The bare truth about your money"
- CTA: "Get Started Free" → juno.bare.money

### Features Section
- 6 feature cards in 3-column grid (desktop)
- Icons from Lucide React
- Short title + description

### Testimonials Section
- 3 testimonial cards
- Star ratings
- Quote, name, role

### How It Works
- 3 steps with numbers
- Connect Monzo → Set payday → Live your life

### FAQ Section
- Accordion-style expandable items
- Common questions about the app

### CTA Section
- Purple background (`bg-bare-accent`)
- White text
- "Ready to see the truth?"
- White button → juno.bare.money

### Footer
- Logo + tagline
- Links: Privacy, Terms, Docs, Changelog, Status

## Docs Page Structure

- Sticky sidebar on desktop with section links
- Horizontal scrolling pills on mobile
- Sections scroll into view
- Active section highlighted in nav

Sections:
1. Getting Started
2. Monzo Setup (important - detailed guide)
3. Safe-to-Spend (how it works)
4. Juno AI Coach
5. Bills & Income
6. Security
7. FAQ

## Tone of Voice

- **No bullshit** - Straight talk, no corporate speak
- **Punchy** - Short sentences, active voice
- **Relatable** - Talk like a friend, not a bank
- **UK-focused** - Use £, UK spelling (colour, realise, etc.)
- **Honest** - Don't overpromise

### Example Copy

Headlines:
- "The bare truth about your money"
- "No bullshit budgeting"
- "Know what you can actually spend"

Subheads:
- "Straight talk. Zero fluff."
- "AI coaching that doesn't sugarcoat"
- "Free forever. Open source."

## CTAs

All CTAs link to the app:
```jsx
<a href="https://juno.bare.money">Get Started</a>
```

## SEO

Already configured in `app/layout.tsx`:
- Title: "bare.money - No B.S. Budgeting for UK"
- Description: "The bare truth about your money..."
- Open Graph tags
- Twitter card tags

## Deployment

Deploy to **Vercel** or **Railway**:
1. Connect GitHub repo
2. Auto-deploys on push
3. Add custom domain: bare.money
4. Static export builds automatically

## File Structure

```
app/
├── page.tsx          # Landing page
├── layout.tsx        # Root layout with SEO
├── globals.css       # Tailwind + custom styles
├── docs/
│   └── page.tsx      # Documentation page
├── privacy/
│   └── page.tsx      # Privacy policy
└── terms/
    └── page.tsx      # Terms of service
```

## Don't

- Don't add any backend/auth - that's what juno.bare.money is for
- Don't use dark theme - keep it light
- Don't overcomplicate - it's a marketing site
- Don't use corporate speak - keep it real
- Don't forget mobile - most users see this on phones
- Don't use emojis in body copy (icons only)
- Don't use external fonts (system fonts for performance)

## Related

- **App repo:** github.com/C9RE/BARE.MONEY
- **App URL:** juno.bare.money
- **App has:** Full CLAUDE.md with app-specific instructions
