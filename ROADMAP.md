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
- [x] Document the deployment workflow in `README.md`

### Deliverables

- Live placeholder page on Netlify
- Working deploy pipeline (GitHub `main` → Netlify auto-deploy)
- Project folder structure committed to repo

---

## Phase 1 — Design System

**Goal:** A single source of truth for all visual tokens, documented and referenced by Claude Code throughout the build.

### Tasks

- [x] Create `/src/design-system/tokens.css` defining CSS custom properties for:
  - **Color:** Brand palette (primary, secondary, accent, neutral scales), semantic tokens (text, background, border, interactive states)
  - **Typography:** Font families, size scale (`--font-size-p1/menu/h2`), line-height, weight tokens
  - **Spacing:** Pixel-named scale → `--space-4` through `--space-160`
  - **Borders & Radii:** Corner radius tokens (`--radius-*`), border width tokens (`--border-*`)
  - **Shadows & Elevation:** `--shadow-2` (low), `--shadow-3` (medium), `--shadow-4` (high)
  - **Animation:** Duration tokens (`--duration-fast/medium/slow`); easing curves deferred to Phase 4
- [x] Create `DESIGN-SYSTEM.md` documenting every token with its intended use — this is Claude Code's reference
- [x] Build a `/src/design-system/preview.html` page that renders a visual swatch sheet of all tokens (for QA and iteration)
- [x] Define responsive breakpoints (`--bp-mobile`, `--bp-tablet`, `--bp-desktop`, `--bp-wide`) and document them

### Deliverables

- `tokens.css` — complete and committed
- `DESIGN-SYSTEM.md` — Claude Code's canonical style reference
- Visual token preview page

---

## Phase 2 — Core Structure & CMS Integration

**Goal:** A valid, accessible HTML shell with navigation, CMS configured, and DreamHost server requirements satisfied.

### Tasks

#### HTML Skeleton

- [x] Build `index.html` with semantic HTML5 structure: `<header>`, `<main>`, `<section>` (one per content section, with IDs), `<footer>`
- [x] Link all CSS (design system tokens + global styles)
- [x] Set up section anchor IDs that match nav links: `#hero`, `#about`, `#overview`, `#gallery`, `#prologue`, `#retail`, and `#easter-egg` (2000px below footer)

#### Navigation

- [x] Build a sticky top nav bar with logo and three anchor links
- [x] Implement smooth-scroll behavior via CSS (`scroll-behavior: smooth`)
- [x] Mobile nav per Figma node `81:24`: logo + Get Mad only (no hamburger)
- [x] Ensure nav is keyboard-navigable and screen-reader friendly (`aria-label`, focus states)

#### Modal System

- [x] Build a reusable full-screen modal component (HTML + CSS + JS)
- [x] Modal opens/closes via `aria-modal`, focus trapping, and ESC key dismissal
- [x] Accessible: correct `role`, `aria-labelledby`, focus management
- [x] Design system tokens used throughout

#### Decap CMS Setup

- [x] Add `public/admin/index.html` and `public/admin/config.yml` per Decap CMS documentation
- [x] Configure Git Gateway via Netlify Identity *(manual — enable in Netlify dashboard)*
- [x] Define content collections in `public/admin/config.yml` for all eight sections with placeholder fields
- [x] Connect content fields to rendered HTML via `src/js/load-content.js` fetching `/content/sections.json`
- [x] Test the CMS editorial workflow: log in → edit → publish → verify update on site *(manual verification required)*

### Deliverables

- Navigable HTML shell live on Netlify
- Working Decap CMS editorial workflow
- Modal component tested and accessible

---

## Phase 3 — Sections & Content

**Goal:** All page sections built, connected to CMS, and visually based on Figma design reference. Sections can be developed in parallel.

- [x] Ask if any design system tokens have been changed. If yes, ask for latest token set exported from Figma. Update `tokens.css` and `DESIGN-SYSTEM.md`with any changes. If anything is unclear stop and ask for input.
- [ ] Make all sections responsive from 320px to 2560px _(verified only to 1440px — see note in session 011 prep)_

### 3.1 — Hero Section

