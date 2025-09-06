import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import DOMPurify from 'dompurify';
import { MicrochipData, MicrochipDataSchema, ValidationError } from '@/types';

/**
 * Combines class names with Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Sanitizes HTML content to prevent XSS attacks
 * @param html The HTML string to sanitize
 * @returns Sanitized HTML string
 */
export const sanitizeHTML = (html: string): string => {
  if (typeof window === 'undefined') {
    return html; // Server-side: return as-is (sanitize on client)
  }
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li', 'br'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
    RETURN_DOM: false
  });
};

/**
 * Validates and sanitizes microchip history data
 * @param data Raw data to validate
 * @returns Validated and sanitized MicrochipData
 * @throws ValidationError if data is invalid
 */
export const validateAndSanitizeData = (data: unknown): MicrochipData => {
  try {
    // First, validate the structure with Zod
    const validationResult = MicrochipDataSchema.safeParse(data);

    if (!validationResult.success) {
      throw new ValidationError(validationResult.error.message);
    }

    const validData = validationResult.data;

    // Then sanitize all HTML content
    const sanitizedData: MicrochipData = {
      ...validData,
      eras: validData.eras.map(era => ({
        ...era,
        description: sanitizeHTML(era.description),
        impact: era.impact ? sanitizeHTML(era.impact) : undefined,
        // Sanitize company descriptions if they exist
        companies: era.companies?.map(company => ({
          ...company,
          contribution: sanitizeHTML(company.contribution)
        }))
      }))
    };

    return sanitizedData;
  } catch (error) {
    // Re-throw validation errors, wrap other errors
    if (error instanceof ValidationError) {
      throw error;
    }
    throw new ValidationError(
      `Failed to validate microchip data: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`
    );
  }
};

/**
 * Formats a year range for display
 * @param start Start year
 * @param end End year or 'present'
 */
export const formatYearRange = (start: number, end: number | 'present'): string => {
  return `${start}${end === 'present' ? '-Present' : end ? `-${end}` : ''}`;
};

/**
 * Checks if a year falls within an era's range
 * @param year Year to check
 * @param eraYear Era's starting year
 * @param nextEraYear Next era's starting year or undefined for the last era
 */
export const isYearInEra = (
  year: number,
  eraYear: number,
  nextEraYear?: number
): boolean => {
  return year >= eraYear && (!nextEraYear || year < nextEraYear);
};

/**
 * Groups companies by era based on their active years
 * @param companies Array of companies with yearsActive
 * @param eras Array of eras with years
 */
export const groupCompaniesByEra = (companies: any[], eras: any[]): Record<number, any[]> => {
  const grouped: Record<number, any[]> = {};
  
  eras.forEach((era, index) => {
    const nextEra = eras[index + 1];
    grouped[era.year] = companies.filter(company => {
      const [start, end] = company.yearsActive.split('-');
      const startYear = parseInt(start);
      const endYear = end === 'present' ? new Date().getFullYear() : parseInt(end);
      
      return (
        startYear >= era.year &&
        (!nextEra || startYear < nextEra.year) &&
        endYear >= era.year
      );
    });
  });
  
  return grouped;
};
