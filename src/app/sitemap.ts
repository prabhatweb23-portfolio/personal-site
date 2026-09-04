import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://homeofpassionevents.in';
  const currentDate = new Date();

  const routes = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/hope', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/stage4you', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/theatre-in-education', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/testimonials', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/gallery', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.9 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
