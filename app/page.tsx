import ContactMe from "@/components/contact-me";
import { ArrowUpRight } from "@/components/icons";
import { experience, profile, projects, stack } from "@/constants/data";

export default function Home() {
  return (
    <>
      <section className="section section--intro" aria-labelledby="intro-name">
        <div className="section__body">
          <h1 className="intro__name" id="intro-name">
            {profile.name}
          </h1>
          <p className="intro__role">{profile.role}</p>

          <p className="intro__lead">
            {profile.intro.before}
            <a
              className="link"
              href={profile.intro.link.href}
              target="_blank"
              rel="noreferrer"
            >
              {profile.intro.link.label}
            </a>
            {profile.intro.after}
          </p>

          <p className="intro__meta">
            {profile.location} · {profile.availability} ·{" "}
            <a
              className="link"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              Résumé
              <ArrowUpRight />
            </a>
          </p>
        </div>
      </section>

      <section className="section" id="work" aria-labelledby="work-label">
        <h2 className="section__label" id="work-label">
          Work
        </h2>

        <div className="section__body">
          <ul className="list">
            {projects.map((project) => (
              <li className="list__item" key={project.id}>
                <div className="row__head">
                  <h3 className="row__title">{project.title}</h3>
                  <div className="row__meta">
                    <a
                      className="link-quiet"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Live site — ${project.title}`}
                    >
                      Live
                      <ArrowUpRight />
                    </a>
                    {project.github ? (
                      <a
                        className="link-quiet"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Source code — ${project.title}`}
                      >
                        Source
                        <ArrowUpRight />
                      </a>
                    ) : null}
                  </div>
                </div>

                <p className="row__desc">{project.description}</p>

                {project.stack ? (
                  <p className="row__detail">{project.stack.join(" · ")}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="section"
        id="experience"
        aria-labelledby="experience-label"
      >
        <h2 className="section__label" id="experience-label">
          Experience
        </h2>

        <div className="section__body">
          <ol className="list">
            {experience.map((job) => (
              <li className="list__item" key={job.company}>
                <div className="row__head">
                  <h3 className="row__title">
                    {job.role}, {job.company}
                  </h3>
                  <p className="row__meta">{job.period}</p>
                </div>

                <p className="row__desc">{job.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="stack" aria-labelledby="stack-label">
        <h2 className="section__label" id="stack-label">
          Stack
        </h2>

        <div className="section__body">
          <ul className="list">
            {stack.map((group) => (
              <li className="list__item" key={group.area}>
                <div className="row__head">
                  <h3 className="row__title">{group.area}</h3>
                </div>

                <p className="row__desc">{group.tools.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="contact" aria-labelledby="contact-label">
        <h2 className="section__label" id="contact-label">
          Contact
        </h2>

        <div className="section__body">
          <p className="contact__note">{profile.contactNote}</p>

          <a
            className="contact__email link"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>

          <ContactMe />
        </div>
      </section>
    </>
  );
}
