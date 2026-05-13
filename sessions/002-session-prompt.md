# 002. Design System

This session builds the complete design system token foundation and visual reference for the project, advancing Phase 1 of the roadmap.

**Roadmap reference:** Phase 1 — Design System

---

## Goal

By the end of this session: `tokens.css` is complete and committed, `DESIGN-SYSTEM.md` documents every token with its intended use, and a visual token preview page renders correctly in the browser. These three artifacts become the canonical style reference for all future sessions.

---

## Tasks

- [ ] Create `/src/design-system/tokens.css` defining CSS custom properties for:
  - **Color:** Brand palette (primary, secondary, accent, neutral scales), semantic tokens (text, background, border, interactive states)
  - **Typography:** Font families, size scale (e.g., `--text-xs` through `--text-4xl`), line-height, letter-spacing, weight tokens
  - **Spacing:** A consistent scale (e.g., 4px base unit → `--space-1` through `--space-16`)
  - **Borders & Radii:** Corner radius tokens, border width tokens
  - **Shadows & Elevation:** Subtle shadow tokens for modals and cards
  - **Animation:** Duration tokens (`--duration-fast`, `--duration-base`, `--duration-slow`), easing curves
- [ ] Create `DESIGN-SYSTEM.md` documenting every token with its intended use — this is Claude Code's reference
- [ ] Build `/src/design-system/preview.html` that renders a visual swatch sheet of all tokens (for QA and iteration)
- [ ] Define responsive breakpoints (`--bp-mobile`, `--bp-tablet`, `--bp-desktop`, `--bp-wide`) and document them

---

## Files in Scope

- `src/design-system/tokens.css` — new file
- `src/design-system/preview.html` — new file
- `DESIGN-SYSTEM.md` — new file
- `src/style.css` — link to tokens (import or `@import`)
- `ROADMAP.md` — mark tasks complete as they are finished

---

## Open Questions

- **Brand colors:** What is the color palette for foha? Primary, secondary, accent? If unknown, pause and ask before writing any color tokens.
- **Typography:** Is there a specific font family (Google Font, system font stack, or custom)? If unknown, pause and ask.
- **Spacing base unit:** Roadmap suggests 4px base — confirm before writing the scale.

---

## Out of Scope

- No HTML sections or layout components (those are Phase 2 and 3)
- No CMS configuration
- No animations implemented (tokens only — animation implementation is Phase 4)
- No deployment changes

---

## Definition of Done

- [ ] `tokens.css` exists and covers all six token categories listed in the roadmap
- [ ] `DESIGN-SYSTEM.md` documents every token with a plain-language description of its intended use
- [ ] `preview.html` renders a swatch sheet and loads without errors in the browser
- [ ] Breakpoints are defined in `tokens.css` and documented in `DESIGN-SYSTEM.md`
- [ ] `src/style.css` imports `tokens.css`
- [ ] All Phase 1 tasks checked off in `ROADMAP.md`

---

## Closing Steps

- **Log file:** `sessions/002-log.md`
- **Next session stub:** `sessions/003-session-prompt.md` — based on Phase 2 (Core Structure & CMS Integration)
- Follow the close gate in the base prompt.
