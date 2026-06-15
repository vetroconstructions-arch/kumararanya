import { locationsData } from './locationsData';
import { insightsData } from './insightsData';
import { nriData } from './nriData';

export default function sitemap() {
  const baseUrl = 'https://www.kumararanya.in';

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  // Dynamic Insight routes
  const insightRoutes = Object.keys(insightsData).map((slug) => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Dynamic Location routes
  const locationRoutes = Object.keys(locationsData).map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // Dynamic NRI routes
  const nriRoutes = Object.keys(nriData).map((city) => ({
    url: `${baseUrl}/nri/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...routes, ...insightRoutes, ...locationRoutes, ...nriRoutes];
}
