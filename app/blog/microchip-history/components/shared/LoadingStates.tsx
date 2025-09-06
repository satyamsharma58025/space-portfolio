'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const skeletonClass = cn(
  "animate-pulse bg-gray-300 dark:bg-gray-700",
  "rounded-lg"
);

export function TimelineSkeleton() {
  return (
    <div className="space-y-8">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className={cn(skeletonClass, "w-24 h-24")} />
          <div className="flex-1 space-y-4">
            <div className={cn(skeletonClass, "h-4 w-3/4")} />
            <div className={cn(skeletonClass, "h-4 w-1/2")} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function CompanyShowcaseSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className={cn(skeletonClass, "h-64")}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}

export function IndiaJourneySkeleton() {
  return (
    <div className="space-y-6">
      <div className={cn(skeletonClass, "h-8 w-1/3")} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={cn(skeletonClass, "h-40")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}

export function Viz3DSkeleton() {
  return (
    <motion.div
      className={cn(skeletonClass, "w-full aspect-video")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}
