import type { MetadataRoute } from 'next';
import { projects } from './(v2)/projects';
import { practiceNotes } from './poznamky/poznamky-data';

const siteUrl = 'https://techbases.sk';
const staticLastModified = new Date('2026-07-06');
const twoServicesLastModified = new Date('2026-10-21');
const newHomeLastModified = new Date('2026-11-01');

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1, lastModified: newHomeLastModified },
    ...projects.map((project) => ({
      path: `/realizacie/${project.slug}`,
      priority: 0.8,
      lastModified: newHomeLastModified,
    })),
    { path: '/audit-erp-dat', priority: 0.88 },
    { path: '/sluzby', priority: 0.9, lastModified: newHomeLastModified },
    { path: '/sluzby/sklad-nahradnych-dielov', priority: 0.95 },
    { path: '/poznamky', priority: 0.85 },
    ...practiceNotes.map((note) => ({
      path: note.slug,
      priority:
        note.slug === '/poznamky/data-nie-su-problem-it' ||
        note.slug === '/poznamky/jedna-polozka-cela-zostava'
          ? 0.82
          : 0.65,
      lastModified: new Date(note.dateModified),
    })),
    { path: '/kontakt', priority: 0.8, lastModified: twoServicesLastModified },
    {
      path: '/ochrana-osobnych-udajov',
      priority: 0.5,
      lastModified: twoServicesLastModified,
    },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: 'lastModified' in route ? route.lastModified : staticLastModified,
    changeFrequency: 'weekly',
    priority: route.priority,
  }));
}
