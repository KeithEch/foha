# Website Project Roadmap

**Project:** foha — Single-page website
**Hosting:** Netlify (auto-deploy from GitHub `main`)
**CMS:** Decap CMS (git-based, free)

> Status tracking: Each phase has tasks, deliverables, and a definition of done.

---

## Phase 0 — Environment & Repo Setup

**Goal:** A working local dev environment and a deployed skeleton on DreamHost before any real code is written.

### Tasks

- [x] Initialize Git repository with a clear branching strategy (`main` = production, `dev` = working branch)
- [x] Set up project scaffolding with a modern build tool (Vite recommended for its speed and simplicity)
- [x] Configure `.gitignore`, `README.md`, and folder structure (`/src`, `/public`, `/cms`, `/dist`)
- [x] Add a basic `index.html` placeholder and confirm it deploys and renders correctly on Netlify
- [ ] Document the deployment workflow in `README.md`

### Deliverables

- Live placeholder page on Netlify
- Working deploy pipeline (GitHub `main` → Netlify auto-deploy)
- Project folder structure committed to repo

---

## Phase 1 — Design System

**Goal:** A single source of truth for all visual tokens, documented and referenced by Claude Code throughout the build.

### Tasks

- [ ] Create `/src/design-system/tokens.css` defining CSS custom properties for:
  - **Color:** Brand palette (primary, secondary, accent, neutral scales), semantic tokens (text, background, border, interactive states)
  - **Typography:** Font families, size scale (e.g., `--text-xs` through `--text-4xl`), line-height, letter-spacing, weight tokens
  - **Spacing:** A consistent scale (e.g., 4px base unit → `--space-1` through `--space-16`)
  - **Borders & Radii:** Corner radius tokens, border width tokens
  - **Shadows & Elevation:** Subtle shadow tokens for modals and cards
  - **Animation:** Duration tokens (`--duration-fast`, `--duration-base`, `--duration-slow`), easing curves
- [ ] Create `DESIGN-SYSTEM.md` documenting every token with its intended use — this is Claude Code's reference
- [ ] Build a `/src/design-system/preview.html` page that renders a visual swatch sheet of all tokens (for QA and iteration)
- [ ] Define responsive breakpoints (`--bp-mobile`, `--bp-tablet`, `--bp-desktop`, `--bp-wide`) and document them

### Deliverables

- `tokens.css` — complete and committed
- `DESIGN-SYSTEM.md` — Claude Code's canonical style reference
- Visual token preview page

---

## Phase 2 — Core Structure & CMS Integration

**Goal:** A valid, accessible HTML shell with navigation, CMS configured, and DreamHost server requirements satisfied.

### Tasks

#### HTML Skeleton

- [ ] Build `index.html` with semantic HTML5 structure: `<header>`, `<main>`, `<section>` (one per content section, with IDs), `<footer>`
- [ ] Link all CSS (design system tokens + global styles)
- [ ] Set up section anchor IDs that match nav links: `#hero`, `#overview`, `#gallery`, `#prologue`, `#retail`, and a hidden easter egg section

#### Navigation

- [ ] Build a sticky top nav bar with logo and three anchor links
- [ ] Implement smooth-scroll behavior via CSS (`scroll-behavior: smooth`) with a JS fallback
- [ ] Add mobile hamburger menu for small viewports
- [ ] Ensure nav is keyboard-navigable and screen-reader friendly

#### Modal System

- [ ] Build a reusable full-screen modal component (HTML + CSS + JS)
- [ ] Modal opens/closes via `aria-modal`, focus trapping, and ESC key dismissal
- [ ] Accessible: correct `role`, `aria-labelledby`, focus management
- [ ] Design system tokens used throughout

#### Decap CMS Setup

- [ ] Add `admin/index.html` and `admin/config.yml` per Decap CMS documentation
- [ ] Configure Git Gateway via Netlify Identity
- [ ] Define content collections in `config.yml` for each editable text section (hero headline, overview body, prologue text, retail links, etc.)
- [ ] Connect content fields to rendered HTML via a static site approach (templating or simple JS content loading from generated JSON/Markdown)
- [ ] Test the CMS editorial workflow: log in → edit → publish → verify update on site

### Deliverables

- Navigable HTML shell live on Netlify
- Working Decap CMS editorial workflow
- Modal component tested and accessible

---

## Phase 3 — Sections & Content

**Goal:** All page sections built, connected to CMS, and visually complete. Sections can be developed in parallel.

### 3.1 — Hero Section

- [ ] Full-viewport hero layout
- [ ] Animated headline and/or graphic elements (placeholder for Phase 4 animation)
- [ ] CMS-controlled: headline, subheadline, CTA text/link
- [ ] Responsive from 320px to 2560px

### 3.2 — Overview Section

- [ ] Text-driven section with CMS-controlled body copy
- [ ] Support for a link that opens the modal window

### 3.3 — Image Gallery

- [ ] Responsive grid or masonry layout
- [ ] Lightbox or full-screen modal on image click
- [ ] Images sourced from `/public/images/` or CMS media uploads
- [ ] Lazy loading for performance

