# Maintenance Log

Ad-hoc fixes and environment notes that fall outside the numbered session sequence (`sessions/NNN-log.md`). Not tied to a roadmap phase or a `session/NNN-*` branch.

---

## 2026-08-05 — Project directory move, modal lightbox fix, observer.js build fix

**Context:** The `foha` project folder was moved to a new location on the local machine (now `c:\Users\keith\github_projects\foha`). Used this as an opportunity to verify the project still runs correctly post-move, and to fix a known defect carried forward from Session 009.

### What Was Done

1. **Verified project integrity after the directory move**
   - `npm install` — up to date, no issues (15 packages).
   - `npm run dev` — starts cleanly; `index.html` and all module scripts (`observer.js`, `modal.js`, etc.) served with 200 responses.
   - `npm run build` — initially **failed** (see item 3 below); passed after the fix.
   - Conclusion: the move itself did not break anything. `node_modules` did not need reinstalling from scratch.

2. **Fixed modal lightbox class mismatch** (defect noted in `sessions/009-log.md` and carried forward in `sessions/010-session-prompt.md`)
   - **Problem:** `src/js/modal.js` added/removed `modal__container--lightbox` on the `.modal__container` element, but the CSS rule `.modal--lightbox .modal__container` (in `src/style.css`) expects the `--lightbox` modifier on the **parent** `.modal` element. As a result, the desktop lightbox width override (`min(95vw, 1000px)`) never applied.
   - **Fix:** `openModal()`/`closeModal()` now toggle `modal--lightbox` on the `#modal` element itself instead of on the child container. Removed the now-unused `modalContainer` variable.
   - **Files:** `src/js/modal.js`

3. **Fixed production build failure in `src/js/observer.js`** (discovered while testing the move, unrelated to it)
   - **Problem:** Top-level `if (animatables.length === 0) return;` outside any function — invalid JS. Rollup rejected it during `npm run build` with `Return statement is not allowed here`. This has been present since Session 005 (commit `55ea7c4`, 2026-05-25) and went unnoticed because `main` has never been rebuilt past Phase 0 scaffolding — the bug never reached a real Netlify build.
   - **Fix:** Wrapped the `IntersectionObserver` setup in an `if (animatables.length > 0) { ... }` block instead of an early `return`. No behavior change — still a no-op when there are no `[data-animate]` elements.
   - **Files:** `src/js/observer.js`

### Verification

- `npm run build` succeeds: 9 modules transformed, `dist/` output produced (`index.html`, CSS, JS bundles).
- `npm run dev` serves the site with no console/module load errors.

### Files Changed

- `src/js/modal.js` — lightbox class now toggled on `.modal` (parent) instead of `.modal__container` (child)
- `src/js/observer.js` — replaced invalid top-level `return` with a conditional block

### Carry-Forwards

