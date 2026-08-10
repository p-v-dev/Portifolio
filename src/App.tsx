function App() {
  return (
    <>
      <header className="hero">
        <span className="tag">Brazilian dev · DevOps in the making</span>
        <h1>
          I'm doing DevOps for <span className="em">the love of the game</span>.
        </h1>
        <p className="sub">
          I'm a Brazilian developer in my last semester of ADS. I study, I
          intern, and in the hours between I build things — services,
          pipelines, deployments — because making software with my own hands is
          what I actually enjoy. Not just the writing of code: the shipping,
          the running, the keeping it alive.
        </p>
      </header>

      <section className="about">
        <p className="section-label">About</p>
        <h2>The person behind the window</h2>
        <p>
          I've been into technology since I was a kid. That is not a career
          move — it is who I am. This is not the "I just want to make money
          with tech" kind of story. For me building software is craftsmanship,
          the same way iron smithing or pottery is: you start with raw material
          and you shape it with care until it is good.
        </p>
        <p>
          Right now I am an intern, finishing Análise e Desenvolvimento de
          Sistemas, and building my own projects to go further than the
          internship allows. I am learning DevOps because it is where software
          becomes something that lives — infrastructure you can count on, so
          the product can actually breathe.
        </p>
      </section>

      <section className="projects">
        <p className="section-label">Selected work</p>
        <h2>What I build by hand</h2>

        <article className="project">
          <div className="head">
            <h3>Blog API</h3>
            <span className="lang">Go</span>
          </div>
          <p>
            A REST API for a blog, deployed on a PaaS using Docker, shipped
            through a CI pipeline on GitHub Actions. This is the project where
            I close the full loop: code, test, build, deploy — all automated.
            I write down what I learn as I go, because deploying is where the
            real lessons are.
          </p>
          <div className="tags">
            <span>Go</span>
            <span>Docker</span>
            <span>GitHub Actions</span>
            <span>REST API</span>
          </div>
          <div className="links">
            <a href="https://github.com/p-v-dev/Gblog" target="_blank" rel="noreferrer">repo ↗</a>
          </div>
        </article>

        <article className="project">
          <div className="head">
            <h3>Identity microservice</h3>
            <span className="lang">Go</span>
          </div>
          <p>
            A standalone authentication service in Go, using Postgres for data
            and Redis for sessions. Built outside work so I could show it —
            my own take on a service that other applications can trust and
            plug into. It is how I practice microservice thinking: one job,
            done well.
          </p>
          <div className="tags">
            <span>Go</span>
            <span>Docker</span>
            <span>Postgres</span>
            <span>Redis</span>
          </div>
          <div className="links">
            <a href="https://github.com/p-v-dev/indetity-service" target="_blank" rel="noreferrer">repo ↗</a>
          </div>
        </article>

        <article className="project">
          <div className="head">
            <h3>SaaS in PHP</h3>
            <span className="lang">PHP · Laravel</span>
          </div>
          <p>
            A SaaS I am building with Laravel, not shipped yet. I keep it here
            honestly as a work in progress. The plan: deploy it on AWS, start
            small with a single EC2 instance defined with IaC, and grow the
            infrastructure when the need appears. This is where I am learning
            the cloud for real.
          </p>
          <div className="tags">
            <span>PHP</span>
            <span>Laravel</span>
            <span>Docker</span>
            <span>Coming: AWS · IaC</span>
          </div>
        </article>
      </section>

      <section className="stack">
        <p className="section-label">Stack</p>
        <h2>What I ship today, what I'm learning</h2>
        <div className="stack-grid">
          <div className="stack-col">
            <h3>Working with</h3>
            <ul>
              <li>Go</li>
              <li>Docker</li>
              <li>Postgres</li>
              <li>Redis</li>
              <li>GitHub Actions</li>
              <li>NestJS</li>
              <li>Laravel</li>
              <li>React</li>
            </ul>
          </div>
          <div className="stack-col">
            <h3>Learning now</h3>
            <ul>
              <li>Cloud (AWS)</li>
              <li>Infrastructure as Code</li>
              <li>Linux</li>
              <li>CI/CD deeper</li>
            </ul>
            <p className="badge">
              Microsoft · Introduction to DevOps —{' '}
              <a href="https://learn.microsoft.com/en-us/training/" target="_blank" rel="noreferrer">
                badge ↗
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="contact">
        <p className="section-label">Contact</p>
        <h2>Let's talk about building</h2>
        <p>
          If you want to talk about DevOps, infrastructure, or just making
          software that lasts — my inbox is open. I answer fast.
        </p>
        <div className="links">
          <a href="mailto:pedro.v.r.brito@gmail.com">email ↗</a>
          <a href="https://github.com/p-v-dev" target="_blank" rel="noreferrer">github ↗</a>
          <a href="https://www.linkedin.com/in/pedro-brito-4a51b9376" target="_blank" rel="noreferrer">linkedin ↗</a>
        </div>
      </section>

      <footer>Made by hand, with the game in mind.</footer>
    </>
  )
}

export default App
