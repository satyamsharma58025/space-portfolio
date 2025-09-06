'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class MicrochipHistoryErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Log error to monitoring service
    console.error('Microchip History Error:', error, errorInfo);
    
    // Send to error tracking service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          component: 'MicrochipHistory',
          stack: error.stack
        }
      });
    }
  }

  resetError = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return (
        <FallbackComponent 
          error={this.state.error!} 
          resetError={this.resetError} 
        />
      );
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

const DefaultErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetError }) => {
  const iconClass = "h-6 w-6 text-red-500";
  
  return (
    <motion.div
      className="error-fallback bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <h3 className={cn(
          "text-lg font-semibold ml-2",
          "text-red-800 dark:text-red-200"
        )}>
          Something went wrong with the microchip history
        </h3>
      </div>
      
      <p className={cn(
        "mb-4",
        "text-red-700 dark:text-red-300"
      )}>
        We encountered an error while loading the interactive content. 
        This might be due to a temporary issue.
      </p>
      
      <details className="mb-4">
        <summary className={cn(
          "cursor-pointer text-sm",
          "text-red-600 dark:text-red-400",
          "hover:text-red-800 dark:hover:text-red-300"
        )}>
          Technical details
        </summary>
        <pre className={cn(
          "mt-2 text-xs p-2 rounded overflow-x-auto",
          "bg-red-100 dark:bg-red-900/40"
        )}>
          {error.message}
        </pre>
      </details>
      
      <div className="flex gap-4">
        <button
          onClick={resetError}
          className={cn(
            "px-4 py-2 rounded transition-colors",
            "bg-red-600 text-white",
            "hover:bg-red-700",
            "dark:bg-red-700 dark:hover:bg-red-600"
          )}
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className={cn(
            "px-4 py-2 rounded transition-colors",
            "bg-gray-600 text-white",
            "hover:bg-gray-700",
            "dark:bg-gray-700 dark:hover:bg-gray-600"
          )}
        >
          Reload Page
        </button>
      </div>
    </motion.div>
  );
};

export { MicrochipHistoryErrorBoundary };
export default DefaultErrorFallback;
