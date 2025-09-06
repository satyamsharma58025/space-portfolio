'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 pt-32">
        {/* Hero Skeleton */}
        <div className="text-center mb-32">
          <div className="h-24 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl mb-6 animate-pulse" />
          <div className="h-6 bg-purple-600/20 rounded-lg max-w-2xl mx-auto mb-4 animate-pulse" />
          <div className="h-6 bg-purple-600/20 rounded-lg max-w-xl mx-auto animate-pulse" />
        </div>
        
        {/* Timeline Skeleton */}
        <div className="space-y-32">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="flex items-center gap-8">
                <motion.div 
                  className={cn(
                    "w-80 h-48 bg-gradient-to-br from-slate-800/40 to-purple-900/20",
                    "rounded-2xl border border-purple-500/20 animate-pulse",
                    i % 2 === 0 ? 'order-1' : 'order-3'
                  )}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
                <motion.div 
                  className="w-6 h-6 bg-purple-600 rounded-full animate-pulse order-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
                />
                <div className={cn(
                  "w-80 h-48 opacity-20",
                  i % 2 === 0 ? 'order-3' : 'order-1'
                )} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Loading indicator */}
        <motion.div 
          className="fixed bottom-8 right-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-4 rounded-full shadow-lg">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
