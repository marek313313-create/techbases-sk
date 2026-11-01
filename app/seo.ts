import type { Metadata } from 'next';

// Spoločný základ Open Graph. Stránka, ktorá nastaví vlastné openGraph, nahradí celý
// objekt z layoutu – preto si berie tento základ a doplní len svoju adresu (a titulok).
export const baseOpenGraph = {
  siteName: 'TechBases.sk',
  locale: 'sk_SK',
  type: 'website',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'TechBases.sk — webové stránky a firemné nástroje na mieru',
    },
  ],
} satisfies Metadata['openGraph'];

export function openGraphFor(
  path: string,
  extra: { title?: string; description?: string } = {},
): Metadata['openGraph'] {
  return { ...baseOpenGraph, url: path, ...extra };
}
