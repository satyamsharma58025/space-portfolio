'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextType {
  isSearchOpen: boolean;
  toggleSearch: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen(prev => !prev);

  return (
    <NavigationContext.Provider value={{ isSearchOpen, toggleSearch }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
