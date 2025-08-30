interface MetaData {
  title: string;
  description: string;
  image?: string;
  type?: string;
  date?: string;
  tags?: string[];
  author?: string;
}

export const generateMetadata = ({
  title,
  description,
  image = '/logo.png',
  type = 'website',
  date,
  tags = [],
  author = 'Satyam Sharma'
}: MetaData) => {
  const metadata = {
    title: `${title} | Satyam Sharma`,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type,
      ...(date && { publishedTime: date }),
      ...(tags.length && { tags }),
      authors: [author],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@satyamsharma',
    },
  };

  return metadata;
};

export const createSitemap = (urls: string[]) => {
  const baseUrl = 'https://satyamsharma.com';
  
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(url => `
        <url>
          <loc>${baseUrl}${url}</loc>
          <changefreq>weekly</changefreq>
          <priority>${url === '/' ? '1.0' : '0.8'}</priority>
        </url>
      `).join('')}
    </urlset>`;
};
