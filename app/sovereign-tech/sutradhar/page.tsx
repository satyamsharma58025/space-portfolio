"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

const Sutradhar = () => {
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
              Sutradhar
            </h1>
            <h2 className="text-2xl text-gray-300 mb-4">
              Open Formal EDA & Chiplet Assembly Flow
            </h2>
          </motion.div>
          <motion.div variants={slideInFromRight(0.5)} className="md:w-1/3 flex justify-center">
            <Image
              src="/sovereign-tech/sutradhar.svg"
              alt="Sutradhar"
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
            Control over compute composition via chiplet assembly and formal verification
            is essential for technological sovereignty. We must master the art of
            integrating open chiplets over mature nodes with guaranteed correctness.
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
            <p>A comprehensive open toolchain featuring:</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>RTL → package flow with embedded formal proofs</li>
              <li>Die-to-die interface contracts and verification</li>
              <li>Thermal and timing analysis frameworks</li>
              <li>Package-level verification suite</li>
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
              Breaking the soft embargo of EDA tooling is crucial for India's semiconductor
              ambitions. By making the assembly recipe a national asset, we create a path
              to sovereign system integration capabilities.
            </p>
            <p>
              This enables India to leverage mature nodes while maintaining control over
              critical system composition and verification.
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
              <h4 className="text-lg text-white mb-2">v0.1 - Basic Integration Flow</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>2-chiplet composition with validated models</li>
                <li>Thermal and timing verification</li>
                <li>Basic interface contract checking</li>
              </ul>
            </div>

            <div className="border border-[#2A0E61] rounded-lg p-6 bg-[rgba(3,0,20,0.37)]">
              <h4 className="text-lg text-white mb-2">v0.2 - Advanced Features</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Automated scan chain insertion</li>
                <li>Built-in self-test generation</li>
                <li>Enhanced package-level verification</li>
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
              Join us in building India's chiplet integration capabilities:
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contribute?project=sutradhar&type=integration"
                className="button-primary px-6 py-3 rounded-lg text-white hover:opacity-80"
              >
                Chiplet Integration
              </Link>
              <Link
                href="/contribute?project=sutradhar&type=testing"
                className="button-primary px-6 py-3 rounded-lg text-white hover:opacity-80"
              >
                Test Generation
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Sutradhar;
