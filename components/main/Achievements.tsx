"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Achievement, achievements } from "@/data/achievements";

const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const getCategoryColor = (category: Achievement["category"]) => {
    switch (category) {
      case "award":
        return "from-yellow-500 to-amber-500";
      case "hackathon":
        return "from-purple-500 to-pink-500";
      case "recognition":
        return "from-cyan-500 to-blue-500";
      case "certification":
        return "from-green-500 to-emerald-500";
      default:
        return "from-purple-500 to-cyan-500";
    }
  };

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
          transition: { duration: 0.5, ease: "easeOut" }
        }
      }}
      className="relative p-6 rounded-xl border border-[#2A0E61]/50 bg-[#0300145e] backdrop-blur-sm hover:border-purple-500/50 transition-colors"
    >
      {/* Icon */}
      <div className={`absolute -top-4 left-6 w-8 h-8 rounded-lg bg-gradient-to-br ${getCategoryColor(achievement.category)} flex items-center justify-center shadow-lg`}>
        <achievement.icon className="w-4 h-4 text-white" />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
        <p className="text-gray-400 mb-3">{achievement.description}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="text-purple-400">{achievement.organization}</div>
          <div className="text-gray-500">{achievement.date}</div>
        </div>

        {achievement.link && (
          <Link
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors mt-3 text-sm"
          >
            View Details
            <ExternalLink className="w-3 h-3" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export const Achievements = () => {
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
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Achievements & Recognition
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Milestones and acknowledgments in technology innovation, education, and leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={`${achievement.title}-${index}`} 
              achievement={achievement} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
