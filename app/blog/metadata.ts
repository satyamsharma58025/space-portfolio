import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Space Portfolio Blog',
    default: 'Blog | Space Portfolio',
  },
  description: 'Exploring technology, innovation, and the future of space through insightful articles and deep dives.',
  openGraph: {
    title: 'Space Portfolio Blog',
    description: 'Exploring technology, innovation, and the future of space through insightful articles and deep dives.',
    type: 'website',
    url: 'https://space-portfolio.vercel.app/blog',
    images: [
      {
        url: 'https://raw.githubusercontent.com/satyamsharma58025/space-portfolio/main/public/blog-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Space Portfolio Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Space Portfolio Blog',
    description: 'Exploring technology, innovation, and the future of space through insightful articles and deep dives.',
    images: ['https://raw.githubusercontent.com/satyamsharma58025/space-portfolio/main/public/blog-og-image.jpg'],
  },
};
