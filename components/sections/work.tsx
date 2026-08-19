import { projects, siteCopy } from "@/constants/data";
import type { Project } from "@/constants/data";
import { SectionRail, SectionTitle } from "@/components/section-header";

const { work } = siteCopy;
const featured = projects.filter((project) => project.featured);
const more = projects.filter((project) => !project.featured);

function Entry({
  project,
  index,
  lead = false,
}: {
  project: Project;
  index: number;
  lead?: boolean;
}) {
  return (
    <article className={`entry${lead ? " entry--lead" : ""}`} data-reveal>
      <p className="entry__index" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </p>
      <h3 className="entry__title">{project.title}</h3>
      <p className="entry__desc">{project.description}</p>

      {project.stack ? (
        <ul className="entry__stack" aria-label={`${project.title} stack`}>
          {project.stack.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      ) : null}

      <div className="entry__links">
        <a
          className="text-link"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          Live
          <span className="glyph" aria-hidden="true">
            ↗
          </span>
        </a>
        {project.github ? (
          <a
            className="text-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            Source
            <span className="glyph" aria-hidden="true">
              ↗
            </span>
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container section__inner">
        <SectionRail index={work.index} label={work.label} />

        <div className="section__body">
          <SectionTitle title={work.title} titleId="work-title" sub={work.sub} />

          {featured[0] ? <Entry project={featured[0]} index={1} lead /> : null}

          <div className="featured__pair">
            {featured.slice(1).map((project, i) => (
              <Entry key={project.id} project={project} index={i + 2} />
            ))}
          </div>

          <div className="ledger">
            <h3 className="ledger__title">{work.moreTitle}</h3>
            <ul>
              {more.map((project) => (
                <li className="ledger__row" key={project.id}>
                  <a
                    className="ledger__main"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="ledger__name">{project.title}</span>
                    <span className="ledger__leader" aria-hidden="true" />
                    <span className="ledger__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                  <div className="ledger__foot">
                    <p className="ledger__desc">{project.description}</p>
                    {project.github ? (
                      <a
                        className="ledger__source"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} source code`}
                      >
                        Source ↗
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
