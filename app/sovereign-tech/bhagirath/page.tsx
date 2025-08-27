"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

const Bhagirath = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 md:px-20">
      <div className="w-full max-w-4xl mb-16 mt-32">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center gap-8 mb-12"
        >
          <motion.div variants={slideInFromLeft(0.5)} className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Bhagirath
            </h1>
            <h2 className="text-2xl text-gray-300 mb-4">
              Carbon-Aware Datacenter Control
            </h2>
          </motion.div>
          <motion.div variants={slideInFromRight(0.5)} className="md:w-1/3 flex justify-center">
            <Image
              src="/sovereign-tech/bhagirath.svg"
              alt="Bhagirath"
              width={120}
              height={120}
            />
          </motion.div>
        </motion.div>

        {/* Thesis */}
        <motion.section
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Thesis</h3>
          <p className="text-gray-300">
            True technological sovereignty means compute infrastructure that is aligned with
            India's sustainable energy and water resources. We must develop systems that
            turn our climate constraints into competitive advantages.
          </p>
        </motion.section>

        {/* What it is */}
        <motion.section
          variants={slideInFromRight(0.3)}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-4">What it is</h3>
          <div className="text-gray-300 space-y-4">
            <p>A comprehensive datacenter control system featuring:</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>Advanced telemetry and forecasting</li>
              <li>Workload scheduling optimization</li>
              <li>DVFS and facility control</li>
              <li>Waste heat recovery management</li>
              <li>Cryptographic energy auditing</li>
            </ul>
          </div>
        </motion.section>

        {/* Why it matters */}
        <motion.section
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Why it matters</h3>
          <div className="text-gray-300 space-y-4">
            <p>
              By developing control systems that deeply integrate with India's renewable energy
              infrastructure, we create a sustainable foundation for our digital future.
            </p>
            <p>
              This positions India to export reference implementations for climate-resilient
              computing infrastructure to other emerging economies.
            </p>
          </div>
        </motion.section>

        {/* Demonstration Path */}
        <motion.section
          variants={slideInFromRight(0.3)}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Demonstration Path</h3>
          <div className="space-y-6">
            <div className="border border-[#2A0E61] rounded-lg p-6 bg-[rgba(3,0,20,0.37)]">
              <h4 className="text-lg text-white mb-2">v0.1 - Core Infrastructure</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Initial cluster with PUE/WUE monitoring</li>
                <li>Basic renewable energy integration</li>
                <li>Preliminary efficiency metrics</li>
              </ul>
            </div>

            <div className="border border-[#2A0E61] rounded-lg p-6 bg-[rgba(3,0,20,0.37)]">
              <h4 className="text-lg text-white mb-2">v0.2 - Advanced Features</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Agastya-powered secure telemetry</li>
                <li>Advanced workload optimization</li>
                <li>Comprehensive energy attestation</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Contribution CTA */}
        <motion.section
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Contribute</h3>
          <div className="space-y-4">
            <p className="text-gray-300 mb-6">
              Help build India's sustainable computing infrastructure:
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contribute?project=bhagirath&type=datacenter"
                className="button-primary px-6 py-3 rounded-lg text-white hover:opacity-80"
              >
                Datacenter Pilots
              </Link>
              <Link
                href="/contribute?project=bhagirath&type=policy"
                className="button-primary px-6 py-3 rounded-lg text-white hover:opacity-80"
              >
                Policy Integration
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Bhagirath;
