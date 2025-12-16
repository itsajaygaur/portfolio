import ContactMe from "@/components/contact-me";
import { projects, skills } from "@/constants/data";
import { FaGithub, FaLinkedin, FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto">

      {/* ABOUT SECTION */}
      <section className="mb-16">
        <p className="text-[15px] leading-7 text-gray-700 dark:text-gray-300">
          Hi My name is <b>Ajay</b>, I&apos;m a full-stack engineer with 3+ years of experience building scalable applications using React.js, Next.js, TypeScript, Python, Node.js, Postgres, AWS and more. My work spans frontend design & architecture, backend development, database design, cloud deployments, CI/CD pipelines, and performance optimization. I&apos;m known for clean coding, quick problem-solving, and taking complete ownership of features from idea to production.

          Check my{" "}
          <a
            href="/ajay-gaur.pdf"
            target="_blank"
            className="underline text-blue-500 hover:text-blue-600"
          >
            resume
          </a>.
        </p>
      </section>

      {/* SKILLS */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div
              key={skill.skillName}
              className="px-3 py-1 bg-gray-200 dark:bg-zinc-700 rounded-full text-sm flex items-center gap-1"
            >
              <skill.skillIcon size={14} />
              {skill.skillName}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        {/* <p className="mb-4 text-gray-600 dark:text-gray-400">
          Some projects are from work, others are personal experiments.
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-semibold mb-2">{project.title}</h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                {project.description}
              </p>

              <div className="flex gap-5 text-sm">
                <a
                  href={project.link}
                  target="_blank"
                  className="flex items-center hover:text-blue-600"
                >
                  Live
                  <FaExternalLinkSquareAlt className="ml-1" />
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center hover:text-blue-600"
                  >
                    Code
                    <FaGithub className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Leave a message</h2>
        <ContactMe />
      </section>

      {/* FOOTER */}
      <footer className="mt-14 flex gap-6">
        <a href="https://github.com/itsajaygaur" target="_blank">
          <FaGithub size={22} />
        </a>

        <a href="https://linkedin.com/in/itsajaygaur" target="_blank">
          <FaLinkedin size={22} />
        </a>

        <a href="https://twitter.com/itsajaygaur" target="_blank">
          <FaXTwitter size={22} />
        </a>

        <a href="mailto:ajaypathak2527@gmail.com" target="_blank">
          <MdEmail size={22} />
        </a>
      </footer>
    </main>
  );
}
