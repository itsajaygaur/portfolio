import ThemeToggler from "@/components/theme-toggler";
import MobileMenu from "@/components/mobile-menu";
import Link from "next/link";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="site-header" id="top">
      <nav className="nav" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Ajay Gaur — home">
          <span>AG</span>
          <span className="brand__name">Ajay Gaur</span>
        </Link>

        <div className="nav__links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav__actions">
          <ThemeToggler />
          <a className="nav__resume" href="/ajay-gaur.pdf" target="_blank" rel="noreferrer">
            Résumé ↗
          </a>
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  );
}
