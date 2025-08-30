'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Book, Video, FileText, Users, ArrowRight } from "lucide-react";

interface Resource {
  title: string;
  description: string;
  icon: typeof Book;
  href: string;
  category: "notes" | "videos" | "exercises" | "community";
}

const resources: Resource[] = [
  {
    title: "Physics Notes",
    description: "Comprehensive study materials for ICSE Physics",
    icon: Book,
    href: "/students/physics",
    category: "notes"
  },
  {
    title: "Chemistry Notes",
    description: "Complete notes and formulas for ICSE Chemistry",
    icon: Book,
    href: "/students/chemistry",
    category: "notes"
  },
  {
    title: "Video Lectures",
    description: "In-depth video explanations of complex topics",
    icon: Video,
    href: "/students/videos",
    category: "videos"
  },
  {
    title: "Practice Problems",
    description: "Curated exercises for exam preparation",
    icon: FileText,
    href: "/students/exercises",
    category: "exercises"
  },
  {
    title: "Study Groups",
    description: "Join collaborative learning communities",
    icon: Users,
    href: "/students/community",
    category: "community"
  }
];

export function ResourceGrid() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-xl border border-[#2A0E61]/50 bg-[#0300145e] backdrop-blur-sm hover:border-purple-500/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#2A0E61]/30">
                  <resource.icon className="w-6 h-6 text-purple-400" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{resource.description}</p>

                  <Link
                    href={resource.href}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Access Resources</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
