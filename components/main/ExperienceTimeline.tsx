"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Experience, experiences } from "@/data/experience";
import { SPACE_THEME } from "@/config/theme";
import { SpaceStation } from "@/components/sub/space-station";

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
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={variants}
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Experience & Journey
        </motion.h2>

        <div className="space-y-12 relative">
          {/* Space Stations */}
          {experiences.map((_, index) => {
            const isLeft = index % 2 === 0;
            return (
              <SpaceStation
                key={index}
                size={24}
                orbitRadius={60}
                orbitDuration={20}
                delay={index * 2}
                isLeft={isLeft}
              />
            );
          })}

          {/* Experience Cards */}
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.title}-${index}`}
              className={`relative ${index % 2 === 0 ? 'ml-12' : 'mr-12'}`}
            >
              <ExperienceCard experience={experience} />
              
              {/* Connecting Line */}
              <div 
                className={`absolute top-1/2 w-12 h-px bg-gradient-to-r ${
                  index % 2 === 0 
                    ? 'right-full from-transparent to-purple-500/50'
                    : 'left-full from-purple-500/50 to-transparent'
                }`} 
              />
            </motion.div>
          ))}

          {/* Central Timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px">
            <div className="h-full bg-gradient-to-b from-purple-500/50 via-cyan-500/30 to-transparent animate-pulse" />
            
            {/* Animated Rocket */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  filter: `drop-shadow(${SPACE_THEME.effects.glowIntense} ${SPACE_THEME.colors.cosmicBlue})`,
                }}
              >
                <path
                  d="M12 2L8 6H16L12 2Z"
                  fill={SPACE_THEME.colors.cosmicBlue}
                />
                <rect
                  x="10"
                  y="6"
                  width="4"
                  height="12"
                  fill={SPACE_THEME.colors.cosmicBlue}
                />
                <path
                  d="M8 18L12 22L16 18H8Z"
                  fill={SPACE_THEME.colors.nebulaPurple}
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
