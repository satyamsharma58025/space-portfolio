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
    title: "Software Developer",
    role: "Swift Strips India Pvt. Ltd. (SLTT Group)",
    description:
      "Owns the maintenance and modernization of a production MERN ERP system for manufacturing operations, including scrap procurement, batch and heat-number tracking, CoA workflows, and GST-compliant invoicing.",
    icon: Code2,
    date: "Apr 2026 – Present",
    type: "work",
    tags: ["ERP", "MERN", "Manufacturing", "Process Modernization"]
  },
  {
    title: "Computer Science Instructor",
    role: "RMS High School Balichela",
    description:
      "Designed a structured CS curriculum for grades 9–12, built the school website for 1,000+ monthly visitors, and created 15+ coding labs that improved project completion by 35%.",
    icon: School,
    date: "Sep 2024 – Present",
    type: "teaching",
    tags: ["Curriculum", "Web Development", "Mentoring", "Education"]
  },
  {
    title: "Full Stack Developer",
    role: "Open Source Contributor",
    description:
      "Built and shipped full-stack applications while contributing to open-source tooling and developer-facing platforms with a strong focus on reliability and usability.",
    icon: Code2,
    date: "2023 – Present",
    type: "work",
    tags: ["React", "Node.js", "TypeScript", "Open Source"]
  },
  {
    title: "Teaching Assistant - Data Structures",
    role: "University Teaching",
    description:
      "Mentored students in advanced data structures and algorithms and helped strengthen their problem-solving approach through guided practice and review.",
    icon: Users,
    date: "2023 – 2024",
    type: "teaching",
    tags: ["Data Structures", "Algorithms", "Student Mentoring"]
  },
  {
    title: "Backend Developer Intern",
    role: "Ricoz Software Solution Pvt. Ltd.",
    description:
      "Built 12+ production REST APIs, reduced average response time by 40%, and strengthened API security with role-based access control in a remote Agile team.",
    icon: Code2,
    date: "2023 – 2024",
    type: "work",
    tags: ["Node.js", "Express", "MongoDB", "API Performance"]
  },
  {
    title: "Data Annotator – Autonomous Driving",
    role: "Fives Digital Pvt. Ltd. (Tesla pipeline via Playment)",
    description:
      "Annotated 3D LiDAR point-cloud data across 10,000+ frames with 98%+ accuracy, contributing to the quality of autonomous driving models.",
    icon: Rocket,
    date: "2021 – 2022",
    type: "work",
    tags: ["Computer Vision", "Data Annotation", "Quality"]
  },
  {
    title: "Master of Computer Applications",
    role: "IGNOU",
    description:
      "Pursuing MCA while building production systems and AI applications, combining academic depth with hands-on engineering execution.",
    icon: GraduationCap,
    date: "2025 – 2027",
    type: "education",
    tags: ["MCA", "Distributed Systems", "Research"]
  },
  {
    title: "Bachelor of Computer Applications",
    role: "Kolhan University",
    description:
      "Built a strong foundation in programming, algorithms, and software engineering before transitioning into full-stack and AI systems work.",
    icon: GraduationCap,
    date: "2021 – 2024",
    type: "education",
    tags: ["Programming", "Algorithms", "Software Engineering"]
  },
  {
    title: "Phase 1: Foundation",
    role: "Sovereign-Tech Vision",
    description:
      "Establishing core technological independence in critical sectors through practical systems, open infrastructure, and responsible innovation.",
    icon: CalendarDays,
    date: "2025 – 2030",
    type: "vision",
    tags: ["Infrastructure", "R&D", "Innovation"]
  },
  {
    title: "Phase 2: Innovation Hub",
    role: "Sovereign-Tech Vision",
    description:
      "Transforming India into a global technology innovation center by building durable engineering ecosystems and forward-looking platforms.",
    icon: Rocket,
    date: "2030 – 2040",
    type: "vision",
    tags: ["Global Leadership", "Technology Export", "Sustainability"]
  }
] as const;
