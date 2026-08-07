import ContactMe from "@/components/contact-me";
import { experience, projects } from "@/constants/data";
import {
  FaArrowDown,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const capabilities = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Polished, accessible interfaces with thoughtful motion and durable component systems.",
    tools: "React · Next.js · React Native · TypeScript · Tailwind CSS",
  },
  {
    number: "02",
    title: "Backend & AI",
    description:
      "Reliable APIs, data models, and AI-powered services designed around real product needs.",
    tools: "Node.js · Python · FastAPI · Postgres · Redis · RAG",
  },
  {
    number: "03",
    title: "Infrastructure",
    description:
      "Practical systems that move confidently from a local build to production scale.",
    tools: "AWS · Docker · Terraform · OpenTelemetry · CI/CD",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/itsajaygaur",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/itsajaygaur",
    icon: FaLinkedinIn,
  },
  {
    label: "Email",
    href: "mailto:ajaypathak2527@gmail.com",
    icon: MdEmail,
  },
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__eyebrow reveal">
          <span className="status-dot" aria-hidden="true" />
          Available for thoughtful collaborations
        </div>

        <div className="hero__grid">
          <div className="hero__main reveal reveal--delay-1">
            <h1 id="hero-title">
              I design &amp; build digital products that feel <em>simple.</em>
            </h1>
          </div>

          <div className="hero__aside reveal reveal--delay-2">
            <p>
              I&apos;m Ajay, a full-stack engineer turning ambitious ideas into
              clear, reliable products—from interface to infrastructure.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#work">
                Explore my work
                <FaArrowDown aria-hidden="true" />
              </a>
              <a
                className="text-link"
                href="/ajay-gaur.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View résumé
                <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            </div>
          </div>
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
          <div>
            <p className="kicker">Selected work</p>
            <h2 id="work-title">Built to be useful.</h2>
          </div>
          <p>
            A mix of product experiments, client work, and tools built to solve
            real problems.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project" key={project.id} data-reveal>
              <span className="project__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="project__content">
                <h3>{project.title}</h3>
                <div>
                  <p>{project.description}</p>
                  {project.stack ? (
                    <ul className="project__stack" aria-label="Technologies">
                      {project.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
              <div className="project__links" aria-label={`${project.title} links`}>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Live site
                  <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    Source
                    <FaGithub aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience" aria-labelledby="experience-title">
        <div className="section-heading section-heading--compact" data-reveal>
          <div>
            <p className="kicker">Experience</p>
            <h2 id="experience-title">Where I&apos;ve worked.</h2>
          </div>
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

      <section className="section expertise" id="expertise" aria-labelledby="expertise-title">
        <div className="section-heading section-heading--compact" data-reveal>
          <div>
            <p className="kicker">How I work</p>
            <h2 id="expertise-title">Across the whole stack.</h2>
          </div>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability" key={capability.number} data-reveal>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <small>{capability.tools}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact__intro" data-reveal>
          <p className="kicker">Let&apos;s make something good</p>
          <h2 id="contact-title">Have an idea in mind?</h2>
          <p>
            Tell me what you&apos;re working on, what&apos;s getting in the way, or
            simply say hello. I&apos;ll get back to you soon.
          </p>
          <a href="mailto:ajaypathak2527@gmail.com">
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
              aria-label={social.label}
            >
              <social.icon aria-hidden="true" />
              <span>{social.label}</span>
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
