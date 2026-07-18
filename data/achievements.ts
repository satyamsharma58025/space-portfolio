import { Award, Code2, Medal, Star, Trophy, Users } from 'lucide-react';

export type Achievement = {
  title: string;
  description: string;
  date: string;
  icon: typeof Award;
  category: 'award' | 'hackathon' | 'recognition' | 'certification';
  link?: string;
  organization?: string;
};

export const achievements: Achievement[] = [
  {
    title: "GitHub Community Founder & Organizer",
    description: "Founded and grew a developer community to 2,500+ active members, organizing monthly code reviews, hackathons, and AI/ML study groups.",
    date: "2024 – Present",
    icon: Users,
    category: "recognition",
    organization: "Developer Community",
  },
  {
    title: "Runner-Up, National Coding Competition",
    description: "Ranked 2nd out of 400+ participants, demonstrating strong algorithmic problem-solving under pressure.",
    date: "2024",
    icon: Trophy,
    category: "award",
    organization: "National Coding Platform",
  },
  {
    title: "Outstanding Developer Recognition",
    description: "Awarded by Ricoz Software Solution for exceptional backend contributions and API performance optimization during internship.",
    date: "2024",
    icon: Star,
    category: "recognition",
    organization: "Ricoz Software Solution",
  },
  {
    title: "Open Source Contributor",
    description: "Contributed bug fixes and documentation to 3 LangChain-ecosystem repositories, with pull requests merged into the main branch.",
    date: "2024",
    icon: Code2,
    category: "recognition",
    organization: "LangChain Ecosystem",
  },
  {
    title: "AWS Machine Learning Certification",
    description: "Professional certification in ML and AI systems, supporting end-to-end model integration and deployment work.",
    date: "2023",
    icon: Medal,
    category: "certification",
    organization: "Amazon Web Services",
    link: "https://aws.amazon.com/certification/certified-machine-learning-specialty",
  },
] as const;
