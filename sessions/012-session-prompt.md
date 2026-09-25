# 012. Footer Section Revisions

This session advances Phase 11 of the roadmap: ask the user for any design revisions to the Footer section, then implement them.

**Roadmap reference:** Phase 11 — Footer Section Revisions

---

## Goal

By the end of this session: any user-requested revisions to the Footer section are implemented, the legal-text CMS field is verified, the footer is confirmed to display correctly at the bottom of the page (above the Easter Egg spacer), and the section is confirmed correct at all six breakpoints.

---

## Before Writing Any Code

### Step 1 — Review Phase 10 state

Read `sessions/011-log.md` to understand what was done. Key carry-forwards:
- **Session branch first:** create `session/012-footer-revisions` from `dev` before touching anything.
- **Start the dev server early** (`npm run dev`) — the user reviews changes live at `http://localhost:5173/` as they're made.
- **Real-browser verification works well:** Playwright is not a project dependency. Install it in the session scratchpad (`npm i playwright && npx playwright install chromium`) and run a script that screenshots the section at 320/390/768/1024/1280/1440 and logs bounding boxes + console errors. Don't add Playwright to the project `package.json`.
- **Line endings:** `src/style.css` and `index.html` use CRLF. Node/sed string replacements that embed `\n` newlines silently fail to match — use the Edit tool for multi-line CSS changes.
- **New tokens need three updates:** Session 011 added `--primitive-neutral-875` / `--color-bg-action-itch`. Any new token must be added to `tokens.css`, documented in `DESIGN-SYSTEM.md`, and given a swatch in `src/design-system/preview.html` — and the user must approve new values first.
- **Retail links:** the user is testing the three retail links on a real phone and may report issues — if they do, fix them first (log in `sessions/maintenance-log.md` if it's outside this session's scope).
- **Stacking-context gotcha (from 010):** a `position: relative` container with no explicit `z-index` doesn't form a stacking context; negative-`z-index` decorative children escape it. Give the container `z-index: 0` if adding a decorative layer. The footer already uses the same `::after` pattern-overlay + `z-index: 1` container structure as Retail.

### Step 2 — Review current Footer state

Before asking for revisions, read `index.html` (footer, ~line 193) and the `.footer*` rules in `src/style.css` (section 3.7). Note:
- `<footer id="footer" class="footer" data-scroll-lock="true">` — the `data-scroll-lock` attribute is required by `src/js/scroll-lock.js` (it throws if missing). Don't remove it.
- Structure: a seal block (`.footer__seal-block`, fixed 200px tall) with a semi-transparent dark bar (`.footer__bar`, `--color-bg-subtle-80` + pattern overlay) behind a centered seal image (`/images/seal.png`, 206×200, `alt="FOHA seal"`), then the legal paragraph.
- `footer.legal` is CMS-connected via `data-content="footer.legal"` (`load-content.js` ~line 81; `config.yml` has only a `legal` field under `footer`).
- The seal image is **hardcoded**, not CMS-managed. The roadmap's Phase 3.7 says "displays logo image" — it does, but ask whether it should be CMS-editable.
- Several hardcoded px values exist (`top: 43px`, `height: 113px`, `width: 206px`, `height: 200px`, `max-width: 747px`) — carried over from Figma; don't change unless revisions call for it.
- Current legal copy in `sections.json`: "Published by The Fraternal Order of high Adventure, ©2026. …" — note the lowercase **"high"**; ask the user whether it should be "High".

### Step 3 — Ask for revisions

Before touching any code, ask the user:

1. **Footer design:** Are there any design revisions to the current Footer? (Describe briefly: a centered FOHA seal over a dark translucent bar, with the legal line centered below.)
2. **Legal copy:** Should "high" in "Fraternal Order of high Adventure" be capitalized?
3. **Seal CMS:** Should the seal image be editable in the CMS, or stay hardcoded?

Wait for the answers before proceeding.

### Step 4 — Check design system

Read `DESIGN-SYSTEM.md` and `tokens.css` before making any visual changes. Do not introduce values not in the design system without asking.

---

## Tasks

### 11.1 — Footer revisions (if any)

- [ ] Implement any design changes requested by the user
- [ ] Verify Footer renders correctly at 320px, 390px, 768px, 1024px, 1280px, 1440px after changes

### 11.2 — Footer CMS verification

- [ ] Confirm `footer.legal` updates from `public/content/sections.json`
- [ ] If the user wants the seal CMS-editable, add an image field to `config.yml` and wire it in `load-content.js` (match the existing ES5 IIFE style)

### 11.3 — Placement verification

- [ ] Confirm the footer sits directly after `</main>` with no gap, and the Easter Egg section begins 2000px below it (`.easter-egg { margin-top: 2000px }`)
- [ ] Confirm scroll-lock behavior still works after any footer changes (no console errors from `scroll-lock.js`)

### 11.4 — Responsive verification

- [ ] Verify at mobile (320px, 390px)
- [ ] Verify at tablet (768px)
- [ ] Verify at desktop (1024px, 1280px, 1440px)

---

## Files in Scope

- `src/style.css` — Footer section rule updates only
- `index.html` — possible Footer markup changes
- `src/js/load-content.js` — CMS wiring for footer (read before touching)
- `public/admin/config.yml` — Footer CMS fields (if changes needed)
- `public/content/sections.json` — Footer content values

## Out of Scope

- No changes to Hero, About, Overview, Gallery, Prologue, Retail, or Easter Egg sections (except retail-link fixes reported from the user's phone test — log those in `maintenance-log.md`)
- No changes to scroll-lock logic (Phase 13)
- No animation implementation (Phase 15)
- No Figma fetches unless the user provides a URL

---

## Definition of Done

- [ ] User's Footer revision requests implemented (or "none requested" noted)
- [ ] `footer.legal` verified connected and updating from CMS content
- [ ] Footer confirmed at the bottom of the page, above the Easter Egg spacer
- [ ] Footer verified at 320px, 390px, 768px, 1024px, 1280px, 1440px
- [ ] `npm run build` succeeds
- [ ] No new console errors introduced

---

## Closing Steps

### Phase 1 — Review & Prepare Next Session

- Draft `sessions/013-session-prompt.md` based on Phase 12 (Easter Egg Section Revisions) in `ROADMAP.md`, informed by what was learned this session.
- Advise the user that the new prompt is ready for review, then **stop and wait**.

### Phase 2 — Close

Only proceed when the user explicitly says to close.

- Write a session log at `sessions/012-log.md` (use `sessions/template-session-log.md` as the format reference).
- Update the completed sessions index in `sessions/index.md` and the Phase 11 checklist in `ROADMAP.md`.
- Commit all changed files on the session branch.
- Push the session branch to origin.
- Merge the session branch into `dev`, then push `dev`.
- Only merge `dev` → `main` if the user explicitly asks for it.
- Keep the session branch — it is not deleted until after `dev` → `main`.
