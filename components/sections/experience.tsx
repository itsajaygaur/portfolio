import { experience, siteCopy } from "@/constants/data";
import { SectionRail, SectionTitle } from "@/components/section-header";

const section = siteCopy.experience;

export default function Experience() {
  return (
    <section
      className="section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container section__inner">
        <SectionRail index={section.index} label={section.label} />

        <div className="section__body">
          <SectionTitle title={section.title} titleId="experience-title" />

          <ol className="cv">
            {experience.map((job) => (
              <li className="cv__row" key={job.company} data-reveal>
                <p className="cv__period">{job.period}</p>
                <div>
                  <h3>
                    <span className="cv__role">{job.role}</span>
                    <span className="cv__company">{job.company}</span>
                  </h3>
                  <p className="cv__summary">{job.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
