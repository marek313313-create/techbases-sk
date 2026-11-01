import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { V2Footer } from './components/v2-footer';
import { V2Header } from './components/v2-header';
import './v2.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-v2-body',
  display: 'swap',
});

// Návrh na posúdenie – vyhľadávače ho nesmú indexovať
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`v2 ${inter.variable}`}>
      <a href="#v2-obsah" className="skip-link">
        Preskočiť na obsah
      </a>
      <V2Header />
      {children}
      <V2Footer />
    </div>
  );
}
