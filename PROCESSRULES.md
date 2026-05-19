# Process Rules

## Process Rules

- Work one phase at a time, in order. Do not begin a phase until the previous phase's deliverables are complete.
- Before writing any code, check `DESIGN-SYSTEM.md` for the correct token to use. Never hardcode colors, font sizes, spacing, or animation durations — always reference a CSS custom property.
- After completing any task, document what was done in plain language and store in a session directory, update the status checklist in `ROADMAP.md`.

## Key Constraints

- **Hosting:** Netlify (auto-deploy from GitHub `main`). Server config goes in `netlify.toml`. Hosting solution may change — avoid host-specific dependencies where possible.
- **CMS:** Decap CMS (git-based). All editable text must be wired to a CMS field defined in `admin/config.yml`.
- Every CSS animation must have a `@media (prefers-reduced-motion: reduce)` fallback — no exceptions.
- All code must be modern, semantic, and accessible (WCAG AA minimum).

## When Starting a Session

1. Read `ROADMAP.md` and identify the current phase and next incomplete task.
2. State what you are about to do and why before writing any code.
3. Ask for clarification if a task is ambiguous before proceeding.
