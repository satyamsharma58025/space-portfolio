import { Book, FileText, Mic, Presentation, Youtube } from 'lucide-react';

export type Publication = {
  id: string;
  title: string;
  type: 'paper' | 'article' | 'talk' | 'workshop' | 'book' | 'video';
  venue: string;
  date: string;
  link: string;
  icon: typeof FileText;
  abstract?: string;
  coAuthors?: string[];
  tags: string[];
  citation?: string;
};

export const publications: Publication[] = [
  {
    id: "pub1",
    title: "RAG-Powered Document Intelligence System",
    type: "article",
    venue: "GitHub Project · 2024",
    date: "2024",
    link: "https://github.com/satyamsharma58025",
    icon: FileText,
    abstract: "An end-to-end document intelligence workflow that ingests PDFs and URLs, chunks and embeds content, and enables semantic retrieval with reduced hallucination for multi-user contexts.",
    tags: ["RAG", "LangChain", "pgvector", "OpenAI"],
    citation: "Built as a production-style AI system combining retrieval, embeddings, and streaming interfaces."
  },
  {
    id: "pub2",
    title: "Agentic AI Task Planner",
    type: "talk",
    venue: "Open-source Multi-Agent System",
    date: "2024",
    link: "https://github.com/satyamsharma58025",
    icon: Presentation,
    abstract: "A multi-agent orchestration platform using LangGraph and MCP to decompose complex tasks, register tools dynamically, and execute them with lower latency.",
    tags: ["LangGraph", "Agentic AI", "MCP", "Automation"],
  },
  {
    id: "pub3",
    title: "CS Algorithm Visualizer",
    type: "workshop",
    venue: "Student Learning Tool",
    date: "2023",
    link: "https://csvisualizer.netlify.app/",
    icon: Mic,
    abstract: "An interactive learning platform for 20+ sorting, searching, and graph algorithms, used as a classroom teaching aid and community learning resource.",
    tags: ["Algorithms", "Education", "Visualization"],
  },
  {
    id: "pub4",
    title: "Building Self-Reliant Tech Ecosystems",
    type: "book",
    venue: "Technology Vision & Practice",
    date: "2024",
    link: "https://github.com/satyamsharma58025",
    icon: Book,
    abstract: "A practical perspective on building resilient digital systems and self-reliant engineering ecosystems for emerging tech communities.",
    tags: ["Sovereign Tech", "Innovation", "Development"],
  },
  {
    id: "pub5",
    title: "Future of Indian Tech Innovation",
    type: "video",
    venue: "Community Tech Talks",
    date: "2025",
    link: "https://github.com/satyamsharma58025",
    icon: Youtube,
    abstract: "Discussion around the role of open, verifiable, and community-driven technology systems in India’s future.",
    tags: ["Innovation", "India", "Open Systems"],
  }
] as const;
