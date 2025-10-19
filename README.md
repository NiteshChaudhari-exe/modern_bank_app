# Modern Bank Website

This repository contains the source code for the Modern Bank marketing website built with React and Vite.
The site is a single-page marketing application demonstrating a responsive layout, modern UI components, and tooling for development and production builds.

## Features
- Responsive design with Tailwind CSS
- Built with React + Vite for fast development and HMR
- ESLint configuration for consistent code style
- PostCSS + Autoprefixer

## Tech stack
- React
- Vite
- Tailwind CSS
- PostCSS
- ESLint

## Project structure
- `index.html` — app entry HTML
- `src/` — application source files
	- `src/main.jsx` — app bootstrap
	- `src/App.jsx` — primary React component
	- `src/index.css`, `src/App.css` — styles
	- `src/assets/` — images and static assets
- `public/` — static public files
- `package.json` — scripts and dependencies
- `vite.config.js`, `postcss.config.js`, `tailwind.config.js` — build/tooling config

## Requirements

- Node.js 16+ (recommended)
- npm (or yarn/pnpm)

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
Note: On Windows PowerShell you can join commands with `;` on one line if needed.

## Available npm scripts
- `npm run dev` - start Vite dev server with HMR
- `npm run build` - create a production build in `dist/`
- `npm run preview` - locally preview the production build
- `npm run lint` - run ESLint (if configured)

Check `package.json` for the exact script names in this repository.
## Environment & Deployment

This project is a static single-page app. You can deploy the contents of the `dist/` folder to any static hosting provider (GitHub Pages, Netlify, Vercel, Surge, S3 + CloudFront, etc.).
If you add runtime environment variables (e.g., for analytics or API endpoints), surface them in `.env` files and document them here.

## Contributing
Contributions are welcome. A suggested minimal workflow:

1. Fork or branch from `main`.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Run and verify locally: `npm install; npm run dev`.
4. Commit with a clear message and open a PR.
## License

Include your license here (e.g., MIT). If you don't have a license yet, add one to `LICENSE` in the repo.
## Contact

If you need help or want to report issues, open an issue on the repository or contact the maintainer.
---

This README was updated to describe the Modern Bank Website project and provide development instructions specific to this repo.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
