"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <FaMoon className="theme-toggle__moon" aria-hidden="true" />
      <FaSun className="theme-toggle__sun" aria-hidden="true" />
    </button>
  );
}
