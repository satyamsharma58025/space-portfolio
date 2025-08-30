"use client";

import { useState, useEffect, useCallback } from 'react';

export const useSearch = <T,>(items: T[], searchableFields: (keyof T)[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const search = useCallback((term: string) => {
    setSearchTerm(term);
    
    if (!term.trim()) {
      setFilteredItems(items);
      return;
    }

    const lowerTerm = term.toLowerCase();
    const results = items.filter(item =>
      searchableFields.some(field => {
        const value = item[field];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(lowerTerm);
        }
        if (Array.isArray(value)) {
          return value.some(v => 
            typeof v === 'string' && v.toLowerCase().includes(lowerTerm)
          );
        }
        return false;
      })
    );
    
    setFilteredItems(results);
  }, [items, searchableFields]);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  return {
    searchTerm,
    filteredItems,
    search,
  };
};
