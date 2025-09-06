'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { Investment, ManufacturingHub } from '../../types';
import dynamic from 'next/dynamic';

// Dynamically import Chart.js component to avoid SSR issues
const LineChart = dynamic(
  () => import('react-chartjs-2').then(mod => mod.Line),
  { ssr: false }
);

interface InvestmentTrackerProps {
  privateInvestments: Investment[];
  manufacturingHubs: ManufacturingHub[];
}

export function InvestmentTracker({
  privateInvestments,
  manufacturingHubs
}: InvestmentTrackerProps) {
  const { theme } = useTheme();

  // Prepare chart data
  const chartData = {
    labels: [2020, 2021, 2022, 2023, 2024, 2025],
    datasets: [
      {
        label: 'Private Investments ($B)',
        data: privateInvestments.reduce((acc, inv) => {
          acc[inv.year - 2020] = (acc[inv.year - 2020] || 0) + inv.amount;
          return acc;
        }, Array(6).fill(0)),
        borderColor: theme === 'dark' ? '#8b5cf6' : '#6d28d9',
        backgroundColor: theme === 'dark' ? '#8b5cf680' : '#6d28d980',
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: theme === 'dark' ? '#e5e7eb' : '#374151'
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: theme === 'dark' ? '#374151' : '#e5e7eb'
        },
        ticks: {
          color: theme === 'dark' ? '#e5e7eb' : '#374151'
        }
      },
      y: {
        grid: {
          color: theme === 'dark' ? '#374151' : '#e5e7eb'
        },
        ticks: {
          color: theme === 'dark' ? '#e5e7eb' : '#374151'
        }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Investment Chart */}
      <div className={cn(
        "p-6 rounded-xl",
        "border",
        theme === 'dark'
          ? 'bg-gray-900/50 border-gray-700'
          : 'bg-white/50 border-gray-200',
        "backdrop-blur-sm"
      )}>
        <h3 className={cn(
          "text-xl font-semibold mb-6",
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        )}>
          Investment Growth
        </h3>
        <div className="h-[300px]">
          <LineChart data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Manufacturing Hubs */}
      <div className={cn(
        "p-6 rounded-xl",
        "border",
        theme === 'dark'
          ? 'bg-gray-900/50 border-gray-700'
          : 'bg-white/50 border-gray-200',
        "backdrop-blur-sm"
      )}>
        <h3 className={cn(
          "text-xl font-semibold mb-6",
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        )}>
          Manufacturing Hubs
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {manufacturingHubs.map((hub, index) => (
            <motion.div
              key={hub.location}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "p-4 rounded-lg",
                "border",
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700'
                  : 'bg-gray-50/50 border-gray-200'
              )}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className={cn(
                    "font-semibold",
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  )}>
                    {hub.location}
                  </h4>
                  <p className={cn(
                    "text-sm mt-1",
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  )}>
                    Area: {hub.area}
                  </p>
                </div>
                <span className={cn(
                  "text-sm px-2 py-1 rounded-full",
                  hub.status === 'Operational'
                    ? 'bg-green-500/20 text-green-400'
                    : hub.status === 'Under Construction'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-purple-500/20 text-purple-400'
                )}>
                  {hub.status}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className={cn(
                    "text-sm",
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  )}>
                    Investment
                  </div>
                  <div className={cn(
                    "font-semibold",
                    theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                  )}>
                    ${hub.investment}B
                  </div>
                </div>
                <div>
                  <div className={cn(
                    "text-sm",
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  )}>
                    Jobs
                  </div>
                  <div className={cn(
                    "font-semibold",
                    theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                  )}>
                    {hub.jobs.toLocaleString()}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
