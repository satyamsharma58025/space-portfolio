"use client";

import { motion } from "framer-motion";
import {
  ResearchCitation,
  ResearchMetric,
  DataVisualization,
  ResearchTimeline,
  TechnicalSpec
} from "./research";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

const citations = [
  {
    id: "tech2025",
    title: "India's Technology Sovereignty: A 100-Year Vision",
    authors: ["Ministry of Electronics and IT", "NITI Aayog"],
    conference: "Digital India Initiative",
    year: 2025,
    link: "#"
  },
  {
    id: "quantum2024",
    title: "Quantum Computing Applications in National Security",
    authors: ["Indian Institute of Science", "DRDO"],
    conference: "National Security Tech Summit",
    year: 2024,
    link: "#"
  }
];

const metrics = [
  {
    label: "Tech Independence Index",
    value: "78.5%",
    trend: "up",
    description: "Measure of self-reliance in critical technology sectors"
  },
  {
    label: "Indigenous IP Generation",
    value: "12,458",
    trend: "up",
    description: "Patents filed in strategic technology areas"
  },
  {
    label: "Research Investment",
    value: "₹2.8T",
    trend: "up",
    description: "Annual investment in sovereign technology R&D"
  }
];

const timeline = [
  {
    date: "2025",
    title: "Framework Launch",
    description: "Initial implementation of Sovereign-Tech Framework",
    status: "completed"
  },
  {
    date: "2030",
    title: "Phase 1 Completion",
    description: "Achievement of core technology independence goals",
    status: "upcoming"
  },
  {
    date: "2040",
    title: "Innovation Hub Status",
    description: "India becomes a global technology innovation hub",
    status: "upcoming"
  }
];

const techSpecs = [
  {
    spec: "Framework Version",
    value: "1.0.0",
    tooltip: "Current implementation version of the Sovereign-Tech Framework"
  },
  {
    spec: "Compliance Level",
    value: "Level 4",
    tooltip: "Framework compliance level based on implementation metrics"
  },
  {
    spec: "Security Rating",
    value: "A+",
    tooltip: "National security standards compliance rating"
  }
];

const progressData = [
  { label: "Semiconductor", value: 65 },
  { label: "Quantum Computing", value: 45 },
  { label: "AI/ML", value: 82 },
  { label: "Cybersecurity", value: 88 },
  { label: "Space Tech", value: 75 }
];

export const ResearchDashboard = () => {
  return (
    <div className="w-full flex flex-col gap-8 py-10">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {metrics.map((metric, index) => (
          <ResearchMetric key={index} {...metric} />
        ))}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={slideInFromLeft(0.3)} className="space-y-4">
          <h3 className="text-white text-xl font-semibold mb-4">
            Research Timeline
          </h3>
          <ResearchTimeline events={timeline} />
        </motion.div>

        <motion.div variants={slideInFromRight(0.3)} className="space-y-4">
          <h3 className="text-white text-xl font-semibold mb-4">
            Progress Tracking
          </h3>
          <DataVisualization
            data={progressData}
            title="Technology Sector Progress"
            description="Current progress in key sovereign technology sectors"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={slideInFromLeft(0.4)} className="space-y-4">
          <h3 className="text-white text-xl font-semibold mb-4">
            Technical Specifications
          </h3>
          <div className="p-4 border border-[#2A0E61] rounded-lg bg-[rgba(3,0,20,0.37)]">
            {techSpecs.map((spec, index) => (
              <TechnicalSpec key={index} {...spec} />
            ))}
          </div>
        </motion.div>

        <motion.div variants={slideInFromRight(0.4)} className="space-y-4">
          <h3 className="text-white text-xl font-semibold mb-4">
            Recent Publications
          </h3>
          <div className="space-y-4">
            {citations.map((citation) => (
              <ResearchCitation key={citation.id} citation={citation} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
