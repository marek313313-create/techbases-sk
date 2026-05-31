import type { Metadata } from 'next';
import Link from 'next/link';
import { collaborationSteps, useCases } from '../site-data';

export const metadata: Metadata = {
  title: {
    absolute: 'Služby | Prevádzkové prehľady z ERP dát',
  },
  description:
    'Pracovné prehľady nad ERP exportmi, skladom náhradných dielov, výdajmi, objednávkami, prestojmi a plánovaním údržby.',
  alternates: {
    canonical: '/sluzby',
  },
};

const serviceGroups = [
  {
    id: 'sklad',
    title: 'Sklad náhradných dielov',
    text: 'Stav zásob, posledné výdaje, minimá, kritické položky a objednávky.',
    href: '/sluzby/sklad-nahradnych-dielov',
  },
  {
    id: 'objednavky-vydaje',
    title: 'Objednávky a výdaje',
    text: 'Otvorené objednávky, termíny, čakajúce diely a väzby na opravy alebo odstávky vrátane rozpadu zostavy na sklad, rezervácie a potrebu objednania.',
  },
  {
    id: 'planovanie-udrzby',
    title: 'Plánovanie údržby',
    text: 'Prepojenie plánovacej knihy, skladu, dostupnosti materiálu a materiálovej pripravenosti zostáv.',
  },
  {
    id: 'prestoje-poruchy',
    title: 'Prestoje a poruchy',
    text: 'Trend prestojov, opakované poruchy, agregáty s najväčším dopadom.',
  },
  {
    id: 'nepohybliva-zasoba',
    title: 'Nepohyblivá zásoba',
    text: 'Položky, ktoré viažu peniaze, ale dlhodobo sa nehýbu.',
  },
  {
    id: 'interne-analyzy',
    title: 'Interné analýzy',
    text: 'Jeden pohľad na dáta z viacerých zdrojov bez ručného skladania tabuliek, aj keď treba spojiť kusovník, skladové rezervácie a objednávky materiálu.',
  },
];

const pilotItems = [
  'jeden konkrétny problém v údržbe, sklade alebo výrobe',
  'existujúce ERP, Excel alebo CSV exporty',
  'spojenie 1 až 3 zdrojov do jedného pracovného pohľadu',
  'doladenie podľa spätnej väzby od ľudí, ktorí s výstupom pracujú',
];


