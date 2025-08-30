'use client';

import { motion } from 'framer-motion';

interface Metric {
  label: string;
  value: string;
  change: number;
  timeframe: string;
}

const metrics: Metric[] = [
  {
    label: 'GitHub Commits',
    value: '2,547',
    change: 12.5,
    timeframe: 'vs. last month'
  },
  {
    label: 'Blog Posts',
    value: '42',
    change: 8.3,
    timeframe: 'vs. last month'
  },
  {
    label: 'Teaching Hours',
    value: '156',
    change: 15.2,
    timeframe: 'vs. last month'
  },
  {
    label: 'Students Mentored',
    value: '85',
    change: 5.7,
    timeframe: 'vs. last month'
  }
];

const activities = [
  {
    type: 'commit',
    repo: 'space-portfolio',
    message: 'feat: add vision roadmap page',
    timestamp: '2 hours ago'
  },
  {
    type: 'blog',
    title: 'The Path to Tech Sovereignty',
    action: 'Published',
    timestamp: '1 day ago'
  },
  {
    type: 'teaching',
    title: 'Advanced Blockchain Workshop',
    action: 'Conducted',
    timestamp: '2 days ago'
  }
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen w-full bg-[#030014] overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          Activity Dashboard
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#2A0E61]/30 rounded-lg p-6"
            >
              <h3 className="text-gray-400 text-sm mb-2">{metric.label}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">{metric.value}</span>
                <span className={`text-sm ${metric.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.change >= 0 ? '+' : ''}{metric.change}%
                </span>
              </div>
              <p className="text-gray-500 text-xs mt-1">{metric.timeframe}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#2A0E61]/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'commit' ? 'bg-purple-500' :
                  activity.type === 'blog' ? 'bg-blue-500' :
                  'bg-green-500'
                }`} />
                <div className="flex-1">
                  <p className="text-gray-300">
                    {activity.type === 'commit' ? (
                      <>
                        Pushed to <span className="text-purple-400">{activity.repo}</span>:
                        {' '}{activity.message}
                      </>
                    ) : (
                      <>
                        {activity.action} <span className="text-purple-400">{activity.title}</span>
                      </>
                    )}
                  </p>
                </div>
                <span className="text-gray-500 text-sm">{activity.timestamp}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
