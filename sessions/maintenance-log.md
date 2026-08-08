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
