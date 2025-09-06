'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { IndiaPosition } from '../../types';
import { GovernmentInitiatives } from '../india-journey/GovernmentInitiatives';
import { InvestmentTracker } from '../india-journey/InvestmentTracker';

interface IndiaProgressProps {
  active: boolean;
}

export default function IndiaProgress({ active }: IndiaProgressProps) {
  const { theme } = useTheme();

  if (!active) return null;

  return (
    <motion.section
      className="space-y-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Section Header */}
      <header className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className={cn(
            "text-3xl font-bold mb-4",
            "bg-clip-text text-transparent bg-gradient-to-r",
            "from-orange-500 via-purple-500 to-blue-500"
          )}>
            India&apos;s Semiconductor Journey
          </h2>
          <p className={cn(
            "text-lg max-w-3xl mx-auto",
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          )}>
            Exploring India&apos;s emergence as a global semiconductor hub through
            strategic initiatives, investments, and technological innovation
          </p>
        </motion.div>
      </header>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            label: 'Current Market Share',
            value: `${indiaData.currentMarketShare}%`,
            growth: '+0.5% YoY',
            icon: '📈'
          },
          {
            label: 'Global Ranking',
            value: `#${indiaData.globalRanking}`,
            change: 'Up 3 positions',
            icon: '🌍'
          },
          {
            label: 'Design Centers',
            value: indiaData.designCenters.length.toString(),
            subtext: 'Major Global Players',
            icon: '🏢'
          }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className={cn(
              "relative p-6 rounded-xl",
              "border",
              theme === 'dark'
                ? 'bg-gray-900/50 border-gray-700'
                : 'bg-white/50 border-gray-200',
              "backdrop-blur-sm"
            )}
          >
            <div className="text-3xl mb-4">{stat.icon}</div>
            <h3 className={cn(
              "text-sm font-medium mb-2",
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            )}>
              {stat.label}
            </h3>
            <div className={cn(
              "text-2xl font-bold",
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            )}>
              {stat.value}
            </div>
            {(stat.growth || stat.change || stat.subtext) && (
              <div className={cn(
                "text-sm mt-2",
                theme === 'dark'
                  ? 'text-green-400'
                  : 'text-green-600'
              )}>
                {stat.growth || stat.change || stat.subtext}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Government Initiatives */}
      <GovernmentInitiatives initiatives={indiaData.governmentInitiatives} />

      {/* Investment Tracker */}
      <InvestmentTracker
        privateInvestments={indiaData.privateInvestments}
        manufacturingHubs={indiaData.manufacturingHubs}
      />

      {/* Future Roadmap */}
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
          Vision 2030: Roadmap to Success
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Projections */}
          <div>
            <h4 className={cn(
              "text-lg font-semibold mb-4",
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            )}>
              Key Projections
            </h4>
            <div className="space-y-4">
              {indiaData.projections2030.map((projection, index) => (
                <motion.div
                  key={projection.metric}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex justify-between items-center"
                >
                  <span className={cn(
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  )}>
                    {projection.metric}
                  </span>
                  <span className={cn(
                    "font-semibold",
                    theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                  )}>
                    {typeof projection.value2030 === 'number'
                      ? projection.value2030.toLocaleString()
                      : projection.value2030}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Focus Areas */}
          <div>
            <h4 className={cn(
              "text-lg font-semibold mb-4",
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            )}>
              Strategic Focus Areas
            </h4>
            <div className="space-y-3">
              {[
                'Advanced Manufacturing Capabilities',
                'R&D and Innovation Centers',
                'Skilled Workforce Development',
                'Supply Chain Resilience',
                'Global Partnerships'
              ].map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg",
                    theme === 'dark'
                      ? 'bg-gray-800/50 text-gray-300'
                      : 'bg-gray-100/50 text-gray-700'
                  )}
                >
                  <span className="text-purple-500">•</span>
                  {area}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

// This would typically come from your data layer
const indiaData: IndiaPosition = {
  currentMarketShare: 0.1,
  globalRanking: 15,
  governmentInitiatives: [],
  privateInvestments: [],
  skillDevelopment: [],
  manufacturingHubs: [],
  designCenters: [],
  startupEcosystem: [],
  challenges: [],
  opportunities: [],
  projections2030: [
    { metric: 'Market Share', value2025: 3, value2030: 10, cagr: 58.5 },
    { metric: 'Employment (Millions)', value2025: 1, value2030: 6, cagr: 43.1 },
    { metric: 'Revenue ($B)', value2025: 100, value2030: 300, cagr: 24.6 }
  ]
};
