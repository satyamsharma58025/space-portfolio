"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

const ProjectCard = ({
  title,
  description,
  icon,
  link
}: {
  title: string;
  description: string;
  icon: string;
  link: string;
}) => (
  <motion.div
    variants={slideInFromTop}
    className="relative flex flex-col p-6 border border-[#2A0E61] rounded-lg bg-[rgba(3,0,20,0.37)] backdrop-blur-sm overflow-hidden group"
  >
    {/* Hover Effect Background */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#2A0E61]/0 via-[#2A0E61]/5 to-[#2A0E61]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative flex items-start space-x-4">
      <div className="w-12 h-12 flex-shrink-0 p-2 bg-[#1A0941] rounded-lg">
        <Image 
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2 text-sm">{description}</p>
        <Link 
          href={link}
          className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          Learn More
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  </motion.div>
);

const TimelinePoint = ({
  year,
  label,
  isActive = false
}: {
  year: string;
  label: string;
  isActive?: boolean;
}) => (
  <div className="flex flex-col items-center">
    <div className={`text-sm ${isActive ? "text-purple-400" : "text-gray-400"}`}>
      {year}
    </div>
    <div className={`w-3 h-3 my-2 rounded-full ${
      isActive ? "bg-purple-500" : "bg-[#2A0E61]"
    }`} />
    <div className="text-sm text-center text-gray-300">{label}</div>
  </div>
);

export const SovereignTechIntro = () => {
  return (
    <section className="relative w-full py-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      {/* Content */}
      <div className="relative container mx-auto px-4">
        {/* Main Title */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              The Centennial Sovereign-Tech Framework
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            A century-long roadmap for India's technological sovereignty, built on open-source foundations and verifiable computing infrastructure.
          </p>
          <Link
            href="/sovereign-tech"
            className="inline-flex items-center button-primary px-8 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
          >
            Explore the Mission
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ProjectCard
            title="Project Agastya"
            description="Open-source EDA & formal verification stack for RISC-V, securing India's digital sovereignty through provable trust."
            icon="/sovereign-tech/agastya.svg"
            link="/sovereign-tech/agastya"
          />
          <ProjectCard
            title="Project Sutradhar"
            description="Sustainable compute architecture and energy-efficient datacenter innovations aligned with India's climate commitments."
            icon="/sovereign-tech/sutradhar.svg"
            link="/sovereign-tech/sutradhar"
          />
          <ProjectCard
            title="Project Bhagirath"
            description="Open materials & hardware IP commons driving innovation in advanced fabrication and sovereign manufacturing."
            icon="/sovereign-tech/bhagirath.svg"
            link="/sovereign-tech/bhagirath"
          />
        </div>

        {/* Timeline */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <div className="relative py-8">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-[#2A0E61]" />
            
            {/* Timeline Points */}
            <div className="relative flex justify-between">
              <TimelinePoint year="1990s" label="Digital Foundation" />
              <TimelinePoint year="2025" label="Sovereign Framework" isActive />
              <TimelinePoint year="2125" label="Tech Independence" />
            </div>
          </div>
        </motion.div>

        {/* Research Declaration */}
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          animate="visible"
          className="mt-16 text-center"
        >
          <Link
            href="https://github.com/satyamsharma58025/space-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-[#2A0E61] rounded-lg text-white hover:border-purple-500 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            View Research Framework
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
