"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Experience, experiences } from "@/data/experience";

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut"
          }
        }
      }}
      className="relative flex items-start gap-6 p-6 rounded-xl border border-[#2A0E61]/50 bg-[#0300145e] backdrop-blur-sm"
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2A0E61] flex items-center justify-center">
        <experience.icon className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-2">{experience.title}</h3>
        <p className="text-purple-400 mb-2">{experience.role}</p>
        <p className="text-gray-400 mb-4">{experience.description}</p>
        
        {/* Tags */}
        {experience.tags && (
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-[#2A0E61]/30 text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Date */}
        <div className="absolute top-6 right-6">
          <span className="text-sm text-gray-500">{experience.date}</span>
        </div>
      </div>
    </motion.div>
  );
};

export const ExperienceTimeline = () => {
  const prefersReducedMotion = 
    typeof window !== "undefined" 
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
      : false;

  const variants = prefersReducedMotion 
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 }
      }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      };

  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={variants}
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Experience & Vision
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`${experience.title}-${index}`} experience={experience} />
          ))}
        </div>

        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-[8rem] bottom-20 w-px bg-gradient-to-b from-purple-500/50 to-transparent" />
      </div>
    </section>
  );
};
