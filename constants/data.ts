export const siteCopy = {
  hero: {
    masthead: [
      { label: "Role", value: "Full-stack engineer" },
      { label: "Currently", value: "Neynar" },
      { label: "Based in", value: "India · Working globally" },
      { label: "Experience", value: "4 years" },
    ],
    status: "Available for thoughtful collaborations",
    statement: {
      before: "I design & build digital products that feel ",
      accent: "simple",
      after: ".",
    },
    intro:
      "I'm Ajay, a full-stack engineer turning ambitious ideas into clear, reliable products, from interface to infrastructure.",
  },
  work: {
    index: "01",
    label: "Selected work",
    title: "Built to be useful.",
    sub: "A mix of product experiments, client work, and tools built to solve real problems.",
    moreTitle: "More projects",
  },
  experience: {
    index: "02",
    label: "Experience",
    title: "Where I've worked.",
  },
  expertise: {
    index: "03",
    label: "How I work",
    title: "Across the whole stack.",
  },
  contact: {
    index: "04",
    label: "Let's make something good",
    title: "Have an idea in mind?",
    body: "Tell me what you're working on, what's getting in the way, or simply say hello. I'll get back to you soon.",
    email: "ajaypathak2527@gmail.com",
  },
  colophon: "Set in Archivo & Space Mono · Built with Next.js",
} as const;

export type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  github?: string;
  stack?: string[];
  featured?: boolean;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

export const projects: Project[] = [
  {
    id: 10,
    title: "Draftline",
    description:
      "Publishing platform with a secure creator studio, autosave, managed media, search, SEO, and automated quality gates.",
    link: "https://blog.ajaygaur.in",
    github: "https://github.com/itsajaygaur/blog",
    stack: ["Next.js", "TypeScript", "Neon PostgreSQL", "Drizzle", "Better Auth", "Vercel Blob"],
    featured: true,
  },
  {
    id: 16,
    title: "Kivo",
    description:
      "Multi-tenant AI knowledge base with permission-aware hybrid retrieval, reranking, document ingestion, audit controls, and streamed cited answers.",
    link: "https://kivo.ajaygaur.in",
    github: "https://github.com/itsajaygaur/kivo",
    stack: ["Next.js", "Cloudflare Workers", "D1 / FTS5", "Vectorize", "Workers AI"],
    featured: true,
  },
  {
    id: 15,
    title: "TraceVista",
    description:
      "A privacy-first OpenTelemetry trace inspector that turns OTLP exports into interactive waterfalls, service maps, and performance insights entirely in the browser.",
    link: "https://tracevista.vercel.app",
    github: "https://github.com/itsajaygaur/tracevista",
    stack: ["OpenTelemetry", "React", "TypeScript"],
    featured: true,
  },
  {
    id: 1,
    title: "Mykart - Ecommerce store",
    description:
      "Full-featured ecommerce store with an admin panel and payments.",
    link: "https://shop.ajaygaur.in",
    github: "https://github.com/itsajaygaur/ecommerce",
    stack: ["Next.js", "TypeScript", "Postgres"],
  },
  {
    id: 11,
    title: "React Flow app",
    description:
      "Design and connect nodes and edges on a visual flowchart canvas, with authentication and persistence.",
    link: "https://thereactflow.vercel.app/",
    github: "https://github.com/itsajaygaur/react-flow",
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 13,
    title: "Next-Gen AI Voice Translator",
    description:
      "An AI-powered voice translation app for fast, accurate real-time language conversion.",
    link: "https://nao-translator-lime.vercel.app",
    github: "https://github.com/itsajaygaur/nao-translator",
    stack: ["Next.js", "AI SDK"],
  },
  {
    id: 14,
    title: "Best Medical University Services",
    description:
      "A modern marketing site with all content seamlessly managed through a headless CMS.",
    link: "https://bmus.co.in",
    stack: ["Next.js", "Sanity CMS"],
  },
];

export type Expertise = {
  number: string;
  title: string;
  description: string;
  tools: string;
};

export type Social = {
  label: string;
  href: string;
};

export const expertise: Expertise[] = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Polished, accessible interfaces with thoughtful motion and durable component systems.",
    tools: "React · Next.js · React Native · TypeScript · Tailwind CSS",
  },
  {
    number: "02",
    title: "Backend & AI",
    description:
      "Reliable APIs, data models, and AI-powered services designed around real product needs.",
    tools: "Node.js · Python · FastAPI · Postgres · Redis · RAG",
  },
  {
    number: "03",
    title: "Infrastructure",
    description:
      "Practical systems that move confidently from a local build to production scale.",
    tools: "AWS · Docker · Terraform · OpenTelemetry · CI/CD",
  },
];

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/itsajaygaur" },
  { label: "LinkedIn", href: "https://linkedin.com/in/itsajaygaur" },
  { label: "Email", href: "mailto:ajaypathak2527@gmail.com" },
];

export const experience: Experience[] = [
  {
    company: "Neynar",
    role: "Software Engineer",
    period: "Apr 2026 - Present",
    summary:
      "Leading Audio Spaces for Farcaster across web, iOS, and Android with LiveKit; shipping full-stack features for a network serving 1M+ users, instrumented with Datadog.",
  },
  {
    company: "Creative Buffer",
    role: "Software Engineer",
    period: "Nov 2024 - Apr 2026",
    summary:
      "Built production full-stack systems across healthcare, analytics, and AI, including AWS ECS with Terraform and OpenTelemetry and a RAG pipeline on Pinecone, while mentoring junior engineers.",
  },
  {
    company: "Girl Power Talk",
    role: "Web Developer",
    period: "Oct 2022 - Jul 2024",
    summary:
      "Shipped Next.js, TypeScript, and Prisma products; cut profile-page load times by ~50% with server-side rendering and caching; crafted motion with GSAP and Framer Motion.",
  },
];
