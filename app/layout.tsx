import type { Metadata } from 'next';
import { RevealOnScroll } from './components/reveal-on-scroll';
import { SiteFooter } from './components/site-footer';
import { SiteHeader } from './components/site-header';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://techbases.sk'),
  title: {
    default: 'TechBases.sk | ERP dáta pre údržbu, sklad a výrobu',
    template: '%s | TechBases.sk',
  },
  description:
    'TechBases spája ERP exporty, sklad, výdaje, objednávky, prestoje a plánovanie do jedného pracovného pohľadu pre údržbu, sklad a výrobu.',
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
    description:
      'Pracovný pohľad nad ERP dátami pre výrobu, údržbu, sklad náhradných dielov a plánovanie prác.',
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
    description:
      'Pracovný pohľad nad ERP dátami pre výrobu, údržbu, sklad náhradných dielov a plánovanie prác.',
    images: ['/techbase-logo-v2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <div className="min-h-screen bg-slate-950 text-slate-100">
          <SiteHeader />
          <RevealOnScroll />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