### 3.4 — Prologue Section

- [ ] Long-form or stylized text section
- [ ] CMS-controlled content
- [ ] Modal link integration

### 3.5 — Retail Section

- [ ] Grid/list of external retail store links
- [ ] Each entry: store name, optional logo/icon, CTA link (opens in new tab with `rel="noopener noreferrer"`)
- [ ] CMS-controlled: store name, URL, optional description
- [ ] Clear visual treatment distinguishing this as an outbound-link section

### 3.6 — Easter Egg Section

- [ ] Hidden from main navigation and standard page flow
- [ ] Triggered by a specific user interaction (e.g., Konami code, a hidden link, or a specific click sequence — to be defined)
- [ ] Document the trigger mechanism in the repo

### Deliverables

- All 6 sections rendered and CMS-connected
- All modal links functional
- Retail section links tested

---

## Phase 4 — Animations & Interactivity

**Goal:** A polished, animated experience with full `prefers-reduced-motion` fallbacks for every animation.

> **Core principle:** Every animation defined in Phase 4 must have a corresponding fallback (static state) that triggers when `@media (prefers-reduced-motion: reduce)` is active. No animation runs without a fallback.

### 4.1 — Scroll-Triggered Animations

- [ ] Use `IntersectionObserver` to trigger class additions as sections enter the viewport
- [ ] Implement: fade-in, slide-up, stagger reveals for list/grid elements
- [ ] Fallback: elements are visible at full opacity on load when motion is reduced

### 4.2 — Hero/Header Animations

- [ ] Animated text reveal (e.g., character stagger or word fade-in)
- [ ] Moving graphic or background element in the hero (CSS animation or lightweight canvas/SVG)
- [ ] Fallback: static layout with no movement; content still fully readable

### 4.3 — Hover Effects

- [ ] Buttons and interactive elements: scale, color, underline, or shadow transitions using design system duration tokens
- [ ] Gallery images: overlay reveal or subtle zoom on hover
- [ ] Nav links: animated underline or color transition
- [ ] Fallback: standard `:focus-visible` styles replace hover effects where motion is reduced

### 4.4 — Accent / Motion Effects

- [ ] Subtle ambient motion on a non-critical decorative element (e.g., a floating shape, a gradient shift, a parallax layer)
- [ ] Parallax: use `transform: translateY()` on scroll (not `background-attachment: fixed` — poor mobile performance)
- [ ] Fallback: static positioning

### 4.5 — Modal Transitions

- [ ] Open/close animations for the full-screen modal (fade + scale)
- [ ] Fallback: instant show/hide with no transition

### Deliverables

- All animation types implemented
- `prefers-reduced-motion` fallbacks verified for every animation
- No jank on mobile (60fps target; test on real devices)

---

## Phase 5 — Responsive, Testing & Launch

**Goal:** A fully QA'd, performant, accessible site deployed to DreamHost production.

### 5.1 — Responsive QA

- [ ] Test all sections at: 320px, 375px, 768px, 1024px, 1280px, 1440px, 1920px
- [ ] Verify nav collapses correctly on mobile
- [ ] Verify gallery grid reflows appropriately
- [ ] Verify modal is usable on small screens (no overflow, scrollable if needed)
- [ ] Verify hero animation does not cause layout shift on mobile

### 5.2 — Accessibility Audit

- [ ] Run axe or Lighthouse accessibility audit; resolve all critical issues
- [ ] Verify keyboard navigation through nav, modals, gallery, retail links
- [ ] Confirm all images have descriptive `alt` text
- [ ] Confirm color contrast meets WCAG AA for all text
- [ ] Confirm focus states are visible and styled

### 5.3 — Performance

- [ ] Run Lighthouse performance audit; target score 90+
- [ ] Optimize images: use modern formats (WebP with JPEG fallback), correct sizing
- [ ] Verify lazy loading is working
- [ ] Minimize and bundle CSS/JS via Vite build
- [ ] Configure cache headers via `netlify.toml` for static assets

### 5.4 — Cross-Browser Testing

- [ ] Chrome, Firefox, Safari (desktop and mobile), Edge

### 5.5 — CMS Final Verification

- [ ] Confirm all CMS-editable fields are connected and update correctly
- [ ] Confirm media uploads work via Netlify CMS / Git LFS
- [ ] Document editorial workflow for content editors in `CMS-GUIDE.md`

### 5.6 — Launch

- [ ] Merge `dev` → `main`
- [ ] Confirm Netlify auto-deploy triggers and completes successfully
- [ ] Verify live site on production URL
- [ ] Confirm HTTPS is active (Netlify provisions this automatically)
- [ ] Submit sitemap to Google Search Console (if applicable)
- [ ] Post-launch smoke test: nav, modals, gallery, retail links, easter egg trigger, CMS

### Deliverables

- Lighthouse scores documented
- Accessibility issues resolved
- `CMS-GUIDE.md` for editors
- Site live on production URL
