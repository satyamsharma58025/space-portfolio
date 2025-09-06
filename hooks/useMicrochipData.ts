import { useEffect, useState } from 'react';
import { MicrochipData } from '@/types';
import { validateAndSanitizeData } from '@/utils';

export interface UseMicrochipDataResult {
  data: MicrochipData | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export const useMicrochipData = (): UseMicrochipDataResult => {
  const [data, setData] = useState<MicrochipData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Fetch data from API route
      const response = await fetch('/api/microchip-data');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const rawData = await response.json();
      
      // Validate and sanitize data
      const validatedData = validateAndSanitizeData(rawData);
      
      setData(validatedData);
      
      // Track successful data load
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'data_load_success', {
          event_category: 'Data Loading',
          event_label: 'Microchip History'
        });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(new Error(`Failed to load microchip data: ${errorMessage}`));
      
      // Track error in analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'data_load_error', {
          error_message: errorMessage,
          event_category: 'Error',
          event_label: 'Microchip History Data Load'
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return {
    data,
    isLoading,
    error,
    refetch
  };
};
