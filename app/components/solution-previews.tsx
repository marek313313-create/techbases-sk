'use client';

import { useEffect, useState } from 'react';

type SolutionPreview = {
  title: string;
  text: string;
  image: string;
  alt: string;
};

const solutionPreviews: SolutionPreview[] = [
  {
    title: 'Kritické diely a objednávky',
    text: 'Ukážkový anonymizovaný pohľad: vidíte, ktoré položky chýbajú, čakajú na dodanie alebo môžu zdržať opravu.',
    image: '/ukazky/interny-prehlad-poloziek.png',
    alt: 'Ukážkový anonymizovaný pracovný pohľad na kritické diely a objednávky',
  },
  {
    title: 'Výdaje materiálu',
    text: 'Ukážkový anonymizovaný pohľad: vidíte spotrebu materiálu podľa prác, zákaziek alebo období.',
    image: '/ukazky/vydaj-materialu.png',
    alt: 'Ukážkový anonymizovaný pracovný pohľad na výdaje materiálu',
  },
  {
    title: 'Nepohyblivá zásoba',
    text: 'Ukážkový anonymizovaný pohľad: vidíte diely, ktoré viažu peniaze, ale dlhodobo sa nehýbu.',
    image: '/ukazky/nepohybliva-zasoba.png',
    alt: 'Ukážkový anonymizovaný pracovný pohľad na nepohyblivú zásobu',
  },
  {
    title: 'Prestoje a poruchy',
    text: 'Ukážkový anonymizovaný pohľad: vidíte opakované problémy, trendy a zariadenia s najväčším dopadom.',
    image: '/ukazky/prestoje-priorita-zasahu.png',
    alt: 'Ukážkový anonymizovaný pracovný pohľad na prestoje a poruchy',
  },
];

export function SolutionPreviews() {
  const [activePreview, setActivePreview] = useState<SolutionPreview | null>(null);

  useEffect(() => {
    if (!activePreview) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActivePreview(null);
      }
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePreview]);

  return (
    <section id="ukazky-riesenia" className="mt-16">
      <div className="max-w-3xl">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
          Ukážkové pracovné pohľady
        </div>
        <h2 className="mt-3 text-3xl font-bold">
          Nie galéria. Každý pohľad má odpovedať na prevádzkovú otázku.
        </h2>
        <p className="mt-4 leading-8 text-slate-300">
          Ukážky používajú anonymizované dáta a slúžia len ako príklad. Cieľom je
          ukázať, ako sa dajú ERP exporty, výdaje, objednávky, prestoje a plánovanie
          spojiť do jedného pracovného pohľadu.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {solutionPreviews.map((preview) => (
          <article
            key={preview.title}
            className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl"
          >
            <button
              type="button"
              onClick={() => setActivePreview(preview)}
              className="group block w-full overflow-hidden bg-slate-950 text-left"
              aria-label={`Otvoriť náhľad: ${preview.title}`}
            >
              <img
                src={preview.image}
                alt={preview.alt}
                className="aspect-[16/10] w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
              />
            </button>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{preview.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{preview.text}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-5 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm leading-6 text-slate-400">
        Všetky ukážky sú anonymizované alebo ilustračné. Nepoužívajú reálne názvy
        zariadení, zákaziek, porúch ani interné dáta zákazníkov.
      </p>

      {activePreview ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-labelledby="solution-preview-title"
          onClick={() => setActivePreview(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-800 px-4 py-3 sm:px-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Ukážkový pracovný pohľad
                </div>
                <h3 id="solution-preview-title" className="mt-1 text-lg font-semibold">
                  {activePreview.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActivePreview(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-xl text-slate-200 transition hover:border-blue-400 hover:bg-slate-900"
                aria-label="Zavrieť náhľad"
              >
                ×
              </button>
            </div>
            <div className="max-h-[calc(92vh-76px)] overflow-auto">
              <img
                src={activePreview.image}
                alt={activePreview.alt}
                className="w-full bg-slate-950 object-contain"
              />
              <div className="grid gap-3 border-t border-slate-800 px-5 py-4 text-sm leading-6 text-slate-400 md:grid-cols-[1fr_auto] md:items-center">
                <p>{activePreview.text}</p>
                <p className="text-slate-500">Ukážkové anonymizované dáta.</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
