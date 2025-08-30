"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useNavigation } from "@/lib/navigation-context";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

const SEARCH_SECTIONS = [
  {
    heading: "Pages",
    items: [
      { title: "Home", href: "/" },
      { title: "Blog", href: "/blog" },
      { title: "Dashboard", href: "/dashboard" },
      { title: "Vision", href: "/vision" },
      { title: "Students", href: "/students" },
      { title: "Downloads", href: "/exports" },
    ],
  },
  {
    heading: "Blog Posts",
    items: [
      { 
        title: "The Path to Tech Sovereignty",
        href: "/blog/path-to-tech-sovereignty",
      },
    ],
  },
];

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const { isSearchOpen, toggleSearch } = useNavigation();
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggleSearch();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [toggleSearch]);

  const handleSelect = (href: string) => {
    router.push(href);
    toggleSearch();
  };

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="min-h-screen flex items-start justify-center pt-16 px-4">
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleSearch}
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-2xl w-full bg-[#0E1016] rounded-xl shadow-2xl"
        >
          <Command
            className="relative rounded-xl overflow-hidden"
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === "Escape") {
                toggleSearch();
              }
            }}
          >
            <div className="flex items-center border-b border-[#2A0E61]">
              <Search className="ml-4 h-4 w-4 text-gray-400" />
              <Command.Input
                placeholder="Search pages, blog posts..."
                className="flex-1 px-4 py-3 text-white bg-transparent border-0 outline-none placeholder:text-gray-400"
              />
              <kbd className="mr-4 px-2 py-1 text-xs bg-[#2A0E61]/30 text-gray-400 rounded">
                ESC
              </kbd>
            </div>

            <Command.List className="py-4">
              {SEARCH_SECTIONS.map((section) => (
                <Command.Group
                  key={section.heading}
                  heading={
                    <div className="px-4 py-2 text-xs text-gray-400">
                      {section.heading}
                    </div>
                  }
                >
                  {section.items.map((item) => (
                    <Command.Item
                      key={item.href}
                      onSelect={() => handleSelect(item.href)}
                      className="px-4 py-2 text-sm text-white hover:bg-[#2A0E61]/30 cursor-pointer"
                    >
                      {item.title}
                    </Command.Item>
                  ))}
                </Command.Group>
              ))}
            </Command.List>
          </Command>
        </motion.div>
      </div>
    </div>
  );
}
