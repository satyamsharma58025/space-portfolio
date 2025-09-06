'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { MicrochipEra } from '../../types';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

interface TimelineEra {
  id: string;
  year: number;
  title: string;
  description: string;
}

interface TimelineContainerProps {
  active: boolean;
}

export default function TimelineContainer({ active }: TimelineContainerProps) {
  const { theme } = useTheme();
  const [selectedEra, setSelectedEra] = useState<TimelineEra | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!active) return null;

  return (
    <motion.section
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Timeline Navigation */}
      <div className="sticky top-0 z-20 bg-black/20 backdrop-blur-md p-4 mb-8 rounded-lg">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h2 className={cn(
            "text-2xl font-bold",
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}>
            Timeline
          </h2>
          <div className="flex gap-4">
            {/* Era quick jump buttons */}
            {['1940s', '1960s', '1980s', '2000s', '2020s'].map((era) => (
              <button
                key={era}
                onClick={() => {
                  const element = document.getElementById(`era-${era}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={cn(
                  "px-3 py-1 rounded-full text-sm",
                  "transition-colors duration-200",
                  theme === 'dark'
                    ? 'hover:bg-purple-500/30 text-gray-300'
                    : 'hover:bg-purple-500/20 text-gray-700'
                )}
              >
                {era}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="relative" ref={containerRef}>
        {/* Vertical line */}
        <div className={cn(
          "absolute left-1/2 top-0 bottom-0 w-0.5",
          theme === 'dark' ? 'bg-purple-500/30' : 'bg-purple-500/20'
        )} />

        {/* Timeline entries */}
        <div className="space-y-24">
          {microchipEras.map((era, index) => (
            <TimelineEntry
              key={era.id}
              era={era}
              index={index}
              isSelected={selectedEra?.id === era.id}
              onSelect={() => setSelectedEra(era)}
            />
          ))}
        </div>
      </div>

      {/* 3D visualization layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Canvas>
          {/* Add your Three.js visualization components here */}
        </Canvas>
      </div>
    </motion.section>
  );
}

interface TimelineEntryProps {
  era: TimelineEra;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}

function TimelineEntry({ era, index, isSelected, onSelect }: TimelineEntryProps) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      id={`era-${era.year.toString().slice(0, 3)}0s`}
      className={cn(
        "relative grid grid-cols-2 gap-8",
        index % 2 === 0 ? 'text-right' : 'text-left'
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Content */}
      <div className={cn(
        "space-y-4",
        index % 2 === 0 ? 'pr-8' : 'pl-8 col-start-2'
      )}>
        <motion.h3
          className={cn(
            "text-2xl font-bold",
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}
          layoutId={`title-${era.id}`}
        >
          {era.title}
        </motion.h3>
        
        <motion.div
          className={cn(
            "text-sm",
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          )}
        >
          {era.year}
        </motion.div>

        <motion.p
          className={cn(
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          )}
        >
          {era.description}
        </motion.p>

        <motion.button
          onClick={onSelect}
          className={cn(
            "px-4 py-2 rounded-full text-sm",
            "transition-colors duration-200",
            isSelected
              ? "bg-purple-500 text-white"
              : theme === 'dark'
                ? "bg-gray-800 hover:bg-purple-500/30 text-gray-300"
                : "bg-gray-100 hover:bg-purple-500/20 text-gray-700"
          )}
        >
          Learn More
        </motion.button>
      </div>

      {/* Timeline node */}
      <motion.div
        className={cn(
          "absolute left-1/2 top-8 w-4 h-4 rounded-full -ml-2",
          "border-2",
          isSelected
            ? "border-purple-500 bg-purple-500"
            : theme === 'dark'
              ? "border-purple-500/50 bg-gray-900"
              : "border-purple-500/30 bg-white"
        )}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      />
    </motion.div>
  );
}

// This would typically come from your data layer
const microchipEras: TimelineEra[] = [
  {
    id: "1947",
    year: 1947,
    title: "Birth of the Transistor",
    description: "Invention of the first transistor at Bell Labs"
  },
  {
    id: "1971",
    year: 1971,
    title: "Microprocessor Revolution",
    description: "Intel introduces the first commercial microprocessor"
  },
  {
    id: "2024",
    year: 2024,
    title: "AI and Quantum Era",
    description: "Convergence of AI acceleration and quantum computing"
  }
];
