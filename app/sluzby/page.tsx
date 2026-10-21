import type { Metadata } from 'next';
import Link from 'next/link';
import { PhoneIcon } from '../components/contact-icons';
import { InquiryCard } from '../components/inquiry-card';
import { MiniLogoBullet } from '../components/mini-logo-bullet';
import { SolutionPreviews } from '../components/solution-previews';
import { latestPracticeNotes } from '../poznamky/poznamky-data';
import { collaborationSteps, faqItems, useCases } from '../site-data';

export const metadata: Metadata = {
  title: {
    absolute: 'Firemné nástroje | Prevádzkové prehľady z ERP dát',
  },
  description:
    'Pracovné prehľady nad ERP exportmi, skladom náhradných dielov, výdajmi, objednávkami, prestojmi a plánovaním údržby. Bezplatná kontrola 2–3 exportov a pilot.',
  alternates: {
    canonical: '/sluzby',
  },
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const sectionLinks = [
  { href: '#kontrola-exportov', label: 'Kontrola exportov' },
  { href: '#pilot', label: 'Pilot' },
  { href: '#audit', label: 'Audit' },
  { href: '#oblasti', label: 'Oblasti' },
  { href: '#ukazky-riesenia', label: 'Ukážky' },
  { href: '#otazky', label: 'Otázky' },
  { href: '#kontakt', label: 'Kontakt' },
];

const freeExportCheckPoints = [
  'stačia 2–3 anonymizované exporty alebo ukážky tabuliek',
  'ideálne súvisiace údaje, napríklad sklad + výdaje + objednávky',
  'bez zásahu do ERP, SAP, WMS alebo CMMS',
  'bez záväzku a bez veľkej implementácie',
  'cieľom je zistiť, či má z dát zmysel vytvoriť pracovný nástroj',
];

const erpAnswers = [
  'kritické diely, ktoré môžu zdržať opravu alebo odstávku',
  'objednávky po termíne alebo položky čakajúce na dodanie',
  'nepohyblivú zásobu, ktorá viaže peniaze',
  'opakované poruchy a prestoje podľa agregátov alebo zariadení',
  'pripravenosť plánovaných prác podľa dostupnosti materiálu',
  'rozpad zostavy na sklad, rezervácie a chýbajúce množstvá',
];

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

const targetFit = [
  'výrobné firmy s údržbou a skladom náhradných dielov',
  'firmy, ktoré majú ERP/SAP, ale ľudia stále skladajú odpovede v Exceli',
  'údržba, ktorá potrebuje vidieť diely, výdaje, objednávky a plánované práce spolu',
  'technické prevádzky, kde chýbajúci diel vie zdržať opravu alebo odstávku',
  'firmy, ktoré nechcú meniť ERP, ale potrebujú lepší pracovný pohľad nad existujúcimi dátami',
];

const notFit = [
  'ak nemáte žiadne použiteľné exporty alebo dáta',
  'ak čakáte kompletnú náhradu ERP, SAP, WMS, MES alebo CMMS',
  'ak potrebujete sklad riadiť cez skenery, príjem, výdaj a fyzickú logistiku',
  'ak problém nie je v dátach, ale v disciplíne používania systému',
  'ak očakávate hotový univerzálny softvér bez pilotného overenia na vašich dátach',
];

const beforeAfter = {
  before: [
    'ERP exporty a Excel tabuľky',
    'ručné porovnávanie výdajov a objednávok',
    'plánovacia kniha mimo skladu',
    'nejasné kritické diely pred opravou',
  ],
  after: [
    'jeden pracovný pohľad',
    'stav položky a posledný výdaj',
    'otvorené objednávky a čakajúce diely',
    'nepohyblivá zásoba a prevádzkové riziká',
    'pripravenosť plánovaných prác',
  ],
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <section className="max-w-4xl">
        <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
          Firemné nástroje a dáta
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          ERP dáta existujú — odpovede stále vznikajú ručne.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Z ERP exportov, Excelu a ďalších výstupov vytváram pracovné prehľady pre údržbu,
          sklad, výrobu a plánovanie. Údaje o zásobách, výdajoch, objednávkach a
          prestojoch spájam do jedného pohľadu — bez výmeny ERP systému.
        </p>
        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          Nie je to ERP, WMS ani MES. Je to praktická rozhodovacia vrstva nad dátami,
          ktoré už firma má. Cieľom nie je nový systém, ale konkrétny použiteľný pohľad
          pre jeden prevádzkový problém.
        </p>
        <p className="mt-4 max-w-3xl leading-8 text-slate-400">
          Vychádzam z 19 rokov praxe v plánovaní, výrobe a údržbe priemyselnej prevádzky.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#kontakt"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
          >
            Prebrať váš prípad zadarmo
          </a>
          <a
            href="#kontrola-exportov"
            className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
          >
            Bezplatná kontrola exportov
          </a>
        </div>
      </section>

      <nav aria-label="Obsah stránky" className="mt-10">
        <ul className="flex flex-wrap gap-2">
          {sectionLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-300 transition hover:border-blue-400/45 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <aside className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="leading-7 text-slate-300">
          <span className="font-semibold text-slate-100">Hľadáte nový web?</span>{' '}
          Prezentačné weby na mieru robím ako samostatnú službu.
        </p>
        <Link
          href="/tvorba-webov"
          className="inline-flex shrink-0 rounded-xl border border-blue-400/40 px-4 py-2 text-sm font-semibold text-blue-100 transition hover:bg-blue-500/10"
        >
          Tvorba webov →
        </Link>
      </aside>

      <section
        id="kontrola-exportov"
        className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 shadow-2xl md:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="kicker text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Prvý krok bez implementácie
            </div>
            <h2 className="mt-4 text-3xl font-bold">Bezplatná kontrola 2–3 exportov</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Máte exporty zo skladu, výdajov, objednávok alebo údržby a neviete, či sa z
              nich dá spraviť použiteľný pracovný prehľad?
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              Pošlite anonymizované ukážky z 2–3 súvisiacich exportov. Pozriem sa, či
              medzi nimi vidno konkrétny problém — napríklad nepohyblivú zásobu, chýbajúce
              diely, stav objednávok, duplicity alebo spotrebu podľa údržby.
            </p>
            <p className="mt-4 leading-8 text-slate-400">
              Ak tam nebude jasný prínos, poviem rovno, že to nemá zmysel riešiť.
            </p>
            <div className="mt-8">
              <a
                href="#kontakt"
                className="inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
              >
                Chcem skontrolovať exporty
              </a>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Neposielajte citlivé alebo kompletné firemné dáta. Na prvé posúdenie stačia
              anonymizované ukážky.
            </p>
          </div>

          <div className="grid gap-5 border-l border-slate-800 pl-6 lg:mt-2">
            {freeExportCheckPoints.map((item) => (
              <div key={item} className="flex flex-nowrap gap-3 leading-7 text-slate-300">
                <MiniLogoBullet />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Čo z ERP dát viete získať</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Z existujúcich ERP exportov vytvorím pracovný pohľad, ktorý odpovedá na
            otázky, ktoré dnes vznikajú ručne cez Excel tabuľky, objednávky, výdaje a
            plánovanie.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {erpAnswers.map((item) => (
            <div
              key={item}
              className="flex flex-nowrap gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-6 leading-7 text-slate-300"
            >
              <MiniLogoBullet />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <blockquote className="mt-12 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-6 shadow-2xl md:p-7">
          <div className="kicker text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Anonymizovaný výsledok pilotu
          </div>
          <p className="mt-5 text-2xl font-semibold leading-snug text-slate-100">
            „Ručná aktualizácia plánovacej knihy trvala týždeň až týždeň a pol. Po
            prepojení existujúcich dát sa rovnaká kontrola skrátila na niekoľko minút.“
          </p>
          <footer className="mt-4 text-sm text-blue-200/80">
            — Anonymizovaný pilot, výrobná firma, sklad náhradných dielov
          </footer>
          <p className="mt-5 leading-8 text-slate-400">
            Pri plánovacej knihe s tisíckami položiek je sklad živý — ručne zapísaný stav
            môže byť o deň neskôr neaktuálny. Pointa nie je len rýchlosť, ale aktuálnosť
            dát pri každom rozhodnutí.
          </p>
        </blockquote>
      </section>

      <section
        id="pilot"
        className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 md:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="kicker text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Najčastejší začiatok
            </div>
            <h2 className="mt-4 text-3xl font-bold">Pilot pracovného pohľadu</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Začíname jednou otázkou, ktorá dnes zaberá čas alebo spôsobuje neistotu. Po
              pilote je jasnejšie, či má riešenie hodnotu a čo má byť ďalším krokom.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              Ručná práca niekoľkých dní mesačne — skladanie exportov, objednávok a
              výdajov — má svoju cenu v čase aj v riziku chyby. Pilot overí, či sa to dá
              skrátiť na minúty z dát, ktoré firma už má.
            </p>
            <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950/80 p-5">
              <div className="text-sm text-slate-400">Orientačný rozsah pilotu</div>
              <div className="mt-1 text-2xl font-semibold">1 200 – 2 500 €</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Podľa počtu dátových zdrojov, kvality exportov a rozsahu výstupu.
              </p>
            </div>
            <p className="mt-4 leading-8 text-slate-400">
              Pilot má pevne dohodnutý rozsah. Ďalšie požiadavky, nové zdroje dát alebo
              nové pohľady sa naceňujú samostatne.
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
            najčastejšie ako interná webová stránka alebo lokálna aplikácia nad dostupnými
            exportmi.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            V prvej fáze nie je potrebný zásah do ERP/SAP. Po overení prínosu sa dá
            riešenie rozšíriť o pravidelné aktualizácie, viac používateľov, ďalšie dátové
            zdroje alebo priamejšie napojenie podľa možností IT.
          </p>
        </div>
        <div className="mt-5 rounded-xl border border-blue-500/20 bg-blue-500/10 p-6">
          <h3 className="text-xl font-semibold">
            Keď ručná aktualizácia prestane dávať zmysel
          </h3>
          <p className="mt-4 leading-8 text-slate-300">
            Ak má plánovacia kniha stovky až tisíce položiek, ručné dopĺňanie skladu,
            objednávok, zákaziek a množstiev už nie je drobná administratíva. Je to
            opakovaná práca s rizikom, že pri živom sklade údaje rýchlo zostarnú.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Ako funguje pilot</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Päť krokov od konkrétnej otázky z prevádzky po rozhodnutie, či má zmysel
            pokračovať.
          </p>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {collaborationSteps.map((step) => (
            <li
              key={step.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="audit"
        className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 shadow-2xl md:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <div className="kicker text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Pred pilotom
            </div>
            <h2 className="mt-4 text-3xl font-bold">
              Audit ručného dohľadávania v ERP dátach
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Nie ste si istí, či má pilot zmysel alebo kde začať? Audit je krátke
              overenie jedného prevádzkového problému — prejdeme dostupné exporty, ručné
              kroky a čas, ktorý to zaberá.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              Výstupom je konkrétny návrh: čo by pracovný prehľad zobrazoval, z akých dát
              by vychádzal a aký je odporúčaný rozsah pilotu.
            </p>
            <p className="mt-4 leading-8 text-slate-400">
              Audit je vhodný pre firmy, ktoré majú pocit, že problém existuje, ale
              nevedia, či je dostatočne konkrétny na to, aby sa riešil pilotom.
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

      <section id="oblasti" className="mt-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">
              Údržba, sklad a výroba potrebujú rovnakú odpoveď
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Pri oprave často nejde o to, či firma má ERP. Problém je, že odpoveď vzniká
              pomaly: máme diel, bol vydaný, je objednaný a môže zdržať opravu?
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              Preto spájam sklad, výdaje, objednávky a plánovaciu knihu do jedného
              pracovného pohľadu.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Plánovanie údržby</h3>
              <p className="mt-4 leading-8 text-slate-400">
                Cieľom je rýchlo vidieť kritické diely, nepohyblivú zásobu a pripravenosť
                plánovaných prác.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Materiálová pripravenosť zostavy</h3>
              <p className="mt-4 leading-8 text-slate-400">
                Ak jedna položka znamená celú zostavu, treba rýchlo vidieť, čo je skladom,
                čo je rezervované a čo treba objednať.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {serviceGroups.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-7 shadow-xl"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
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
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Typické zadania</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Takto zvyčajne znie prvé zadanie z prevádzky. Názvy oblastí sú vyššie, tu ide
            o konkrétne otázky, ktoré dnes vznikajú ručne.
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
          <h2 className="text-3xl font-bold">Pred / po</h2>
          <p className="mt-3 leading-7 text-slate-400">
            Pointa pilotu nie je ďalší výstup na pozeranie. Pointa je skrátiť cestu od ERP
            dát k rozhodnutiu v prevádzke.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.38fr)_minmax(320px,1fr)]">
          <article className="rounded-2xl border border-blue-400/20 bg-gradient-to-b from-slate-900/90 to-slate-900/60 p-6 shadow-2xl md:p-7">
            <div className="text-sm font-bold text-blue-300">Predtým</div>
            <h3 className="mt-3 text-2xl font-semibold text-slate-100">
              Dáta existujú, ale odpoveď vzniká ručne
            </h3>
            <ul className="mt-5 grid gap-2 pl-5 text-slate-400">
              {beforeAfter.before.map((item) => (
                <li key={item} className="list-disc leading-7">
                  {item}
                </li>
              ))}
            </ul>
            <figure className="mt-6">
              <img
                src="/frustracia.webp"
                alt="Ručné skladanie dát z exportov a Excelu"
                width={1672}
                height={941}
                loading="lazy"
                decoding="async"
                className="max-h-[360px] w-full rounded-xl border border-slate-400/25 object-cover object-center shadow-2xl"
              />
              <figcaption className="mt-3 text-sm leading-6 text-slate-400">
                Keď dáta existujú, ale každá odpoveď vzniká ručným dohľadávaním.
              </figcaption>
            </figure>
          </article>

          <article className="rounded-2xl border border-blue-400/25 bg-gradient-to-b from-blue-900/45 to-slate-900/75 p-6 shadow-2xl md:p-7">
            <div className="text-sm font-bold text-blue-200">Potom</div>
            <h3 className="mt-3 text-2xl font-semibold text-blue-50">
              Jeden pracovný pohľad pre rozhodnutie
            </h3>
            <ul className="mt-5 grid gap-2 pl-5 text-slate-200">
              {beforeAfter.after.map((item) => (
                <li key={item} className="list-disc leading-7">
                  {item}
                </li>
              ))}
            </ul>
            <figure className="mt-6">
              <a
                href="/ukazky/vydaj-materialu.webp"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-blue-300/25 bg-slate-950/70 shadow-2xl"
                aria-label="Otvoriť ukážkový pracovný pohľad vo väčšej veľkosti (otvorí sa nové okno)"
              >
                <div className="pointer-events-none absolute left-3 top-3 z-10 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-100 backdrop-blur">
                  Anonymizovaná ukážka
                </div>
                <img
                  src="/ukazky/vydaj-materialu.webp"
                  alt="Anonymizovaný pracovný pohľad na výdaje materiálu"
                  width={1672}
                  height={941}
                  loading="lazy"
                  decoding="async"
                  className="max-h-[300px] w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                />
              </a>
              <figcaption className="mt-3 text-sm leading-6 text-blue-100/75">
                Použiteľný pracovný pohľad nad dátami, ktoré firma už má.
              </figcaption>
            </figure>
          </article>
        </div>
      </section>

      <SolutionPreviews />

      <section className="mt-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-6 shadow-xl">
            <h2 className="text-xl font-semibold">
              Pre koho majú firemné nástroje zmysel
            </h2>
            <ul className="mt-4 grid gap-2 pl-5 text-slate-300">
              {targetFit.map((item) => (
                <li key={item} className="list-disc leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-6">
            <h2 className="text-xl font-semibold text-slate-200">Kedy to nemá zmysel</h2>
            <ul className="mt-4 grid gap-2 pl-5 text-slate-300">
              {notFit.map((item) => (
                <li key={item} className="list-disc leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <div className="kicker text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Odborné poznámky
            </div>
            <h2 className="mt-4 text-3xl font-bold">Poznámky z prevádzky</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Krátke články o tom, prečo odpovede v údržbe, sklade a výrobe často stále
              vznikajú ručne — aj keď ERP dáta už existujú.
            </p>
            <div className="mt-8">
              <Link
                href="/poznamky"
                className="inline-flex rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-950"
              >
                Zobraziť poznámky
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {latestPracticeNotes.map((note) => (
              <Link
                key={note.slug}
                href={note.slug}
                className="rounded-xl border border-slate-800 bg-slate-950/75 p-5 transition hover:border-blue-500/35 hover:bg-slate-950"
              >
                <h3 className="text-xl font-semibold">{note.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{note.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="otazky" className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Časté otázky</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Krátke odpovede na to, čo sú firemné nástroje TechBases a čo zámerne
            nenahrádzajú.
          </p>
        </div>
        <div className="mt-10 divide-y divide-slate-800 border-y border-slate-800">
          {faqItems.map((item) => (
            <div key={item.question} className="py-6">
              <h3 className="text-xl font-semibold">{item.question}</h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kontakt" className="mt-16">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <InquiryCard topic="data" headingAs="h2" showDetailLink={false}>
            <p className="mt-4 leading-7 text-slate-300">
              Ak informácie vo firme existujú, ale odpoveď pre údržbu, sklad alebo výrobu
              stále vzniká ručne, prvý rozhovor rýchlo ukáže, či má zmysel overiť pilot.
              Pošlite krátky opis problému alebo anonymizovanú ukážku exportu.
            </p>
          </InquiryCard>
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8">
            <div>
              <h2 className="text-xl font-semibold">Radšej telefonicky?</h2>
              <a
                href="tel:+421948684756"
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-950"
              >
                <PhoneIcon />
                +421 948 684 756
              </a>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                Správu môžete poslať aj cez{' '}
                <Link
                  href="/kontakt?tema=data#formular"
                  className="text-blue-200 underline decoration-blue-400/40 underline-offset-4 hover:text-white"
                >
                  formulár na stránke Kontakt
                </Link>
                .
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/60 p-5">
              <p className="leading-7 text-slate-300">Hľadáte skôr nový web?</p>
              <Link
                href="/tvorba-webov"
                className="mt-3 inline-flex text-sm font-semibold text-blue-200 underline decoration-blue-400/40 underline-offset-4 hover:text-white"
              >
                Tvorba webov →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
