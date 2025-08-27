"use client";

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const Breadcrumbs = ({ project }: { project?: string }) => {
  return (
    <nav aria-label="Breadcrumb" className="text-sm mb-8">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-gray-400 hover:text-gray-300">
            Home
          </Link>
        </li>
        <ChevronRightIcon className="h-4 w-4 text-gray-600" />
        <li>
          <Link href="/sovereign-tech" className="text-gray-400 hover:text-gray-300">
            Sovereign-Tech
          </Link>
        </li>
        {project && (
          <>
            <ChevronRightIcon className="h-4 w-4 text-gray-600" />
            <li>
              <span className="text-gray-300" aria-current="page">
                {project}
              </span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};

export const ProjectMetrics = () => {
  return (
    <div className="border border-[#2A0E61] rounded-lg p-6 bg-[rgba(3,0,20,0.37)] backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white mb-4">Impact Metrics</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            12 months
          </p>
          <p className="text-gray-400 text-sm">TEE v0.1 Development</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            2/year
          </p>
          <p className="text-gray-400 text-sm">Chiplet Shuttles</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            ≥10%
          </p>
          <p className="text-gray-400 text-sm">Datacenter Efficiency Gain</p>
        </div>
      </div>
    </div>
  );
};

export const TimelineSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8">Strategic Timeline</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-[#2A0E61] rounded-lg p-6 bg-[rgba(3,0,20,0.37)]">
          <h3 className="text-lg font-semibold text-white mb-2">0–10 Years</h3>
          <p className="text-gray-300">Core IP Independence</p>
          <ul className="mt-4 space-y-2 text-gray-400 text-sm">
            <li>• TEE microarchitecture verification</li>
            <li>• Open EDA toolchain development</li>
            <li>• Initial sovereignty pilots</li>
          </ul>
        </div>
        <div className="border border-[#2A0E61] rounded-lg p-6 bg-[rgba(3,0,20,0.37)]">
          <h3 className="text-lg font-semibold text-white mb-2">10–30 Years</h3>
          <p className="text-gray-300">Scale & Integration</p>
          <ul className="mt-4 space-y-2 text-gray-400 text-sm">
            <li>• Regular chiplet shuttles</li>
            <li>• National datacenter network</li>
            <li>• Ecosystem expansion</li>
          </ul>
        </div>
        <div className="border border-[#2A0E61] rounded-lg p-6 bg-[rgba(3,0,20,0.37)]">
          <h3 className="text-lg font-semibold text-white mb-2">30–100 Years</h3>
          <p className="text-gray-300">Full Sovereignty</p>
          <ul className="mt-4 space-y-2 text-gray-400 text-sm">
            <li>• Sovereign compute fabric</li>
            <li>• Climate-neutral infrastructure</li>
            <li>• Global technology leadership</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export const NextProject = ({ 
  nextProject 
}: { 
  nextProject: { name: string; path: string; } 
}) => {
  return (
    <div className="mt-16 pt-8 border-t border-[#2A0E61]">
      <Link
        href={nextProject.path}
        className="flex items-center justify-between group"
      >
        <span className="text-gray-400">Next Project</span>
        <div className="flex items-center">
          <span className="text-lg font-semibold text-white group-hover:text-purple-500 transition-colors">
            {nextProject.name}
          </span>
          <ChevronRightIcon className="h-5 w-5 ml-2 text-gray-400 group-hover:text-purple-500 transition-colors" />
        </div>
      </Link>
    </div>
  );
};

export const ContributionSection = ({ project }: { project: string }) => {
  return (
    <section className="mt-16" aria-labelledby="contribute-heading">
      <h2 id="contribute-heading" className="text-2xl font-bold text-white mb-6">
        Learn & Contribute
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href={`/contribute?project=${project}&label=good-first-task`}
          className="border border-[#2A0E61] rounded-lg p-6 bg-[rgba(3,0,20,0.37)] hover:border-purple-500 transition-colors"
        >
          <h3 className="text-lg font-semibold text-white mb-2">Beginner Onboarding</h3>
          <p className="text-gray-400">Start with issues tagged good-first-task</p>
        </Link>
        <Link
          href={`/contribute?project=${project}&label=lab-cohort`}
          className="border border-[#2A0E61] rounded-lg p-6 bg-[rgba(3,0,20,0.37)] hover:border-purple-500 transition-colors"
        >
          <h3 className="text-lg font-semibold text-white mb-2">Research Cohorts</h3>
          <p className="text-gray-400">Join a research lab cohort</p>
        </Link>
        <Link
          href={`/contribute?project=${project}&label=residency`}
          className="border border-[#2A0E61] rounded-lg p-6 bg-[rgba(3,0,20,0.37)] hover:border-purple-500 transition-colors"
        >
          <h3 className="text-lg font-semibold text-white mb-2">Deployment Residencies</h3>
          <p className="text-gray-400">Work on production deployments</p>
        </Link>
      </div>
    </section>
  );
};
