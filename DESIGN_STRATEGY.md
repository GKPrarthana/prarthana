# Prarthana Sewmini | Portfolio Design Strategy

## Design Philosophy: "Precision & Power"

**Core Ethos:** A data-driven, no-nonsense aesthetic that mirrors Prarthana's professional identity. The design conveys technical mastery, strategic thinking, and executive presence—not through decoration, but through intentional restraint and architectural clarity.

---

## Design System

### Color Palette

| Role | Color | OKLCH | Usage |
|------|-------|-------|-------|
| **Primary Background** | Deep Charcoal | `oklch(0.12 0.01 285)` | Main page background |
| **Secondary Background** | Slate | `oklch(0.18 0.01 285)` | Cards, sections |
| **Accent** | Electric Gold | `oklch(0.72 0.18 70)` | CTAs, highlights, emphasis |
| **Text Primary** | Off-White | `oklch(0.95 0.01 65)` | Body text |
| **Text Secondary** | Muted Gray | `oklch(0.65 0.02 285)` | Secondary text, metadata |
| **Border** | Subtle Gray | `oklch(0.25 0.01 285)` | Dividers, subtle structure |

**Rationale:** Deep neutrals create a premium, tech-forward foundation. Electric gold provides a confident, non-generic accent that stands out without screaming. The palette avoids purple gradients and trendy pastels—it's deliberate and mature.

### Typography System

| Element | Font | Weight | Size | Line Height | Usage |
|---------|------|--------|------|-------------|-------|
| **Display** | Poppins | 700 | 3.5rem / 2.5rem | 1.1 | Hero title, section headers |
| **Heading 1** | Poppins | 600 | 2.5rem | 1.2 | Major section titles |
| **Heading 2** | Poppins | 600 | 1.75rem | 1.3 | Subsection titles |
| **Body** | Inter | 400 | 1rem | 1.6 | Main content, descriptions |
| **Body Small** | Inter | 400 | 0.875rem | 1.5 | Metadata, labels, tags |
| **Label** | Inter | 600 | 0.75rem | 1.4 | Buttons, badges, tags |

**Rationale:** Poppins (geometric, modern) for display creates visual hierarchy and personality. Inter (neutral, readable) for body ensures clarity. The weight contrast (700 display vs. 400 body) creates strong visual separation without relying on color alone.

### Spacing & Grid

- **Base unit:** 4px
- **Primary spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96px
- **Container max-width:** 1280px
- **Gutter:** 32px (desktop), 24px (tablet), 16px (mobile)
- **Section padding:** 96px top/bottom (desktop), 64px (tablet), 48px (mobile)

### Shadows & Depth

| Level | Shadow | Usage |
|-------|--------|-------|
| **Subtle** | `0 2px 8px rgba(0,0,0,0.12)` | Cards, hover states |
| **Medium** | `0 8px 24px rgba(0,0,0,0.2)` | Elevated cards, modals |
| **Deep** | `0 16px 48px rgba(0,0,0,0.3)` | Floating elements, overlays |

---

## Component Architecture

### Page Structure

```
Home (Single-page scroll)
├── Navigation (Fixed header with logo + theme toggle)
├── Hero Section
├── About Section
├── Skills Section (Categorized grid)
├── Projects Section (Filterable grid)
├── Experience Section
├── Contact Section
└── Footer
```

### Key Components

1. **Navigation** - Minimal fixed header with logo and theme toggle
2. **Hero** - Full-width statement with background image/gradient
3. **Section Headers** - Consistent styling with optional accent line
4. **Skill Cards** - Icon + label, organized by category
5. **Project Cards** - Image, title, description, tags, CTA
6. **Experience Timeline** - Vertical timeline with alternating layout
7. **CTA Button** - Primary action with hover animation
8. **Footer** - Links and social media

---

## Interaction & Animation

### Micro-interactions

| Element | Interaction | Animation |
|---------|-------------|-----------|
| **Links** | Hover | Underline + color shift (200ms ease-out) |
| **Buttons** | Hover | Scale 1.02 + shadow increase (150ms) |
| **Cards** | Hover | Lift (translate Y -4px) + shadow (200ms) |
| **Project Filter** | Click | Fade in/out filtered items (300ms) |
| **Theme Toggle** | Click | Smooth color transition (400ms) |

