"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Search } from "lucide-react";
import { Publication, publications } from "@/data/publications";

const PublicationCard = ({ publication }: { publication: Publication }) => {
  const [showAbstract, setShowAbstract] = useState(false);

  const getTypeColor = (type: Publication["type"]) => {
    switch (type) {
      case "paper":
        return "from-blue-500 to-cyan-500";
      case "article":
        return "from-purple-500 to-pink-500";
      case "talk":
        return "from-yellow-500 to-orange-500";
      case "workshop":
        return "from-green-500 to-emerald-500";
      case "book":
        return "from-red-500 to-rose-500";
      case "video":
        return "from-indigo-500 to-purple-500";
      default:
        return "from-purple-500 to-cyan-500";
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 rounded-xl border border-[#2A0E61]/50 bg-[#0300145e] backdrop-blur-sm hover:border-purple-500/50 transition-colors"
    >
      {/* Icon & Type Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(publication.type)} text-white text-sm`}>
          {publication.type}
        </div>
        <publication.icon className="w-5 h-5 text-gray-400" />
      </div>

      {/* Title & Venue */}
      <h3 className="text-xl font-semibold text-white mb-2">{publication.title}</h3>
      <p className="text-purple-400 text-sm mb-3">{publication.venue}</p>

      {/* Abstract Toggle */}
      <button
        onClick={() => setShowAbstract(!showAbstract)}
        className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors mb-2"
      >
        {showAbstract ? "Hide Abstract" : "Show Abstract"}
      </button>

      {/* Abstract */}
      <AnimatePresence>
        {showAbstract && publication.abstract && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm mb-4">{publication.abstract}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {publication.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-full bg-[#2A0E61]/30 text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">{publication.date}</span>
        <a
          href={publication.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View Publication
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Citation */}
      {publication.citation && (
        <div className="mt-4 p-3 rounded bg-[#2A0E61]/20 text-gray-400 text-sm">
          <p className="font-mono">{publication.citation}</p>
        </div>
      )}
    </motion.div>
  );
};

export const Publications = () => {
  const [filter, setFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState<Publication["type"] | "all">("all");

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(filter.toLowerCase()) ||
      pub.abstract?.toLowerCase().includes(filter.toLowerCase()) ||
      pub.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()));
    
    const matchesType = typeFilter === "all" || pub.type === typeFilter;
    
    return matchesSearch && matchesType;
  });

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Publications & Talks
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Research papers, technical articles, conference talks, and workshops on sovereign technology and innovation.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search publications..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#2A0E61] bg-[#0300145e] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value as Publication["type"] | "all")}
            className="px-4 py-2 rounded-lg border border-[#2A0E61] bg-[#0300145e] text-white focus:outline-none focus:border-purple-500"
          >
            <option value="all">All Types</option>
            <option value="paper">Papers</option>
            <option value="article">Articles</option>
            <option value="talk">Talks</option>
            <option value="workshop">Workshops</option>
            <option value="book">Books</option>
            <option value="video">Videos</option>
          </select>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredPublications.map((publication) => (
              <PublicationCard
                key={publication.id}
                publication={publication}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredPublications.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 mt-8"
          >
            No publications found matching your criteria.
          </motion.p>
        )}
      </div>
    </section>
  );
};
