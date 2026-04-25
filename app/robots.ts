import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://techbases.sk/sitemap.xml',
    host: 'https://techbases.sk',
  };
}
