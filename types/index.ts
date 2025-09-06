import { z } from 'zod';

// Base schemas
export const CompanySchema = z.object({
  name: z.string(),
  contribution: z.string(),
  yearsActive: z.string().optional(),
  location: z.string().optional(),
  website: z.string().url().optional()
});

export const MicrochipEraSchema = z.object({
  year: z.number(),
  name: z.string(),
  description: z.string(),
  innovations: z.array(z.string()).optional(),
  companies: z.array(CompanySchema).optional(),
  impact: z.string().optional(),
  technologies: z.array(z.string()).optional(),
  imageUrl: z.string().url().optional()
});

export const MicrochipDataSchema = z.object({
  eras: z.array(MicrochipEraSchema),
  metadata: z.object({
    lastUpdated: z.string(),
    version: z.string()
  }).optional()
});

// Export types based on schemas
export type Company = z.infer<typeof CompanySchema>;
export type MicrochipEra = z.infer<typeof MicrochipEraSchema>;
export type MicrochipData = z.infer<typeof MicrochipDataSchema>;

// Analytics event types
export interface MicrochipAnalyticsEvent {
  era_name: string;
  era_year: number;
  event_category?: string;
  event_label?: string;
}

// Error types
export class MicrochipDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MicrochipDataError';
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}
