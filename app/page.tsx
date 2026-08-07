import ContactMe from "@/components/contact-me";
import { experience, expertise, projects, socials } from "@/constants/data";

const featuredProjects = projects.filter((project) => project.featured);
const moreProjects = projects.filter((project) => !project.featured);

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <p className="hero__status reveal">
          <span className="status-dot" aria-hidden="true" />
          Available for thoughtful collaborations
        </p>

        <h1 id="hero-title" className="reveal reveal--delay-1">
          I design &amp; build digital products that feel <em>simple.</em>
        </h1>

        <p className="hero__intro reveal reveal--delay-2">
          I&apos;m Ajay, a full-stack engineer turning ambitious ideas into
          clear, reliable products—from interface to infrastructure.
        </p>

        <div className="hero__actions reveal reveal--delay-2">
          <a className="button" href="#work">
            Explore my work
            <span className="glyph" aria-hidden="true">
              ↓
            </span>
          </a>
          <a
            className="text-link"
            href="/ajay-gaur.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View résumé
            <span className="glyph" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        <div className="hero__meta reveal reveal--delay-3" aria-label="Profile details">
          <div>
            <span>Experience</span>
            <strong>4 years</strong>
          </div>
          <div>
            <span>Currently</span>
            <strong>Software Engineer · Neynar</strong>
          </div>
          <div>
            <span>Based in</span>
            <strong>India · Working globally</strong>
          </div>
        </div>
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="section-heading" data-reveal>
          <p className="section-label">Selected work</p>
          <h2 id="work-title">Built to be useful.</h2>
          <p>
            A mix of product experiments, client work, and tools built to solve
            real problems.
          </p>
        </div>

        <div className="featured-list">
          {featuredProjects.map((project, index) => (
            <article className="featured" key={project.id} data-reveal>
              <span className="featured__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.stack ? (
                <p className="featured__stack" aria-label="Technologies">
                  {project.stack.join(" · ")}
                </p>
              ) : null}
              <div className="featured__links" aria-label={`${project.title} links`}>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Live
                  <span className="glyph" aria-hidden="true">
                    ↗
                  </span>
                </a>
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    Source
                    <span className="glyph" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="more-work" data-reveal>
          <h3>More projects</h3>
          <ul className="project-rows">
            {moreProjects.map((project) => (
              <li className="project-row" key={project.id}>
                <a
                  className="project-row__main"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="project-row__title">{project.title}</span>
                  <span className="project-row__desc">{project.description}</span>
                  <span className="project-row__arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
                {project.github ? (
                  <a
                    className="project-row__source"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} source code`}
                  >
                    Source
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="experience" aria-labelledby="experience-title">
        <div className="section-heading" data-reveal>
          <p className="section-label">Experience</p>
          <h2 id="experience-title">Where I&apos;ve worked.</h2>
        </div>

        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline__item" key={job.company} data-reveal>
              <span className="timeline__period">{job.period}</span>
              <div className="timeline__body">
                <h3>
                  {job.role}{" "}
                  <span className="timeline__company">· {job.company}</span>
                </h3>
                <p>{job.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" id="expertise" aria-labelledby="expertise-title">
        <div className="section-heading" data-reveal>
          <p className="section-label">How I work</p>
          <h2 id="expertise-title">Across the whole stack.</h2>
        </div>

        <div className="capability-grid">
          {expertise.map((capability) => (
            <article className="capability" key={capability.number} data-reveal>
              <span aria-hidden="true">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <small>{capability.tools}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="contact" aria-labelledby="contact-title">
        <div className="contact__intro section-heading" data-reveal>
          <p className="section-label">Let&apos;s make something good</p>
          <h2 id="contact-title">Have an idea in mind?</h2>
          <p>
            Tell me what you&apos;re working on, what&apos;s getting in the way,
            or simply say hello. I&apos;ll get back to you soon.
          </p>
          <a className="contact-email" href="mailto:ajaypathak2527@gmail.com">
            ajaypathak2527@gmail.com
          </a>
        </div>
        <ContactMe />
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Ajay Gaur</p>
        <div className="footer__links">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {social.label}
              {social.href.startsWith("http") ? (
                <span aria-hidden="true"> ↗</span>
              ) : null}
            </a>
          ))}
        </div>
        <a className="back-to-top" href="#top">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
