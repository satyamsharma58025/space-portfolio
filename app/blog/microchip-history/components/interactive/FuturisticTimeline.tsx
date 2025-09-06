'use client';

import { motion } from 'framer-motion';
import { SparklesIcon, ArrowTrendingUpIcon as TrendingUpIcon, UsersIcon as UserGroupIcon } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { spaceThemeColors } from '../shared/theme';
import type { TimelineEra } from '../../types';

interface TimelineNodeProps {
  era: TimelineEra;
  index: number;
  isLeft: boolean;
  isActive: boolean;
  isHovered: boolean;
  onSelect: () => void;
  onHover: (id: string | null) => void;
}

const TimelineNode: React.FC<TimelineNodeProps> = ({ 
  era, 
  index, 
  isLeft, 
  isActive, 
  isHovered, 
  onSelect,
  onHover 
}) => {
  return (
    <motion.div
      className={cn(
        "relative flex items-center",
        isLeft ? "justify-start pl-8" : "justify-end pr-8 flex-row-reverse"
      )}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Connection line */}
      <div className={cn(
        "absolute top-1/2 w-16 h-0.5 bg-gradient-to-r",
        isLeft 
          ? "right-8 from-purple-400 to-transparent" 
          : "left-8 from-transparent to-purple-400",
        isActive && "shadow-[0_0_10px_rgba(147,51,234,0.8)]"
      )} />
      
      {/* Central node */}
      <motion.div
        className={cn(
          "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
          "w-6 h-6 rounded-full border-4 cursor-pointer z-20",
          isActive 
            ? "bg-cyan-400 border-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
            : "bg-purple-600 border-purple-400 hover:bg-purple-500"
        )}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.9 }}
        onClick={onSelect}
        onHoverStart={() => onHover(era.id)}
        onHoverEnd={() => onHover(null)}
      >
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-full bg-cyan-400"
            animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Content card */}
      <motion.div
        className={cn(
          "relative max-w-md p-6 rounded-2xl cursor-pointer",
          "bg-gradient-to-br from-slate-900/80 to-purple-900/40",
          "backdrop-blur-md border border-purple-500/30",
          "hover:border-purple-400/60 transition-all duration-500",
          isActive && "ring-2 ring-cyan-400/50 border-cyan-400/50"
        )}
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 20px 40px rgba(147,51,234,0.4)'
        }}
        onClick={onSelect}
      >
        {/* Year badge */}
        <div className="absolute -top-3 -right-3">
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
            {era.year}
          </div>
        </div>

        {/* Innovation indicator */}
        <div className="flex items-center gap-2 mb-4">
          <SparklesIcon className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400 text-sm font-semibold">KEY INNOVATION</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{era.title}</h3>
        <p className="text-purple-200 text-sm leading-relaxed mb-4">{era.description}</p>

        {/* Key innovation highlight */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg p-3 mb-4 border border-purple-400/20">
          <p className="text-purple-100 text-sm font-medium">{era.keyInnovation}</p>
        </div>

        {/* Companies involved */}
        <div className="flex flex-wrap gap-2 mb-4">
          {era.companies.slice(0, 3).map(company => (
            <div 
              key={company.id} 
              className="flex items-center gap-2 bg-slate-800/60 rounded-full px-3 py-1 border border-slate-600/40"
            >
              <img src={company.logo} alt={company.name} className="w-4 h-4 rounded-full" />
              <span className="text-white text-xs">{company.name}</span>
            </div>
          ))}
          {era.companies.length > 3 && (
            <div className="bg-slate-800/60 rounded-full px-3 py-1 border border-slate-600/40">
              <span className="text-purple-300 text-xs">+{era.companies.length - 3} more</span>
            </div>
          )}
        </div>

        {/* Market impact */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <TrendingUpIcon className="w-4 h-4 text-green-400" />
            <span className="text-green-400">{era.marketImpact.economicValue}</span>
          </div>
          <div className="flex items-center gap-2">
            <UserGroupIcon className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400">{era.marketImpact.jobsCreated.toLocaleString()} jobs</span>
          </div>
        </div>

        {/* Hover expansion */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-purple-500/30"
          >
            <div className="space-y-2">
              <h4 className="text-purple-300 text-sm font-semibold">Technical Specifications</h4>
              {era.technicalSpecs.slice(0, 2).map(spec => (
                <div key={spec.metric} className="flex justify-between text-xs">
                  <span className="text-purple-200">{spec.metric}</span>
                  <span className="text-cyan-300 font-mono">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

interface FuturisticTimelineProps {
  data: TimelineEra[];
  selectedEra: string | null;
  onEraSelect: (id: string) => void;
}

export const FuturisticTimeline: React.FC<FuturisticTimelineProps> = ({ 
  data, 
  selectedEra, 
  onEraSelect 
}) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="relative py-20">
      {/* Cosmic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      </div>

      {/* Main timeline spine */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
        <div className="w-full h-full bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 blur-sm opacity-40" />
      </div>

      {/* Timeline nodes */}
      <div ref={timelineRef} className="relative z-10 space-y-32">
        {data.map((era, index) => (
          <TimelineNode
            key={era.id}
            era={era}
            index={index}
            isLeft={index % 2 === 0}
            isActive={selectedEra === era.id}
            isHovered={hoveredNode === era.id}
            onSelect={() => onEraSelect(era.id)}
            onHover={setHoveredNode}
          />
        ))}
      </div>
    </div>
  );
};
