import Link from "next/link";

import ThemeToggler from "@/components/theme-toggler";
import { profile } from "@/constants/data";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${profile.name} — home`}>
        {profile.name}
      </Link>

      <div className="site-header__actions">
        <nav className="site-nav" aria-label="Sections">
          {links.map((link) => (
            <a className="link-quiet" key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <ThemeToggler />
      </div>
    </header>
  );
}
