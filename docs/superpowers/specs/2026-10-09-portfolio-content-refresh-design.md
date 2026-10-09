# Portfolio Content Refresh Design

## Goal

Refresh the existing single-page portfolio so it presents Pedro Vitor Brito as a backend-focused developer with practical experience in APIs, integrations, automation, software architecture, cloud infrastructure, and CI/CD.

The refresh must preserve the existing editorial visual identity and static React/Vite architecture while replacing outdated or unverifiable content.

## Scope

### Content

- Use the name Pedro Vitor Brito, role Backend Developer, and location Sao Jose dos Campos, Brazil.
- Replace the DevOps-in-training positioning with backend and systems-integration positioning.
- Add concise professional experience covering Sankhya ERP Java 8 modules, API and application integrations, MVP evolution, dashboards, n8n automation, GitHub Actions, CI/CD, authentication and OAuth troubleshooting, production integrations, and ADS academic background.
- Keep professional experience distinct from personal and academic projects.
- Present five selected projects:
  - MedaIO: completed Go REST API for content management.
  - EduQuest: implemented API and desktop workflows, with web work in development and mobile planned.
  - OrcaLink: functional Laravel MVP, excluding planned Stripe, email, and AWS claims.
  - Bundle Valley Co: completed desktop application with a verified v1 Windows release.
  - PWA - Construtora Mao de Obra LTDA: live responsive business landing page with repository and live-site links.
- Exclude optional Scarf and prod-auditor projects to keep the selection focused.
- Group technologies into Backend, Databases, Cloud and infrastructure, and Additional technologies.

### UI

- Keep the Fraunces, Karla, and IBM Plex Mono typography.
- Keep the light neutral background, muted burgundy accents, editorial spacing, and minimalist cards.
- Use semantic sections in this order: Hero, About, Selected Projects, Technologies, Contact.
- Improve project cards with typed data, concise descriptions, engineering details, technology tags, and visible external links.
- Preserve and refine keyboard focus styles, responsive behavior, readable line lengths, and link wrapping.
- Do not add routing, API calls, state management, UI libraries, animations beyond the existing subtle treatment, or new dependencies.

### Metadata and documentation

- Update page title, description, Open Graph metadata, Twitter metadata, and Person JSON-LD to reflect the backend-focused positioning.
- Preserve the canonical URL `https://p-v-dev.github.io/Portifolio/` and the existing `og.png` asset.
- Update `public/llms.txt` and preserve the sitemap URL unless its content needs the same metadata correction.
- Replace the stale README with portfolio purpose, technology stack, local setup, lint/build commands, and GitHub Pages deployment instructions.
- Update `AGENTS.md` only where its repository description is stale.

## Architecture

Keep the app as a static React 19 single-page application. Store project and technology content in typed constants in `src/App.tsx` unless a small local extraction clearly improves readability. Render reusable project and technology components from those constants.

Preserve `vite.config.ts`, including the `/Portifolio/` base path, React Compiler configuration, and `renderToString` prerender plugin. Generated `dist/index.html` must contain the rendered portfolio content for crawlers and link previews.

Project records will include a name, category, description, engineering details, technologies, repository URL, and optional live or release links. Optional links will only be rendered when verified from the project documentation or live site.

## Source-of-truth constraints

- Use the GitHub profile README and project READMEs as the content source.
- Do not invent employers, dates, seniority, certifications, metrics, deployments, production environments, or completed features.
- Do not describe EduQuest's web or mobile clients as complete.
- Do not describe MedaIO as automatically deployed.
- Do not describe OrcaLink planned AWS deployment, Stripe billing, or email sending as implemented.

## Verification

Run the repository's existing commands:

```text
npm ci
npm run lint
npm run build
```

After building:

- Confirm `dist/index.html` contains the five updated project names and prerendered content.
- Confirm generated references retain the `/Portifolio/` base path.
- Check project repository, PWA live, Bundle Valley release, contact, GitHub, LinkedIn, canonical, and sitemap URLs.
- Inspect the responsive page and interactions with available browser tooling.
- Review the final diff for unrelated changes.

There is no dedicated test framework in this repository; no test script or fabricated test result will be added.

## Delivery

Work on `feat/portfolio-content-refresh`, based on `main`. Commit the design specification before implementation. After implementation and verification, open a pull request titled `feat: refresh portfolio with updated projects and experience` and do not merge it or publish directly to GitHub Pages.
