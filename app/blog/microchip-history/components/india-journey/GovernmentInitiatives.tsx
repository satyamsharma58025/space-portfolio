'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { Initiative } from '../../types';

interface GovernmentInitiativesProps {
  initiatives: Initiative[];
}

export function GovernmentInitiatives({ initiatives }: GovernmentInitiativesProps) {
  const { theme } = useTheme();
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative p-8 rounded-xl",
        "border",
        theme === 'dark'
          ? 'bg-gray-900/50 border-gray-700'
          : 'bg-white/50 border-gray-200',
        "backdrop-blur-sm"
      )}
    >
      <h3 className={cn(
        "text-2xl font-bold mb-6",
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      )}>
        Government Initiatives
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Initiatives List */}
        <div className="space-y-4">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedInitiative(initiative)}
              className={cn(
                "p-4 rounded-lg cursor-pointer",
                "border transition-all duration-200",
                selectedInitiative?.name === initiative.name
                  ? theme === 'dark'
                    ? 'bg-purple-900/20 border-purple-500'
                    : 'bg-purple-50 border-purple-300'
                  : theme === 'dark'
                    ? 'bg-gray-800/50 border-gray-700 hover:border-purple-500/50'
                    : 'bg-white/50 border-gray-200 hover:border-purple-300',
              )}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className={cn(
                    "font-semibold",
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  )}>
                    {initiative.name}
                  </h4>
                  <p className={cn(
                    "text-sm mt-1",
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  )}>
                    Budget: {initiative.budget}
                  </p>
                </div>
                <span className={cn(
                  "text-sm px-2 py-1 rounded-full",
                  theme === 'dark'
                    ? 'bg-purple-500/20 text-purple-300'
                    : 'bg-purple-100 text-purple-700'
                )}>
                  {initiative.timeline}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Initiative Details */}
        <div className={cn(
          "p-6 rounded-lg",
          "border",
          theme === 'dark'
            ? 'bg-gray-800/50 border-gray-700'
            : 'bg-gray-50/50 border-gray-200'
        )}>
          {selectedInitiative ? (
            <motion.div
              key={selectedInitiative.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div>
                <h4 className={cn(
                  "text-xl font-semibold mb-2",
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                )}>
                  {selectedInitiative.name}
                </h4>
                <p className={cn(
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                )}>
                  Target: {selectedInitiative.target}
                </p>
              </div>

              {/* Components */}
              <div>
                <h5 className={cn(
                  "text-sm font-medium mb-3",
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                )}>
                  Key Components
                </h5>
                <div className="grid grid-cols-2 gap-2">
                  {selectedInitiative.components.map((component) => (
                    <div
                      key={component}
                      className={cn(
                        "p-2 text-sm rounded",
                        theme === 'dark'
                          ? 'bg-gray-700/50 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      )}
                    >
                      {component}
                    </div>
                  ))}
                </div>
              </div>

              {/* Approved Projects */}
              {selectedInitiative.approvedProjects.length > 0 && (
                <div>
                  <h5 className={cn(
                    "text-sm font-medium mb-3",
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  )}>
                    Approved Projects
                  </h5>
                  <div className="space-y-3">
                    {selectedInitiative.approvedProjects.map((project) => (
                      <div
                        key={project.company}
                        className={cn(
                          "p-3 rounded",
                          theme === 'dark'
                            ? 'bg-gray-700/50'
                            : 'bg-white'
                        )}
                      >
                        <div className="flex justify-between">
                          <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                            {project.company}
                          </span>
                          <span className={cn(
                            "text-sm",
                            theme === 'dark'
                              ? 'text-purple-400'
                              : 'text-purple-600'
                          )}>
                            {project.investment}
                          </span>
                        </div>
                        <div className={cn(
                          "text-sm mt-1",
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        )}>
                          {project.location} • {project.jobs.toLocaleString()} jobs
                        </div>
                        <div className={cn(
                          "text-xs mt-2 inline-block px-2 py-1 rounded",
                          theme === 'dark'
                            ? 'bg-gray-600 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                        )}>
                          {project.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select an initiative to view details
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
