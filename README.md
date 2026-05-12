# foha

Single-page website hosted on DreamHost with Decap CMS.

## Stack

- **Build tool:** Vite (vanilla HTML/CSS/JS)
- **Hosting:** DreamHost (Apache)
- **CMS:** Decap CMS (git-based)

## Folder Structure

```
foha/
├── index.html          # Vite entry point
├── src/
│   ├── main.js         # JS entry
│   ├── style.css       # Global styles
│   └── design-system/ # CSS tokens and preview
├── public/
│   └── images/         # Static assets
├── cms/                # Decap CMS admin (Phase 2)
├── dist/               # Build output (gitignored)
├── ROADMAP.md
├── PROCESSRULES.md
└── DESIGN-SYSTEM.md    # Added in Phase 1
```

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `/dist`. Deploy contents of `/dist` to DreamHost.

## Deployment

_Deployment workflow to be documented after DreamHost configuration (Phase 0, Task 4)._

## Branching Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production — deploys to DreamHost |
| `dev`  | Active development — all work happens here |

Merge `dev` → `main` triggers a deploy (pipeline configured in Phase 0).
