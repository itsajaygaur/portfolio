export type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  github?: string;
  stack?: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

export type StackArea = {
  area: string;
  tools: string[];
};

export type Social = {
  label: string;
  href: string;
};

/* Every piece of copy on the page lives in this file. Ordering within each
   array is the ordering on the page — there is no featured/highlight flag. */

export const profile = {
  name: "Ajay Gaur",
  role: "Full-stack engineer",
  intro:
    "I build web products end to end — interface, API, and the infrastructure underneath. Currently at Neynar, working on Audio Spaces for Farcaster.",
  location: "India",
  availability: "Open to new work",
  email: "ajaypathak2527@gmail.com",
  resume: "/ajay-gaur.pdf",
  contactNote:
    "Email is the fastest way to reach me. The form works just as well if you prefer it.",
};

export const projects: Project[] = [
  {
    id: 10,
    title: "Draftline",
    description:
      "Publishing platform with a secure creator studio, autosave, managed media, search, SEO, and automated quality gates.",
    link: "https://blog.ajaygaur.in",
    github: "https://github.com/itsajaygaur/blog",
    stack: [
      "Next.js",
      "TypeScript",
      "Neon PostgreSQL",
      "Drizzle",
      "Better Auth",
      "Vercel Blob",
    ],
  },
  {
    id: 16,
    title: "Kivo",
    description:
      "Multi-tenant AI knowledge base with permission-aware hybrid retrieval, reranking, document ingestion, audit controls, and streamed cited answers.",
    link: "https://kivo.ajaygaur.in",
    github: "https://github.com/itsajaygaur/kivo",
    stack: [
      "Next.js",
      "Cloudflare Workers",
      "D1 / FTS5",
      "Vectorize",
      "Workers AI",
    ],
  },
  {
    id: 15,
    title: "TraceVista",
    description:
      "A privacy-first OpenTelemetry trace inspector that turns OTLP exports into interactive waterfalls, service maps, and performance insights entirely in the browser.",
    link: "https://tracevista.vercel.app",
    github: "https://github.com/itsajaygaur/tracevista",
    stack: ["OpenTelemetry", "React", "TypeScript"],
  },
  {
    id: 1,
    title: "Mykart",
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

export const experience: Experience[] = [
  {
    company: "Neynar",
    role: "Software Engineer",
    period: "Apr 2026 — Present",
    summary:
      "Leading Audio Spaces for Farcaster across web, iOS, and Android with LiveKit; shipping full-stack features for a network serving 1M+ users, instrumented with Datadog.",
  },
  {
    company: "Creative Buffer",
    role: "Software Engineer",
    period: "Nov 2024 — Apr 2026",
    summary:
      "Built production full-stack systems across healthcare, analytics, and AI, including AWS ECS with Terraform and OpenTelemetry and a RAG pipeline on Pinecone, while mentoring junior engineers.",
  },
  {
    company: "Girl Power Talk",
    role: "Web Developer",
    period: "Oct 2022 — Jul 2024",
    summary:
      "Shipped Next.js, TypeScript, and Prisma products; cut profile-page load times by ~50% with server-side rendering and caching; crafted motion with GSAP and Framer Motion.",
  },
];

export const stack: StackArea[] = [
  {
    area: "Frontend",
    tools: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    area: "Backend & AI",
    tools: ["Node.js", "Python", "FastAPI", "Postgres", "Redis", "RAG"],
  },
  {
    area: "Infrastructure",
    tools: ["AWS", "Docker", "Terraform", "OpenTelemetry", "CI/CD"],
  },
];

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/itsajaygaur" },
  { label: "LinkedIn", href: "https://linkedin.com/in/itsajaygaur" },
  { label: "Résumé", href: "/ajay-gaur.pdf" },
];
