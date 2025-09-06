import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Microchip Evolution: From Transistors to AI Processors',
  description: 'Explore the fascinating journey of microchip development, from the first transistor to modern AI processors and India\'s semiconductor revolution.',
  keywords: [
    'microchip history',
    'semiconductor evolution',
    'transistor invention',
    'integrated circuits',
    'Moore\'s Law',
    'AI processors',
    'India semiconductor industry',
    'chip manufacturing',
    'semiconductor ecosystem',
    'technology timeline'
  ],
  authors: [{ name: 'Satyam Sharma' }],
  openGraph: {
    title: 'Microchip Evolution: From Transistors to AI Processors',
    description: 'A comprehensive journey through the history of microchip development and India\'s emerging role in the global semiconductor ecosystem.',
    type: 'article',
    images: [
      {
        url: '/blog/microchip-history/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Microchip Evolution Timeline Visualization'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microchip Evolution: From Transistors to AI Processors',
    description: 'Explore the revolutionary journey of microchip development and India\'s semiconductor future.',
    images: ['/blog/microchip-history/twitter-image.jpg']
  }
};
