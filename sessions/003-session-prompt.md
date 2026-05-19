# 003. Core Structure & CMS Integration

This session builds the HTML shell, navigation, modal system, and Decap CMS configuration, advancing Phase 2 of the roadmap.

**Roadmap reference:** Phase 2 — Core Structure & CMS Integration

---

## Goal

By the end of this session: a semantic, accessible HTML shell is live on Netlify with a working sticky nav, a reusable modal component, and a configured Decap CMS editorial workflow. These become the structural foundation for all content sections in Phase 3.

---

## Tasks

### HTML Skeleton
- [ ] Build `index.html` with semantic HTML5 structure: `<header>`, `<main>`, `<section>` (one per content section, with IDs), `<footer>`
- [ ] Link all CSS (`src/style.css` — which already imports tokens and Google Fonts)
- [ ] Set up section anchor IDs matching nav links: `#hero`, `#overview`, `#gallery`, `#prologue`, `#retail`
- [ ] Add `#easter-egg` section positioned 2000px below the footer with placeholder content; always visible but requires scrolling to discover

### Navigation
- [ ] Build a sticky top nav bar with logo and three anchor links (Overview, Prologue, Get Mad)
- [ ] Implement smooth-scroll via CSS (`scroll-behavior: smooth`)
- [ ] Implement mobile navigation per Figma design: [Mobile nav component](https://www.figma.com/design/XsjKeeMALXqJLBywDkyqJL/FOHA-club-website?node-id=81-24&t=5YvlK41Bhu1sZbiU-1) — if design reference is unclear—stop and ask for input before proceeding. Do not assume or guess.
- [ ] Ensure nav is keyboard-navigable and screen-reader friendly (`aria-label`, focus states)

### Modal System
- [ ] Build a reusable full-screen modal component (HTML + CSS + JS)
- [ ] Modal opens/closes via `aria-modal`, focus trapping, and ESC key dismissal
- [ ] Correct ARIA: `role="dialog"`, `aria-labelledby`, `aria-modal="true"`, focus management on open and close
- [ ] All colours, spacing, radius, and shadows from `tokens.css`
- [ ] Modal is initially scaffolded and tested with placeholder content; actual trigger defined in Phase 3

### Decap CMS Setup
- [ ] Add `admin/index.html` and `admin/config.yml` per Decap CMS documentation
- [ ] Configure Git Gateway backend for Netlify Identity
- [ ] Define `content/sections.json` collection in `config.yml` with the following placeholder fields for each section:
  - Hero: logo image, hero image, sub-head text
  - About: heading 1 text, stats text, heading 2 text, paragraph text,
  - Overview: heading 1 text
  - Gallery: heading 1 text
  - Prologue:  heading 1 text, paragraph text
  - Retail:  heading 1 text, links (as a list), paragraph text
- [ ] Build `src/js/load-content.js`: fetch `/content/sections.json` and inject values into matching section IDs
- [ ] Add `<script src="/src/js/load-content.js"></script>` to `index.html`
- [ ] Verify CMS setup: Netlify Identity is enabled; Git Gateway is connected; test login succeeds
- [ ] Verify editorial workflow: CMS login → edit text/upload image → publish → confirm live update on site

---

## Files in Scope

- `index.html` — main entry point (already exists as stub; expand with semantic structure)
- `src/style.css` — add nav and modal component styles
- `src/js/modal.js` — new: modal open/close/focus-trap logic
- `src/js/load-content.js` — new: fetch and inject content from `/content/sections.json`
- `content/sections.json` — new: editable content collection (managed by Decap CMS)
- `admin/index.html` — new: Decap CMS entry point
- `admin/config.yml` — new: CMS collection definitions
- `netlify.toml` — add Identity/Git Gateway headers if needed
- `ROADMAP.md` — mark Phase 2 tasks complete as they finish

## Out of Scope

- No section content beyond placeholder text (that is Phase 3)
- No animations (Phase 4)
- No image assets yet
- No gallery or lightbox

---

## Design Reference

- **Figma:** [FOHA club website](https://www.figma.com/design/XsjKeeMALXqJLBywDkyqJL/FOHA-club-website?node-id=42-13&t=5YvlK41Bhu1sZbiU-1) — shows the nav bar, hero section, about section, overview section layouts in the wide breakpoint
- **Mobile nav:** [Mobile nav component](https://www.figma.com/design/XsjKeeMALXqJLBywDkyqJL/FOHA-club-website?node-id=81-24&t=5YvlK41Bhu1sZbiU-1) — node `81:24` for mobile navigation design and interactions
- **Tokens:** `DESIGN-SYSTEM.md` — all colours, spacing, radius, shadows, and durations

---

## Definition of Done

- [ ] `index.html` has correct semantic structure with all section IDs (`#hero`, `#about`,`#overview`, `#gallery`, `#prologue`, `#retail`, `#easter-egg`)
- [ ] Nav is sticky, smooth-scrolls to anchors, implements mobile design per Figma node `81:24`
- [ ] Nav passes keyboard navigation test (Tab through nav, verify focus visible) and basic screen reader test (NVDA/JAWS on Windows or VoiceOver on macOS)
- [ ] Modal opens and closes correctly; focus is trapped and restored; ESC dismisses it; tested with placeholder content
- [ ] `admin/config.yml` defines `content/sections.json` collection with fields for hero, overview, prologue, and retail links
- [ ] `src/js/load-content.js` fetches content and injects into matching section IDs without errors
- [ ] CMS login works via Netlify Identity; Git Gateway is connected
- [ ] End-to-end editorial workflow tested: edit in CMS → publish → JSON updates → live on site
- [ ] All styles use design system tokens — no hardcoded values
- [ ] All Phase 2 tasks checked off in `ROADMAP.md`

---

## Closing Steps

- **Log file:** `sessions/003-log.md`
- **Next session stub:** `sessions/004-session-prompt.md` — based on Phase 3 (Sections & Content)
- Commit all changed files on `dev` and push to `origin/dev`.
- Follow the close gate in the base prompt.