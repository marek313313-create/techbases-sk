import Link from 'next/link';

type PlaceholderNotePageProps = {
  title: string;
};

export function PlaceholderNotePage({ title }: PlaceholderNotePageProps) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <section>
        <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
          Poznámka z prevádzky
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Táto poznámka sa pripravuje. Téma bude rozoberať konkrétny prevádzkový
          problém a to, ako z existujúcich dát dostať použiteľné rozhodnutie.
        </p>
        <div className="mt-8">
          <Link
            href="/kontakt"
            className="inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
          >
            Opísať problém
          </Link>
        </div>
      </section>
    </main>
  );
}
