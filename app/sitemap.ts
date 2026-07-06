import type { MetadataRoute } from 'next';
import { practiceNotes } from './poznamky/poznamky-data';

const siteUrl = 'https://techbases.sk';
const staticLastModified = new Date('2026-07-06');

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1 },
    { path: '/audit-erp-dat', priority: 0.88 },
    { path: '/sluzby', priority: 0.9 },
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
    { path: '/o-mne', priority: 0.8 },
    { path: '/kontakt', priority: 0.8 },
    { path: '/ochrana-osobnych-udajov', priority: 0.5 },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: 'lastModified' in route ? route.lastModified : staticLastModified,
    changeFrequency: 'weekly',
    priority: route.priority,
  }));
}
