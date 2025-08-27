"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, ProjectMetrics, TimelineSection } from "./_components/shared";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { ResearchDashboard } from "@/components/main/sovereign-tech/dashboard";

// Import metadata
import { metadata } from "./metadata";

const SovereignTech = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 md:px-20">
      <header className="w-full max-w-7xl mx-auto text-center mb-16 mt-32">
        <motion.h1
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          India&apos;s Centennial Sovereign-Tech Framework
          <span className="block text-xl md:text-2xl mt-2 text-gray-300">(2025–2125)</span>
        </motion.h1>
        
        <motion.p
          variants={slideInFromLeft(0.5)}
          className="text-gray-300 text-lg max-w-3xl mx-auto"
        >
          A comprehensive framework designed to establish India as a global leader
          in indigenous technology development and innovation by 2125.
        </motion.p>
      </header>

      {/* Navigation */}
      <Breadcrumbs />

      {/* Research Dashboard */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <ResearchDashboard />
      </div>

      {/* Executive Summary */}
      <motion.div 
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mx-auto mb-16"
      >
        <motion.h1
          variants={slideInFromTop}
          className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Sovereign Tech Initiative
        </motion.h1>

        <motion.div 
          variants={slideInFromLeft(0.5)}
          className="text-gray-300 space-y-4"
        >
          <p>
            India&apos;s durable technological sovereignty depends on controlling correctness and composition of compute.
            The Sovereign-Tech Initiative focuses on publishing proof-carrying artifacts, mastering chiplet composition
            using mature nodes and domestic packaging, and operating carbon-aware datacenter systems tied to national
            energy realities.
          </p>
        </motion.div>
      </motion.div>

      {/* Impact Metrics */}
      <motion.div
        variants={slideInFromLeft(0.3)}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mx-auto mb-16"
      >
        <ProjectMetrics />
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={slideInFromRight(0.3)}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mx-auto mb-16"
      >
        <TimelineSection />
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto mb-16">
        {/* Agastya Card */}
        <motion.div
          variants={slideInFromLeft(0.2)}
          initial="hidden"
          animate="visible" 
          className="flex flex-col rounded-lg shadow-lg border border-[#2A0E61] p-6 bg-[rgba(3,0,20,0.37)] backdrop-blur-sm"
        >
          <div className="flex justify-center mb-6">
            <Image 
              src="/sovereign-tech/agastya.svg"
              alt="Agastya"
              width={80}
              height={80}
            />
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">Agastya — Verified RISC-V Trusted Compute Base</h3>
          <p className="text-gray-300 mb-6 flex-grow">
            A proof-carrying TEE microarchitecture and microkernel with machine-checked invariants.
            Provides secure enclaves for Indian government workloads, with verified boot and constant-time crypto.
          </p>
          <Link
            href="/sovereign-tech/agastya"
            className="button-primary px-6 py-3 rounded-lg text-white text-center hover:opacity-80"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Sutradhar Card */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible" 
          className="flex flex-col rounded-lg shadow-lg border border-[#2A0E61] p-6 bg-[rgba(3,0,20,0.37)] backdrop-blur-sm"
        >
          <div className="flex justify-center mb-6">
            <Image 
              src="/sovereign-tech/sutradhar.svg"
              alt="Sutradhar"
              width={80}
              height={80}
            />
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">Sutradhar — Open Formal EDA & Chiplet Assembly Flow</h3>
          <p className="text-gray-300 mb-6 flex-grow">
            A reproducible flow for assembling and verifying chiplets with formal contracts for die-to-die links.
            Enables India to integrate open chiplets over mature nodes with guaranteed correctness.
          </p>
          <Link
            href="/sovereign-tech/sutradhar"
            className="button-primary px-6 py-3 rounded-lg text-white text-center hover:opacity-80"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Bhagirath Card */}
        <motion.div
          variants={slideInFromRight(0.2)}
          initial="hidden"
          animate="visible"
          className="flex flex-col rounded-lg shadow-lg border border-[#2A0E61] p-6 bg-[rgba(3,0,20,0.37)] backdrop-blur-sm"
        >
          <div className="flex justify-center mb-6">
            <Image 
              src="/sovereign-tech/bhagirath.svg"
              alt="Bhagirath"
              width={80}
              height={80}
            />
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">Bhagirath — Carbon-Aware Datacenter Control</h3>
          <p className="text-gray-300 mb-6 flex-grow">
            Open telemetry, forecasting, scheduling, and facility control firmware for energy- and water-efficient compute.
            Aligns compute demand with renewable supply, with cryptographically auditable energy claims.
          </p>
          <Link
            href="/sovereign-tech/bhagirath"
            className="button-primary px-6 py-3 rounded-lg text-white text-center hover:opacity-80"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* Impact Section */}
      <motion.div
        variants={slideInFromRight(0.5)}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mb-16 border border-[#2A0E61] rounded-lg p-8 bg-[rgba(3,0,20,0.37)] backdrop-blur-sm"
      >
        <h2 className="text-2xl font-semibold text-white mb-6">Government Impact</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3">
          <li>Security with provenance (proof-based assurance)</li>
          <li>Strategic independence through chiplet-first design</li>
          <li>Climate resilience with carbon-aware infrastructure</li>
          <li>Talent pipeline producing verification-proficient engineers</li>
        </ul>
      </motion.div>

      {/* Contribute Section */}
      <motion.div
        variants={slideInFromLeft(0.8)}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl text-center mb-16"
      >
        <h2 className="text-2xl font-semibold text-white mb-6">Contribute & Learn</h2>
        <p className="text-gray-300 mb-8">
          Join as a coder, proofs-writer, testbed engineer, or policy fellow. Each project doubles as a curriculum and deployment pilot.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contribute?label=beginner-proof" className="button-primary px-6 py-3 rounded-lg text-white hover:opacity-80">
            Beginner Proofs
          </Link>
          <Link href="/contribute?label=lab-cohort" className="button-primary px-6 py-3 rounded-lg text-white hover:opacity-80">
            Lab Cohort
          </Link>
          <Link href="/contribute?label=residency" className="button-primary px-6 py-3 rounded-lg text-white hover:opacity-80">
            Residency
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SovereignTech;
