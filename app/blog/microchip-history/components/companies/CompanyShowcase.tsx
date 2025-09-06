'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { MarketShareChart } from '../companies/MarketShareChart';

interface Company {
  id: string;
  name: string;
  logo: string;
  founded: number;
  headquarters: string;
  marketCap: number;
  indiaPresence?: {
    employees: number;
    locations: string[];
    rdCenters: number;
    localInnovations: string[];
  };
}

interface CompanyShowcaseProps {
  active: boolean;
}

export default function CompanyShowcase({ active }: CompanyShowcaseProps) {
  const { theme } = useTheme();
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  if (!active) return null;

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
          "from-blue-500 via-purple-500 to-pink-500"
        )}>
          Industry Leaders
        </h2>
        <p className={cn(
          "text-lg",
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        )}>
          Explore the companies that shaped the semiconductor industry
        </p>
      </header>

      {/* Company Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topCompanies.map((company, index) => (
          <motion.article
            key={company.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "group relative overflow-hidden",
              "rounded-2xl p-6",
              "border",
              theme === 'dark'
                ? 'bg-gray-900/50 border-gray-700 hover:border-purple-500/50'
                : 'bg-white/50 border-gray-200 hover:border-purple-500/30',
              "backdrop-blur-sm",
              "transition-all duration-300"
            )}
            onClick={() => setSelectedCompany(company)}
          >
            {/* Company Logo */}
            <div className="relative h-12 w-full mb-6">
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Company Info */}
            <div className="space-y-4">
              <h3 className={cn(
                "text-xl font-semibold",
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              )}>
                {company.name}
              </h3>
              
              <div className="flex justify-between items-center text-sm">
                <span className={cn(
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                )}>
                  Founded: {company.founded}
                </span>
                <span className={cn(
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                )}>
                  HQ: {company.headquarters}
                </span>
              </div>

              {/* Key Metrics */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between">
                  <span className={cn(
                    "text-sm",
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  )}>
                    Market Cap
                  </span>
                  <span className={cn(
                    "font-semibold",
                    theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                  )}>
                    ${(company.marketCap / 1e9).toFixed(1)}B
                  </span>
                </div>
              </div>

              {/* India Presence Indicator */}
              {company.indiaPresence && (
                <div className={cn(
                  "inline-flex items-center gap-2 px-3 py-1 rounded-full",
                  "text-xs font-medium",
                  theme === 'dark'
                    ? 'bg-purple-500/20 text-purple-300'
                    : 'bg-purple-500/10 text-purple-700'
                )}>
                  <span>🇮🇳</span>
                  <span>{company.indiaPresence.employees.toLocaleString()} employees in India</span>
                </div>
              )}
            </div>

            {/* Hover Effect */}
            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-100",
              "bg-gradient-to-br from-purple-500/10 via-transparent to-transparent",
              "transition-opacity duration-300"
            )} />
          </motion.article>
        ))}
      </div>

      {/* Market Share Visualization */}
      <MarketShareChart companies={topCompanies} />
    </motion.section>
  );
}

// This would typically come from your data layer
const topCompanies: Company[] = [
  {
    id: "intel",
    name: "Intel Corporation",
    logo: "/companies/intel.svg",
    founded: 1968,
    headquarters: "Santa Clara, CA",
    marketCap: 150000000000, // $150B
    indiaPresence: {
      employees: 13000,
      locations: ["Bengaluru", "Hyderabad"],
      rdCenters: 2,
      localInnovations: ["Design Center Excellence", "AI Research Hub"]
    }
  },
  {
    id: "tsmc",
    name: "TSMC",
    logo: "/companies/tsmc.svg",
    founded: 1987,
    headquarters: "Hsinchu, Taiwan",
    marketCap: 450000000000, // $450B
    indiaPresence: {
      employees: 500,
      locations: ["Bengaluru"],
      rdCenters: 1,
      localInnovations: ["Process Technology R&D"]
    }
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    logo: "/companies/nvidia.svg",
    founded: 1993,
    headquarters: "Santa Clara, CA",
    marketCap: 500000000000, // $500B
    indiaPresence: {
      employees: 4000,
      locations: ["Pune", "Bengaluru", "Hyderabad"],
      rdCenters: 3,
      localInnovations: ["AI Architecture Design", "Graphics R&D"]
    }
  }
];
