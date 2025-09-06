'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface CompanyData {
  name: string;
  marketCap: number;
}

interface MarketShareChartProps {
  companies: CompanyData[];
}

export function MarketShareChart({ companies }: MarketShareChartProps) {
  const { theme } = useTheme();
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!chartRef.current || companies.length === 0) return;

    // Clear previous chart
    d3.select(chartRef.current).selectAll('*').remove();

    // Setup dimensions
    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 40, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Create SVG
    const svg = d3.select(chartRef.current)
      .attr('width', width)
      .attr('height', height);

    // Create scales
    const xScale = d3.scaleBand()
      .domain(companies.map(c => c.name))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(companies, (c: CompanyData) => c.marketCap) || 0])
      .range([height - margin.bottom, margin.top]);

    // Create gradient for bars
    const gradient = svg.append('defs')
      .append('linearGradient')
      .attr('id', 'bar-gradient')
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', '0')
      .attr('y1', height - margin.bottom)
      .attr('x2', '0')
      .attr('y2', margin.top);

    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', theme === 'dark' ? '#9333ea' : '#a855f7');

    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', theme === 'dark' ? '#6366f1' : '#818cf8');

    // Create bars
    svg.selectAll('rect')
      .data(companies)
      .enter()
      .append('rect')
      .attr('x', (d: CompanyData) => xScale(d.name) || 0)
      .attr('y', (d: CompanyData) => yScale(d.marketCap))
      .attr('width', xScale.bandwidth())
      .attr('height', (d: CompanyData) => height - margin.bottom - yScale(d.marketCap))
      .attr('fill', 'url(#bar-gradient)')
      .attr('rx', 4)
      .attr('ry', 4);

    // Add axes
    const xAxis = d3.axisBottom(xScale)
      .tickSize(0);

    const yAxis = d3.axisLeft(yScale)
      .tickFormat((d: any) => `$${d3.format('.0s')(d)}`)
      .tickSize(-innerWidth);

    // Add x-axis
    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(xAxis)
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .style('fill', theme === 'dark' ? '#9ca3af' : '#4b5563');

    // Add y-axis
    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(yAxis)
      .style('color', theme === 'dark' ? '#4b5563' : '#9ca3af')
      .call((g: d3.Selection<SVGGElement, unknown, null, undefined>) => 
        g.select('.domain').remove())
      .call((g: d3.Selection<SVGGElement, unknown, null, undefined>) => 
        g.selectAll('.tick line')
          .attr('stroke', theme === 'dark' ? '#374151' : '#e5e7eb')
          .attr('stroke-dasharray', '2,2'));

    // Add labels
    svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', margin.left / 3)
      .attr('x', -height / 2)
      .attr('text-anchor', 'middle')
      .style('fill', theme === 'dark' ? '#9ca3af' : '#4b5563')
      .text('Market Cap (USD)');

  }, [companies, theme]);

  return (
    <motion.div
      className="relative mt-12 p-6 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className={cn(
        "absolute inset-0",
        theme === 'dark' ? 'bg-gray-900/50' : 'bg-white/50',
        "backdrop-blur-sm"
      )} />

      <div className="relative">
        <h3 className={cn(
          "text-xl font-semibold mb-6",
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        )}>
          Market Capitalization Comparison
        </h3>

        <div className="flex justify-center">
          <svg ref={chartRef} className="max-w-full h-auto" />
        </div>
      </div>
    </motion.div>
  );
}