### Entrance Animations

- **Hero text** - Fade in + slide up (800ms, staggered)
- **Section headers** - Fade in + slide down (600ms)
- **Cards** - Fade in + scale (400ms, staggered by index)
- **Scroll-triggered** - Elements fade in on scroll (Intersection Observer)

---

## Content Strategy

### Tone & Voice

- **Direct, confident, impact-driven**
- Avoid buzzwords ("passionate," "ninja," "guru")
- Lead with outcomes and technical depth
- Use active voice, short sentences
- Emphasize problem-solving and systems thinking

### Section Breakdown

| Section | Purpose | Content Focus |
|---------|---------|----------------|
| **Hero** | Immediate impact | Personal statement (1-2 sentences), role, location |
| **About** | Strategic context | Background, approach to AI/ML, why it matters |
| **Skills** | Credibility | Categorized: AI/ML, Engineering, Tools, Languages |
| **Projects** | Proof of capability | Problem → Approach → Impact (3-4 key projects) |
| **Experience** | Timeline & growth | Roles, companies, key achievements |
| **Contact** | Conversion | Email, LinkedIn, GitHub, CTA |

---

## Responsive Design

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| **Mobile** | 320px - 640px | Single column, 16px padding, 48px sections |
| **Tablet** | 641px - 1024px | 2-column grid, 24px padding, 64px sections |
| **Desktop** | 1025px+ | 3-4 column grid, 32px padding, 96px sections |

---

## Accessibility (WCAG 2.1 AA)

- **Color contrast:** All text meets 4.5:1 minimum (text on background)
- **Focus states:** Visible focus rings on all interactive elements
- **Keyboard navigation:** Full keyboard support, logical tab order
- **Semantic HTML:** Proper heading hierarchy, ARIA labels where needed
- **Motion:** Respect `prefers-reduced-motion` for animations

---

## Dark/Light Mode

### Light Mode
- Background: `oklch(0.98 0.001 286)` (off-white)
- Text: `oklch(0.12 0.01 285)` (dark charcoal)
- Accent: `oklch(0.65 0.18 70)` (muted gold)

### Dark Mode
- Background: `oklch(0.12 0.01 285)` (deep charcoal)
- Text: `oklch(0.95 0.01 65)` (off-white)
- Accent: `oklch(0.72 0.18 70)` (electric gold)

---

## Visual Assets

### Hero Background
- Abstract geometric pattern or subtle gradient
- Conveys tech/data without being literal
- High contrast with text overlay

### Project Images
- Real screenshots or case study visuals
- Consistent aspect ratio (16:9)
- Subtle overlay for text legibility

### Icons
- Lucide React for consistency
- 24px base size, scaled as needed
- Consistent stroke weight

---

## Performance & Best Practices

- **Lazy loading:** Images load on scroll
- **Code splitting:** Route-based splitting via Wouter
- **CSS-in-JS:** Tailwind for atomic styling
- **Animation performance:** Use `transform` and `opacity` only
- **Font loading:** Poppins + Inter via Google Fonts (preconnect)
- **SEO:** Semantic HTML, meta tags, structured data

---

## File Organization

```
client/src/
├── pages/
│   └── Home.tsx (Single-page portfolio)
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/ (shadcn/ui components)
├── hooks/
│   ├── useTheme.ts
│   ├── useInView.ts
│   └── useProjectFilter.ts
├── lib/
│   ├── constants.ts (Content, skills, projects)
│   ├── animations.ts (Framer Motion variants)
│   └── utils.ts (Helper functions)
├── App.tsx
├── index.css (Design tokens)
└── main.tsx
```

---

## Next Steps

1. ✅ Design strategy finalized
2. ⏳ Install dependencies (Framer Motion, Google Fonts)
3. ⏳ Build global styles and design tokens
4. ⏳ Create reusable components
5. ⏳ Build all sections
6. ⏳ Add animations and interactions
7. ⏳ Dark/light mode toggle
8. ⏳ Project filtering system
9. ⏳ Final polish and accessibility audit
