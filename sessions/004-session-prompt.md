# 004. Sections & Content

This session builds all six page sections with visual layouts from Figma, connects each to the CMS, and establishes the parchment page background, advancing Phase 3 of the roadmap.

**Roadmap reference:** Phase 3 — Sections & Content

---

## Goal

By the end of this session: all six sections (Hero, About, Overview, Gallery, Prologue, Retail) are visually implemented per Figma, responsive from 320px to 1440px, and CMS-connected via `sections.json`. The Easter Egg section has a defined and working trigger. The parchment page background is live.

---

## Before Writing Any Code

### Step 1 — Token check
Ask the user: "Have any design system tokens changed since Session 002?" If yes, request the updated token export and update `tokens.css` and `DESIGN-SYSTEM.md` before proceeding. If anything is unclear, stop and ask.

### Step 2 — Figma references
Fetch the Figma design context for each section before building it. Known nodes:
- **Overall layout (wide):** `https://www.figma.com/design/XsjKeeMALXqJLBywDkyqJL/FOHA-club-website?node-id=42-13` — hero, about, overview visible
- **Check for additional section nodes** by fetching the file metadata or asking the user to provide node links for gallery, prologue, and retail sections.
- If a section's design reference is unclear — stop and ask before building. Do not assume or guess layouts.

---

## Tasks

### Pre-flight
- [ ] Confirm no token changes (or update tokens if changed)
- [ ] Fetch Figma design references for all sections

### Page Background
- [ ] Apply parchment background texture to the page (the Figma shows a warm parchment image behind all sections — this needs to be established before sections are laid out)
- [ ] Revisit `body` background — `--color-bg-default` (dark) is currently set; confirm with Figma whether the overall page bg should be the parchment image or whether sections individually control their backgrounds

### 3.1 — Hero Section
- [ ] Hero layout per Figma design reference
- [ ] Animated graphic elements scaffolded as static placeholders (Phase 4 will animate)
- [ ] CMS-controlled: subheadline text, logo image, hero image
- [ ] Responsive from 320px to 1440px+

### 3.2 — About Section
- [ ] Two-column layout per Figma (left: heading + stats list with diamond bullets; right: lead paragraph + body paragraph)
- [ ] Diamond bullet list items for stats (using `--color-icon-default`)
- [ ] CMS-controlled: heading1, stats, heading2, paragraph
- [ ] Responsive: stacks to single column on mobile

### 3.3 — Overview Section
- [ ] Layout per Figma (dark card with seal image + text, plus side illustration)
- [ ] Wire the existing "Read more" button to open the modal
- [ ] CMS-controlled: heading1
- [ ] Responsive

### 3.4 — Image Gallery
- [ ] Responsive grid layout
- [ ] Lightbox: clicking an image opens the existing full-screen modal with the image displayed
- [ ] Images sourced from `/public/images/` (placeholder images for now)
- [ ] Lazy loading via `loading="lazy"` on all `<img>` tags
- [ ] CMS-controlled: heading1

### 3.5 — Prologue Section
- [ ] Layout per Figma design reference
- [ ] CMS-controlled: heading1, paragraph
- [ ] Modal link integration (a link or button that opens the modal)
- [ ] Responsive

### 3.6 — Retail Section
- [ ] Grid or list of store links per Figma
- [ ] Each entry: store name + CTA link (opens in new tab, `rel="noopener noreferrer"`)
- [ ] CMS-controlled: heading1, links list (name + url), paragraph
- [ ] Clear visual treatment marking these as outbound links
- [ ] Responsive

### 3.7 — Easter Egg Section
- [ ] The section is already in the DOM, 2000px below the footer — discovered purely by scrolling
- [ ] Style and flesh out the section content per creative direction decided in this session
- [ ] No code trigger required

---

## Files in Scope

- `index.html` — expand each section with real markup
- `src/style.css` — section-specific layout and component styles
- `public/content/sections.json` — update placeholder content with real copy from Figma
- `public/admin/config.yml` — adjust field definitions if content structure changes
- `public/images/` — add placeholder images for gallery (can be simple solid-colour PNGs)
- `EASTER-EGG.md` — new: document easter egg content/concept decided in session

## Out of Scope

- No animations (Phase 4)
- No Lighthouse or accessibility audit (Phase 5)
- No final copy editing — placeholder text from Figma is acceptable
- No new CMS field types beyond what is already in `config.yml` unless a clear need arises

---

## Design Reference

- **Figma file:** `https://www.figma.com/design/XsjKeeMALXqJLBywDkyqJL/FOHA-club-website`
- Fetch section node IDs at session start — do not hardcode layouts without a Figma reference
- All colours, spacing, radius, shadows from `tokens.css` only — no hardcoded values

---

## Definition of Done

- [ ] All six sections visible and correctly laid out in the browser at 375px and 1440px
- [ ] Page background matches the Figma parchment design
- [ ] `load-content.js` injects CMS content into all sections without console errors
- [ ] Gallery lightbox opens and closes using the existing modal component
- [ ] Retail links open in a new tab
- [ ] Easter Egg section is styled and its concept is documented in `EASTER-EGG.md`
- [ ] All styles use design system tokens — no hardcoded values
- [ ] No new console errors introduced
- [ ] All Phase 3 tasks checked off in `ROADMAP.md`

---

## Closing Steps

- **Log file:** `sessions/004-log.md`
- **Next session stub:** `sessions/005-session-prompt.md` — based on Phase 4 (Animations & Interactivity)
- Commit all changed files on `dev` and push to `origin/dev`.
- Follow the close gate in the base prompt.
