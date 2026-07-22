'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Book, Download } from "lucide-react";

interface DownloadLink {
  title: string;
  description: string;
  href: string;
  icon: typeof FileText;
  category: "resume" | "portfolio" | "guide";
}

const downloads: DownloadLink[] = [
  {
    title: "Professional Resume",
    description: "A current overview of my experience, skills, projects, and achievements",
    href: "/downloads/satyam-sharma-resume.pdf",
    icon: FileText,
    category: "resume"
  },
  {
    title: "Technical Portfolio",
    description: "Selected AI systems, engineering projects, and case studies from my work",
    href: "https://github.com/satyamsharma58025",
    icon: Book,
    category: "portfolio"
  },
];

export function Downloads() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {downloads.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-xl border border-[#2A0E61]/50 bg-[#0300145e] backdrop-blur-sm hover:border-purple-500/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#2A0E61]/30">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
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
