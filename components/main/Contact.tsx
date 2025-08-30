"use client";

import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { Newsletter } from "./Newsletter";

export const Contact = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or want to collaborate? Feel free to reach out or subscribe to my newsletter for updates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-gray-400">
                I&apos;ll get back to you as soon as possible.
              </p>
            </motion.div>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:mt-20"
            >
              <Newsletter />
            </motion.div>

            {/* Additional Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl border border-[#2A0E61]/50 bg-[#0300145e] backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Other Ways to Connect
              </h3>
              <div className="space-y-3 text-gray-400">
                <p>📧 Email: contact@example.com</p>
                <p>🌐 GitHub: github.com/satyamsharma58025</p>
                <p>💼 LinkedIn: linkedin.com/in/satyamsharma</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
