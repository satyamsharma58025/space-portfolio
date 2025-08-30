'use client';

import { motion } from 'framer-motion';

const timelineItems = [
  {
    period: '2025-2030',
    title: 'Foundation Building',
    items: [
      'Complete MCA with focus on Sovereign Tech',
      'Establish teaching framework for tech independence',
      'Launch first series of blockchain innovations',
      'Build community around tech sovereignty'
    ]
  },
  {
    period: '2030-2040',
    title: 'Scaling Impact',
    items: [
      'Create comprehensive tech education platform',
      'Lead major open-source initiatives',
      'Develop sovereign cloud infrastructure',
      'Expand teaching methodology internationally'
    ]
  },
  {
    period: '2040-2060',
    title: 'Innovation & Research',
    items: [
      'Establish research institute for sovereign tech',
      'Pioneer new educational paradigms',
      'Contribute to national tech policies',
      'Create sustainable tech ecosystems'
    ]
  },
  {
    period: '2060-2100',
    title: 'Legacy Building',
    items: [
      'Global tech sovereignty framework',
      'Next-gen teaching methodologies',
      'Sustainable tech infrastructure',
      'Knowledge preservation systems'
    ]
  },
  {
    period: '2100-2125',
    title: 'Future Foundation',
    items: [
      'Long-term tech preservation',
      'Multi-generational knowledge transfer',
      'Sustainable tech ecosystems',
      'Universal tech accessibility'
    ]
  }
];

export default function VisionPage() {
  return (
    <div className="min-h-screen w-full bg-[#030014] overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
        >
          Vision & Roadmap (2025–2125)
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg mb-12 text-center max-w-3xl mx-auto"
        >
          A century-long commitment to technological sovereignty, education, and sustainable development.
        </motion.p>

        <div className="space-y-16">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="md:w-1/3">
                <div className="bg-[#2A0E61] p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.period}</h3>
                  <h4 className="text-purple-400 text-lg">{item.title}</h4>
                </div>
              </div>
              
              <div className="hidden md:block w-px h-full bg-purple-700 mx-4"></div>
              
              <div className="md:w-2/3">
                <ul className="space-y-4">
                  {item.items.map((listItem, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-purple-500 mt-1">•</span>
                      {listItem}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