- [x] hero layout based on design reference
- [x] Animated graphic elements (placeholder for Phase 4 animation)
- [ ] CMS-controlled graphic elements _(logo_image wired; hero background/foreground images still hardcoded)_

### 3.2 — About Section

- [x] Text-driven section with CMS-controlled body copy
- [x] Support for a link that opens the modal window

### 3.3 — Overview Section

- [x] Left column displaying image and text controlled by CMS
- [x] Right column displaying image

### 3.4 — Image Gallery

- [x] Responsive grid or masonry layout with horizontal scroll
- [x] Lightbox or full-screen modal on image click
- [x] Images sourced from `/public/images/` or CMS media uploads
- [x] Lazy loading for performance

### 3.5 — Prologue Section

- [x] Stylized text section
- [x] CMS-controlled content

### 3.6 — Retail Section

- [x] Grid/list of external retail store links
- [x] Each entry: store logo/icon link (opens in new tab with `rel="noopener noreferrer"`)
- [x] CMS-controlled: store name, URL, optional description
- [x] Clear visual treatment distinguishing this as an outbound-link section

### 3.7 — Footer Section

- [x] displays logo image
- [x] legal text

### 3.8 — Easter Egg Section

- [x] Hidden from main navigation. 
- [x] Triggered by scrolling past the footer.


### Deliverables

- All 8 sections rendered and CMS-connected
- All modal links functional

---

## Phase 4 — Responsive Breakpoints & Scroll-Lock Setup

**Goal:** Define responsive design patterns and prepare scroll-lock mechanism for Phase 12 (Easter Egg).

### Tasks

- [x] Document responsive design patterns for all breakpoints: 320px, 390px, 768px, 1024px, 1280px, 1440px
- [x] Prepare scroll-lock helper utilities and test on desktop/mobile before Phase 12 integration
- [x] Confirm `prefers-reduced-motion` media query handling across the project
- [x] Set up `IntersectionObserver` boilerplate for scroll-triggered animations (deferred to Phase 15)

### Deliverables

- Responsive design documentation
- Scroll-lock mechanism tested and ready
- Animation framework prepared (to be populated in Phase 15)

---

## Phase 5 — Hero Section & Nav Bar Revisions

**Goal:** Refine the design of the hero section, along with CMS integration, plus establish nav bar styling and responsiveness.

### Tasks

- [x] Ask if there are any revisions to current design of the hero section
- [x] Connect CMS fields for hero__logo-wrap
- [x] Verify hero renders correctly at 320px–2560px _(confirmed at the standard six breakpoints, 320–1440px)_
- [x] Ask if there are any revisions to the nav bar
- [ ] Test nav sticky behavior and scroll interactions on all breakpoints _(only confirmed at 768px/1024px — see session 006 log)_

### Deliverables

- Hero section refined and CMS-connected
- Nav bar refined and responsive across all breakpoints

---

## Phase 6 — About Section Revisions

**Goal:** Refine the design of the about section, along with CMS integration.

### Tasks

- [x] Ask if there are any revisions to current design of the About section
- [x] Connect CMS fields for about content
- [x] Verify section renders correctly at 320px–2560px _(confirmed at the standard six breakpoints, 320–1440px)_
- [x] Test modal link functionality

### Deliverables

- About section rendered and CMS-connected
- Modal integration verified

---

## Phase 7 — Overview Section Revisions

**Goal:** Refine the design of the overview section, along with CMS integration.

### Tasks

- [x] Ask if there are any revisions to current design of the Overview section
- [x] Connect CMS fields for overview content
- [x] Verify responsive layout at 320px–2560px _(confirmed at the standard six breakpoints, 320–1440px)_
- [x] Test image loading and alt text

### Deliverables

- Overview section rendered and CMS-connected

---

## Phase 8 — Image Gallery Section Revisions

**Goal:** Refine the design of the gallery section, along with CMS integration and lazy loading.

### Tasks

- [x] Ask if there are any revisions to current design of the Image Gallery section
- [ ] Connect CMS media uploads for gallery images _(images are hardcoded in `index.html`; not CMS-managed — see session 009 log)_
- [x] Connect CMS fields for headline text
- [x] Implement lazy loading for performance
- [ ] Verify gallery reflows appropriately at 320px–2560px _(not formally verified at all six breakpoints — see session 009 log)_
- [ ] Test lightbox on mobile and desktop _(not tested this session — see session 009 log)_

