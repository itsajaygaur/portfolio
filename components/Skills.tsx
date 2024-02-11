import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";

import { Button } from "@nextui-org/react";




export default function Skills(){

    const skills = [
        {
            id: 1, 
            skillName: 'HTML',
            skillIcon: SiHtml5,
            category: 'frontend'
        },
        {
            id: 2, 
            skillName: 'CSS',
            skillIcon: SiCss3,
            category: 'frontend'
        },
        {
            id: 3, 
            skillName: 'Javascript',
            skillIcon: SiJavascript
        },
        {
            id: 4, 
            skillName: 'React',
            skillIcon: SiReact,
            category: 'frontend'
        },
        {
            id: 5, 
            skillName: 'Next.js',
            skillIcon: SiNextdotjs,
            category: 'frontend'
        },
        {
            id: 6, 
            skillName: 'Node.js',
            skillIcon: SiNodedotjs,
            category: 'backend'
        },
        {
            id: 7, 
            skillName: 'Express.js',
            skillIcon: SiExpress,
            category: 'backend'
        },
        {
            id: 8, 
            skillName: 'MonogDB',
            skillIcon: SiMongodb,
            category: 'backend'
        },
        {
            id: 9, 
            skillName: 'Postgress',
            skillIcon: SiPostgresql,
            category: 'backend'
        },
        {
            id: 10, 
            skillName: 'MySQL',
            skillIcon: SiMysql,
            category: 'backend'
        },
        {
            id: 11, 
            skillName: 'Typescript',
            skillIcon: SiTypescript,
            category: 'backend'
        },
        {
            id: 12, 
            skillName: 'Tailwind',
            skillIcon: SiTailwindcss,
            category: 'frontend'
        },
        {
            id: 13, 
            skillName: 'Git & Github',
            skillIcon: FaGitAlt,
            category: 'devops'
        },
        {
            id: 14, 
            skillName: 'Redis',
            skillIcon: SiRedis,
            category: 'backend'
        },
        {
            id: 15, 
            skillName: 'Redux',
            skillIcon: SiRedux,
            category: 'frontend'
        },

    ]


    return(
        <section className="mb-20" >
            <h2 className="text-3xl mb-4 text-center" >My skills are</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4" >
            {
                skills.map(skill => (
                    <Button key={skill.id} className="dark:bg-[#181818] cursor-default px-6 py-16  rounded-lg text-center flex flex-col justify-center items-center gap-4" >
                        <skill.skillIcon className="flex-none" size="32" />
                        <p className="text-xl" >{skill.skillName}</p>
                    </Button>
                ))
            }
            </div>
        </section>
    )
}