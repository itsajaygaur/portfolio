import { expertise, siteCopy } from "@/constants/data";
import { SectionRail, SectionTitle } from "@/components/section-header";

const section = siteCopy.expertise;

export default function Expertise() {
  return (
    <section className="section" id="expertise" aria-labelledby="expertise-title">
      <div className="container section__inner">
        <SectionRail index={section.index} label={section.label} />

        <div className="section__body">
          <SectionTitle title={section.title} titleId="expertise-title" />

          <div className="capabilities">
            {expertise.map((capability) => (
              <article className="capability" key={capability.number} data-reveal>
                <span className="capability__number" aria-hidden="true">
                  {capability.number}
                </span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <ul
                  className="capability__tools"
                  aria-label={`${capability.title} tools`}
                >
                  {capability.tools.split("·").map((tool) => (
                    <li key={tool}>{tool.trim()}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
