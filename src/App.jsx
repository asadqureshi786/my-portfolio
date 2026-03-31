import './App.css'

function App() {
  const projects = [
    {
      title: 'Pulse Commerce',
      description:
        'A conversion-focused storefront with dynamic product filtering, cart persistence, and Stripe checkout.',
      stack: ['React', 'TypeScript', 'Tailwind', 'Stripe'],
      link: '#',
    },
    {
      title: 'Fintrack Dashboard',
      description:
        'An analytics dashboard with real-time KPI widgets, custom chart interactions, and role-based views.',
      stack: ['Next.js', 'Chart.js', 'Supabase'],
      link: '#',
    },
    {
      title: 'Creator Hub',
      description:
        'A content platform with markdown editor, media uploads, and performance-first static rendering.',
      stack: ['React', 'Vite', 'Node.js'],
      link: '#',
    },
  ]

  const skills = [
    'HTML5',
    'CSS3 / SCSS',
    'JavaScript (ESNext)',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Framer Motion',
    'Git & GitHub',
    'Figma to Code',
    'REST / GraphQL',
    'Performance Optimization',
  ]

  return (
    <div className="portfolio">
      <header className="hero section">
        <p className="eyebrow">Frontend Developer</p>
        <h1>
          I craft sleek, fast, and accessible web experiences.
        </h1>
        <p className="lead">
          I am a frontend developer focused on pixel-perfect interfaces, smooth
          interactions, and clean code architecture.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn-ghost" href="#contact">
            Contact Me
          </a>
        </div>
      </header>

      <section id="projects" className="section">
        <div className="section-head">
          <h2>Featured Projects</h2>
          <p>Selected work blending product thinking with polished UI craft.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="stack-list">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={project.link} className="card-link">
                View case study
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>Tech Stack</h2>
          <p className="section-copy">
            Tools and technologies I use to build scalable frontend products.
          </p>
          <ul className="skills-grid">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="experience">
          <h2>Experience Snapshot</h2>
          <p className="section-copy">
            3+ years delivering responsive websites and dashboards for startups
            and product teams.
          </p>
          <div className="timeline-item">
            <h3>Frontend Developer - PixelForge Studio</h3>
            <span>2023 - Present</span>
            <p>
              Built component libraries, reduced CLS and LCP metrics, and led UI
              modernization across key client projects.
            </p>
          </div>
          <div className="timeline-item">
            <h3>UI Engineer - Nova Interactive</h3>
            <span>2021 - 2023</span>
            <p>
              Translated complex Figma designs into production-ready React apps
              with accessibility-first implementation.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Let us build something great.</h2>
        <p>
          Available for freelance projects, product collaborations, and remote
          frontend roles.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="mailto:yourname@email.com">
            yourname@email.com
          </a>
          <a className="btn btn-ghost" href="#">
            Download Resume
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
