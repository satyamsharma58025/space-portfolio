"use client";

import { motion } from "framer-motion";
import { CalendarDays, Tag, User } from "lucide-react";
import type { BlogPost } from "./BlogList";
import { MDXProvider } from "@mdx-js/react";

const components = {
  h1: (props: any) => (
    <h1 className="text-4xl font-bold text-white mb-6" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-semibold text-white mt-8 mb-4" {...props} />
  ),
  p: (props: any) => (
    <p className="text-gray-300 mb-4 leading-relaxed" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2" {...props} />
  ),
  li: (props: any) => (
    <li className="text-gray-300" {...props} />
  ),
  strong: (props: any) => (
    <strong className="text-purple-400 font-semibold" {...props} />
  ),
  a: (props: any) => (
    <a 
      className="text-cyan-400 hover:text-cyan-300 underline transition-colors" 
      target="_blank"
      rel="noopener noreferrer"
      {...props} 
    />
  ),
  blockquote: (props: any) => (
    <blockquote 
      className="border-l-4 border-purple-500 pl-4 italic text-gray-400 my-4"
      {...props} 
    />
  ),
  code: (props: any) => (
    <code 
      className="bg-[#2A0E61]/30 rounded px-1.5 py-0.5 text-purple-300 font-mono text-sm"
      {...props} 
    />
  ),
  pre: (props: any) => (
    <pre 
      className="bg-[#2A0E61]/30 rounded-lg p-4 overflow-x-auto my-4 font-mono text-sm text-purple-300"
      {...props} 
    />
  ),
};

export const BlogPostView = ({ 
  post, 
  children 
}: { 
  post: BlogPost;
  children: React.ReactNode;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <header className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-6"
          >
            {post.title}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-gray-500" />
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#2A0E61]/30 text-purple-300 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <MDXProvider components={components}>
          <div className="prose prose-invert prose-purple max-w-none">
            {children}
          </div>
        </MDXProvider>
      </div>
    </motion.article>
  );
};
