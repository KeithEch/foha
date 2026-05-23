# 004. Sections & Content

This session builds all page sections with visual layouts from Figma, connects each to the CMS, and establishes the parchment image page background, advancing Phase 3 of the roadmap.

**Roadmap reference:** Phase 3 — Sections & Content has been updated with additions since last session. 

---

## Goal

By the end of this session: all eight sections (Hero, About, Overview, Gallery, Prologue, Retail, Footer, Easter egg) are visually implemented per Figma, responsive from 320px to 2560px, and CMS-connected via `sections.json`. The Easter Egg section has a defined and working trigger. The parchment page background is live.

---

## Before Writing Any Code

### Step 1 — Token check
Ask the user: "Have any design system tokens changed since Session 002?" 
- If **yes**: Request the updated token export. Update `tokens.css` and `DESIGN-SYSTEM.md` 
  **before proceeding with any section builds.**
- If **no** or **unclear**: Ask the user to confirm. Do not assume or guess token values.
- **Stop here** if the user cannot confirm token status — do not proceed.

### Step 2 — Figma references (BLOCKER)
Before building ANY section, fetch the Figma design for that section. Known reference nodes:

- **Overall layout (desktop/wide breakpoint):** 
  `https://www.figma.com/design/XsjKeeMALXqJLBywDkyqJL/FOHA-club-website?node-id=89-23&t=wZuGSfKkA2gd9ElQ-1`

- **Mobile layout (mobile breakpoint):** 
  `https://www.figma.com/design/XsjKeeMALXqJLBywDkyqJL/FOHA-club-website?node-id=95-115&t=wZuGSfKkA2gd9ElQ-1`

**If a section design is unclear:**
- Stop immediately
- Ask the user: "Which Figma node contains the [Section Name] design?"
- Do not assume, infer, or build without a confirmed visual reference
- Proceed only after the user provides a valid node ID or screenshot

### Step 3 — Discrepancy Check (CRITICAL)
Before building each section, verify alignment:

| Check | Source A | Source B | Action if Different |
|-------|----------|----------|---------------------|
| Section count | Roadmap (8) | Prompt Goals | Must match; stop and ask |
| Section names & order | Roadmap Phase 3 | Figma design | Must match; ask user which is current |
| Responsive breakpoints | Roadmap (320–2560px) | Figma specs | Clarify with user before building |
| CMS field names | `config.yml` | Prompt Tasks | Align before content connection |
| Background treatment | Figma (parchment) | Prompt | Must be established before sections |

**If any discrepancy is found:**
1. Quote the conflicting sources to the user
2. Ask: "Which source is authoritative for this build?"
3. Wait for clarification
4. Document the decision in the session log
5. Do not proceed until resolved

### Step 4 — Semantic HTML & Naming Convention
Before writing markup, review NAMING-CONVENTIONS.md in the project root.
This document contains:

Figma-to-Code translation table (visual names → semantic HTML)
BEM naming scoped to each section
Markup checklist (how to verify semantic correctness)
Accessibility integration (alt text, heading hierarchy, link labels)
Decision tree (what to do when a Figma component's role is ambiguous)

## Tasks

**Before building each section below, fetch its Figma node ID from the user or confirm it from the design file.** 
Do not proceed with a section without a confirmed visual reference.

### Pre-flight
- [ ] Confirm no token changes or update tokens if changed
- [ ] Fetch Figma design references for ALL sections (see Figma node IDs required below)
- [ ] Check for discrepancies between Roadmap, Prompt, and Figma (resolve before proceeding)
- [ ] Complete page background setup

### Section Builds (Figma node ID required for each)

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

### 3.7 — Footer Section

- [ ] Footer layout per Figma design reference
- [ ] CMS-controlled: legal text
- [ ] Responsive: single column on mobile, horizontal layout on desktop
- [ ] Verify that Easter Egg section appears 2000px below the footer (no overlap, no gap)

**Scroll pause feature (Phase 4):**
The footer acts as a "discovery gateway"—when the user scrolls to the footer, scrolling pauses 
for 1.5 seconds before releasing. This feature will be implemented in Phase 4 as a scroll-lock interaction.

**Note:** This section is crucial for Easter Egg trigger positioning. Confirm footer height 
and layout before finalizing Easter Egg placement.

### 3.8 — Easter Egg Section
- [ ] layout per Figma design reference
- [ ] The section is already in the DOM, 2000px below the footer — discovered purely by scrolling (no button, link, or JS trigger)
- [ ] Verify the section appears when user scrolls past the footer (manual testing)

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

- **Figma file:** `https://www.figma.com/design/XsjKeeMALXqJLBywDkyqJL/FOHA-club-website?node-id=89-23&t=wZuGSfKkA2gd9ElQ-1`
- Fetch section node IDs at session start — do not hardcode layouts without a Figma reference
- All colours, spacing, radius, shadows from `tokens.css` only — no hardcoded values

---

## Definition of Done

- [ ] All eight sections visible and correctly laid out in the browser at 390px and 1440px
- [ ] Page background matches the Figma parchment design
- [ ] `load-content.js` injects CMS content into all sections without console errors
- [ ] Gallery lightbox opens and closes using the existing modal component
- [ ] Retail links open in a new tab
- [ ] Easter Egg section is styled and its concept is documented in `EASTER-EGG.md`
- [ ] Footer has `data-scroll-lock="true"` attribute (ready for Phase 4 scroll-lock feature)
- [ ] All styles use design system tokens — no hardcoded values
- [ ] No new console errors introduced
- [ ] All Phase 3 tasks checked off in `ROADMAP.md`

---

## Closing Steps

- **Log file:** `sessions/004-log.md`
- **Next session stub:** `sessions/005-session-prompt.md` — based on Phase 4 (Animations & Interactivity)
- Commit all changed files on `dev` and push to `origin/dev`.
- Follow the close gate in the base prompt.
