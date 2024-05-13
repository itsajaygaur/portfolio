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
import { SiPrisma } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

export const skills = [
  {
    id: 1,
    skillName: "HTML",
    skillIcon: SiHtml5,
    category: "frontend",
  },
  {
    id: 2,
    skillName: "CSS",
    skillIcon: SiCss3,
    category: "frontend",
  },
  {
    id: 3,
    skillName: "Javascript",
    skillIcon: SiJavascript,
  },
  {
    id: 4,
    skillName: "React.js",
    skillIcon: SiReact,
    category: "frontend",
  },
  {
    id: 5,
    skillName: "Next.js",
    skillIcon: SiNextdotjs,
    category: "frontend",
  },
  {
    id: 6,
    skillName: "Node.js",
    skillIcon: SiNodedotjs,
    category: "backend",
  },
  {
    id: 7,
    skillName: "Express.js",
    skillIcon: SiExpress,
    category: "backend",
  },
  {
    id: 8,
    skillName: "MonogDB",
    skillIcon: SiMongodb,
    category: "backend",
  },
  {
    id: 9,
    skillName: "Postgres",
    skillIcon: SiPostgresql,
    category: "backend",
  },
  {
    id: 10,
    skillName: "MySQL",
    skillIcon: SiMysql,
    category: "backend",
  },
  {
    id: 11,
    skillName: "Typescript",
    skillIcon: SiTypescript,
    category: "backend",
  },
  {
    id: 12,
    skillName: "Tailwind",
    skillIcon: SiTailwindcss,
    category: "frontend",
  },
  {
    id: 13,
    skillName: "Git & Github",
    skillIcon: FaGitAlt,
    category: "devops",
  },
  {
    id: 14,
    skillName: "Redis",
    skillIcon: SiRedis,
    category: "backend",
  },
  {
    id: 15,
    skillName: "Redux",
    skillIcon: SiRedux,
    category: "frontend",
  },
  {
    id: 16,
    skillName: "Prisma",
    skillIcon: SiPrisma,
    category: "backend",
  },
  {
    id: 17,
    skillName: "Linux",
    skillIcon: FaLinux,
    category: "backend",
  },
  {
    id: 18,
    skillName: "AWS",
    skillIcon: FaAws,
    category: "backend",
  },
];

export const projects = [
  {
    id: 1,
    title: "Mykart - Ecommerce store",
    description: "A fully feature ecommerce store with admin panel and payments built with Next.js",
    img: "/mykart.jpeg",
    link: "https://shop.ajaygaur.in",
    github: "https://github.com/itsajaygaur/ecommerce",
  },
  {
    id: 10,
    title: "Blog",
    description: "Blog website with authentication built with Next.js and Auth.js",
    img: "/mykart.jpeg",
    link: "https://blog.ajaygaur.in",
    github: "https://github.com/itsajaygaur/blog",
  },
  {
    id: 2,
    title: "Girl PowerX",
    description: "Built a platform using Next.js, Node.js, and Postgres DB, offering session hosting, course management, profile creation, business profiles and more.",
    img: "/girlpowerx.jpeg",
    link: "https://girlpowerx.com",
  },
  {
    id: 3,
    title: "New Orleans Athletic Club",
    description: "Developed a full website for the New Orleans Athletic Club using Next.js",
    img: "/neworleansathleticclub.jpeg",
    link: "https://neworleansathleticclub.com",
  },
  {
    id: 4,
    title: "Community Management",
    description: "Developed a web page using Next.js, integrating GSAP and Framer Motion for engaging animations and user interaction.",
    img: "/community-management.jpeg",
    link: "https://services.girlpowertalk.com/community-management",
  },
  {
    id: 5,
    title: "Staff Augmentation",
    description: "Developed a responsive web page using Next.js and Tailwind CSS to showcase expertise in staff augmentation services.",
    img: "/staff-augmentation.jpeg",
    link: "https://services.girlpowertalk.com/staff-augmentation",
  },
  {
    id: 6,
    title: "Startup Challange",
    description: "Created a startup-focused web page with a multi-step form using React Hook Form and Zod for solid data validation.",
    img: "/startup-challange.jpeg",
    link: "https://services.girlpowertalk.com/staff-augmentation",
  },
  {
    id: 7,
    title: "Website Maintenance",
    description: "Developed a Next.js-based web page for monitoring website performance using Google PageSpeed Insights API",
    img: "/website-maintenance.jpeg",
    link: "https://maintenance.blueoceanglobaltech.com",
  },
  {
    id: 8,
    title: "Tenzi",
    description: "Designed and developed a simple tenzi game built in React.js.",
    img: "/tenzi.jpeg",
    link: "https://game-tenzi.netlify.app/",
    github: "https://github.com/itsajaygaur/tenzi",
  },
  {
    id: 9,
    title: "Tic Tac Toe",
    description: "A simple Tic Tac Toe game built in HTML, CSS and Javascript",
    img: "/tictactoe.jpeg",
    link: "https://itsajaygaur.github.io/tic-tac-toe/",
    github: "https://github.com/itsajaygaur/tic-tac-toe",
  },
];
