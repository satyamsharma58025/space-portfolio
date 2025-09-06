'use client';

import { useState, useEffect } from 'react';
import { timelineData } from '../data/timeline';
import type { TimelineEra } from '../types';

interface UseMicrochipTimelineResult {
  data: TimelineEra[];
  loading: boolean;
  error: Error | null;
  selectedEra: string | null;
  setSelectedEra: (id: string | null) => void;
}

export function useMicrochipTimeline(): UseMicrochipTimelineResult {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  
  useEffect(() => {
    // Simulate loading from API
    const loadData = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  return {
    data: timelineData,
    loading,
    error,
    selectedEra,
    setSelectedEra
  };
}
