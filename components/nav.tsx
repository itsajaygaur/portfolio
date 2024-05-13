import ThemeToggler from "@/components/theme-toggler";
import {
  Button, Link,
} from "@nextui-org/react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center mb-10">
        <h1 className="text-lg font-semibold"> Ajay</h1>
        <div className="space-x-1">
          <Link
            color="foreground"
            target="_blank"
            href="https://github.com/itsajaygaur"
          >
            <Button variant="light" isIconOnly>
              <FaGithub size={18} />
            </Button>
          </Link>
          <Link
            color="foreground"
            target="_blank"
            href="https://www.linkedin.com/in/itsajaygaur"
          >
            <Button variant="light" isIconOnly>
              <FaLinkedinIn size={18} />
            </Button>
          </Link>
          <ThemeToggler />
        </div>
      </nav>
    )
}