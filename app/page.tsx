import ContactMe from "@/components/contact-me";
import { projects, skills } from "@/constants/data";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Link,
} from "@nextui-org/react";
import { FaExternalLinkSquareAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main>
      {/* About me */}
      <article className="mb-16">
        <p className="mb-2">
          {/* Hi, my name is <b>Ajay</b>, I am an experienced Full-Stack Web Developer
        proficient in Next.js, React.js and Node.js. Skilled in building robust
        web applications with a focus on responsive design and seamless user
      experience using cutting-edge modern trending technologies. */}
          I&apos;m <b>Ajay</b>, a Full-Stack Web Developer passionate about
          creating exceptional user experiences. I build user-friendly
          responsive web applications using modern technologies like Next.js,
          React.js, and Node.js. 
          You can also view my{" "}
          <Link href="/ajay-gaur.pdf" target="_blank" underline="hover">
            {" "}
            resume{" "}
          </Link>
          .
        </p>
      </article>
      {/* <p className="" >
        You can connect with me on{" "}
        <Link
          href="https://linkedin.com/in/itsajaygaur"
          target="_blank"
          underline="always"
          color="foreground"
        >
          LinkedIn
        </Link>
        , follow me on{" "}
        <Link
          href="https://twitter.com/itsajaygaur"
          underline="always"
          target="_blank"
          color="foreground"
        >
          {" "}
          Twitter{" "}
        </Link>
        , check out my{" "}
        <Link
          href="https://github.com/itsajaygaur"
          color="foreground"
          underline="always"
          target="_blank"
        >
          Github
        </Link> or can <Link href="mailto:ajaypathak2527@gmail.com" target="_blank" underline="always" color="foreground" > email </Link> me directly
      </p> */}

      {/* Skills */}
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-16">
        {skills.map((skill) => (
          <Chip
            key={skill.skillName}
            startContent={<skill.skillIcon size={14} className="mr-0.5" />}
            variant="flat"
            // color="secondary"
            className="pl-3"
          >
            {skill.skillName}
          </Chip>
        ))}
      </div>

      {/* Projects */}
      <h2 className="text-xl font-semibold">Projects</h2>
      <p className="mb-4">
        Some of the projects are from work and some are on my own time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
        {projects.map((project) => (
          <Card
            key={project.id}
            shadow="sm"
            className="p-6 hover:bg-gray-200/25 dark:hover:bg-gray-500/25"
          >
            <CardHeader className="p-0 mb-2 font-semibold">
              {project.title}
            </CardHeader>
            <CardBody className="p-0 mb-6">
              <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-3">
                {project.description}
                {/* A fully featured open source ecommerce platform with admin panel built with Next.js. */}
              </p>
            </CardBody>

            <CardFooter className="p-0 overflow-visible">
              <div className="flex gap-6 items-center">
                <Link
                  showAnchorIcon
                  anchorIcon={<FaExternalLinkSquareAlt className="ml-1" />}
                  underline="hover"
                  href={project.link}
                  target="_blank"
                  color="primary"
                  className=" text-sm"
                >
                  {/* <FaExternalLinkSquareAlt className="mr-1" /> */}
                  View live
                </Link>
                {project.github && (
                  <Link
                    showAnchorIcon
                    anchorIcon={<FaGithub className="ml-1" />}
                    underline="hover"
                    href={project?.github}
                    target="_blank"
                    className="text-sm"
                  >
                    {/* <FaGithub className="mr-1" /> */}
                    View code
                  </Link>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Contact Me */}
      <h2 className="mb-4 text-xl font-semibold">Leave a message</h2>
      <ContactMe />

      <footer className="mt-12 md:mt-16 flex gap-6 ">
        <Link
          href="https://github.com/itsajaygaur"
          color="foreground"
          target="_blank"
        >
          <FaGithub size={20} />
        </Link>
        <Link
          href="https://linkedin.com/in/itsajaygaur"
          color="foreground"
          target="_blank"
        >
          <FaLinkedin size={20} />
        </Link>
        <Link
          href="https://twitter.com/itsajaygaur"
          color="foreground"
          target="_blank"
        >
          <FaXTwitter size={20} />
        </Link>
        <Link
          href="mailto:ajaypathak2527@gmail.com"
          color="foreground"
          target="_blank"
        >
          <MdEmail size={20} />
        </Link>
      </footer>
    </main>
  );
}
