"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

const ProjectPreview = ({ 
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
    className="flex flex-col p-6 border border-[#2A0E61] rounded-lg bg-[rgba(3,0,20,0.37)] backdrop-blur-sm"
  >
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 flex-shrink-0">
        <Image 
          src={icon}
          alt={title}
          width={48}
          height={48}
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
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

const TimelineEra = ({
  years,
  title,
  icon
}: {
  years: string;
  title: string;
  icon: React.ReactNode;
}) => (
  <div className="flex flex-col items-center">
    <div className="text-gray-400 text-sm mb-2">{years}</div>
    <div className="w-12 h-12 bg-[#2A0E61] rounded-full flex items-center justify-center mb-2">
      {icon}
    </div>
    <div className="text-white text-center">{title}</div>
  </div>
);

export const SovereignTechPreview = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2A0E61]/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            India&apos;s Centennial Sovereign-Tech Framework
            <span className="block text-xl md:text-2xl mt-2 text-gray-300">(2025–2125)</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Three foundational open-source projects for national technological independence.
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
          <ProjectPreview
            title="Agastya"
            description="Formally verified RISC-V trusted execution core securing Indiaa'aapos;apos;s digital public infrastructure."
            icon="/sovereign-tech/agastya.svg"
            link="/sovereign-tech/agastya"
          />
          <ProjectPreview
            title="Sutradhar"
            description="Open-source EDA + chiplet assembly flow reducing dependence on foreign IP."
            icon="/sovereign-tech/sutradhar.svg"
            link="/sovereign-tech/sutradhar"
          />
          <ProjectPreview
            title="Bhagirath"
            description="Carbon-aware datacenter control plane aligning sovereignty with climate responsibility."
            icon="/sovereign-tech/bhagirath.svg"
            link="/sovereign-tech/bhagirath"
          />
        </div>

        {/* Timeline Preview */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-start">
              <TimelineEra
                years="0–10 Years"
                title="Core IP Independence"
                icon={
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                }
              />
              <TimelineEra
                years="10–30 Years"
                title="Scale & Integration"
                icon={
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
              />
              <TimelineEra
                years="30–100 Years"
                title="Sovereign Compute"
                icon={
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                }
              />
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/sovereign-tech"
                className="text-purple-400 hover:text-purple-300 inline-flex items-center"
              >
                View Full Timeline
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          animate="visible"
          className="border border-[#2A0E61] rounded-lg p-8 bg-[rgba(3,0,20,0.37)] backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                12 months
              </div>
              <div className="text-gray-400 text-sm">TEE v0.1 Development</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                2/year
              </div>
              <div className="text-gray-400 text-sm">Chiplet Shuttles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                ≥10%
              </div>
              <div className="text-gray-400 text-sm">Datacenter Efficiency Gain</div>
            </div>
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/satyamsharma58025/space-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-[#2A0E61] rounded-lg text-white hover:border-purple-500 transition-colors"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            Contribute on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};