- Both fixes were merged to production: branched as `fix/modal-lightbox-and-build` off `dev`, merged into `dev`, then opened as [PR #3](https://github.com/KeithEch/foha/pull/3) and merged into `main`. `dev` and `main` are now both at `69f2031` — the observer.js build blocker will not affect the next Netlify deploy.
- `fix/modal-lightbox-and-build` and the stale local-only `chore/template-git-steps` branch were deleted (local + origin) after confirming both were fully folded into `main`.
- No roadmap phase status changed; this was pure maintenance, not phase work.
- Separately, the directory move surfaced stale Claude Code global memory: sessions/memory for this project had been stored under old path-derived keys (`C:\Users\keith\.claude\projects\c--Users-keith-foha\` and `...\C--Users-keith-github_projects-foha\`) from before the move and a harness path-key format change. The memory files (session-branch workflow rule, Figma URL, Netlify URL) were copied forward into the current key's folder (`...\c--Users-keith-github-projects-foha\memory\`) so future sessions pick them up. The two old folders were left in place, not deleted.

---

## 2026-08-10 — ROADMAP.md checkbox audit against session logs

**Context:** `CLAUDE.md` calls for updating the `ROADMAP.md` status checklist after each session, but that step had been skipped repeatedly — most notably when Session 004 replaced the entire roadmap file mid-session with a new 15-phase structure and never went back to tick boxes for work already completed in that same session. As a result, Phases 3–8 read as largely incomplete despite the underlying work (verified via `sessions/001-log.md` through `010-log.md`) being done. Requested ahead of starting Session 011 (Retail Section Revisions) so the roadmap reflects actual state before more work is planned against it.

### What Was Done

Read all session logs (001–010) and cross-checked their "Outcome"/"Carry-Forwards" claims against the current code (`index.html`, `src/style.css`) where verification was feasible — confirmed `loading="lazy"` on gallery/other images, presence of `footer__seal` logo image and `footer.legal` CMS field, and that no breakpoint testing beyond 1440px exists anywhere in the project (the design system has no token past `--bp-wide: 1440px`). Updated `ROADMAP.md` checkboxes for Phases 3–8 to match confirmed status, leaving genuinely incomplete items unchecked with an inline note pointing to the source log.

### Key Findings

- **Phase 3 (Sections & Content):** all 8 sections are built and CMS-connected as claimed; checked off accordingly. Two exceptions left unchecked: hero background/foreground images are still hardcoded (only `hero.logo_image` is CMS-wired), and the "responsive 320px–2560px" line — nothing in the project has ever been tested past 1440px.
- **Phase 4 (Responsive/Scroll-Lock):** all four tasks were already marked complete in `005-log.md`'s own Outcome section; the roadmap boxes just hadn't been ticked. Checked off.
- **Phases 5–7 (Hero/Nav, About, Overview revisions):** checked off, treating the six-breakpoint standard (320/390/768/1024/1280/1440) established in `RESPONSIVE.md` as satisfying the roadmap's literal "2560px" wording, since no session — including the one already-checked box in Phase 9 — has ever tested beyond 1440px. One exception: Phase 5's "nav sticky/scroll on all breakpoints" left unchecked — `006-log.md` only confirms 768px/1024px.
- **Phase 8 (Gallery revisions):** `009-log.md` is explicit that three DoD items were *not* met — gallery images remain hardcoded in `index.html` (not CMS-managed), the section was "not formally verified at all six breakpoints," and the lightbox was "not tested by user this session." Left those three unchecked.

### Files Changed

- `ROADMAP.md` — checkbox states updated for Phases 3–8 to match session-log evidence; inline notes added on items left unchecked

### Carry-Forwards

- **"320px–2560px" wording:** appears throughout Phases 3, 5–12 but no session has ever tested past 1440px, and the design system defines no breakpoint token beyond `--bp-wide: 1440px`. Worth deciding whether to formally retire this wording in favor of the six-breakpoint standard, or to actually add 1920px/2560px QA to a future phase.
- **Gallery gaps (Phase 8):** CMS-managing gallery images, full six-breakpoint verification, and lightbox testing are all still open — none of these were in scope for Session 011 (Retail), so they should land in a future maintenance pass or a dedicated QA phase (15).
- **Hero background CMS wiring (Phase 3):** `hero_image`/`hero_bg` fields exist in `config.yml` per `006-log.md` but the `<picture>` element's `src`/`srcset` are still hardcoded. Not urgent, but flagged since it's the one remaining gap in an otherwise CMS-complete Phase 3.
- No roadmap *phase* status changed (no phase moved from incomplete to "done" or vice versa) — this was a checkbox-accuracy pass within already-attempted phases, not new phase work.

---

## 2026-08-10 — Inserted new Phase 14 (Final Section Design Revisions), renumbered Phases 14–15 → 15–16

**Context:** Requested by the user to create one last checkpoint for section-design revisions — across all breakpoints, per section — before animation work (previously Phase 14) begins. Unlike Phases 5–12, which each gave a single section its own dedicated revision phase, no phase previously covered all 8 sections together as a final pass. The new phase is inserted immediately after Phase 13 (Navigation Bar Refinements), which pushes the former Phase 14 (Section Animations) to Phase 15 and the former Phase 15 (Responsive QA, Testing & Launch) to Phase 16.

### What Was Done

1. **Added `## Phase 14 — Final Section Design Revisions` to `ROADMAP.md`**, modeled on the per-section subsection pattern from Phase 3 (3.1–3.8). Covers all 8 content sections (Hero, About, Overview, Gallery, Prologue, Retail, Footer, Easter Egg) — Nav excluded since it already has its own dedicated Phase 13. Each subsection (14.1–14.8) follows the three-step process the user specified: ask for revisions across the six standard breakpoints (320/390/768/1024/1280/1440), implement, get visual verification. Follows the same session process established in Phases 5–12.
2. **Renumbered `## Phase 14 — Section Animations` → `## Phase 15 — Section Animations`**, including subsections `14.1`–`14.5` → `15.1`–`15.5`.
3. **Renumbered `## Phase 15 — Responsive QA, Testing & Launch` → `## Phase 16 — Responsive QA, Testing & Launch`**, including subsections `15.1`–`15.6` → `16.1`–`16.6`.
4. **Fixed forward references to the old numbering** in `ROADMAP.md` (Phase 4 section, "deferred to Phase 14" / "to be populated in Phase 14" → both now say Phase 15), `RESPONSIVE.md` (`## IntersectionObserver (Phase 14 Placeholder)` → Phase 15), and `src/js/observer.js` (the top comment referencing "Phase 14 will populate animation styles" → Phase 15).

### Deliberate Non-Changes

- `sessions/00N-log.md` and `sessions/00N-session-prompt.md` files (005–011) that reference "Phase 14" (e.g. "No animation implementation (Phase 14)") were **left unchanged**. These are point-in-time records of what was true when each session ran, under the phase numbering that existed at that time — treated like commit history, not rewritten to match the current roadmap.
- `sessions/index.md` was left unchanged — it only lists completed sessions against the phase numbers that were current when each ran; nothing in it forward-references the old Phase 14/15.

### Files Changed

- `ROADMAP.md` — new Phase 14 inserted; former Phases 14–15 renumbered to 15–16 (including all subsections); two forward-reference fixes in the Phase 4 section
- `RESPONSIVE.md` — `IntersectionObserver` section heading updated to Phase 15
- `src/js/observer.js` — top comment updated to reference Phase 15

### Carry-Forwards

- None new. The "six standard breakpoints vs. 320px–2560px" wording inconsistency flagged in the previous maintenance entry (2026-08-10, checkbox audit) still applies project-wide; the new Phase 14 was written using the six-breakpoint standard to stay consistent with actual practice rather than repeat the aspirational wording.
