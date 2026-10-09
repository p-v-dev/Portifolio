# Portfolio Content Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the static portfolio so it accurately presents Pedro Vitor Brito as a backend-focused developer and showcases five verified projects without changing the existing architecture or visual identity.

**Architecture:** Keep the single-page React 19 app and prerendering plugin. Replace hard-coded repeated markup with typed project and technology data rendered by small local components in `src/App.tsx`, then refine the existing CSS in `src/index.css`. Update metadata and repository documentation separately.

**Tech Stack:** React 19, TypeScript, Vite, React Compiler, CSS, `renderToString`, GitHub Pages.

## Global Constraints

- Preserve the canonical URL `https://p-v-dev.github.io/Portifolio/` and Vite base path `/Portifolio/`.
- Preserve `vite.config.ts`, including React Compiler configuration and `renderToString` prerendering.
- Do not add routing, API calls, state management, UI libraries, or dependencies.
- Use the GitHub profile README and project READMEs as the content source.
- Do not invent employers, dates, seniority, certifications, metrics, deployments, production environments, or completed features.
- Do not describe EduQuest web or mobile clients as complete.
- Do not describe MedaIO as automatically deployed.
- Do not describe OrçaLink planned AWS deployment, Stripe billing, or email sending as implemented.
- Keep Fraunces, Karla, IBM Plex Mono, the neutral palette, burgundy accents, and editorial card style.
- There is no dedicated test framework; do not add test scripts or claim application tests were run.

---

### Task 1: Add typed portfolio content and reusable rendering

**Files:**
- Modify: `src/App.tsx`

**Interfaces:**
- `Project` contains `name`, `category`, `description`, `details`, `technologies`, `repository`, and optional `links`.
- `TechnologyGroup` contains `name` and `items`.
- `ProjectCard` consumes one `Project` and its ordinal index.
- `TechnologyGroupView` consumes one `TechnologyGroup`.

- [ ] **Step 1: Replace placeholder project and stack data**

Create typed constants using the verified content below. Keep the URLs exact.

```tsx
interface ProjectLink {
  label: string
  href: string
}

interface Project {
  name: string
  category: string
  description: string
  details: string[]
  technologies: string[]
  repository: string
  links?: ProjectLink[]
}

interface TechnologyGroup {
  name: string
  items: string[]
}

const projects: Project[] = [
  {
    name: 'MedaIO',
    category: 'Go REST API',
    description: 'Content management API for users, posts, tags, and comments.',
    details: ['JWT authentication', 'Layered backend architecture', 'Swagger/OpenAPI documentation', 'PostgreSQL persistence'],
    technologies: ['Go', 'Gin', 'GORM', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    repository: 'https://github.com/p-v-dev/MedaIO',
  },
  {
    name: 'EduQuest',
    category: 'Academic evaluation platform',
    description: 'Central API for managing users, questions, exams, attempts, scoring, and rankings.',
    details: ['JWT and role-based authorization', 'Administrative desktop client implemented', 'Web interface in development', 'Mobile application planned, not implemented'],
    technologies: ['NestJS', 'TypeScript', 'TypeORM', 'SQL Server', 'C# / .NET', 'Swagger'],
    repository: 'https://github.com/p-v-dev/PIM-IV',
  },
  {
    name: 'OrçaLink',
    category: 'Functional Laravel MVP',
    description: 'Quote management SaaS for freelancers to create, share, and track proposals.',
    details: ['Public shareable quote links', 'Approval, rejection, and expiration rules', 'Plan-based quote limits', 'Automated test suite'],
    technologies: ['PHP', 'Laravel', 'Blade', 'Alpine.js', 'SQLite', 'Pest', 'Docker'],
    repository: 'https://github.com/p-v-dev/OrcaSim',
  },
  {
    name: 'Bundle Valley Co',
    category: 'Desktop application',
    description: 'Local companion for tracking Stardew Valley Community Center bundle progress.',
    details: ['Bundle and item status tracking', 'Room filtering and progress statistics', 'React interface with Tauri shell', 'Rust backend with SQLite persistence'],
    technologies: ['Tauri', 'Rust', 'React', 'TypeScript', 'SQLite'],
    repository: 'https://github.com/p-v-dev/BundleValleyCo',
    links: [{ label: 'Windows release', href: 'https://github.com/p-v-dev/BundleValleyCo/releases/tag/v1' }],
  },
  {
    name: 'PWA - Construtora Mão de Obra LTDA',
    category: 'Business landing page',
    description: 'Responsive landing page created for a real-world construction business use case.',
    details: ['Configurable contact information', 'GitHub Pages deployment', 'GitHub Actions automation', 'Automated checks'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages', 'GitHub Actions'],
    repository: 'https://github.com/p-v-dev/PWA',
    links: [{ label: 'Live website', href: 'https://p-v-dev.github.io/PWA/' }],
  },
]

const technologyGroups: TechnologyGroup[] = [
  { name: 'Backend', items: ['Go', 'TypeScript', 'Node.js', 'NestJS', 'Java'] },
  { name: 'Databases', items: ['PostgreSQL', 'SQL Server', 'SQLite'] },
  { name: 'Cloud and infrastructure', items: ['Docker', 'GitHub Actions', 'AWS', 'Terraform', 'Linux'] },
  { name: 'Additional technologies', items: ['Python', 'PHP / Laravel', 'Rust', 'React', 'n8n'] },
]
```

