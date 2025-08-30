"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, Tag, User } from "lucide-react";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  summary: string;
};

const BlogCard = ({ post }: { post: BlogPost }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 rounded-xl border border-[#2A0E61]/50 bg-[#0300145e] backdrop-blur-sm hover:border-purple-500/50 transition-colors"
  >
    <Link href={`/blog/${post.slug}`} className="block group">
      <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
        {post.title}
      </h2>
      <p className="text-gray-400 mb-4">{post.summary}</p>
      
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <CalendarDays className="w-4 h-4" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <User className="w-4 h-4" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Tag className="w-4 h-4" />
          {post.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 rounded-full bg-[#2A0E61]/30 text-purple-300 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  </motion.article>
);

export const BlogList = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Blog & Insights
        </motion.h1>

        <div className="space-y-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
