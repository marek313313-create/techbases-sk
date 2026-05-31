import type { Metadata } from 'next';
import Link from 'next/link';

const title = 'Keď má prevádzka report, ale odpoveď stále hľadá ručne';

export const metadata: Metadata = {
  title: {
    absolute: 'Report nie je rozhodnutie | TechBases.sk',
  },
  description:
    'Poznámka sa pripravuje: reporting, pracovný pohľad, rozhodovanie a konkrétny prevádzkový krok.',
  alternates: {
    canonical: '/poznamky/report-nie-je-rozhodnutie',
  },
};

export default function ReportIsNotDecisionNotePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <article>
        <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
          Poznámka z prevádzky
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Report môže ukázať číslo, súčet alebo trend. Pri oprave však človek
          často potrebuje kratšiu odpoveď: ktorý diel chýba, ktorá objednávka
          mešká a čo môže zdržať plánovanú prácu.
        </p>
        <p className="mt-4 max-w-3xl leading-8 text-slate-400">
          Problém nie je v tom, že report existuje. Problém vzniká vtedy, keď po
          ňom aj tak nasleduje ďalšie hľadanie v sklade, objednávkach, výdajoch
          alebo plánovacej knihe.
        </p>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Čo report ukáže a čo ešte chýba</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Report ukáže hodnotu skladu. Údržba však potrebuje vedieť, ktorý
            konkrétny diel môže zdržať opravu.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Dashboard ukáže počet otvorených objednávok. Plánovanie však potrebuje
            vedieť, ktorá objednávka blokuje konkrétnu prácu.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            Graf ukáže trend výdajov. Sklad však potrebuje vidieť, ktoré položky
            sa míňajú opakovane a ktoré iba roky ležia.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Kedy vzniká ručná práca</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Ak report ukáže iba celkový stav, človek musí otvoriť skladovú kartu,
            pozrieť rezervácie, overiť termín dodania a porovnať to s plánom
            opravy.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Pri jednej položke to môže byť prijateľné. Pri väčšej odstávke alebo
            plánovacej knihe sa rovnaký postup opakuje pri desiatkach položiek.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Čo má byť viditeľné spolu</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Pri konkrétnej práci má byť na jednom mieste vidieť diel, sklad,
            rezerváciu, otvorenú objednávku, termín dodania a chýbajúce množstvo.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Vtedy report prestáva byť len súhrnom. Vzniká použiteľný podklad pre
            človeka, ktorý rieši opravu, plánovanie alebo nákup materiálu.
          </p>
        </section>

        <section className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 text-center shadow-2xl md:p-10">
          <h2 className="text-3xl font-bold">Riešite podobný problém?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            Pošlite stručný opis situácie, ktorú dnes riešite ručne. Na začiatok
            netreba zadanie ani technickú špecifikáciu.
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
