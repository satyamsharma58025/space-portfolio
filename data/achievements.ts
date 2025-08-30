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
    title: "National Technology Excellence Award",
    description: "Recognized for contributions to India's sovereign technology initiatives",
    date: "2025",
    icon: Trophy,
    category: "award",
    organization: "Ministry of Electronics and IT",
  },
  {
    title: "Global Hackathon Champion",
    description: "First place in International Space Apps Challenge",
    date: "2024",
    icon: Code2,
    category: "hackathon",
    organization: "NASA",
    link: "https://www.spaceappschallenge.org",
  },
  {
    title: "Distinguished Teaching Fellow",
    description: "Awarded for excellence in computer science education",
    date: "2024",
    icon: Users,
    category: "recognition",
    organization: "Computer Science Teachers Association",
  },
  {
    title: "Open Source Contributor of the Year",
    description: "Top 100 contributors to critical infrastructure projects",
    date: "2024",
    icon: Star,
    category: "recognition",
    organization: "GitHub",
  },
  {
    title: "AWS Machine Learning Certification",
    description: "Professional certification in ML and AI systems",
    date: "2023",
    icon: Medal,
    category: "certification",
    organization: "Amazon Web Services",
    link: "https://aws.amazon.com/certification/certified-machine-learning-specialty",
  },
] as const;
