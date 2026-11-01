import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import { V2Footer } from './(v2)/components/v2-footer';
import { V2Header } from './(v2)/components/v2-header';
import { ProductionOnly } from './components/production-only';
import { RevealOnScroll } from './components/reveal-on-scroll';
import './globals.css';
import './(v2)/v2.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-v2-body',
  display: 'swap',
});

// Cloudflare Web Analytics: token sa nastavuje cez NEXT_PUBLIC_CF_ANALYTICS_TOKEN
// (bez tokenu sa beacon nevykreslí, viď TODO.md)
const cfAnalyticsToken = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

export const metadata: Metadata = {
  metadataBase: new URL('https://techbases.sk'),
  title: {
    default: 'TechBases.sk | Webové stránky a firemné nástroje na mieru',
    template: '%s | TechBases.sk',
  },
  description:
    'Tvorím prezentačné weby na mieru pre firmy aj jednotlivcov a praktické prehľady z ERP, Excelu a exportov pre údržbu, sklad, výrobu a plánovanie.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/mini-logo.png',
    shortcut: '/mini-logo.png',
    apple: '/mini-logo.png',
  },
  // Titulok, popis a URL pre OG/Twitter si každá stránka berie zo svojich metadát
  openGraph: {
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
  },
  twitter: {
    card: 'summary_large_image',
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
    <html lang="sk" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <a href="#obsah" className="skip-link">
          Preskočiť na obsah
        </a>
        <div className="min-h-screen bg-slate-950 text-slate-100">
          {/* Jednotná hlavička a pätička na všetkých stránkach. Obal s .v2 dodá štýly
              a premenné; display: contents nechá hlavičku sticky voči celej stránke. */}
          <div className="v2 contents">
            <V2Header />
          </div>
          <ProductionOnly>
            <RevealOnScroll />
          </ProductionOnly>
          <div id="obsah" tabIndex={-1} className="outline-none">
            {children}
          </div>
          <div className="v2 contents">
            <V2Footer />
          </div>
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
