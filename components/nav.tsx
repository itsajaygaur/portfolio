import ThemeToggler from "@/components/theme-toggler";
import {
  Button, Link as NextUiLink,
} from "@nextui-org/react";
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
        <div className="space-x-1">
          <NextUiLink
            color="foreground"
            target="_blank"
            href="https://github.com/itsajaygaur"
          >
            <Button variant="light" isIconOnly>
              <FaGithub size={18} />
            </Button>
          </NextUiLink>
          {/* <Link
            color="foreground"
            target="_blank"
            href="https://www.linkedin.com/in/itsajaygaur"
          >
            <Button variant="light" isIconOnly>
              <FaLinkedinIn size={18} />
            </Button>
          </Link> */}
          <ThemeToggler />
        </div>
      </nav>
    )
}