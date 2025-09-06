'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface IndiaInvestment {
  company: string;
  amount: number; // in USD billions
  year: number;
  description: string;
}

interface Facility {
  company: string;
  location: string;
  type: 'Manufacturing' | 'R&D' | 'Design';
  employees: number;
  focus: string[];
}

interface IndiaPresenceProps {
  active: boolean;
}

export default function IndiaPresence({ active }: IndiaPresenceProps) {
  const { theme } = useTheme();

  if (!active) return null;

  const investments: IndiaInvestment[] = [
    {
      company: 'Micron',
      amount: 2.75,
      year: 2023,
      description: 'DRAM and NAND flash memory manufacturing facility in Gujarat'
    },
    {
      company: 'Intel',
      amount: 0.4,
      year: 2023,
      description: 'Expansion of design and engineering capabilities in Bengaluru'
    },
    {
      company: 'AMD',
      amount: 0.4,
      year: 2023,
      description: 'Large R&D facility in Bengaluru for next-gen processors'
    }
  ];

  const facilities: Facility[] = [
    {
      company: 'Intel',
      location: 'Bengaluru',
      type: 'R&D',
      employees: 13000,
      focus: ['Processor Design', 'AI Architecture', 'Software Development']
    },
    {
      company: 'AMD',
      location: 'Hyderabad',
      type: 'R&D',
      employees: 4500,
      focus: ['GPU Architecture', 'Machine Learning', 'Semi-custom Solutions']
    },
    {
      company: 'Micron',
      location: 'Gujarat',
      type: 'Manufacturing',
      employees: 5000,
      focus: ['Memory Manufacturing', 'Quality Control', 'Supply Chain']
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-12"
    >
      {/* Section Header */}
      <header className="text-center">
        <h2 className={cn(
          "text-3xl font-bold mb-4",
          "bg-clip-text text-transparent bg-gradient-to-r",
          "from-orange-500 via-purple-500 to-green-500"
        )}>
          India&apos;s Semiconductor Journey
        </h2>
        <p className={cn(
          "text-lg",
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        )}>
          Exploring recent investments and facilities in India&apos;s growing semiconductor ecosystem
        </p>
      </header>

      {/* Recent Investments */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {investments.map((investment, index) => (
          <motion.article
            key={investment.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "relative overflow-hidden",
              "rounded-2xl p-6",
              "border",
              theme === 'dark'
                ? 'bg-gray-900/50 border-gray-700 hover:border-green-500/50'
                : 'bg-white/50 border-gray-200 hover:border-green-500/30',
              "backdrop-blur-sm",
              "transition-all duration-300"
            )}
          >
            <h3 className={cn(
              "text-xl font-semibold mb-3",
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            )}>
              {investment.company}
            </h3>
            
            <div className="space-y-2">
              <p className={cn(
                "text-2xl font-bold",
                "bg-clip-text text-transparent bg-gradient-to-r",
                "from-green-400 to-emerald-600"
              )}>
                ${investment.amount}B
              </p>
              
              <p className={cn(
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              )}>
                {investment.year}
              </p>
              
              <p className={cn(
                "text-sm",
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              )}>
                {investment.description}
              </p>
            </div>

            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-100",
              "bg-gradient-to-br from-green-500/10 via-transparent to-transparent",
              "transition-opacity duration-300"
            )} />
          </motion.article>
        ))}
      </div>

      {/* Facilities Map */}
      <div className={cn(
        "p-8 rounded-2xl",
        theme === 'dark' ? 'bg-gray-900/50' : 'bg-white/50',
        "backdrop-blur-sm"
      )}>
        <h3 className={cn(
          "text-2xl font-bold mb-6",
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        )}>
          Major Semiconductor Facilities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={`${facility.company}-${facility.location}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "p-6 rounded-xl",
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100/50'
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className={cn(
                  "text-lg font-semibold",
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                )}>
                  {facility.company}
                </h4>
                <span className={cn(
                  "px-3 py-1 rounded-full text-sm",
                  theme === 'dark' ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'
                )}>
                  {facility.type}
                </span>
              </div>

              <div className="space-y-2">
                <p className={cn(
                  "flex items-center gap-2",
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                )}>
                  <span>📍</span> {facility.location}
                </p>
                
                <p className={cn(
                  "flex items-center gap-2",
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                )}>
                  <span>👥</span> {facility.employees.toLocaleString()} employees
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {facility.focus.map(area => (
                    <span
                      key={area}
                      className={cn(
                        "px-2 py-1 rounded text-xs",
                        theme === 'dark'
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-200 text-gray-700'
                      )}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