### Deliverables

- Gallery section rendered and CMS-connected
- Lightbox functional and accessible

---

## Phase 9 — Prologue Section Revisions

**Goal:** Refine the design of prologue section, along with CMS integration.

### Tasks

- [x] Ask if there are any revisions to current design of the Prologue section
- [x] Connect CMS fields for prologue content
- [x] Verify responsive layout at 320px–2560px

### Deliverables

- Prologue section rendered and CMS-connected

---

## Phase 10 — Retail Section Revisions

**Goal:** Refine the design of the retail section, along with CMS integration.

### Tasks

- [ ] Ask if there are any revisions to current design of the Retail Section
- [ ] Verify CMS fields for: store name, store URL, optional logo/icon, optional description
- [ ] Ensure each link opens in new tab with `rel="noopener noreferrer"`
- [ ] Verify responsive layout at 320px–2560px
- [ ] Test all retail links on desktop and mobile

### Deliverables

- Retail section rendered and CMS-connected
- All retail links tested and accessible

---

## Phase 11 — Footer Section Revisions

**Goal:** Refine the design of the footer section, along with CMS integration.

### Tasks

- [ ] Ask if there are any revisions to current design of the Footer section
- [ ] Verify CMS fields for legal text
- [ ] Verify responsive layout at 320px–2560px
- [ ] Ensure footer displays correctly at bottom of page

### Deliverables

- Footer section rendered and CMS-connected

---

## Phase 12 — Easter Egg Section Revisions

**Goal:** Refine the design of the easter egg section, along with scroll-lock trigger.

### Tasks

- [ ] Ask if there are any revisions to current design of the Easter Egg section
- [ ] Implement scroll-lock behavior: pause scrolling for 1.5 seconds when user reaches footer
- [ ] Connect CMS fields for easter egg content
- [ ] Test scroll-lock on desktop and mobile (touch scroll behavior)
- [ ] Test easter egg is discoverable via keyboard navigation and scrolling
- [ ] Verify responsive layout at 320px–2560px

### Deliverables

- Easter egg section rendered and CMS-connected
- Scroll-lock mechanism functional and accessible

---

## Phase 13 — Navigation Bar Refinements

**Goal:** Refine and finalize nav bar styling, behavior, and accessibility.

### Tasks

- [ ] Verify sticky positioning and z-index across all sections
- [ ] Test nav scroll behavior (hide/show on scroll, if applicable)
- [ ] Confirm all nav links smooth-scroll to correct section anchors
- [ ] Verify keyboard navigation (Tab through nav, Enter to activate links)
- [ ] Test focus states visible and styled consistently
- [ ] Verify no overlap with page content at any breakpoint

### Deliverables

- Nav bar fully refined and polished
- All nav behavior tested and accessible

---

## Phase 14 — Final Section Design Revisions

**Goal:** One last opportunity to revise each section's design — across all breakpoints — before animation work (Phase 15) and launch QA (Phase 16) lock in the final layouts. Follows the same session process established in Phases 5–12 (one `session/NNN-*` branch, prompt, and log per section).

### 14.1 — Hero Section

- [ ] Ask if there are any revisions to the current design of the Hero section across all six breakpoints (320, 390, 768, 1024, 1280, 1440)
- [ ] Implement requested changes
- [ ] User visually verifies changes are correct

### 14.2 — About Section

- [ ] Ask if there are any revisions to the current design of the About section across all six breakpoints
- [ ] Implement requested changes
- [ ] User visually verifies changes are correct

### 14.3 — Overview Section

- [ ] Ask if there are any revisions to the current design of the Overview section across all six breakpoints
- [ ] Implement requested changes
- [ ] User visually verifies changes are correct

### 14.4 — Image Gallery

- [ ] Ask if there are any revisions to the current design of the Image Gallery section across all six breakpoints
- [ ] Implement requested changes
- [ ] User visually verifies changes are correct

### 14.5 — Prologue Section

