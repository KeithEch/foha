# 005. Responsive Breakpoints & Scroll-Lock Setup

This session advances Phase 4 of the revised roadmap: document responsive design patterns, prepare the scroll-lock mechanism, confirm `prefers-reduced-motion` handling, and set up `IntersectionObserver` boilerplate for Phase 14 animations.

**Roadmap reference:** Phase 4 — Responsive Breakpoints & Scroll-Lock Setup

---

## Goal

By the end of this session: all six breakpoints are documented and tested against the Phase 3 section builds, the scroll-lock helper is implemented and verified, `prefers-reduced-motion` fallbacks are confirmed across the project, and an `IntersectionObserver` skeleton is in place (deactivated, ready for Phase 14).

---

## Before Writing Any Code

### Step 1 — Review Phase 3 state
Read `sessions/004-log.md` and the current `index.html` / `src/style.css` to understand what was built. Note any carry-forwards from session 004 that may affect responsive behaviour.

### Step 2 — Discrepancy check
Before testing breakpoints, confirm:

| Check | Source | Action if unclear |
|-------|--------|-------------------|
| Breakpoint values | `tokens.css` (`--bp-mobile: 390px` through `--bp-wide: 1440px`) | Stop and ask — do not assume |
| Section layouts at each bp | Phase 3 CSS media queries | List any sections with no mobile rule |
| `prefers-reduced-motion` coverage | `src/style.css` | Flag any animated property with no fallback |

**If any section has a layout gap at a breakpoint, stop and ask before writing a fix.**

---

## Tasks

### 4.1 — Responsive documentation

- [ ] For each of the six breakpoints (320px, 390px, 768px, 1024px, 1280px, 1440px), open the dev server and note the layout state of every section
- [ ] Write a `RESPONSIVE.md` in the project root documenting: which breakpoints trigger layout changes per section, any known issues found during testing
- [ ] Fix any critical layout breaks found (overflow, clipping, illegible text) — cosmetic polish is out of scope

### 4.2 — Scroll-lock helper

Implement the scroll-lock mechanism documented in `EASTER-EGG.md`. The footer already has `data-scroll-lock="true"`.

**Implementation target:** `src/js/scroll-lock.js`

```javascript
// When user scrolls to footer, lock scroll for 1.5s then release
// Respects prefers-reduced-motion: skip lock entirely when reduced motion is active
// One-shot: lock fires once per page load, not on every visit to the footer
```

- [ ] Create `src/js/scroll-lock.js` with the above behaviour
- [ ] Add `<script type="module" src="/src/js/scroll-lock.js"></script>` to `index.html`
- [ ] Test: scroll to footer on desktop — scroll pauses ~1.5s, then continues to easter egg
- [ ] Test: with `prefers-reduced-motion: reduce` active — scroll lock does not fire
- [ ] Test: lock fires only once per page load (not every time user passes the footer)

### 4.3 — `prefers-reduced-motion` audit

- [ ] Search `src/style.css` for all `transition` and `animation` properties
- [ ] Confirm each has a corresponding `@media (prefers-reduced-motion: reduce)` override or is already zero-duration
- [ ] Add missing overrides where needed

### 4.4 — `IntersectionObserver` boilerplate

- [ ] Create `src/js/observer.js` — a skeleton that does nothing yet but establishes the pattern Phase 14 will populate
- [ ] Add `<script type="module" src="/src/js/observer.js"></script>` to `index.html`
- [ ] The skeleton should select `[data-animate]` elements and add an `is-visible` class on intersection — classes have no styles yet in Phase 4

---

## Files in Scope

- `src/js/scroll-lock.js` — new
- `src/js/observer.js` — new
- `src/style.css` — `prefers-reduced-motion` additions only
- `index.html` — add two new script tags
- `RESPONSIVE.md` — new documentation file

## Out of Scope

- No visual design changes to any section
- No animation implementation (Phase 14)
- No CMS changes
- No Figma fetches required

---

## Definition of Done

- [ ] `RESPONSIVE.md` documents layout state at all six breakpoints
- [ ] No critical layout breaks at 320px or 390px
- [ ] Scroll-lock fires once on footer scroll, pauses ~1.5s, then releases
- [ ] Scroll-lock is disabled when `prefers-reduced-motion: reduce` is active
- [ ] All `transition` properties in `style.css` have a `prefers-reduced-motion` fallback
- [ ] `observer.js` exists and is loaded (no visible effect yet)
- [ ] No new console errors introduced

---

## Closing Steps

- **Log file:** `sessions/005-log.md`
- **Next session stub:** `sessions/006-session-prompt.md` — based on Phase 5 (Hero Section & Nav Bar Revisions)
- Commit all changed files on `dev` and push to `origin/dev`.
- Follow the close gate in the base prompt.
