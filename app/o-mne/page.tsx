import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    absolute: 'O mne | Marek Belko — TechBases.sk',
  },
  description:
    'Marek Belko — 19 rokov v údržbe, výrobe a plánovaní. Pod značkou TechBases tvorím firemné nástroje z ERP dát a prezentačné weby na mieru.',
  alternates: {
    canonical: '/o-mne',
  },
};

const services = [
  {
    title: 'Firemné nástroje a dáta',
    text: 'Pracovné prehľady z ERP, Excelu a exportov pre údržbu, sklad, výrobu a plánovanie. Tu najviac zúročujem prax z prevádzky.',
    href: '/sluzby',
    cta: 'Firemné nástroje',
  },
  {
    title: 'Tvorba webov',
    text: 'Prezentačné weby na mieru pre firmy, živnostníkov, ubytovanie aj osobné projekty: prehľadná ponuka, mobilná verzia, galéria a kontakt.',
    href: '/tvorba-webov',
    cta: 'Tvorba webov',
  },
];

const principles = [
  {
    title: 'Rozhodnutie pred spracovaním',
    text: 'Najskôr riešim, aké rozhodnutie má výstup podporiť. Až potom má zmysel riešiť grafy, filtre alebo technické spracovanie.',
  },
  {
    title: 'Začať tam, kde vzniká neistota',
    text: 'Nie celý podnik naraz. Najskôr jedna otázka, ktorú dnes údržba, sklad alebo plánovanie skladá ručne z exportov.',
  },
  {
    title: 'Použiť dáta, ktoré už firma má',
    text: 'ERP, Excel, CSV, objednávky, výdaje, prestoje alebo plánovacia kniha často stačia na prvý pilotný pracovný pohľad.',
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
            O mne
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Devätnásť rokov som riešil to isté — dáta sú, odpovede nie!
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Volám sa Marek Belko. Pracujem ako technik v priemyselnej prevádzke
            a devätnásť rokov sa pohybujem v oblasti plánovania, výroby a
            údržby. Dlhodobo sa zameriavam na zjednodušovanie procesov a
            elimináciu zbytočnej ručnej práce.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-slate-400">
            TechBases vznikol z tej istej frustrácie: systémy vo firme môžu
            obsahovať veľa dát, ale odpoveď pre prevádzku aj tak často vzniká
            zdĺhavo — cez exporty, Excel, objednávky, výdaje, plánovaciu knihu
            a dohľadávanie v histórii. Viem, ako to vyzerá zvnútra.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-slate-400">
            Nestaviam náhradu ERP, WMS, MES ani CMMS. Dopĺňam praktický
            prevádzkový prehľad nad dátami, ktoré firma už má — aby ľudia
            v sklade, údržbe a výrobe vedeli rýchlejšie rozhodovať.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-slate-400">
            Popri firemných nástrojoch tvorím aj prezentačné weby na mieru. Pri
            oboch platí to isté: robím ich sám a komunikujete priamo so mnou.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
          <div className="flex items-center gap-4">
            <img
              src="/profilovka.webp"
              alt="Marek Belko"
              width={320}
              height={320}
              loading="lazy"
              decoding="async"
              className="h-20 w-20 rounded-2xl object-cover ring-1 ring-blue-400/25"
            />
            <div>
              <div className="text-lg font-semibold text-slate-100">Marek Belko</div>
              <div className="text-sm text-slate-400">
                Technik v priemyselnej prevádzke
              </div>
            </div>
          </div>
          <div className="kicker mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Kedy má zmysel firemný nástroj
          </div>
          <div className="mt-5 grid gap-4">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 text-slate-300">
              Keď sú ERP dáta použiteľné, ale odpoveď vzniká ručným dohľadávaním.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 text-slate-300">
              Keď údržba potrebuje vidieť diely, výdaje, objednávky a plánované
              práce spolu.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 text-slate-300">
              Keď chýbajúci diel, objednávka po termíne alebo opakovaná porucha
              vie zdržať opravu alebo odstávku.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 text-slate-300">
              Keď stačí pilot z existujúcich exportov a jeden pracovný pohľad,
              ktorý ukáže, či má riešenie reálny prínos.
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Čo pod značkou TechBases robím</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((item) => (
            <div
              key={item.href}
              className="flex flex-col rounded-2xl border border-blue-400/25 bg-gradient-to-br from-blue-600/10 to-slate-900 p-6 md:p-8"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              <div className="mt-auto pt-6">
                <Link
                  href={item.href}
                  className="inline-flex rounded-xl border border-slate-600 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-blue-400/50 hover:bg-slate-950"
                >
                  {item.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Ako k práci pristupujem</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-10">
        <h2 className="text-3xl font-bold">Čo môžete čakať od prvého rozhovoru</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
            <div className="font-semibold">Pomenovanie problému</div>
            <p className="mt-3 leading-7 text-slate-400">
              Prejdeme si, čo dnes hľadáte ručne, z akých systémov dáta pochádzajú
              a kto potrebuje odpoveď používať v praxi.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
            <div className="font-semibold">Rýchly odhad pilotu</div>
            <p className="mt-3 leading-7 text-slate-400">
              Cieľom prvého kontaktu je zistiť, či z existujúcich dát môže vzniknúť
              konkrétny pracovný pohľad pre údržbu, sklad alebo plánovanie.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/kontakt"
            className="inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
          >
            Opísať problém
          </Link>
          <Link
            href="/tvorba-webov#dopyt"
            className="inline-flex rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-950"
          >
            Dopyt na web
          </Link>
        </div>
      </section>
    </main>
  );
}
