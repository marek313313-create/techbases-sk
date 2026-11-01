import { Inter } from 'next/font/google';
import { V2Footer } from './components/v2-footer';
import { V2Header } from './components/v2-header';
import './v2.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-v2-body',
  display: 'swap',
});

// Úvod (/) a realizácie (/realizacie/…) majú vlastnú hlavičku, pätičku a štýly.
// Indexovanie a canonical preberajú z koreňového layoutu a z metadát stránok.
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
