"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack Engineer & AI/LLM Systems Developer.
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              production-grade
            </span>{" "}
            systems with MERN, RAG, and agentic AI.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Engineer with 2+ years of experience shipping MERN applications, AI/LLM systems, and education-focused products that deliver measurable impact.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.9)}
          className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 my-2 max-w-[600px]"
        >
          Centennial Sovereign-Tech Initiative — Building India&apos;s century-long, open, and verifiable technology commons.
        </motion.p>

        <div className="flex gap-4">
          <motion.a
            variants={slideInFromLeft(1)}
            href="#about-me"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] px-4"
          >
            Learn more
          </motion.a>
          <motion.a
            variants={slideInFromLeft(1.1)}
            href="/sovereign-tech"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] px-4"
          >
            Explore Sovereign Tech
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
