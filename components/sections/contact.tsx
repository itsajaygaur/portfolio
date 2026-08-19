import ContactMe from "@/components/contact-me";
import { siteCopy, socials } from "@/constants/data";
import { SectionRail, SectionTitle } from "@/components/section-header";

const section = siteCopy.contact;

export default function Contact() {
  return (
    <section
      className="section section--contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container section__inner">
        <SectionRail index={section.index} label={section.label} />

        <div className="section__body contact__body">
          <div>
            <SectionTitle title={section.title} titleId="contact-title" />
            <p className="contact__lede">{section.body}</p>
            <a className="contact__email" href={`mailto:${section.email}`}>
              {section.email}
            </a>
            <div className="contact__socials">
              {socials.map((social) => (
                <a
                  className="text-link"
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {social.label}
                  <span className="glyph" aria-hidden="true">
                    {social.href.startsWith("http") ? "↗" : "→"}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <ContactMe />
        </div>
      </div>
    </section>
  );
}