- [ ] Ask if there are any revisions to the current design of the Prologue section across all six breakpoints
- [ ] Implement requested changes
- [ ] User visually verifies changes are correct

### 14.6 — Retail Section

- [ ] Ask if there are any revisions to the current design of the Retail section across all six breakpoints
- [ ] Implement requested changes
- [ ] User visually verifies changes are correct

### 14.7 — Footer Section

- [ ] Ask if there are any revisions to the current design of the Footer section across all six breakpoints
- [ ] Implement requested changes
- [ ] User visually verifies changes are correct

### 14.8 — Easter Egg Section

- [ ] Ask if there are any revisions to the current design of the Easter Egg section across all six breakpoints
- [ ] Implement requested changes
- [ ] User visually verifies changes are correct

### Deliverables

- Final revision pass completed and visually verified for all 8 sections
- No open per-section design changes remain before animation work begins

---

## Phase 15 — Section Animations

**Goal:** Add scroll-triggered and interactive animations to all sections with full `prefers-reduced-motion` fallbacks.

### 15.1 — Scroll-Triggered Animations

- [ ] Use `IntersectionObserver` to trigger class additions as sections enter viewport
- [ ] Implement: fade-in, slide-up, stagger reveals for list/grid elements per section
- [ ] Fallback: elements visible at full opacity on load when motion is reduced

### 15.2 — Hero Animations

- [ ] Animated text reveal (character stagger or word fade-in)
- [ ] Moving graphic or background element in hero
- [ ] Fallback: static layout with no movement; content fully readable

### 15.3 — Hover Effects

- [ ] Buttons and interactive elements: scale, color, underline, shadow transitions
- [ ] Gallery images: overlay reveal or subtle zoom on hover
- [ ] Nav links: animated underline or color transition
- [ ] Retail links: transition effects on hover
- [ ] Fallback: standard `:focus-visible` styles when motion is reduced

### 15.4 — Accent / Motion Effects

- [ ] Subtle ambient motion on decorative elements (floating shapes, gradient shifts, parallax)
- [ ] Parallax: use `transform: translateY()` on scroll (not `background-attachment: fixed`)
- [ ] Fallback: static positioning

### 15.5 — Modal Transitions

- [ ] Open/close animations for full-screen modal (fade + scale)
- [ ] Fallback: instant show/hide with no transition

### Deliverables

- All section animations implemented
- `prefers-reduced-motion` fallbacks verified for every animation
- No jank on mobile (60fps target; tested on real devices)

---

## Phase 16 — Responsive QA, Testing & Launch

**Goal:** A fully QA'd, performant, accessible site deployed to Main on GitHub.

### 16.1 — Responsive QA

- [ ] Test all sections at: 320px, 390px, 768px, 1024px, 1280px, 1440px, 1920px
- [ ] Verify nav collapses correctly on mobile
- [ ] Verify gallery grid reflows appropriately
- [ ] Verify modal is usable on small screens (no overflow, scrollable if needed)
- [ ] Verify animations do not cause layout shift on mobile

### 16.2 — Accessibility Audit

- [ ] Run axe or Lighthouse accessibility audit; resolve all critical issues
- [ ] Verify keyboard navigation through nav, modals, gallery, retail links, easter egg
- [ ] Confirm all images have descriptive `alt` text
- [ ] Confirm color contrast meets WCAG AA for all text
- [ ] Confirm focus states are visible and styled

### 16.3 — Performance

- [ ] Run Lighthouse performance audit; target score 90+
- [ ] Optimize images: use modern formats (WebP with JPEG fallback), correct sizing
- [ ] Verify lazy loading is working
- [ ] Minimize and bundle CSS/JS via Vite build
- [ ] Configure cache headers via `netlify.toml` for static assets

### 16.4 — Cross-Browser Testing

- [ ] Chrome, Firefox, Safari (desktop and mobile), Edge

### 16.5 — CMS Final Verification

- [ ] Confirm all CMS-editable fields are connected and update correctly
- [ ] Confirm media uploads work via Netlify CMS / Git LFS
- [ ] Document editorial workflow for content editors in `CMS-GUIDE.md`

### 16.6 — Launch

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
