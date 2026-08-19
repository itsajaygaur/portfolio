import { siteCopy, socials } from "@/constants/data";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__colophon">
          © {new Date().getFullYear()} Ajay Gaur
          <br />
          {siteCopy.colophon}
        </p>

        <div className="footer__links">
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
          <a className="text-link" href="#top">
            Back to top
            <span className="glyph" aria-hidden="true">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
