# Template: Base Prompt

Copy this file to `sessions/NNN-base-prompt.md` at the start of each session. Replace `NNN` with the session number and update the session title.

---

We are about to begin a new session: **NNN. Session Title**.

Before doing anything else:

1. Read `ROADMAP.md` to confirm which phase and tasks this session targets.
2. Read `DESIGN-SYSTEM.md` if this session touches any visual or layout work.
3. Open `sessions/NNN-session-prompt.md` and read it carefully.
4. Note any drift between the session prompt and the actual codebase in your work log; adapt silently unless a decision is required.

---

## Process Rules

- **Before writing any code**, read every file you intend to modify.
- **Pause and ask** when a decision point arises that isn't covered by the session prompt — especially anything that would affect the design system, site structure, CMS config, or accessibility.
- **Adapt to drift silently.** The session prompt is a snapshot. Small mismatches in file names or structure — just adapt and note it. Only flag drift when two reasonable interpretations would produce meaningfully different behavior.
- **Surface choices before going deep.** If you're deciding between two structural approaches, ask first.
- **Follow existing conventions exactly.** Do not refactor, improve, or add features beyond the session scope.

---

## Session Close

**Everything below happens only when you explicitly say to close the session.**

Do not suggest closing. Wait for your instruction.

### Phase 1 — Review & Prepare Next Session

- Draft `sessions/(NNN+1)-session-prompt.md` based on the next phase or task in `ROADMAP.md`, informed by what was learned this session.
- Stop and wait for your review before proceeding.

### Phase 2 — Close

When you say to close:

- Write a session log at `sessions/NNN-log.md` (use `template-session-log.md` as the format reference).
- Update the completed sessions index in `sessions/index.md`.
- Commit all changed files on the current branch. Do not push.
