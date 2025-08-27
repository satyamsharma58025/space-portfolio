'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-4">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center whitespace-nowrap group"
        >
          <div className="hidden md:block font-bold text-gray-300 text-lg tracking-wide group-hover:text-purple-400 transition-colors">
            Satyam Sharma
          </div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex h-full flex-row items-center justify-center flex-1 max-w-4xl mx-8">
          <div className="flex items-center justify-center gap-x-8 px-8 py-2.5 border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] rounded-full text-gray-200 backdrop-blur-sm shadow-lg shadow-purple-500/10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className={`cursor-pointer transition-all duration-300 whitespace-nowrap text-[15px] tracking-wide ${
                  link.isHighlighted 
                    ? "px-5 py-1.5 bg-[#2A0E61] rounded-full text-white hover:bg-[#3D1B8C] shadow-md shadow-purple-500/20"
                    : "hover:text-purple-400"
                }`}
              >
                {link.title}
              </Link>
            ))}

            {/* Source Code */}
            <div className="h-6 w-px bg-[rgba(112,66,248,0.38)]" />
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-purple-400 transition-colors whitespace-nowrap text-[15px] tracking-wide flex items-center gap-2"
            >
              <span>Source Code</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-sm p-6 flex flex-col items-center text-gray-300 md:hidden border-t border-purple-500/20 shadow-lg">
          {/* Links */}
          <div className="flex flex-col items-center gap-5 w-full max-w-[280px]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className={`cursor-pointer transition-colors w-full text-center py-2 ${
                  link.isHighlighted
                    ? "bg-[#2A0E61] rounded-full text-white hover:bg-[#3D1B8C] shadow-md shadow-purple-500/20"
                    : "hover:text-purple-400"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <div className="w-full h-px bg-purple-500/20 my-2" />
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-purple-400 transition-colors text-center w-full py-2 flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Source Code</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="hover:text-purple-400 transition-colors"
              >
                <Icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};