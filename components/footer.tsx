import { ArrowUp, ArrowUpRight } from "@/components/icons";
import { profile, socials } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>

      <div className="footer__links">
        {socials.map((social) => (
          <a
            className="link-quiet"
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
          >
            {social.label}
            <ArrowUpRight />
          </a>
        ))}
      </div>

      <a className="link-quiet" href="#top">
        Back to top
        <ArrowUp />
      </a>
    </footer>
  );
}
