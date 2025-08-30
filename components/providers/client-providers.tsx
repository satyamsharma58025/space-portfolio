'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/shared/theme-provider';
import { NavigationProvider } from '@/lib/navigation-context';

interface ClientProvidersProps {
  children: ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <NavigationProvider>
        {children}
      </NavigationProvider>
    </ThemeProvider>
  );
}
