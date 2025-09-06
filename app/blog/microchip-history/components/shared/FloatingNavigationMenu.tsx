'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  ClockIcon, 
  CpuChipIcon, 
  BuildingOfficeIcon, 
  GlobeAsiaAustraliaIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

interface FloatingNavigationMenuProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const FloatingNavigationMenu = ({ 
  activeSection, 
  onSectionChange 
}: FloatingNavigationMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const sections = [
    { id: 'timeline', icon: ClockIcon, label: 'Timeline' },
    { id: '3d-chips', icon: CpuChipIcon, label: '3D Chips' },
    { id: 'companies', icon: BuildingOfficeIcon, label: 'Companies' },
    { id: 'india-journey', icon: GlobeAsiaAustraliaIcon, label: 'India' }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => {
                  onSectionChange(section.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-full",
                  "bg-gradient-to-r backdrop-blur-md border transition-all",
                  "hover:scale-110 group",
                  activeSection === section.id
                    ? "from-purple-600 to-cyan-600 border-purple-400 text-white"
                    : "from-slate-800/80 to-purple-900/40 border-purple-500/30 text-purple-300"
                )}
                whileHover={{ x: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <section.icon className="w-5 h-5" />
                <span className="font-medium whitespace-nowrap">{section.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600",
          "border-2 border-purple-400 shadow-lg shadow-purple-500/25",
          "flex items-center justify-center text-white",
          "hover:shadow-xl hover:shadow-purple-500/40 transition-all"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        <Bars3Icon className="w-6 h-6" />
      </motion.button>
    </div>
  );
};
