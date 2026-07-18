import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Modern School Website",
    description:
      'A production-grade website for RMS Balichela featuring notices, events, and a CMS-style admin experience that lets faculty publish updates without developer intervention.',
    image: "/projects/rs.png",
    link: "https://rmsbalichela.org",
    category: "Web",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/satyamsharma58025/school-website",
  },
  {
    title: "Information- Visualizer",
    description:
      'A powerful visualization tool that animates core algorithms and helps learners understand sorts, searches, and graph traversal step by step.',
    image: "/projects/pc2.png",
    link: "https://csvisualizer.netlify.app/",
    category: "AI",
    techStack: ["React", "TypeScript", "Node.js", "D3.js"],
    github: "https://github.com/satyamsharma58025/algo-visualizer",
  },
  {
    title: "Space Themed Website",
    description:
      'An immersive, futuristic portfolio experience that blends design storytelling with interactive motion to reflect a bold, space-inspired identity.',
    image: "/projects/pc3.png",
    link: "https://github.com/satyamsharma58025/space-portfolio",
    category: "Web",
    techStack: ["React", "Three.js", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/satyamsharma58025/space-portfolio",
  },
  {
    title: "RAG-Powered Document Intelligence",
    description:
      'An AI system that ingests PDFs and URLs, embeds content with OpenAI and pgvector, and retrieves relevant information with reduced hallucination for multi-user use cases.',
    image: "/projects/rg.png",
    link: "https://github.com/satyamsharma58025",
    category: "AI",
    techStack: ["LangChain", "LlamaIndex", "pgvector", "OpenAI"],
    github: "https://github.com/satyamsharma58025",
  },
  {
    title: "Agentic AI Task Planner",
    description:
      'A multi-agent orchestration platform built with LangGraph and MCP that decomposes complex tasks, registers tools dynamically, and executes them with lower latency.',
    image: "/projects/at.png",
    link: "https://github.com/satyamsharma58025",
    category: "AI",
    techStack: ["LangGraph", "Node.js", "MongoDB", "MCP"],
    github: "https://github.com/satyamsharma58025",
  },
  {
    title: "Live Jharkhand News Portal",
    description:
      'A recently launched regional news platform built to deliver current updates, local stories, and community-focused content for Jharkhand audiences.',
    image: "/projects/lj.png",
    link: "https://www.livejharkhand.org",
    category: "Web",
    techStack: ["React", "Next.js", "TailwindCSS", "News Platform"],
    github: "https://github.com/satyamsharma58025",
  },
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/satyamsharma58025/algo-visualizer",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/xlr8tooop",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "www.linkedin.com/in/satyam-sharma-b908a6209",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:satyamsharma58025@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
    isHighlighted: false,
  },
  {
    title: "Skills",
    link: "#skills",
    isHighlighted: false,
  },
  {
    title: "Projects",
    link: "#projects",
    isHighlighted: false,
  },
  {
    title: "Sovereign-Tech",
    link: "/sovereign-tech",
    isHighlighted: true,
  },
  {
    title: "Blog",
    link: "/blog",
    isHighlighted: false,
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/satyamsharma58025/space-portfolio",
};
