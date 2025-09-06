import { z } from 'zod';

// Base types
export interface BlogMetadata {
  publishedDate: string;
  lastUpdated: string;
  author: string;
  readTime: string;
  tags: string[];
}

export interface ComparisonData {
  previousValue: string | number;
  improvement: number;
  context: string;
}

export interface TechnicalSpec {
  readonly metric: string;
  readonly value: string | number;
  readonly significance: string;
  readonly unit?: string;
  readonly comparison?: ComparisonData;
}

export interface MarketImpact {
  readonly economicValue: string;
  readonly jobsCreated: number;
  readonly industriesTransformed: ReadonlyArray<string>;
  readonly marketGrowthRate?: number;
  readonly globalImpactScore?: number;
}

export interface Product {
  readonly name: string;
  readonly category: string;
  readonly launchYear?: number;
  readonly description?: string;
  readonly impact?: string;
}

export interface Innovation {
  readonly title: string;
  readonly year: number;
  readonly description: string;
  readonly patentCount?: number;
  readonly significance: string;
}

export interface IndiaPresence {
  readonly employees: number;
  readonly locations: ReadonlyArray<string>;
  readonly rdCenters: number;
  readonly localInnovations: ReadonlyArray<string>;
  readonly investment?: string;
}

export interface Milestone {
  readonly year: number;
  readonly title: string;
  readonly description: string;
  readonly status: 'completed' | 'in-progress' | 'planned';
  readonly impact?: string;
}

export interface Company {
  readonly id: string;
  readonly name: string;
  readonly logo: string;
  readonly logoAlt: string;
  readonly founded: number;
  readonly headquarters: string;
  readonly marketCap: number;
  readonly revenueGrowth: ReadonlyArray<number>;
  readonly keyProducts: ReadonlyArray<Product>;
  readonly innovations: ReadonlyArray<Innovation>;
  readonly indiaPresence: IndiaPresence | null;
  readonly futureRoadmap: ReadonlyArray<Milestone>;
  readonly stockSymbol?: string;
  readonly website?: string;
}

export interface VisualAsset {
  readonly type: '3d-model' | 'image' | 'animation' | 'video';
  readonly url: string;
  readonly alt: string;
  readonly description: string;
  readonly thumbnail?: string;
}

export interface InteractiveElement<T = any> {
  readonly type: 'timeline' | 'chart' | '3d-view' | 'comparison';
  readonly config: T;
  readonly description: string;
}

export interface MicrochipEra<T = any> {
  readonly id: string;
  readonly year: number;
  readonly title: string;
  readonly description: string;
  readonly keyInnovation: string;
  readonly companies: ReadonlyArray<Company>;
  readonly technicalSpecs: ReadonlyArray<TechnicalSpec>;
  readonly marketImpact: MarketImpact;
  readonly visualAssets: ReadonlyArray<VisualAsset>;
  readonly interactiveElements: ReadonlyArray<InteractiveElement<T>>;
  readonly metadata?: BlogMetadata;
}

// Zod schemas for runtime validation
export const TechnicalSpecSchema = z.object({
  metric: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  significance: z.string().min(1),
  unit: z.string().optional(),
  comparison: z.object({
    previousValue: z.union([z.string(), z.number()]),
    improvement: z.number(),
    context: z.string()
  }).optional()
});

export const CompanySchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  logo: z.string().url(),
  logoAlt: z.string().min(1),
  founded: z.number().min(1800).max(new Date().getFullYear()),
  headquarters: z.string().min(1),
  marketCap: z.number().min(0),
  revenueGrowth: z.array(z.number()),
  keyProducts: z.array(z.object({
    name: z.string(),
    category: z.string(),
    launchYear: z.number().optional(),
    description: z.string().optional(),
    impact: z.string().optional()
  })),
  indiaPresence: z.object({
    employees: z.number().min(0),
    locations: z.array(z.string()),
    rdCenters: z.number().min(0),
    localInnovations: z.array(z.string()),
    investment: z.string().optional()
  }).nullable(),
  website: z.string().url().optional(),
  stockSymbol: z.string().optional()
});

export const MicrochipEraSchema = z.object({
  id: z.string().min(1),
  year: z.number().min(1900).max(2030),
  title: z.string().min(1),
  description: z.string().min(1),
  keyInnovation: z.string().min(1),
  companies: z.array(CompanySchema),
  technicalSpecs: z.array(TechnicalSpecSchema),
  marketImpact: z.object({
    economicValue: z.string(),
    jobsCreated: z.number().min(0),
    industriesTransformed: z.array(z.string()),
    marketGrowthRate: z.number().optional(),
    globalImpactScore: z.number().min(0).max(10).optional()
  }),
  visualAssets: z.array(z.object({
    type: z.enum(['3d-model', 'image', 'animation', 'video']),
    url: z.string().url(),
    alt: z.string().min(1),
    description: z.string(),
    thumbnail: z.string().url().optional()
  })),
  interactiveElements: z.array(z.object({
    type: z.enum(['timeline', 'chart', '3d-view', 'comparison']),
    config: z.any(),
    description: z.string()
  })),
  metadata: z.object({
    publishedDate: z.string(),
    lastUpdated: z.string(),
    author: z.string(),
    readTime: z.string(),
    tags: z.array(z.string())
  }).optional()
});

export const microchipDataSchema = z.array(MicrochipEraSchema);
