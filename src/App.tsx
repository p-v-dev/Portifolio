import type { ReactNode } from 'react'

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

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer">{children} ↗</a>
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project">
      <div className="head">
        <h3>{project.name}</h3>
        <span className="lang">{project.category}</span>
      </div>
      <p>{project.description}</p>
      <ul className="details">
        {project.details.map(detail => <li key={detail}>{detail}</li>)}
      </ul>
      <div className="tags" aria-label={`${project.name} technologies`}>
        {project.technologies.map(technology => <span key={technology}>{technology}</span>)}
      </div>
      <div className="links">
        <ExternalLink href={project.repository}>repository</ExternalLink>
        {project.links?.map(link => <ExternalLink key={link.href} href={link.href}>{link.label}</ExternalLink>)}
      </div>
      <span className="project-number" aria-hidden>{String(index + 1).padStart(2, '0')}</span>
    </article>
  )
}

function TechnologyGroupView({ group }: { group: TechnologyGroup }) {
  return (
    <div className="stack-col">
      <h3>{group.name}</h3>
      <ul>
        {group.items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-label">{children}</p>
}

function App() {
  return (
    <>
      <header className="hero">
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#top" className="wordmark">pv.dev</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#technologies">Technologies</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <div id="top" className="hero-content">
          <span className="tag"><span className="em">Pedro Vitor Brito</span> · Backend Developer · São José dos Campos, Brazil</span>
          <h1>I build <span className="em">backend systems</span> that connect the pieces.</h1>
          <p className="sub">Backend developer working with REST APIs, system and ERP integrations, automation, software architecture, and the infrastructure that helps applications run reliably.</p>
          <div className="hero-actions">
            <a className="download-link" href="/Portifolio/pedro-vitor-brito-cv.pdf" download>download CV ↓</a>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="about">
          <SectionLabel>About</SectionLabel>
          <h2>The person behind the systems</h2>
          <p>Software is craftsmanship to me: taking a real problem, shaping the right abstractions, and leaving behind something that can be understood and maintained.</p>
          <p>My professional work includes custom modules and extensions for Sankhya ERP with Java 8, integrations between applications, APIs, and ERP systems, and the evolution of an initial MVP into a fuller ERP-integrated application. I also build dashboards from application data, automate workflows with n8n, and use GitHub Actions and CI/CD pipelines to keep delivery repeatable.</p>
          <p>I regularly troubleshoot the practical edges of integrations, including authentication, OAuth, external APIs, and production environments. I am completing an academic degree in Systems Analysis and Development (ADS), while continuing to turn personal and academic projects into working software.</p>
        </section>

        <section id="projects" className="projects">
          <SectionLabel>Selected projects</SectionLabel>
          <h2>Systems built by hand</h2>
          <div className="project-list">
            {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
          </div>
        </section>

        <section id="technologies" className="stack">
          <SectionLabel>Technologies</SectionLabel>
          <h2>The tools behind the work</h2>
          <div className="stack-grid">
            {technologyGroups.map(group => <TechnologyGroupView key={group.name} group={group} />)}
          </div>
        </section>

        <section id="contact" className="contact">
          <SectionLabel>Contact</SectionLabel>
          <h2>Let&apos;s talk about building</h2>
          <p>If you are working on an API, an integration, or a product that needs a dependable technical foundation, my inbox is open.</p>
          <div className="links">
            <a href="mailto:pedro.v.r.brito@gmail.com">email ↗</a>
            <a href="/Portifolio/pedro-vitor-brito-cv.pdf" download>download CV ↓</a>
            <ExternalLink href="https://github.com/p-v-dev">github</ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/pedro-brito-4a51b9376">linkedin</ExternalLink>
          </div>
        </section>
      </main>

      <footer>Built with care by Pedro Vitor Brito · 2026</footer>
    </>
  )
}

export default App
