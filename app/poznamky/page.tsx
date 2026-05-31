import type { Metadata } from 'next';
import Link from 'next/link';
import { practiceNotes } from './poznamky-data';

export const metadata: Metadata = {
  title: {
    absolute: 'Poznámky z prevádzky | TechBases.sk',
  },
  description:
    'Praktické poznámky o ERP dátach, údržbe, sklade náhradných dielov, objednávkach, prestojoch, plánovaní a ručnom dohľadávaní vo výrobe.',
  alternates: {
    canonical: '/poznamky',
  },
};

export default function PracticeNotesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="max-w-4xl">
        <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
          Odborné poznámky
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Poznámky z prevádzky
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Krátke odborné poznámky o tom, prečo odpovede v údržbe, sklade a výrobe
          často stále vznikajú ručne — aj keď ERP dáta už existujú.
        </p>
        <p className="mt-4 max-w-3xl leading-8 text-slate-400">
          Nie sú to všeobecné články o digitalizácii. Sú to praktické poznámky k
          problémom, ktoré vznikajú medzi ERP exportmi, Excelmi, skladom,
          objednávkami, výdajmi, prestojmi a plánovaním.
        </p>
      </section>

      <section className="mt-16 grid gap-5">
        {practiceNotes.map((note) => (
          <article
            key={note.slug}
            className="grid overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl lg:grid-cols-2"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{note.title}</h2>
              <p className="mt-4 leading-8 text-slate-400">{note.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={note.slug}
                className="mt-6 inline-flex rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-950"
              >
                Čítať poznámku
              </Link>
            </div>

            {note.image ? (
              <Link
                href={note.slug}
                className="flex min-h-72 items-center justify-center border-t border-slate-800 bg-slate-950 p-5 lg:min-h-full lg:border-l lg:border-t-0"
                aria-label={`Otvoriť poznámku: ${note.title}`}
              >
                <img
                  src={note.image}
                  alt={note.imageAlt ?? ''}
                  className="max-h-[320px] w-full rounded-xl object-contain"
                />
              </Link>
            ) : null}
          </article>
        ))}
      </section>
    </main>
  );
}
