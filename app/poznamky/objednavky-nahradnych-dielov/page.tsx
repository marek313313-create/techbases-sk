import type { Metadata } from 'next';
import { PlaceholderNotePage } from '../placeholder-note-page';

const title = 'Objednávky náhradných dielov: čo je po termíne a čo môže zdržať opravu';

export const metadata: Metadata = {
  title: {
    absolute: `${title} | TechBases.sk`,
  },
  description:
    'Poznámka sa pripravuje: objednávky náhradných dielov, termíny, meškanie a väzba na opravu alebo odstávku.',
  alternates: {
    canonical: '/poznamky/objednavky-nahradnych-dielov',
  },
};

export default function SparePartOrdersNotePage() {
  return <PlaceholderNotePage title={title} />;
}
