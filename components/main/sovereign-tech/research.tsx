"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";

type Citation = {
  id: string;
  title: string;
  authors: string[];
  conference: string;
  year: number;
  link: string;
};

export const ResearchCitation = ({ citation }: { citation: Citation }) => (
  <motion.div
    variants={slideInFromLeft(0.2)}
    className="flex flex-col p-4 border border-[#2A0E61] rounded-lg bg-[rgba(3,0,20,0.37)] backdrop-blur-sm hover:border-purple-500/50 transition-colors"
  >
    <a
      href={citation.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <h4 className="text-white font-medium mb-2 group-hover:text-purple-400 transition-colors">
        {citation.title}
      </h4>
      <p className="text-gray-400 text-sm mb-2">
        {citation.authors.join(", ")}
      </p>
      <div className="flex items-center justify-between text-xs">
        <span className="text-gray-500">{citation.conference}</span>
        <span className="text-purple-400">{citation.year}</span>
      </div>
    </a>
  </motion.div>
);

export const TechnicalSpec = ({
  spec,
  value,
  tooltip
}: {
  spec: string;
  value: string;
  tooltip?: string;
}) => (
  <div className="flex items-center justify-between py-2 border-b border-[#2A0E61] last:border-0">
    <div className="flex items-center">
      <span className="text-gray-400 text-sm">{spec}</span>
      {tooltip && (
        <div className="group relative ml-2">
          <span className="cursor-help text-gray-500">ⓘ</span>
          <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-48 p-2 text-xs text-gray-300 bg-[#1A0941] border border-[#2A0E61] rounded-md">
            {tooltip}
          </div>
        </div>
      )}
    </div>
    <span className="text-white text-sm font-mono">{value}</span>
  </div>
);

export const ResearchMetric = ({
  label,
  value,
  trend,
  description
}: {
  label: string;
  value: string;
  trend?: "up" | "down" | "neutral";
  description: string;
}) => {
  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-green-500";
      case "down":
        return "text-red-500";
      default:
        return "text-gray-400";
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return "↑";
      case "down":
        return "↓";
      default:
        return "→";
    }
  };

  return (
    <div className="flex flex-col p-4 border border-[#2A0E61] rounded-lg bg-[rgba(3,0,20,0.37)]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400 text-sm">{label}</span>
        <div className={`flex items-center ${getTrendColor()}`}>
          <span className="text-2xl font-medium">{value}</span>
          <span className="ml-1">{getTrendIcon()}</span>
        </div>
      </div>
      <p className="text-gray-500 text-xs">{description}</p>
    </div>
  );
};

export const ResearchTimeline = ({
  events
}: {
  events: {
    date: string;
    title: string;
    description: string;
    status?: "completed" | "in-progress" | "upcoming";
  }[];
}) => (
  <div className="relative">
    <div className="absolute left-4 top-0 bottom-0 w-px bg-[#2A0E61]" />
    {events.map((event, index) => (
      <motion.div
        key={index}
        variants={slideInFromLeft(0.1 * index)}
        className="flex ml-8 mb-8 last:mb-0 relative"
      >
        <div
          className={`absolute left-[-24px] w-4 h-4 rounded-full border-2 ${
            event.status === "completed"
              ? "bg-purple-500 border-purple-700"
              : event.status === "in-progress"
              ? "bg-yellow-500 border-yellow-700"
              : "bg-[#2A0E61] border-gray-700"
          }`}
        />
        <div className="flex-1">
          <div className="text-sm text-gray-400 mb-1">{event.date}</div>
          <h4 className="text-white font-medium mb-1">{event.title}</h4>
          <p className="text-gray-500 text-sm">{event.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

export const DataVisualization = ({
  data,
  title,
  description
}: {
  data: { label: string; value: number }[];
  title: string;
  description: string;
}) => {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="p-4 border border-[#2A0E61] rounded-lg bg-[rgba(3,0,20,0.37)]">
      <h4 className="text-white font-medium mb-2">{title}</h4>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">{item.label}</span>
              <span className="text-white">{item.value}</span>
            </div>
            <div className="h-2 bg-[#1A0941] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(item.value / maxValue) * 100}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
