import ThemeToggler from "./ThemeToggler"
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { Button } from "@nextui-org/react";


export default function Navbar(){
    return(
        <section className='flex justify-between px-6 py-4' >
            <div className="flex items-center gap-2" >
                <Button variant="light" isIconOnly >
                    <Link target="_blank" href="https://github.com/itsajaygaur" >
                        <FaGithub size={24} />
                    </Link>
                </Button>
                <Button variant="light" isIconOnly >

                <Link target="_blank" href="https://www.linkedin.com/in/ajay-gaur-70a4951ab/" >
                    <SiLinkedin size={24} />
                </Link>
                </Button>
            </div>
            <ThemeToggler />
        </section>
    )
}