import DOMPurify from 'dompurify';
import { MicrochipEra } from '../types';
import { z } from 'zod';

// Sanitization configuration
const ALLOWED_TAGS = ['b', 'i', 'em', 'strong', 'br', 'p', 'span'];
const ALLOWED_ATTR = ['class'];

// Define runtime validation schemas
const CompanySchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string(),
  founded: z.string(),
  marketCap: z.number(),
  keyProducts: z.array(z.object({
    name: z.string(),
    description: z.string()
  })),
  indiaPresence: z.object({
    employees: z.number(),
    locations: z.array(z.string()),
    investments: z.number(),
    facilities: z.array(z.object({
      name: z.string(),
      type: z.string(),
      location: z.string()
    }))
  }).optional()
});

const MarketImpactSchema = z.object({
  economicValue: z.string(),
  jobsCreated: z.number(),
  globalMarketShare: z.number(),
  industryImpact: z.array(z.string())
});

const TechnicalSpecSchema = z.object({
  metric: z.string(),
  value: z.string(),
  description: z.string().optional()
});

const TimelineEraSchema = z.object({
  id: z.string(),
  year: z.string(),
  title: z.string(),
  description: z.string(),
  keyInnovation: z.string(),
  companies: z.array(CompanySchema),
  marketImpact: MarketImpactSchema,
  technicalSpecs: z.array(TechnicalSpecSchema)
});

const microchipDataSchema = z.object({
  eras: z.array(TimelineEraSchema),
  metadata: z.object({
    lastUpdated: z.string(),
    version: z.string()
  })
});

/**
 * Sanitizes HTML content to prevent XSS attacks
 */
export const sanitizeHTML = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS,
    ALLOWED_ATTR
  });
};

/**
 * Validates and sanitizes microchip history data
 */
export const validateAndSanitizeData = (rawData: unknown) => {
  try {
    // First validate the data structure
    const validatedData = microchipDataSchema.parse(rawData);
    
    // Then sanitize all text content
    return {
      ...validatedData,
      eras: validatedData.eras.map((era) => ({
        ...era,
        description: sanitizeHTML(era.description),
        title: sanitizeHTML(era.title),
        keyInnovation: sanitizeHTML(era.keyInnovation),
        companies: era.companies.map((company) => ({
          ...company,
          name: sanitizeHTML(company.name),
          keyProducts: company.keyProducts.map(product => ({
            ...product,
            name: sanitizeHTML(product.name),
            description: sanitizeHTML(product.description)
          }))
        })),
        marketImpact: {
          ...era.marketImpact,
          economicValue: sanitizeHTML(era.marketImpact.economicValue),
          industryImpact: era.marketImpact.industryImpact.map(impact => 
            sanitizeHTML(impact)
          )
        },
        technicalSpecs: era.technicalSpecs.map(spec => ({
          ...spec,
          metric: sanitizeHTML(spec.metric),
          value: sanitizeHTML(spec.value),
          description: spec.description ? sanitizeHTML(spec.description) : undefined
        }))
      }))
    };
  } catch (error) {
    throw new Error(
      `Data validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};

/**
 * Formats currency values consistently
 */
export const formatCurrency = (value: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 1
  });
  
  return formatter.format(value);
};

/**
 * Formats large numbers with appropriate suffixes
 */
export const formatNumber = (value: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
  });
  
  return formatter.format(value);
};

/**
 * Calculates relative time period for timeline visualization
 */
export const calculateTimePeriod = (year: string): 'past' | 'present' | 'future' => {
  const currentYear = new Date().getFullYear();
  const eraYear = parseInt(year);
  
  if (eraYear < currentYear) return 'past';
  if (eraYear === currentYear) return 'present';
  return 'future';
};

/**
 * Groups companies by their primary focus area
 */
export const groupCompaniesByFocus = (companies: Array<{
  keyProducts: Array<{ name: string; description: string }>;
}>) => {
  const focusAreas = {
    'Manufacturing': ['fabrication', 'manufacturing', 'production'],
    'Design': ['design', 'architecture', 'ip'],
    'Research': ['research', 'development', 'innovation'],
    'Integration': ['assembly', 'packaging', 'testing']
  } as const;

  return companies.reduce((acc, company) => {
    // Determine focus area based on key products
    const productText = company.keyProducts
      .map(p => `${p.name} ${p.description}`)
      .join(' ')
      .toLowerCase();
    
    const focus = (Object.entries(focusAreas)
      .find(([_, keywords]) => 
        keywords.some(keyword => productText.includes(keyword))
      ) || ['Other'])[0];
    
    acc[focus] = (acc[focus] || []).concat(company);
    return acc;
  }, {} as Record<string, typeof companies>);
};

/**
 * Calculates growth rate from an array of values
 */
export const calculateGrowthRate = (values: number[]): number => {
  if (values.length < 2) return 0;
  
  const firstValue = values[0];
  const lastValue = values[values.length - 1];
  
  return ((lastValue - firstValue) / firstValue) * 100;
};

/**
 * Calculates India contribution metrics
 */
export interface IndiaPresenceMetrics {
  totalEmployees: number;
  totalLocations: number;
  totalInvestments: number;
  facilitiesByType: Record<string, number>;
  employeePercentage: number;
}

export const calculateIndiaPresenceMetrics = (companies: Array<{
  indiaPresence?: {
    employees: number;
    locations: string[];
    investments: number;
    facilities: Array<{
      type: string;
    }>;
  };
}>): IndiaPresenceMetrics => {
  const metrics = companies.reduce((acc, company) => {
    if (company.indiaPresence) {
      acc.totalEmployees += company.indiaPresence.employees;
      acc.totalLocations += company.indiaPresence.locations.length;
      acc.totalInvestments += company.indiaPresence.investments;
      
      // Group facilities by type
      company.indiaPresence.facilities.forEach(facility => {
        acc.facilitiesByType[facility.type] = (acc.facilitiesByType[facility.type] || 0) + 1;
      });
    }
    return acc;
  }, {
    totalEmployees: 0,
    totalLocations: 0,
    totalInvestments: 0,
    facilitiesByType: {} as Record<string, number>,
    employeePercentage: 0
  });

  // Calculate percentage based on industry average of ~10,000 employees per company
  const totalCompanies = companies.length;
  metrics.employeePercentage = (metrics.totalEmployees / (totalCompanies * 10000)) * 100;

  return metrics;
};

/**
 * Announces messages to screen readers
 */
export const announceToScreenReader = (message: string): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.classList.add('sr-only');
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove the element after it's been read
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

/**
 * Sends metrics to monitoring service
 */
export const sendMetric = (name: string, value: number): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'metric', {
      metric_name: name,
      metric_value: value,
      component: 'microchip-history'
    });
  }
};

/**
 * Sends monitoring data to analytics service
 */
export const sendToMonitoring = (data: Record<string, any>): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'monitoring', {
      ...data,
      component: 'microchip-history'
    });
  }
};
