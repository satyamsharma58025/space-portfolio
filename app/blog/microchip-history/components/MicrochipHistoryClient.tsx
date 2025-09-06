'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMicrochipData } from '@/hooks/useMicrochipData';
import { MicrochipEra } from '@/types';
import { sanitizeHTML } from '@/utils';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

// Dynamically import visualization components
const CompanyShowcase = dynamic(
  () => import('./companies/CompanyShowcase'),
  {
    loading: () => <div className="w-full h-96 bg-gray-800 rounded-lg animate-pulse" />,
    ssr: false
  }
);

const IndiaPresence = dynamic(
  () => import('./companies/IndiaPresence'),
  {
    loading: () => <div className="w-full h-96 bg-gray-800 rounded-lg animate-pulse" />,
    ssr: false
  }
);

const ChipArchitecture3D = dynamic(
  () => import('./interactive/ChipEvolutionViz').then(mod => mod.default),
  {
    loading: () => <Viz3DSkeleton />,
    ssr: false
  }
);

// Fallback components for dynamic imports
const Viz3DSkeleton: React.FC = () => (
  <div className="w-full h-96 bg-gray-800 rounded-lg animate-pulse" />
);

const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const MicrochipHistoryClient: React.FC = () => {
  const { theme } = useTheme();
  const [selectedEra, setSelectedEra] = useState<MicrochipEra | null>(null);
  const [activeSection, setActiveSection] = useState('timeline');
  
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  const { data, isLoading, error } = useMicrochipData();

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);

  const handleEraSelect = useCallback((era: MicrochipEra) => {
    setSelectedEra(era);
    // Track era selection in analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'select_era', {
        era_name: era.name,
        era_year: era.year,
        event_category: 'Timeline Navigation',
        event_label: `${era.year}: ${era.name}`
      });
    }
  }, []);

  useEffect(() => {
    // Track section changes
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_section', {
        section_name: activeSection,
        event_category: 'Section Navigation'
      });
    }
  }, [activeSection]);

  useEffect(() => {
    if (error) {
      // Log error to monitoring service
      console.error('Microchip history data error:', error);
      // Track error in analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'data_error', {
          error_message: error.message,
          event_category: 'Error'
        });
      }
    }
  }, [error]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h2 className={cn(
          "text-2xl font-bold mb-4",
          theme === 'dark' ? 'text-red-400' : 'text-red-600'
        )}>
          Unable to load microchip history
        </h2>
        <p className={cn(
          "max-w-md",
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        )}>
          We&apos;re experiencing technical difficulties. Please try refreshing the page.
        </p>
      </div>
    );
  }

  if (!data || !data.eras || data.eras.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h2 className={cn(
          "text-2xl font-bold mb-4",
          theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
        )}>
          No timeline data available
        </h2>
        <p className={cn(
          "max-w-md",
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        )}>
          The microchip history timeline is currently being updated.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
        "relative z-10"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <motion.header
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className={cn(
          "text-4xl sm:text-5xl lg:text-6xl font-bold mb-6",
          "bg-clip-text text-transparent",
          "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        )}>
          The Evolution of Microchips
        </h1>
        <p className={cn(
          "text-lg sm:text-xl",
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700',
          "max-w-3xl mx-auto"
        )}>
          From the first transistor to quantum computing, explore the revolutionary
          journey that shaped our digital world
        </p>
      </motion.header>

      {/* Navigation */}
      <nav className="flex justify-center space-x-6 mb-12">
        {['timeline', 'companies', 'india', 'future'].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={cn(
              "px-4 py-2 rounded-full transition-all",
              "text-sm font-medium",
              activeSection === section
                ? "bg-purple-500 text-white"
                : theme === 'dark'
                  ? "text-gray-300 hover:bg-purple-500/20"
                  : "text-gray-700 hover:bg-purple-500/20"
            )}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="space-y-16" ref={timelineRef}>
        {activeSection === 'companies' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CompanyShowcase active={activeSection === 'companies'} />
          </motion.div>
        )}

        {activeSection === 'timeline' && (
          <motion.div
            style={{ opacity, scale }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Timeline */}
            <div className="space-y-8">
              {data.eras.map((era) => (
                <motion.div
                  key={era.year}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleEraSelect(era)}
                  className={cn(
                    "p-6 rounded-lg cursor-pointer transition-colors",
                    selectedEra?.year === era.year
                      ? "bg-purple-900 bg-opacity-50 border-2 border-purple-500"
                      : theme === 'dark'
                        ? "bg-gray-900 bg-opacity-30 hover:bg-purple-900 hover:bg-opacity-30"
                        : "bg-white bg-opacity-30 hover:bg-purple-100"
                  )}
                >
                  <h3 className={cn(
                    "text-2xl font-semibold mb-2",
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  )}>
                    {era.year}: {era.name}
                  </h3>
                  <div 
                    className={cn(
                      "prose max-w-none",
                      theme === 'dark' ? 'prose-invert' : 'prose-gray'
                    )}
                    dangerouslySetInnerHTML={{ 
                      __html: sanitizeHTML(era.description)
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Details Panel */}
            <div className="lg:sticky lg:top-24 h-fit">
              {selectedEra ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "p-8 rounded-lg",
                    theme === 'dark'
                      ? "bg-gray-900 bg-opacity-50"
                      : "bg-white bg-opacity-90"
                  )}
                >
                  <h2 className={cn(
                    "text-3xl font-bold mb-6",
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  )}>
                    {selectedEra.name}
                  </h2>
                  
                  <div className="space-y-6">
                    {selectedEra.companies && selectedEra.companies.length > 0 && (
                      <div>
                        <h3 className={cn(
                          "text-xl font-semibold mb-3",
                          theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                        )}>
                          Key Companies
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {selectedEra.companies.map((company) => (
                            <div 
                              key={company.name}
                              className={cn(
                                "p-4 rounded",
                                theme === 'dark'
                                  ? "bg-gray-800 bg-opacity-50"
                                  : "bg-gray-100"
                              )}
                            >
                              <h4 className={cn(
                                "font-medium",
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                              )}>
                                {company.name}
                              </h4>
                              <p className={cn(
                                "text-sm",
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                              )}>
                                {company.contribution}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedEra.innovations && (
                      <div>
                        <h3 className={cn(
                          "text-xl font-semibold mb-3",
                          theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                        )}>
                          Key Innovations
                        </h3>
                        <ul className={cn(
                          "list-disc list-inside space-y-2",
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        )}>
                          {selectedEra.innovations.map((innovation, index) => (
                            <li key={index}>{innovation}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedEra.impact && (
                      <div>
                        <h3 className={cn(
                          "text-xl font-semibold mb-3",
                          theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                        )}>
                          Industry Impact
                        </h3>
                        <div 
                          className={cn(
                            "prose max-w-none",
                            theme === 'dark' ? 'prose-invert' : 'prose-gray'
                          )}
                          dangerouslySetInnerHTML={{ 
                            __html: sanitizeHTML(selectedEra.impact)
                          }}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={cn(
                    "p-8 rounded-lg text-center",
                    theme === 'dark'
                      ? "bg-gray-900 bg-opacity-50"
                      : "bg-white bg-opacity-90"
                  )}
                >
                  <p className={cn(
                    "text-lg",
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  )}>
                    Select an era from the timeline to view detailed information
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {activeSection === 'india' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <IndiaPresence active={activeSection === 'india'} />
          </motion.div>
        )}

        {activeSection === 'future' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ChipArchitecture3D active={activeSection === 'future'} />
          </motion.div>
        )}
      </main>
    </motion.div>
  );
};

export default MicrochipHistoryClient;
