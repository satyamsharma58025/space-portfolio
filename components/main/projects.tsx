'use client';

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

import { useState } from 'react';

type ProjectsProps = {
  className?: string;
};

export const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const categories = ['All', 'Web', 'AI', 'Blockchain'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16">
        My Projects
      </h1>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === category
                ? "bg-[#2A0E61] text-white shadow-lg shadow-purple-500/20"
                : "bg-[#0300145e] text-gray-400 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            category={project.category}
            techStack={project.techStack}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
};
