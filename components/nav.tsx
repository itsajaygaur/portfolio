"use client"
import ThemeToggler from "@/components/theme-toggler";
// import {
//   Button, Link as NextUiLink,
// } from "@heroui/react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center mb-10">
          <Link href="/" >
            <h1 className="text-lg font-semibold"> Ajay</h1>
          </Link>
        <div className="flex items-center gap-4">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/itsajaygaur"
          >
              <FaLinkedinIn className="size-4.5" />
          </a>
          <a
            target="_blank"
            href="https://github.com/itsajaygaur"
          >
              <FaGithub className="size-4.5" />
          </a>
          <ThemeToggler />
        </div>
      </nav>
    )
}