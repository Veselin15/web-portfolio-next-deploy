import { MetadataRoute } from 'next';
import { PROJECTS } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  // Use your actual domain here
  const baseUrl = 'https://www.veselin-veselinov.com';

  // 1. Static Pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ];

  // 2. Dynamic Project Pages (generated from your portfolio data)
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${baseUrl}/project/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}