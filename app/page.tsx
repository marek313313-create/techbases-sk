import type { Metadata } from 'next';
import Link from 'next/link';
import { MailIcon, PhoneIcon } from './components/contact-icons';
import { SolutionPreviews } from './components/solution-previews';
import { latestPracticeNotes } from './poznamky/poznamky-data';
import { collaborationSteps, faqItems, whatsAppUrl } from './site-data';

export const metadata: Metadata = {
  title: {
    absolute: 'TechBases.sk | ERP dáta pre údržbu, sklad a výrobu',
  },
  description:
    'TechBases spája ERP exporty, sklad, výdaje, objednávky, prestoje a plánovanie do jedného pracovného pohľadu pre údržbu, sklad a výrobu.',
  alternates: {
    canonical: '/',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'TechBases.sk',
  url: 'https://techbases.sk',
  image: 'https://techbases.sk/techbase-logo-v2.png',
  description:
    'Pracovný pohľad nad ERP exportmi, skladom náhradných dielov, výdajmi, objednávkami, prestojmi a plánovaním údržby.',
  email: 'kontakt@techbases.sk',
  telephone: '+421948684756',
  areaServed: 'Slovakia',
  serviceType: [
    'Pracovný pohľad nad ERP dátami',
    'Sklad náhradných dielov',
    'Objednávky a výdaje materiálu',
    'Plánovanie údržby',
    'Prestoje výroby a opakované poruchy',
  ],
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

const erpAnswers = [
  'kritické diely, ktoré môžu zdržať opravu alebo odstávku',
  'objednávky po termíne alebo položky čakajúce na dodanie',
  'nepohyblivú zásobu, ktorá viaže peniaze',
  'opakované poruchy a prestoje podľa agregátov alebo zariadení',
  'pripravenosť plánovaných prác podľa dostupnosti materiálu',
  'rozpad zostavy na sklad, rezervácie a chýbajúce množstvá',
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

function MiniLogoBullet() {
  return (
    <img
      src="/mini-logo.png"
      alt=""
      aria-hidden="true"
      className="mt-1 h-5 w-5 shrink-0 rounded object-cover"
    />
  );
}

export default function TechbasesHomepage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-6 pt-8 md:pb-8 md:pt-10">
        <div className="mb-4 flex justify-center">
          <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
            Pracovný pohľad nad ERP dátami bez výmeny ERP systému
          </div>
        </div>
        <div className="hero-video-panel">
          <video
            className="hero-video"
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            poster="/techbase-logo-v2.png"
            aria-label="Animovaný vizuál značky TechBases"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              ERP dáta existujú — odpovede stále vznikajú ručne.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              TechBases spája ERP exporty, sklad, výdaje, objednávky, prestoje,
              údržbu a plánovanie do jedného pracovného pohľadu pre údržbu, sklad
              a výrobu — bez výmeny ERP systému.
            </p>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-300">
              Nie je to ERP, WMS ani MES. Je to praktická rozhodovacia vrstva nad
              dátami, ktoré už firma má.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt"
                className="rounded-xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
              >
                Prebrať váš prípad zadarmo
              </Link>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                Poslať ukážku exportu
              </a>
              <a
                href="#ukazky-riesenia"
                className="rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-900"
              >
                Pozrieť ukážky
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 pt-6 md:pt-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Čo z ERP dát viete získať</h2>
          <p className="mt-4 leading-8 text-slate-300">
            TechBases z existujúcich ERP exportov vytvorí pracovný pohľad, ktorý
            odpovedá na otázky, ktoré dnes vznikajú ručne cez Excel tabuľky,
            objednávky, výdaje a plánovanie.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {erpAnswers.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-6 leading-7 text-slate-300"
            >
              <MiniLogoBullet />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <blockquote className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-6 shadow-2xl md:p-7">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Anonymizovaný výsledok pilotu
          </div>
          <p className="mt-5 text-2xl font-semibold leading-snug text-slate-100">
            „Ručná aktualizácia plánovacej knihy trvala týždeň až týždeň a pol.
            Po prepojení existujúcich dát sa rovnaká kontrola skrátila
            na niekoľko minút."
          </p>
          <footer className="mt-4 text-sm text-blue-200/70">
            — Anonymizovaný pilot, výrobná firma, sklad náhradných dielov
          </footer>
          <p className="mt-5 leading-8 text-slate-400">
            Pri plánovacej knihe s tisíckami položiek je sklad živý — ručne zapísaný
            stav môže byť o deň neskôr neaktuálny. Pointa nie je len rýchlosť,
            ale aktuálnosť dát pri každom rozhodnutí.
          </p>
        </blockquote>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">Pre koho má TechBases zmysel</h3>
            <ul className="mt-4 grid gap-2 pl-5 text-slate-300">
              {targetFit.map((item) => (
                <li key={item} className="list-disc leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">Kedy to nemá zmysel</h3>
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

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">
              Údržba, sklad a výroba potrebujú rovnakú odpoveď
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Pri oprave často nejde o to, či firma má ERP. Problém je, že odpoveď
              vzniká pomaly: máme diel, bol vydaný, je objednaný a môže zdržať
              opravu?
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              TechBases spojí sklad, výdaje, objednávky a plánovaciu knihu do
              jedného pracovného pohľadu.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Plánovanie údržby</h3>
              <p className="mt-4 leading-8 text-slate-400">
                Cieľom je rýchlo vidieť kritické diely, nepohyblivú zásobu a
                pripravenosť plánovaných prác.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Materiálová pripravenosť zostavy</h3>
              <p className="mt-4 leading-8 text-slate-400">
                Ak jedna položka znamená celú zostavu, treba rýchlo vidieť, čo je
                skladom, čo je rezervované a čo treba objednať.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Pred / po</h2>
          <p className="mt-3 leading-7 text-slate-400">
            Pointa pilotu nie je ďalší výstup na pozeranie. Pointa je skrátiť
            cestu od ERP dát k rozhodnutiu v prevádzke.
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
                src="/Frustracia.png"
                alt="Ručné skladanie dát z exportov a Excelu"
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
                href="/ukazky/vydaj-materialu.png"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-blue-300/25 bg-slate-950/70 shadow-2xl"
                aria-label="Otvoriť ukážkový pracovný pohľad vo väčšej veľkosti"
              >
                <div className="pointer-events-none absolute left-3 top-3 z-10 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-100 backdrop-blur">
                  Anonymizovaná ukážka
                </div>
                <img
                  src="/ukazky/vydaj-materialu.png"
                  alt="Anonymizovaný pracovný pohľad na výdaje materiálu"
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

      <section className="mx-auto max-w-6xl px-6 py-12">
        <SolutionPreviews />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Odborné poznámky
              </div>
              <h2 className="mt-4 text-3xl font-bold">Poznámky z prevádzky</h2>
              <p className="mt-4 leading-8 text-slate-300">
                Krátke články o tom, prečo odpovede v údržbe, sklade a výrobe
                často stále vznikajú ručne — aj keď ERP dáta už existujú.
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
            <img
              src="/profilovka.png"
              alt="Marek Belko"
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Kto za TechBases stojí
              </div>
              <h2 className="mt-2 text-2xl font-bold">Marek Belko</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                19 rokov v priemyselnej prevádzke — plánovanie, výroba, údržba.
                TechBases nie je IT produkt od niekoho, kto prevádzku nevidel.
                Je to riešenie od človeka, ktorý vie, čo stojí jeden chýbajúci
                diel pred opravou.
              </p>
              <Link
                href="/o-mne"
                className="mt-4 inline-flex rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-950"
              >
                Viac o mne
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Pilot
          </div>
          <h2 className="mt-4 text-3xl font-bold">Ako funguje pilot</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Pilot má pevný rozsah. Ďalšie požiadavky, nové zdroje dát alebo nové
            pohľady sa naceňujú samostatne.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 shadow-2xl md:p-10">
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {collaborationSteps.map((step) => (
              <li key={step.title} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <div className="font-semibold">{step.title}</div>
                <div className="mt-2 text-sm leading-6 text-slate-400">{step.text}</div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-xl font-semibold">Orientačný rozsah pilotu</h3>
          <p className="mt-3 leading-7 text-slate-400">
            Ručná práca niekoľkých dní mesačne — skladanie exportov, objednávok
            a výdajov — má svoju cenu v čase aj v riziku chyby. Pilot overí,
            či sa to dá skrátiť na minúty z dát, ktoré firma už má.
          </p>
          <div className="mt-5 rounded-xl border border-slate-700 bg-slate-950/80 p-5">
            <div className="text-2xl font-semibold">1 200 – 2 500 €</div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Podľa počtu dátových zdrojov, kvality exportov a rozsahu výstupu.
            </p>
          </div>
          <div className="mt-5 rounded-xl border border-blue-500/20 bg-blue-500/10 p-5">
            <p className="leading-7 text-slate-300">
              Nie ste si istí, či má pilot zmysel? Začnite auditom ručného
              dohľadávania v ERP dátach.
            </p>
            <Link
              href="/audit-erp-dat"
              className="mt-4 inline-flex rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-950"
            >
              Pozrieť audit
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Časté otázky</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Krátke odpovede k tomu, čo TechBases je a čo zámerne nenahrádza.
          </p>
        </div>
        <div className="mt-10 grid gap-4">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold">{item.question}</h3>
              <p className="mt-3 leading-7 text-slate-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 text-center shadow-2xl md:p-10">
          <h2 className="text-3xl font-bold">
            Máte dáta, ale odpovede stále skladáte ručne?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            Pošlite krátky opis problému alebo ukážku exportu. Vyberieme jeden
            konkrétny problém a overíme, či z existujúcich dát vie vzniknúť
            použiteľný pracovný pohľad.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:kontakt@techbases.sk?subject=Pilot%20prevadzkoveho%20prehladu"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
            >
              <MailIcon />
              Poslať ukážku exportu
            </a>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              Opísať problém
            </a>
            <a
              href="tel:+421948684756"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-950"
            >
              <PhoneIcon />
              Zavolať: +421 948 684 756
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
