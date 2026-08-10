# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

FOHA is a single-page marketing site: vanilla HTML/CSS/JS built with Vite, hosted on Netlify (auto-deploy from `main`), content editable via Decap CMS (git-based). No framework, no TypeScript, no CSS framework.

## Commands

```bash
npm install
npm run dev       # Vite dev server
npm run build     # production build → dist/ (Netlify runs this on push to main)
npm run preview   # preview the production build
```

**There is no automated test suite, linter, or formatter configured.** Verify changes manually: run `npm run dev`, exercise the change in a browser (check the console for errors), and for anything touching layout/CSS, run `npm run build` too — Rollup's stricter parsing has caught bugs (invalid top-level JS) that the dev server didn't.

## Branching — read before touching git

- `main` — production, auto-deploys to Netlify on push. Never push here directly.
- `dev` — active development branch. All work happens here.
- `session/NNN-short-title` — one branch per session, cut from `dev`.

**The `dev → main` merge is explicitly gated on the user's instruction.** Never merge or suggest merging into `main` unless the user asks for it directly — treat every session as ending at `dev`, not beyond.

Before starting work, check `sessions/index.md` and the latest `sessions/NNN-session-prompt.md` for the current phase and task. After finishing a task, document it in a new `sessions/NNN-log.md` (templates: `sessions/template-session-prompt.md`, `sessions/template-session-log.md`) and update the status checklist in `ROADMAP.md`. Ad-hoc fixes outside the numbered session sequence go in `sessions/maintenance-log.md` instead.

## Process rules

- Work one `ROADMAP.md` phase at a time, in order — don't start a phase before the previous one's deliverables are done.
- State what you're about to do and why before writing code; ask before proceeding on anything ambiguous.
- All editable copy must be wired to a Decap CMS field (`public/admin/config.yml`), not hardcoded.
- Avoid Netlify-specific dependencies where reasonably possible — hosting may change. Netlify config lives in `netlify.toml`.

## CSS / design tokens

Full reference: [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md).

- Tokens live in `src/design-system/tokens.css`; preview them by opening `src/design-system/preview.html`.
- **Never hardcode colors, font sizes, spacing, border, radius, shadow, or duration values** — always reference a semantic `--color-*`, `--space-*`, `--font-*`, `--border-*`, `--radius-*`, `--shadow-*`, or `--duration-*` custom property.
- Use **semantic** tokens only in component CSS. Primitive tokens (`--primitive-*`) are internal building blocks — never reference them directly outside `tokens.css`.
- Breakpoints (`--bp-mobile` 390, `--bp-tablet` 768, `--bp-desktop` 1024, `--bp-large` 1280, `--bp-wide` 1440) can't be used inside `@media` conditions — hardcode the px value and comment which token it corresponds to. Mobile-first. Details and known responsive issues: [`RESPONSIVE.md`](RESPONSIVE.md).
- Every CSS animation/transition needs a `@media (prefers-reduced-motion: reduce)` fallback — no exceptions.

## HTML / naming

Full reference: [`NAMING-CONVENTIONS.md`](NAMING-CONVENTIONS.md).

- Translate Figma node labels to **semantic HTML** (`<button>`, `<a>`, `<article>`, correct heading levels) — not generic `<div>`s.
- **BEM**, scoped per section: `.hero__title`, `.about__stat-item`, etc. No generic top-level names like `.text`, `.box`, `.container`.
- Accessibility is not optional: alt text on all images (or `alt=""` + `aria-hidden="true"` if decorative), no skipped heading levels, descriptive link/button text, `<label for>` on form inputs, WCAG AA minimum. Prefer semantic HTML over ARIA; ask the user before reaching for ARIA if semantics alone can't do it.

## JS conventions

Existing files (`src/js/*.js`) use plain ES5 (`var`, IIFE wrapping, no imports/exports, string concatenation) rather than modern ES module syntax — match this style in those files unless the user asks to modernize them. `src/main.js` is the Vite entry point and is still mostly a stub.

## Key files

| Path | Purpose |
|---|---|
| `src/style.css` | global styles, imports tokens.css |
| `src/design-system/tokens.css` | design tokens (source of truth) |
| `src/js/` | modal, nav-scroll, observer, scroll-lock, load-content |
| `public/admin/config.yml` | Decap CMS field config |
| `public/content/sections.json` | CMS-managed content |
| `netlify.toml` | build command, publish dir, headers |
| `ROADMAP.md` | phased plan and status checklist |
| `sessions/` | per-session prompts and logs |
