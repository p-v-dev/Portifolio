# Pedro Vitor Brito Portfolio

Static portfolio for Pedro Vitor Brito, a Backend Developer focused on APIs, systems integration, automation, software architecture, and infrastructure.

## Stack

- React 19 and TypeScript
- Vite with the React Compiler
- CSS using Fraunces, Karla, and IBM Plex Mono
- Static prerendering with `renderToString` for search engines and link previews
- GitHub Pages deployment through GitHub Actions

## Local development

Requires Node.js 20 or newer.

```bash
npm ci
npm run dev
```

The development server prints the local URL in the terminal. The site is configured for the GitHub Pages base path `/Portifolio/`.

## Checks and build

```bash
npm run lint
npm run build
```

The build runs TypeScript checks, creates the Vite production bundle, and prerenders the React app into `dist/index.html`. There is no dedicated test framework in this repository.

## Deployment

The workflow at `.github/workflows/ci.yml` installs dependencies, builds the site, creates `dist/404.html` for GitHub Pages fallback behavior, and deploys the `dist` directory through GitHub Pages. It runs for pushes to `main` and uses the canonical URL:

<https://p-v-dev.github.io/Portifolio/>
