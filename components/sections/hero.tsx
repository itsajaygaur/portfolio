import { siteCopy } from "@/constants/data";

const { hero } = siteCopy;

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <p className="label hero__status reveal">
          <span className="status-dot" aria-hidden="true" />
          {hero.status}
        </p>

        <div className="hero__rule reveal" />

        <h1 id="hero-title" className="hero__statement reveal reveal--delay-1">
          {hero.statement.before}
          <span className="knockout">{hero.statement.accent}</span>
          {hero.statement.after}
        </h1>

        <p className="hero__intro reveal reveal--delay-2">{hero.intro}</p>

        <div className="hero__actions reveal reveal--delay-2">
          <a className="button" href="#work">
            Selected work
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
            Résumé
            <span className="glyph" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        <dl className="masthead reveal reveal--delay-3">
          {hero.masthead.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
