import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const MicrochipHistoryErrorBoundary = dynamic(
  () => import('./components/MicrochipHistoryErrorBoundary').then(mod => mod.MicrochipHistoryErrorBoundary),
  { ssr: false }
);

// Dynamic import of the client component
const MicrochipHistoryClient = dynamic(
  () => import('./components/MicrochipHistoryClient').then(mod => mod.default),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    ),
    ssr: false
  }
);

export const metadata: Metadata = {
  title: 'The Complete History of Microchips: From Transistor to AI Era | Satyam Sharma',
  description: 'Explore the comprehensive timeline of microchip evolution from 1947 to 2024. Discover how semiconductors shaped our world and India\'s growing role in the global chip industry.',
  keywords: [
    'microchip history', 'semiconductor timeline', 'transistor invention',
    'Intel processors', 'India semiconductors', 'chip manufacturing',
    'Moore\'s Law', 'AI processors', 'quantum computing', 'TSMC'
  ].join(', '),
  authors: [{ name: 'Satyam Sharma', url: 'https://spaceportfolio.netlify.app' }],
  creator: 'Satyam Sharma',
  publisher: 'Satyam Sharma',
  category: 'Technology',
  openGraph: {
    title: 'Interactive Microchip History Timeline',
    description: 'Journey through 75+ years of semiconductor innovation with interactive visualizations and India\'s semiconductor roadmap.',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['Satyam Sharma'],
    tags: ['Technology', 'Semiconductors', 'History', 'Innovation'],
    images: [
      {
        url: '/og-images/microchip-history.jpg',
        width: 1200,
        height: 630,
        alt: 'Microchip History Timeline Interactive Visualization'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interactive Microchip History Timeline',
    description: 'From the first transistor to AI chips - explore semiconductor evolution',
    images: ['/og-images/microchip-history-twitter.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  }
};

// Structured data for rich snippets
import { microchipHistoryStructuredData } from './schema';

export default function MicrochipHistoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(microchipHistoryStructuredData) }}
      />
      
      <article className="relative w-full min-h-screen">
        {/* Space-themed background */}
        <div className="fixed inset-0 bg-[#030014]/80" />
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>
        <div className="fixed inset-0 bg-gradient-to-t from-[#030014] via-purple-900/20 to-transparent" />
        
        <div className="relative z-10">
          <MicrochipHistoryErrorBoundary>
            <Suspense 
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-purple-500/50 border-t-purple-500 rounded-full animate-spin" />
                </div>
              }
            >
              <MicrochipHistoryClient />
            </Suspense>
          </MicrochipHistoryErrorBoundary>
        </div>
      </article>
    </>
  );
}
