import { CalendarDays, Code2, GraduationCap, Rocket, School, Users } from 'lucide-react';

export type Experience = {
  title: string;
  role: string;
  description: string;
  icon: typeof Code2;
  date: string;
  type: 'education' | 'work' | 'teaching' | 'vision';
  tags?: string[];
};

export const experiences: Experience[] = [
  {
    title: "Computer Science and Engineering",
    role: "Bachelor's Degree",
    description: "Specialized in AI/ML and distributed systems. Graduated with distinction.",
    icon: GraduationCap,
    date: "2021 - 2025",
    type: "education",
    tags: ["AI/ML", "Distributed Systems", "Computer Architecture"]
  },
  {
    title: "Teaching Assistant - Data Structures",
    role: "University Teaching",
    description: "Mentored 200+ students in advanced data structures and algorithms.",
    icon: Users,
    date: "2023 - 2024",
    type: "teaching",
    tags: ["Data Structures", "Algorithms", "Student Mentoring"]
  },
  {
    title: "Full Stack Developer",
    role: "Open Source Contributor",
    description: "Built scalable web applications and contributed to major open source projects.",
    icon: Code2,
    date: "2023 - Present",
    type: "work",
    tags: ["React", "Node.js", "TypeScript", "AWS"]
  },
  {
    title: "Computer Science Instructor",
    role: "Online Education Platform",
    description: "Created and delivered programming courses reaching 5000+ students globally.",
    icon: School,
    date: "2024 - Present",
    type: "teaching",
    tags: ["Web Development", "Python", "JavaScript"]
  },
  {
    title: "Phase 1: Foundation",
    role: "Sovereign-Tech Vision",
    description: "Establishing core technological independence in critical sectors.",
    icon: CalendarDays,
    date: "2025 - 2030",
    type: "vision",
    tags: ["Infrastructure", "R&D", "Innovation"]
  },
  {
    title: "Phase 2: Innovation Hub",
    role: "Sovereign-Tech Vision",
    description: "Transforming India into a global technology innovation center.",
    icon: Rocket,
    date: "2030 - 2040",
    type: "vision",
    tags: ["Global Leadership", "Technology Export", "Sustainability"]
  }
] as const;
