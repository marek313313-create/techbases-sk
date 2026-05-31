import type { Metadata } from 'next';
import { PlaceholderNotePage } from '../placeholder-note-page';

const title = 'Nepohyblivá zásoba: diely, ktoré stoja peniaze a nikto ich nerieši';

export const metadata: Metadata = {
  title: {
    absolute: `${title} | TechBases.sk`,
  },
  description:
    'Poznámka sa pripravuje: nepohyblivá zásoba, sklad náhradných dielov a rozhodnutie z existujúcich dát.',
  alternates: {
    canonical: '/poznamky/nepohybliva-zasoba',
  },
};

export default function SlowMovingStockNotePage() {
  return <PlaceholderNotePage title={title} />;
}
