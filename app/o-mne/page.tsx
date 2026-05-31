import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    absolute: 'O mne | Marek Belko — TechBases.sk',
  },
  description:
    'Marek Belko — 19 rokov v údržbe, výrobe a plánovaní. TechBases vznikol z praktickej skúsenosti s tým, že odpovede v prevádzke stále vznikajú ručne napriek existujúcim ERP dátam.',
  alternates: {
    canonical: '/o-mne',
  },
};

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
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Kedy má spolupráca zmysel
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
        <div className="mt-8">
          <Link
            href="/kontakt"
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
          >
            Opísať problém
          </Link>
        </div>
      </section>
    </main>
  );
}
