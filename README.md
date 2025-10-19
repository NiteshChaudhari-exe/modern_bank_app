
# Modern Bank Website

Production-ready marketing website built with React, Vite and Tailwind CSS.

This repository contains the source for a modern, responsive marketing site for a fictional bank. The project includes a marketing UI (hero, features, pricing, testimonials), client-side routing, a protected Dashboard demo, Auth0 client integration, basic PWA support, CI workflows, and a sitemap generator.

## Quick overview
- Tech: React 19, Vite, Tailwind CSS, PostCSS, ESLint
- Routing: react-router-dom (lazy-loaded pages)
- Auth: Auth0 client (see `VITE_AUTH0_DOMAIN` & `VITE_AUTH0_CLIENT_ID` in `.env`)
- PWA: `public/manifest.json` + `public/sw.js` (service worker registration in `src/registerServiceWorker.js`)
- CI: GitHub Actions workflows in `.github/workflows/`

## Features
- Responsive marketing pages: Hero, Features, Pricing, Testimonials, Contact
- Client-side protected route: `/dashboard` (requires login)
- Auth0 client integration (login / logout, protected route wrapper)
- Sitemap generation after build (`scripts/generate-sitemap.js` -> `dist/sitemap.xml`)
- Basic PWA manifest and service worker registration
- ESLint flat-config and preconfigured tooling

## Project structure (important files)
- `index.html` — app entry and meta tags
- `src/main.jsx` — app bootstrap, Auth0Provider wrap, service worker registration
- `src/App.jsx` — router, navigation, main layout
- `src/index.css` — Tailwind entry + project utilities
- `src/components/` — UI building blocks (Hero, Features, Footer, AuthButton, RequireAuth)
- `src/pages/` — route pages (Signup, Pricing, Contact, Dashboard, Testimonials)
- `public/` — static assets, icons, PWA manifest, and service worker
- `scripts/generate-sitemap.js` — postbuild sitemap generator
- `netlify/functions/contact.js` — mock serverless contact handler (example)
- `eslint.config.js` — project ESLint flat-config
- `.github/workflows/` — CI and deploy workflows

## Requirements
- Node.js 18+ (recommended)
- npm (or yarn/pnpm)

## Environment variables
Create a `.env` file in the project root (not committed) or use environment variables in your deployment platform. See `.env.example` for keys.

- VITE_AUTH0_DOMAIN — your Auth0 tenant domain (e.g. `dev-abc123.us.auth0.com`)
- VITE_AUTH0_CLIENT_ID — Auth0 Single Page App client ID
- SITE_URL — (optional) full URL used by the sitemap generator and Open Graph metadata (e.g. `https://yourdomain.com`)

Important: Vite prefixes exposed env vars with `VITE_`. Do NOT commit secrets to the repository.

## Quick start (PowerShell)
Open PowerShell in the project root (`N:\Download\PROGRAM\Modern Bank Website\Bank Website`) and run:

```powershell
# install dependencies
npm install

# start dev server (Vite)
npm run dev

# build for production
npm run build

# preview production build locally
npm run preview
```

If you need to run commands in one line in PowerShell, separate them with `;`.

## npm scripts (common)
Most scripts are available in `package.json`. Common ones:

- `dev` — start the Vite dev server
- `build` — build for production (also runs the postbuild sitemap generator)
- `preview` — preview the production build locally
- `lint` — run ESLint across the source

Check `package.json` for the complete list and any platform-specific scripts.

## Auth0 setup (local development)
1. Create an Auth0 application (type: Single Page Application).
2. Add the following Allowed Callback URLs and Allowed Logout URLs in the Auth0 app settings during development:
   - `http://localhost:5173` (adjust host/port to match `npm run dev` output)
3. Set the `VITE_AUTH0_DOMAIN` and `VITE_AUTH0_CLIENT_ID` values in your local `.env` file.
4. Restart the dev server if it was already running.

The app wraps the React tree with `Auth0Provider` in `src/main.jsx`. Use the provided `AuthButton` component to login/logout and the `RequireAuth` wrapper to protect routes like `/dashboard`.

## Deployment
This project produces static assets in `dist/` that you can host on any static hosting provider. The repository includes a GitHub Actions deploy workflow for GitHub Pages (`.github/workflows/deploy.yml`). You can adapt or replace it with Netlify/Vercel configuration.

Suggested deployment steps (GitHub Pages):

1. Ensure `homepage` or `SITE_URL` is set correctly for SEO and sitemap generation.
2. Build the project:

```powershell
npm run build
```

3. The `dist/` folder will contain the site. The CI workflow in `.github/workflows/` can deploy it automatically when configured.

For Netlify/Vercel: point your deployment to run `npm ci` and `npm run build` and serve the `dist/` directory. Configure environment variables (`VITE_AUTH0_DOMAIN`, `VITE_AUTH0_CLIENT_ID`, `SITE_URL`) in the provider UI.

## Scripts & automation
- `scripts/generate-sitemap.js` runs after a successful build (configured in `package.json` `postbuild`) and writes `dist/sitemap.xml` using `SITE_URL`.

## CI & quality
- ESLint is configured via `eslint.config.js` (flat config). The GitHub Actions CI (`.github/workflows/ci.yml`) runs linting and builds on PRs and pushes.

## Production considerations / next steps
- Replace the mock serverless endpoint (`netlify/functions/contact.js`) with a real backend that validates requests and sends emails or stores leads.
- Harden authentication: validate ID tokens server-side for any protected API endpoints.
- Add automated tests (unit + E2E) and accessibility checks (axe). 
- Improve PWA offline caching (Workbox) if you need offline support.

## Contributing
Please use branches and PRs. Example flow:

```powershell
git checkout -b feat/your-feature
npm install
npm run dev
# work, commit, push, open PR
```

If you're submitting a PR that changes functionality, include a short description and any manual testing steps.

## License
This repository includes a `LICENSE` file. If you need a different license, replace it with your preferred one.

## Where to look next
- `src/App.jsx` — app routes and header
- `src/main.jsx` — auth provider & service worker registration
- `src/components/RequireAuth.jsx` — protected route wrapper
- `scripts/generate-sitemap.js` — sitemap generator (postbuild)

---

If you'd like I can also:
- add a short `DEPLOY.md` with provider-specific steps (Netlify / Vercel / GitHub Pages)
- add a CONTRIBUTING checklist and a minimal test harness (Vitest + Playwright)

Happy to update this README further — tell me which areas you want expanded (deploy, tests, CI secrets, or production auth server).