export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="max-w-4xl">
        <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
          Služby
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Služby pre firmy, kde ERP dáta existujú, ale odpovede stále vznikajú ručne
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          TechBases vytvára pracovné prehľady nad ERP exportmi, skladom, výdajmi,
          objednávkami, prestojmi a plánovaním. Cieľom nie je nový systém, ale
          konkrétny použiteľný pohľad pre jeden prevádzkový problém.
        </p>
      </section>

      <section className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Najčastejší začiatok
            </div>
            <h2 className="mt-4 text-3xl font-bold">Pilot pracovného pohľadu</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Začíname jednou otázkou, ktorá dnes zaberá čas alebo spôsobuje
              neistotu. Po pilote je jasnejšie, či má riešenie hodnotu a čo má byť
              ďalším krokom.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              Orientačný rozsah pilotu je 1 200 – 2 500 € podľa počtu dátových
              zdrojov, kvality exportov a rozsahu výstupu.
            </p>
            <p className="mt-4 leading-8 text-slate-400">
              Pilot má pevne dohodnutý rozsah. Ďalšie požiadavky, nové zdroje dát
              alebo nové pohľady sa naceňujú samostatne.
            </p>
          </div>
          <div className="grid gap-4">
            {pilotItems.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-700 bg-slate-950/80 p-5 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 rounded-xl border border-slate-700 bg-slate-950/80 p-6">
          <h3 className="text-xl font-semibold">V akej forme sa pilot dodáva?</h3>
          <p className="mt-4 leading-8 text-slate-300">
            Výstupom pilotu je použiteľný pracovný pohľad nad existujúcimi dátami,
            najčastejšie ako interná webová stránka alebo lokálna aplikácia nad
            dostupnými exportmi.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            V prvej fáze nie je potrebný zásah do ERP/SAP. Po overení prínosu sa
            dá riešenie rozšíriť o pravidelné aktualizácie, viac používateľov,
            ďalšie dátové zdroje alebo priamejšie napojenie podľa možností IT.
          </p>
        </div>
        <div className="mt-5 rounded-xl border border-blue-500/20 bg-blue-500/10 p-6">
          <h3 className="text-xl font-semibold">
            Keď ručná aktualizácia prestane dávať zmysel
          </h3>
          <p className="mt-4 leading-8 text-slate-300">
            Ak má plánovacia kniha stovky až tisíce položiek, ručné dopĺňanie
            skladu, objednávok, zákaziek a množstiev už nie je drobná
            administratíva. Je to opakovaná práca s rizikom, že pri živom sklade
            údaje rýchlo zostarnú.
          </p>
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 shadow-2xl md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Pred pilotom
            </div>
            <h2 className="mt-4 text-3xl font-bold">
              Audit ručného dohľadávania v ERP dátach
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Nie ste si istí, či má pilot zmysel alebo kde začať? Audit je
              krátke overenie jedného prevádzkového problému — prejdeme dostupné
              exporty, ručné kroky a čas, ktorý to zaberá.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              Výstupom je konkrétny návrh: čo by pracovný prehľad zobrazoval,
              z akých dát by vychádzal a aký je odporúčaný rozsah pilotu.
            </p>
            <p className="mt-4 leading-8 text-slate-400">
              Audit je vhodný pre firmy, ktoré majú pocit, že problém existuje,
              ale nevedia, či je dostatočne konkrétny na to, aby sa riešil pilotom.
            </p>
            <Link
              href="/audit-erp-dat"
              className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
            >
              Zistiť viac o audite
            </Link>
          </div>
          <div className="grid gap-4">
            <div className="rounded-xl border border-slate-700 bg-slate-950/80 p-5 text-slate-300">
              <div className="font-semibold text-slate-100">Čo audit pokryje</div>
              <ul className="mt-3 grid gap-2 text-sm leading-6">
                <li>— aké dáta firma má a v akej forme</li>
                <li>— kde dnes vzniká ručné dohľadávanie</li>
                <li>— koľko času to zaberá a ako často</li>
                <li>— či z existujúcich exportov vie vzniknúť použiteľný prehľad</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-950/80 p-5 text-slate-300">
              <div className="font-semibold text-slate-100">Výstup auditu</div>
              <ul className="mt-3 grid gap-2 text-sm leading-6">
                <li>— návrh pracovného prehľadu pre konkrétny problém</li>
                <li>— odporúčaný rozsah a zameranie pilotu</li>
                <li>— orientačný odhad nákladov</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        {serviceGroups.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-7 shadow-xl"
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="mt-4 leading-8 text-slate-400">{item.text}</p>
            {'href' in item && item.href ? (
              <Link
                href={item.href}
                className="mt-5 inline-flex rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-950"
              >
                Pozrieť detail
              </Link>
            ) : null}
          </div>
        ))}
      </section>

      <section className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Typické zadania</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Takto zvyčajne znie prvé zadanie z prevádzky. Názvy služieb sú vyššie,
            tu ide o konkrétne otázky, ktoré dnes vznikajú ručne.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {useCases.map((item) => (
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

      <section className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Ako spolupráca prebieha</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {collaborationSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 md:p-10">
        <h2 className="text-3xl font-bold">Má to zmysel aj vo vašej prevádzke?</h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          Ak informácie vo firme existujú, ale odpoveď pre údržbu, sklad alebo
          výrobu stále vzniká ručne, prvý rozhovor rýchlo ukáže, či má zmysel
          overiť pilot.
        </p>
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
