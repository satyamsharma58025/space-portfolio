export const microchipHistoryStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete History of Microchips: From Transistor to AI Era',
  description: 'Comprehensive timeline of microchip evolution from 1947 to 2024',
  image: [
    'https://spaceportfolio.netlify.app/og-images/microchip-history.jpg'
  ],
  author: {
    '@type': 'Person',
    name: 'Satyam Sharma',
    url: 'https://spaceportfolio.netlify.app'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Satyam Sharma Portfolio',
    logo: {
      '@type': 'ImageObject',
      url: 'https://spaceportfolio.netlify.app/logo.png'
    }
  },
  datePublished: new Date().toISOString(),
  dateModified: new Date().toISOString(),
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://spaceportfolio.netlify.app/blog/microchip-history'
  }
} as const;
