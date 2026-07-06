import type { Metadata } from 'next';
import Script from 'next/script';
import { RevealOnScroll } from './components/reveal-on-scroll';
import { SiteFooter } from './components/site-footer';
import { SiteHeader } from './components/site-header';
import './globals.css';

// Cloudflare Web Analytics: token sa nastavuje cez NEXT_PUBLIC_CF_ANALYTICS_TOKEN
// (bez tokenu sa beacon nevykreslí, viď TODO.md)
const cfAnalyticsToken = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

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
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TechBases.sk — pracovný pohľad nad ERP dátami pre údržbu, sklad a výrobu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechBases.sk',
    description:
      'Pracovný pohľad nad ERP dátami pre výrobu, údržbu, sklad náhradných dielov a plánovanie prác.',
    images: ['/og-image.png'],
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
        {cfAnalyticsToken ? (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${cfAnalyticsToken}"}`}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
