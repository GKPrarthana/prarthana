# Prarthana Sewmini | AI & Data Science Engineer Portfolio

A high-end, modern portfolio website showcasing AI/ML expertise, projects, and professional experience. Built with React 19, Tailwind CSS 4, and Framer Motion for smooth animations and micro-interactions.

## Design Philosophy

**Precision & Power** — A data-driven, no-nonsense aesthetic that mirrors technical mastery and executive presence. The design conveys confidence through intentional restraint and architectural clarity.

### Key Features

- **Dark/Light Mode Toggle** — Seamless theme switching with persistent user preference
- **Smooth Animations** — Entrance animations, scroll-triggered reveals, and micro-interactions powered by Framer Motion
- **Project Filtering** — Dynamic filtering system to showcase projects by category
- **Responsive Design** — Mobile-first approach with thoughtful breakpoints
- **Accessibility** — WCAG 2.1 AA compliant with semantic HTML and keyboard navigation
- **Performance Optimized** — Lazy loading, code splitting, and optimized assets

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Framework** | React 19 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **UI Components** | shadcn/ui |
| **Routing** | Wouter |
| **Build Tool** | Vite |

## Project Structure

```
client/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.tsx    # Fixed header with theme toggle
│   │   ├── Hero.tsx          # Hero section with CTA
│   │   ├── About.tsx         # About section with stats
│   │   ├── Skills.tsx        # Categorized skills grid
│   │   ├── Projects.tsx      # Filterable projects showcase
│   │   ├── Experience.tsx    # Experience timeline + education
│   │   ├── Contact.tsx       # Contact section with links
│   │   ├── Footer.tsx        # Footer with navigation
│   │   └── ui/               # shadcn/ui components
│   ├── contexts/
│   │   └── ThemeContext.tsx  # Dark/light mode provider
│   ├── hooks/
│   │   └── useProjectFilter.ts # Project filtering logic
│   ├── lib/
│   │   ├── constants.ts      # Site config, content, projects
│   │   ├── animations.ts     # Framer Motion variants
│   │   └── utils.ts          # Helper functions
│   ├── pages/
│   │   └── Home.tsx          # Main portfolio page
│   ├── App.tsx               # Root component
│   ├── index.css             # Global styles & design tokens
│   └── main.tsx              # React entry point
├── public/
│   └── favicon.ico
└── index.html
```

## Design System

### Color Palette

| Role | Light Mode | Dark Mode |
|------|-----------|-----------|
| **Background** | `oklch(0.98 0.001 286)` | `oklch(0.12 0.01 285)` |
| **Text Primary** | `oklch(0.12 0.01 285)` | `oklch(0.95 0.01 65)` |
| **Accent** | `oklch(0.72 0.18 70)` | `oklch(0.72 0.18 70)` |
| **Card** | `oklch(1 0 0)` | `oklch(0.18 0.01 285)` |

### Typography

- **Display Font** — Poppins (600, 700 weights) for headlines
- **Body Font** — Inter (400, 500, 600, 700 weights) for content
- **Base Size** — 16px (1rem)
- **Line Height** — 1.6 for body, 1.2 for headings

### Spacing Scale

Base unit: 4px
- `4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px`

### Animations

| Element | Interaction | Duration |
|---------|-------------|----------|
| **Links** | Hover → color shift | 200ms |
| **Buttons** | Hover → scale 1.02 | 150ms |
| **Cards** | Hover → lift (Y -4px) | 200ms |
| **Entrance** | Fade in + slide | 600ms |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Development

The dev server runs on `http://localhost:3000` with hot module replacement (HMR) enabled.

```bash
# Format code
pnpm format

# Type check
pnpm check
```

## Customization

### Update Content

Edit `client/src/lib/constants.ts` to update:
- Site configuration (name, email, links)
- Hero content
- About section
- Skills and expertise
- Projects showcase
- Experience timeline
- Education

### Modify Colors

Edit `client/src/index.css` to customize:
- Light mode colors (`:root` selector)
- Dark mode colors (`.dark` selector)
- All colors use OKLCH format for better perceptual uniformity

### Add New Sections

1. Create a new component in `client/src/components/`
2. Import and add to `client/src/App.tsx`
3. Add navigation link in `Navigation.tsx`
4. Update footer links in `Footer.tsx`

### Customize Animations

Edit `client/src/lib/animations.ts` to modify:
- Entrance animations (fade, slide, scale)
- Stagger timing
- Hover effects
- Transition durations

## Accessibility

- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus indicators visible on all interactive elements
- ✅ Color contrast ratio ≥ 4.5:1 (WCAG AA)
- ✅ Respects `prefers-reduced-motion` for animations

## Performance

- **Code Splitting** — Route-based splitting via Wouter
- **Lazy Loading** — Images load on scroll
- **CSS Optimization** — Tailwind purges unused styles
- **Font Loading** — Google Fonts with preconnect
- **Animations** — GPU-accelerated (transform, opacity only)

## Deployment

### Build for Production

```bash
pnpm build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

```bash
# Update package.json with your repo URL
# Then build and push to gh-pages branch
pnpm build
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## License

© 2025 Prarthana Sewmini. All rights reserved.

## Credits

- **Design System** — Custom OKLCH color palette
- **Components** — shadcn/ui
- **Animations** — Framer Motion
- **Icons** — Lucide React
- **Typography** — Google Fonts (Poppins, Inter)

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
