# 002. Design System

This session builds the complete design system token foundation and visual reference for the project, advancing Phase 1 of the roadmap.

**Roadmap reference:** Phase 1 — Design System

---

## Goal

By the end of this session: `tokens.css` is complete and committed, `DESIGN-SYSTEM.md` documents every token with its intended use, and a visual token preview page renders correctly in the browser. These three artifacts become the canonical style reference for all future sessions.

---

## Tasks

- [ ] Import the foha DS variable collection from the Figma file referenced in the Design Reference section.
- [ ] Create `/src/design-system/tokens.css` defining CSS custom properties for the colors found in the design reference. Do not change the structure.
- [ ] Define CSS custom properties for the font family, font size, font line-height, and weight tokens found in the design reference.
- [ ] Define CSS custom properties for border width tokens found in the design reference under Border.
- [ ] Define CSS custom properties for corner radius tokens found in the design reference under Radius.
- [ ] Define CSS custom properties for spacing tokens found in the design reference under Spacing.
- [ ] Create empty CSS custom properties for 3 levels of Shadow tokens and ask me to define them.
- [ ] Create empty CSS custom properties for 3 levels of Duration tokens and ask me to define them.
- [ ] Define responsive breakpoints (`--bp-mobile`, `--bp-tablet`, `--bp-desktop`, `--bp-wide`) and document them.
- [ ] Create `DESIGN-SYSTEM.md` documenting every token with its intended use.
- [ ] Build `/src/design-system/preview.html` that renders a visual swatch sheet of all tokens.

---

## Files in Scope

- `src/design-system/tokens.css` — new file
- `src/design-system/preview.html` — new file
- `DESIGN-SYSTEM.md` — new file
- `src/style.css` — link to tokens (import or `@import`)
- `ROADMAP.md` — mark tasks complete as they are finished

---

## Design Reference

Some of the colors, typography, and spacing are sourced from the Figma file:

**[FOHA club website — Figma](https://www.figma.com/design/XsjKeeMALXqJLBywDkyqJL/FOHA-club-website?node-id=0-1&t=jgaHgO9LOqqJAklt-1)**

Pause and ask if any values in the Figma file are missing or ambiguous before writing those tokens.

---

## Out of Scope

- No HTML sections or layout components (those are Phase 2 and 3)
- No CMS configuration
- No animations implemented (tokens only — animation implementation is Phase 4)
- No deployment changes

---

## Definition of Done

- [ ] `tokens.css` exists and covers all token categories: color, typography, border, radius, spacing, shadow (empty), and duration (empty)
- [ ] Shadow and duration tokens have been defined with my input
- [ ] Responsive breakpoints are defined in `tokens.css`
- [ ] `DESIGN-SYSTEM.md` documents every token with a plain-language description of its intended use, including breakpoints
- [ ] `preview.html` renders a swatch sheet and loads without errors in the browser
- [ ] `src/style.css` imports `tokens.css`
- [ ] All Phase 1 tasks checked off in `ROADMAP.md`

---

## Closing Steps

- **Log file:** `sessions/002-log.md`
- **Next session stub:** `sessions/003-session-prompt.md` — based on Phase 2 (Core Structure & CMS Integration)
- Follow the close gate in the base prompt.
