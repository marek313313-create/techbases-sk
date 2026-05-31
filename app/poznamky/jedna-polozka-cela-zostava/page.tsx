import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    absolute: 'Keď jedna položka v ERP znamená celú zostavu | TechBases.sk',
  },
  description:
    'Materiálová pripravenosť zostavy z ERP dát: sklad, rezervácie, chýbajúce množstvá a podklady pre objednávku v jednom pracovnom pohľade.',
  alternates: {
    canonical: '/poznamky/jedna-polozka-cela-zostava',
  },
};

const manualChecks = [
  'rozpad zostavy na jednotlivé diely',
  'kontrola dostupnosti každého dielu',
  'kontrola rezervácií na iné zákazky',
  'dopočítanie chýbajúceho množstva',
  'kontrola otvorených objednávok',
  'príprava podkladov pre objednávku',
];

const workingViewOutputs = [
  'čo je skladom',
  'čo je rezervované',
  'aké množstvo chýba',
  'čo je už objednané',
  'čo treba pripraviť ako podklad pre objednávku',
];


function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-3 text-slate-300">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AssemblyItemNotePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <article>
        <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
          Poznámka z prevádzky
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Keď jedna položka v ERP znamená celú zostavu
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Plánovanie dostane požiadavku na zostavu. Prvá reakcia je pozrieť do
          ERP — ale jedna skladová karta neukáže, koľko dielov zostavy je reálne
          voľných, koľko je rezervovaných na iné zákazky a čo treba doobjednať.
        </p>

        <figure className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          <img
            src="/Keď jedna položka v ERP znamená celaú zostavu.png"
            alt="Ilustračný vizuál k poznámke o zostave, kusovníku a ERP dátach"
            className="w-full object-cover"
          />
        </figure>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Problém z praxe</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Plánovanie často nedokáže rozhodnúť len podľa názvu jednej položky.
            Najskôr musí zistiť, čo do zostavy patrí, ktoré diely sú skladom, čo je
            už rezervované na iné zákazky a koľko kusov reálne chýba.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Bez pracovného pohľadu to znamená prechádzať viac obrazoviek, exportov
            alebo Excel tabuliek. Pri jednej požiadavke tak môže vzniknúť hodiny
            ručného dohľadávania.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Prečo ERP dáta nestačí mať</h2>
          <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6 text-lg font-semibold leading-8 text-blue-50">
            Ak jedna položka znamená celú zostavu, ERP dáta môžu byť mätúce. Treba
            ich vedieť rýchlo pretaviť do jedného rozhodnutia: čo máme, čo je
            rezervované a čo treba objednať.
          </div>
          <p className="mt-5 leading-8 text-slate-300">
            ERP môže obsahovať položky, sklad, rezervácie aj objednávky. Problém
            vzniká vtedy, keď tieto informácie nie sú v jednom pracovnom pohľade
            pre človeka, ktorý sa má dobre rozhodnúť.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Čo sa dnes často robí ručne</h2>
          <BulletList items={manualChecks} />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Ako môže pomôcť pracovný pohľad</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Pracovný pohľad nad ERP dátami môže spojiť zostavu, sklad, rezervácie
            a objednávky do jedného miesta. Cieľom nie je automaticky objednávať
            bez kontroly človeka. Cieľom je rýchlo ukázať, čo je dostupné, čo je
            blokované a čo treba doobjednať.
          </p>
          <BulletList items={workingViewOutputs} />
          <p className="mt-5 leading-8 text-slate-400">
            Pri väčšom pláne sa tento problém násobí. Ak plánovacia kniha obsahuje
            stovky až tisíce položiek, ručné overovanie skladu, rezervácií,
            objednávok a množstiev sa zmení na samostatnú prácu. A pri živom
            sklade výsledok rýchlo starne.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Zostava ako prevádzkové rozhodnutie, nie len skladová karta</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Materiálová pripravenosť zostavy nie je len otázka skladu. Je to
            rozhodnutie, ktoré vzniká z kombinácie položiek, rezervácií, objednávok
            a plánovania. Ak tieto dáta existujú, dáva zmysel ich spojiť do
            prehľadu, ktorý šetrí ručné dohľadávanie a ukazuje, čo treba riešiť ďalej.
          </p>
        </section>

        <section className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 text-center shadow-2xl md:p-10">
          <h2 className="text-3xl font-bold">Riešite podobný problém?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            Pošlite stručný opis problému alebo ukážku exportu. Na začiatok netreba
            zadanie ani technickú špecifikáciu.
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
      </article>
    </main>
  );
}
