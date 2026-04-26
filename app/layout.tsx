import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://techbases.sk'),
  title: 'TechBases.sk | Dáta a interné nástroje pre výrobu, údržbu a sklad',
  description:
    'Pomáham výrobným a technickým firmám prepájať dáta z rôznych zdrojov a tvoriť interné prehľady a nástroje pre výrobu, údržbu a sklad.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/mini-logo.png',
    shortcut: '/mini-logo.png',
    apple: '/mini-logo.png',
  },
  openGraph: {
    title: 'TechBases.sk',
    description: 'Dáta a interné nástroje pre výrobu, údržbu a sklad.',
    url: 'https://techbases.sk',
    siteName: 'TechBases.sk',
    locale: 'sk_SK',
    type: 'website',
    images: [
      {
        url: '/techbase-logo-v2.png',
        alt: 'TechBases.sk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechBases.sk',
    description: 'Dáta a interné nástroje pre výrobu, údržbu a sklad.',
    images: ['/techbase-logo-v2.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
