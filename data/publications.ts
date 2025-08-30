import { Book, FileText, Mic, Presentation, Video, Youtube } from 'lucide-react';

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
    title: "Sovereign Computing: A Framework for Technological Independence",
    type: "paper",
    venue: "International Journal of Distributed Systems",
    date: "2025",
    link: "https://example.com/sovereign-computing",
    icon: FileText,
    abstract: "This paper presents a comprehensive framework for achieving technological sovereignty through distributed systems and indigenous innovation.",
    coAuthors: ["Dr. Rajesh Kumar", "Dr. Priya Verma"],
    tags: ["Distributed Systems", "Sovereign Tech", "Framework"],
    citation: "Sharma, S., Kumar, R., & Verma, P. (2025). Sovereign Computing: A Framework for Technological Independence. Int. J. Dist. Sys., 15(2), 123-145."
  },
  {
    id: "pub2",
    title: "Building Self-Reliant Tech Ecosystems",
    type: "book",
    venue: "Tech Publications India",
    date: "2024",
    link: "https://example.com/self-reliant-tech",
    icon: Book,
    abstract: "A comprehensive guide to building sustainable and self-reliant technology ecosystems in developing nations.",
    tags: ["Technology", "Innovation", "Development"],
    citation: "Sharma, S. (2024). Building Self-Reliant Tech Ecosystems. Tech Publications India."
  },
  {
    id: "pub3",
    title: "Distributed Systems for National Infrastructure",
    type: "talk",
    venue: "TechCon India 2025",
    date: "2025",
    link: "https://example.com/techcon-talk",
    icon: Presentation,
    abstract: "Keynote presentation on implementing distributed systems for critical national infrastructure.",
    tags: ["Infrastructure", "Security", "Architecture"],
  },
  {
    id: "pub4",
    title: "Advanced Algorithms in Practice",
    type: "workshop",
    venue: "Global Developer Conference",
    date: "2024",
    link: "https://example.com/algo-workshop",
    icon: Mic,
    abstract: "Interactive workshop on implementing advanced algorithms for real-world applications.",
    tags: ["Algorithms", "Performance", "Optimization"],
  },
  {
    id: "pub5",
    title: "Future of Indian Tech Innovation",
    type: "video",
    venue: "TechTalks YouTube Channel",
    date: "2025",
    link: "https://youtube.com/example",
    icon: Youtube,
    abstract: "Discussion on the future of technological innovation in India and the path to self-reliance.",
    tags: ["Innovation", "Future Tech", "India"],
  },
  {
    id: "pub6",
    title: "Implementing Zero-Trust Architecture",
    type: "article",
    venue: "Tech Blog",
    date: "2024",
    link: "https://example.com/zero-trust",
    icon: FileText,
    abstract: "Technical article on implementing zero-trust architecture in distributed systems.",
    tags: ["Security", "Architecture", "Zero-Trust"],
  }
] as const;
