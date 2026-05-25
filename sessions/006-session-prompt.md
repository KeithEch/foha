# 006. Hero Section & Nav Bar Revisions

This session advances Phase 5 of the roadmap: ask the user for any design revisions to the hero section and nav bar, then implement them. The Phase 3 builds are the starting point.

**Roadmap reference:** Phase 5 — Hero Section & Nav Bar Revisions

---

## Goal

By the end of this session: any user-requested revisions to the hero section and nav bar are implemented, the hero logo is CMS-connected, and both components are verified at all six breakpoints.

---

## Before Writing Any Code

### Step 1 — Review Phase 4 state

Read `sessions/005-log.md` and `RESPONSIVE.md` to understand what was documented and fixed. Note the hero logo fix applied in Phase 4 (`width: min(378px, 94%)`) and the known cosmetic issues recorded in RESPONSIVE.md.

### Step 2 — Ask for revisions

Before touching any code, ask the user two questions:

1. **Hero section:** Are there any design revisions to the current hero section? (Describe current state briefly: full-width marquee with background image, character foreground on desktop, logo upper-right on desktop / centred on mobile.)
2. **Nav bar:** Are there any design revisions to the current nav bar? (Describe current state: sticky beige bar, logo left, "Get Mad" always visible, two links desktop-only.)

Wait for answers before proceeding. If the answer is "no changes", note it in the log and proceed to the CMS task.

### Step 3 — Check design system
Read `DESIGN-SYSTEM.md` and `tokens.css` before making any visual changes. Do not introduce values not in the design system without asking.

---

## Tasks

### 5.1 — Hero revisions (if any)

- [ ] Implement any design changes requested by the user
- [ ] Verify hero renders correctly at 320px, 390px, 768px, 1024px, 1280px, 1440px after changes

### 5.2 — Hero CMS connection

The hero section has one currently-unconnected CMS field: the logo/title graphic (`hero__logo-wrap`).

- [ ] Confirm with user whether the hero logo image should be CMS-controlled or always hardcoded
- [ ] If CMS-controlled: add field to `config.yml` (image widget), wire to `load-content.js`

### 5.3 — Nav bar revisions (if any)

- [ ] Implement any design changes requested by the user
- [ ] Verify sticky positioning across all sections at all breakpoints
- [ ] Confirm nav links smooth-scroll correctly and `scroll-margin-top` on section anchors is adequate for nav height

### 5.4 — Nav breakpoint fix (carry-forward from Phase 4)

From `RESPONSIVE.md`: at tablet (768px–1023px) the desktop nav layout is active but calibrated for a 1440px canvas. Verify nav looks correct at 768px and 1024px — adjust padding or layout if needed.

---

## Files in Scope

- `src/style.css` — hero and nav rule updates only
- `index.html` — possible hero markup changes
- `src/js/load-content.js` — CMS wiring for hero logo (if applicable)
- `public/admin/config.yml` — hero logo CMS field (if applicable)
- `public/content/sections.json` — hero logo value (if applicable)

## Out of Scope

- No changes to About, Overview, Gallery, Prologue, Retail, Footer, or Easter Egg sections
- No animation implementation (Phase 14)
- No Figma fetches unless the user provides a URL

---

## Definition of Done

- [ ] User's hero revision requests implemented (or "none requested" noted)
- [ ] User's nav revision requests implemented (or "none requested" noted)
- [ ] Hero logo CMS connection decided and implemented
- [ ] Hero verified at 320px, 390px, 768px, 1024px, 1280px, 1440px
- [ ] Nav verified sticky at all breakpoints with no content overlap
- [ ] No new console errors introduced

---

## Closing Steps

- **Log file:** `sessions/006-log.md`
- **Next session stub:** `sessions/007-session-prompt.md` — based on Phase 6 (About Section Revisions)
- Commit all changed files on `dev` and push to `origin/dev`.
- Follow the close gate in the base prompt.
