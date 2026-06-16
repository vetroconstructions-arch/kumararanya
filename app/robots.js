export default function robots() {
  const DOMAIN = 'https://www.kumararanya.in';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/partners/', '/configurator/'],
    },
    sitemap: [
      `${DOMAIN}/sitemap.xml`,
      `${DOMAIN}/image-sitemap.xml`,
      `${DOMAIN}/news-sitemap.xml`,
    ],
  };
}