- [ ] **Step 2: Render project data with explicit links**

Replace duplicated project articles with `projects.map`. Each card must render the project name, category, description, each engineering detail as a list item, technologies as tags, a `Repository` link, and optional links. Use `target="_blank"` and `rel="noreferrer"` for external links.

The link area must use descriptive text rather than bare URLs:

```tsx
<div className="links">
  <a href={project.repository} target="_blank" rel="noreferrer">repository ↗</a>
  {project.links?.map(link => (
    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>
  ))}
</div>
```

- [ ] **Step 3: Replace the old stack and DevOps-learning content**

Render `technologyGroups` with a reusable `TechnologyGroupView`. Remove the outdated Microsoft learning badge and all language identifying Pedro primarily as DevOps in training.

- [ ] **Step 4: Run the TypeScript build check**

Run: `npm run build`

Expected: the TypeScript and Vite build complete successfully. Do not inspect only the browser output; this step must also prove the prerender plugin still executes.

- [ ] **Step 5: Commit the content model**

```bash
git add src/App.tsx
git commit -m "feat: refresh portfolio content and projects"
```

### Task 2: Update page structure, copy, and responsive styling

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/index.css`

**Interfaces:**
- `App` renders `Hero`, `About`, `Projects`, `Technologies`, and `Contact` in that order.
- Existing CSS variables and font families remain the styling foundation.

- [ ] **Step 1: Replace the hero copy**

Use a first viewport that states:

```tsx
<header className="hero">
  <span className="tag"><span className="em">Pedro Vitor Brito</span> · Backend Developer · São José dos Campos, Brazil</span>
  <h1>I build <span className="em">backend systems</span> that connect the pieces.</h1>
  <p className="sub">Backend developer working with REST APIs, system and ERP integrations, automation, software architecture, and the infrastructure that helps applications run reliably.</p>
</header>
```

- [ ] **Step 2: Replace About copy with concise professional experience**

Keep the craftsmanship tone, but make professional experience explicit. Include Sankhya ERP custom modules and extensions in Java 8, application/API/ERP integrations, MVP evolution, dashboards, n8n automation, GitHub Actions and CI/CD, authentication/OAuth/external API troubleshooting, and ADS academic background. Do not add employers, dates, or metrics.

- [ ] **Step 3: Replace section labels and navigation semantics**

Use English labels matching the requested page structure: `About`, `Selected projects`, `Technologies`, and `Contact`. Keep the existing editorial section-label treatment and add a simple same-page navigation only if it improves discoverability without adding a new navigation system.

- [ ] **Step 4: Add semantic engineering-detail lists to cards**

Use `<ul>` and `<li>` for each `details` array rather than encoding engineering characteristics in a paragraph. Keep descriptions to one or two sentences so cards remain scannable.

- [ ] **Step 5: Refine CSS without replacing the design system**

Add only the selectors needed for detail lists, clearer action links, technology-group layout, and narrow screens. Preserve the existing variables, fonts, background, burgundy accent, card borders, and focus styles. Use a single-column stack below `640px`; ensure project links wrap and remain easy to tap.

Recommended additions:

```css
.project .details {
  display: grid;
  gap: 0.35rem;
  margin: 1rem 0 0;
  padding-left: 1.1rem;
  color: var(--ink-mut);
  font-size: 0.9rem;
}

.project .details li::marker {
  color: var(--brass);
}

.project .links a {
  display: inline-block;
  min-height: 2rem;
}

