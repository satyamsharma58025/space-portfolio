"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials, Testimonial } from "@/data/testimonials";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="relative p-8 rounded-xl border border-[#2A0E61]/50 bg-[#0300145e] backdrop-blur-sm"
  >
    {/* Quote Icon */}
    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
      <Quote className="w-4 h-4 text-white" />
    </div>

    {/* Content */}
    <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
      "{testimonial.content}"
    </blockquote>

    {/* Author Info */}
    <div className="flex items-end justify-between">
      <div>
        <div className="text-white font-semibold">{testimonial.name}</div>
        <div className="text-purple-400 text-sm">{testimonial.role}</div>
        <div className="text-gray-500 text-sm">{testimonial.organization}</div>
      </div>
      <div className="px-3 py-1 text-xs rounded-full bg-[#2A0E61]/30 text-purple-300">
        {testimonial.category}
      </div>
    </div>
  </motion.div>
);

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const prefersReducedMotion = 
    typeof window !== "undefined" 
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
      : false;

  useEffect(() => {
    if (!autoplay || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, prefersReducedMotion]);

  const next = () => {
    setAutoplay(false);
    setCurrentIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setAutoplay(false);
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            What People Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feedback from students, colleagues, and mentors about our collaborative journey in technology and education.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {[
                  currentIndex,
                  (currentIndex + 1) % testimonials.length,
                  (currentIndex + 2) % testimonials.length,
                ].map((index) => (
                  <TestimonialCard
                    key={testimonials[index].id}
                    testimonial={testimonials[index]}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-[#2A0E61]/30 hover:bg-[#2A0E61]/50 text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-[#2A0E61]/30 hover:bg-[#2A0E61]/50 text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
