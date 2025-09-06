'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

interface TimelineEra {
  year: number;
  name: string;
  icon: string;
}

interface TimelineViewProps {
  eras: TimelineEra[];
  selectedYear: number;
  onSelectYear: (year: number) => void;
  getProcessNode: (year: number) => string;
  getClockSpeed: (year: number) => string;
}

export function TimelineView({ eras, selectedYear, onSelectYear, getProcessNode, getClockSpeed }: TimelineViewProps) {
  const { theme } = useTheme();
  const [hoveredEra, setHoveredEra] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden">
      <div className={cn(
        "relative p-8 rounded-2xl",
        "before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] before:bg-[size:14px_24px] before:opacity-20",
        "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-purple-500/5 after:to-transparent",
        theme === 'dark' ? 'bg-[#0a0a1a]/50' : 'bg-white/50',
        "backdrop-blur-sm"
      )}>
        {/* Timeline Header */}
        <div className="text-center mb-12">
          <motion.h3
            className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Journey Through Silicon History
          </motion.h3>
        </div>

        {/* Timeline Track */}
        <div className="relative grid grid-cols-1 md:grid-cols-7 gap-6 md:gap-0">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/20 via-purple-500/50 to-purple-500/20 transform -translate-y-1/2" />
          
          {eras.map((era, index) => (
            <motion.div
              key={era.year}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Era Node */}
              <motion.div
                className={cn(
                  "relative z-10 group cursor-pointer",
                  "p-6 rounded-xl text-center",
                  "transform transition-all duration-300",
                  "border border-transparent",
                  selectedYear >= era.year ? (
                    theme === 'dark'
                      ? 'bg-purple-900/30 border-purple-500/30 shadow-lg shadow-purple-500/20'
                      : 'bg-purple-50 border-purple-200'
                  ) : (
                    theme === 'dark'
                      ? 'bg-[#0a0a1a]/30 hover:bg-purple-900/20'
                      : 'bg-white/30 hover:bg-purple-50'
                  )
                )}
                onClick={() => onSelectYear(era.year)}
                onHoverStart={() => setHoveredEra(index)}
                onHoverEnd={() => setHoveredEra(null)}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  {/* Era Icon */}
                  <motion.div
                    className={cn(
                      "text-3xl mb-3 relative",
                      "w-12 h-12 mx-auto rounded-full flex items-center justify-center",
                      selectedYear >= era.year
                        ? 'bg-purple-500/20'
                        : 'bg-gray-500/10'
                    )}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {era.icon}
                  </motion.div>

                  {/* Era Details */}
                  <div className="space-y-2">
                    <div className={cn(
                      "text-sm font-semibold",
                      selectedYear >= era.year
                        ? theme === 'dark' ? 'text-purple-400' : 'text-purple-700'
                        : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    )}>
                      {era.year}
                    </div>
                    <div className={cn(
                      "text-xs font-medium",
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    )}>
                      {era.name}
                    </div>
                  </div>

                  {/* Glowing Effect */}
                  <div className={cn(
                    "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    "bg-gradient-to-t from-purple-500/10 via-transparent to-transparent"
                  )} />
                </div>
              </motion.div>

              {/* Hover Card */}
              {hoveredEra === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "absolute z-20 w-72",
                    "p-4 rounded-lg shadow-xl",
                    "left-1/2 transform -translate-x-1/2",
                    theme === 'dark'
                      ? 'bg-[#0a0a1a]/90 border border-purple-500/20'
                      : 'bg-white/90 border border-purple-200',
                    "backdrop-blur-md"
                  )}
                  style={{ top: '100%', marginTop: '1rem' }}
                >
                  <div className="space-y-3">
                    <div className={cn(
                      "text-sm font-semibold",
                      theme === 'dark' ? 'text-purple-400' : 'text-purple-700'
                    )}>
                      {`${era.name} (${era.year})`}
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className={cn(
                        "p-2 rounded-lg",
                        theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-50'
                      )}>
                        <div className="font-medium mb-1">Process Node</div>
                        <div className="text-purple-400">{getProcessNode(era.year)}</div>
                      </div>
                      <div className={cn(
                        "p-2 rounded-lg",
                        theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-50'
                      )}>
                        <div className="font-medium mb-1">Clock Speed</div>
                        <div className="text-purple-400">{getClockSpeed(era.year)}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
