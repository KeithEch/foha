# Template: Base Prompt

Copy this file to `sessions/NNN-base-prompt.md` at the start of each session. Replace `NNN` with the session number and update the session title.

---

We are about to begin a new session: **NNN. Session Title**.

Before doing anything else:

1. Read `ROADMAP.md` to confirm which phase and tasks this session targets.
2. Read `DESIGN-SYSTEM.md` if this session touches any visual or layout work.
3. Open `sessions/NNN-session-prompt.md` and read it carefully.
4. Note any drift between the session prompt and the actual codebase in your work log; adapt silently unless a decision is required.
5. Create the session branch before making any changes:
   - Pull the latest `dev`.
   - `git switch -c session/NNN-short-title` (branched from `dev`).
   - All work this session happens on this branch.

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
- Advise that the new prompt is ready for review, then proceed to Phase 2 — close.

### Phase 2 — Close

When you say to close:

- Write a session log at `sessions/NNN-log.md` (use `template-session-log.md` as the format reference).
- Update the completed sessions index in `sessions/index.md`.
- Commit all changed files on the session branch.
- Push the session branch to origin.
- Merge the session branch into `dev`, then push `dev`.
  (Keep the session branch for now — it is not deleted until after dev → main.)

### Phase 3 — Merge dev to main

**This happens only when I explicitly say to merge dev into main. Never do it automatically, and never suggest it.**

- Precondition: I have reviewed `dev` on my localhost and approved.
- Confirm `dev` is fully committed and pushed.
- Open a pull request from `dev` into `main` summarizing what's included, then pause. I will do the final merge (or tell you to).
- After the merge, delete any session branches that are now folded into `main`.
