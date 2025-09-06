'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { CpuChipIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { spaceThemeColors, spaceAnimations } from './theme';

export const MicrochipHistoryNavigationCard = () => {
  const router = useRouter();

  return (
    <motion.div
      className={cn(
        "relative group cursor-pointer",
        "bg-gradient-to-br from-purple-900/20 to-blue-900/20",
        "backdrop-blur-md border border-purple-500/20 rounded-2xl",
        "hover:border-purple-400/40 transition-all duration-500",
        "overflow-hidden h-[400px]"
      )}
      {...spaceAnimations.fadeInUp}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(147,51,234,0.3)'
      }}
      onClick={() => router.push('/blog/microchip-history')}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-purple-500/10" />
      </div>
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center justify-center">
              <CpuChipIcon className="w-6 h-6 text-white" />
            </div>
            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium border border-purple-400/30">
              Interactive Timeline
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3">
            The Silicon Revolution
          </h3>
          <p className="text-purple-200 leading-relaxed">
            Journey through 75+ years of microchip evolution. From the first transistor to AI chips, 
            explore how semiconductors shaped our world and India's growing role in the global chip industry.
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-cyan-400 font-semibold">15 min read</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">Interactive</span>
            </div>
          </div>
          
          <ArrowRightIcon className="w-6 h-6 text-purple-400 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};