.stack-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 640px) {
  .stack-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 6: Run lint and build**

Run: `npm run lint` and `npm run build`

Expected: both commands pass with no ESLint or TypeScript errors, and `dist/index.html` contains the new visible copy.

- [ ] **Step 7: Commit the page refresh**

```bash
git add src/App.tsx src/index.css
git commit -m "style: refine portfolio layout and project cards"
```

### Task 3: Update SEO metadata and repository documentation

**Files:**
- Modify: `index.html`
- Modify: `public/llms.txt`
- Modify: `public/sitemap.xml` only if it contains stale non-canonical content
- Modify: `README.md`
- Modify: `AGENTS.md` only where its repository description is stale

**Interfaces:**
- `index.html` remains the Vite entry template and must keep the canonical URL and prerender root.
- `public/llms.txt` summarizes the same public identity and selected projects as the page.

- [ ] **Step 1: Update HTML metadata**

Use a backend-focused title and description, for example:

```html
<meta name="description" content="Pedro Vitor Brito — Backend Developer building APIs, integrations, automation, and infrastructure-aware applications." />
<title>Pedro Vitor Brito — Backend Developer</title>
<meta property="og:title" content="Pedro Vitor Brito — Backend Developer" />
<meta property="og:description" content="Backend development, APIs, system integrations, automation, and infrastructure." />
```

Update JSON-LD to `name: "Pedro Vitor Brito"`, `jobTitle: "Backend Developer"`, the portfolio URL, GitHub, LinkedIn, and `addressLocality: "São José dos Campos"`, `addressCountry: "BR"`. Keep `og.png` and the canonical URL unchanged.

- [ ] **Step 2: Rewrite `public/llms.txt`**

Include the backend-focused identity, location, engineering focus, four technology groups, five selected project links, the PWA live link, Bundle Valley release link, GitHub, LinkedIn, and portfolio URLs. Do not include claims excluded by the spec.

- [ ] **Step 3: Replace the README**

Document:

```text
Portfolio purpose
Tech stack: React 19, TypeScript, Vite, CSS, GitHub Pages
Local installation: npm ci, npm run dev
Checks: npm run lint, npm run build
Deployment: GitHub Actions builds the Vite site and publishes dist to GitHub Pages at /Portifolio/
```

Explain that the Vite build includes static prerendering for SEO and link previews. Do not claim tests exist.

- [ ] **Step 4: Correct only stale agent instructions**

Keep the existing command list and React Compiler/TypeScript gotchas. Remove or correct statements that call the canonical repository a non-git repository or describe the app as an untouched Vite starter.

- [ ] **Step 5: Run lint and build**

Run: `npm run lint` and `npm run build`

Expected: both pass; `dist/index.html` includes the updated title and project content.

- [ ] **Step 6: Commit metadata and documentation**

```bash
git add index.html public/llms.txt public/sitemap.xml README.md AGENTS.md
git commit -m "docs: update portfolio metadata and setup guide"
```

### Task 4: Verify generated output, URLs, accessibility, and delivery state

**Files:**
- Inspect: `dist/index.html`
- Inspect: `dist/assets/*`
- Inspect: all changed files and git diff

**Interfaces:**
- The built HTML must contain prerendered portfolio content.
- All public project and contact links must point to verified destinations.

- [ ] **Step 1: Install from the lockfile**

Run: `npm ci`

Expected: dependencies install from `package-lock.json` without modifying package manifests unexpectedly.

- [ ] **Step 2: Run the required checks**

Run: `npm run lint` and `npm run build`

Expected: both pass.

- [ ] **Step 3: Check prerendered content and base paths**

Run a text search against `dist/index.html` for these strings:

```text
Pedro Vitor Brito
Backend Developer
MedaIO
EduQuest
OrçaLink
Bundle Valley Co
PWA - Construtora Mão de Obra LTDA
/Portifolio/
```

Expected: every project name and the base path appear in generated output. Confirm the root contains the prerendered app markup rather than an empty `<div id="root"></div>`.

- [ ] **Step 4: Check public URLs**

Verify these exact URLs with an HTTP/browser check where available:

```text
https://github.com/p-v-dev/MedaIO
https://github.com/p-v-dev/PIM-IV
https://github.com/p-v-dev/OrcaSim
https://github.com/p-v-dev/BundleValleyCo
https://github.com/p-v-dev/BundleValleyCo/releases/tag/v1
https://github.com/p-v-dev/PWA
https://p-v-dev.github.io/PWA/
https://github.com/p-v-dev
https://www.linkedin.com/in/pedro-brito-4a51b9376
https://p-v-dev.github.io/Portifolio/
```

Expected: links resolve or are confirmed as valid repository/profile destinations. If browser tooling is unavailable, record that limitation instead of claiming visual verification.

- [ ] **Step 5: Inspect responsive layout and keyboard interaction**

Use available browser tooling to check desktop and narrow viewport rendering, keyboard focus visibility, card link activation, and absence of horizontal overflow. If browser tooling is unavailable, inspect CSS media rules and document the limitation.

- [ ] **Step 6: Review the final diff and status**

Run:

```bash
git diff main...HEAD --check
```

Expected: only the approved portfolio content, style, metadata, documentation, and design/plan files are changed; the branch is `feat/portfolio-content-refresh`.

- [ ] **Step 7: Push the branch and open the pull request**

Push the feature branch and create a pull request titled:

```text
feat: refresh portfolio with updated projects and experience
```

The description must include:

```text
## Summary
- Repositioned the portfolio around backend development, APIs, integrations, automation, and infrastructure.
- Replaced stale project references with five verified projects.

## Projects
- MedaIO
- EduQuest
- OrçaLink
- Bundle Valley Co
- PWA - Construtora Mão de Obra LTDA

## UI/UX
- Preserved the editorial visual language.
- Improved project cards, external-link visibility, responsive layout, and keyboard-friendly interactions.

## SEO and documentation
- Updated title, descriptions, Open Graph metadata, JSON-LD, llms.txt, README, and stale repository instructions.

## Verification
- `npm ci`
- `npm run lint`
- `npm run build`
- Prerendered project content and `/Portifolio/` base path checked.
- URL and browser checks: report actual results and any unavailable checks.

## Limitations
- No dedicated test framework exists in this repository.
- Do not claim browser/deployment verification if the tooling was unavailable.
```

Do not merge the pull request or publish directly to GitHub Pages.
