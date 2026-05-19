# foha

Single-page website hosted on Netlify with Decap CMS.

## Stack

- **Build tool:** Vite (vanilla HTML/CSS/JS)
- **Hosting:** Netlify (auto-deploy from GitHub `main`)
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

Output goes to `/dist`. Netlify runs this build command automatically on every push to `main`.

## Deployment

This project deploys automatically via Netlify on every push to the `main` branch. No manual deploy steps are required.

### How it works

1. Work is done on the `dev` branch
2. When ready to go live, merge `dev` → `main`
3. Netlify detects the push to `main` and triggers a build (`npm run build`)
4. Netlify serves the contents of `/dist` at **https://foha.netlify.app/**
5. HTTPS is provisioned automatically by Netlify

### Netlify configuration

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Production branch | `main` |
| Site URL | https://foha.netlify.app/ |

## Branching Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production — auto-deploys to Netlify |
| `dev`  | Active development — all work happens here |

Merge `dev` → `main` to trigger a production deploy.
