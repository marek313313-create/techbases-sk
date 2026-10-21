import type { Metadata } from 'next';
import Link from 'next/link';
import { PhoneIcon } from './components/contact-icons';
import { HeroVideo } from './components/hero-video';
import { InquiryCard } from './components/inquiry-card';
import { WebRealizations } from './components/web-realizations';

export const metadata: Metadata = {
  title: {
    absolute: 'TechBases.sk | Webové stránky a firemné nástroje na mieru',
  },
  description:
    'Tvorím prezentačné weby na mieru pre firmy aj jednotlivcov a praktické prehľady z ERP, Excelu a exportov pre údržbu, sklad, výrobu a plánovanie.',
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
    'Tvorba prezentačných webov na mieru a pracovné prehľady nad ERP exportmi, skladom náhradných dielov, výdajmi, objednávkami, prestojmi a plánovaním údržby.',
  email: 'kontakt@techbases.sk',
  telephone: '+421948684756',
  areaServed: 'Slovakia',
  founder: {
    '@type': 'Person',
    name: 'Marek Belko',
  },
  serviceType: [
    'Tvorba webových stránok na mieru',
    'Pracovný pohľad nad ERP dátami',
    'Sklad náhradných dielov',
    'Objednávky a výdaje materiálu',
    'Plánovanie údržby',
    'Prestoje výroby a opakované poruchy',
  ],
};

const offers = [
  {
    kicker: 'Prezentačné weby na mieru',
    title: 'Tvorba webov',
    text: 'Prezentačný web, ktorý zrozumiteľne ukáže vašu ponuku, dobre sa používa na mobile a návštevníkom uľahčí kontakt. Pre firmu, živnostníka, ubytovanie aj osobný projekt.',
    points: [
      'individuálny dizajn a mobilná verzia',
      'galéria, jasný kontakt a rýchle načítanie',
      'orientačne 500 – 1 200 €',
    ],
    href: '/tvorba-webov',
    cta: 'Pozrieť tvorbu webov',
  },
  {
    kicker: 'Pre údržbu, sklad, výrobu a plánovanie',
    title: 'Firemné nástroje a dáta',
    text: 'Pracovné prehľady z ERP, Excelu a exportov, ktoré firma už má. Bez výmeny ERP systému a s pohľadom človeka z prevádzky.',
    points: [
      'sklad náhradných dielov, objednávky a výdaje',
      'plánovanie údržby, prestoje a nepohyblivá zásoba',
      'bezplatná kontrola 2–3 exportov, pilot od 1 200 €',
    ],
    href: '/sluzby',
    cta: 'Pozrieť firemné nástroje',
  },
];

const cooperationSteps = [
  {
    title: 'Napíšete mi',
    text: 'Stručne opíšete, s čím potrebujete pomôcť: nový web alebo prevádzkový problém, ktorý dnes riešite ručne.',
  },
  {
    title: 'Dohodneme rozsah',
    text: 'Ujasníme si, čo má výsledok obsahovať a aké podklady alebo dáta sú k dispozícii. Potom vám navrhnem orientačnú cenu.',
  },
  {
    title: 'Návrh a realizácia',
    text: 'Pri webe najskôr schválite návrh. Pri firemnom nástroji overíme výstup na vašich dátach.',
  },
  {
    title: 'Doladenie a spustenie',
    text: 'Zapracujem pripomienky. Web nasadím, nástroj overíte v prevádzke.',
  },
];

export default function TechbasesHomepage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-6 pt-8 md:pt-10">
        <div className="mb-4 flex justify-center">
          <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
            Tvorba webov · Firemné nástroje z dát
          </div>
        </div>
        <div className="hero-video-panel">
          <HeroVideo />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Webové stránky a firemné nástroje na mieru.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8 md:mt-6 md:text-xl md:leading-9">
              Tvorím weby pre firmy aj jednotlivcov a praktické prehľady z firemných dát.
              Od prvého zadania po spustenie komunikujete priamo so mnou.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {offers.map((offer) => (
            <article
              key={offer.href}
              className="flex flex-col rounded-2xl border border-blue-400/25 bg-gradient-to-br from-blue-600/12 to-slate-900 p-6 shadow-2xl md:p-8"
            >
              <div className="kicker text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                {offer.kicker}
              </div>
              <h2 className="mt-3 text-3xl font-bold">{offer.title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{offer.text}</p>
              <ul className="mt-5 grid gap-2 pl-5 text-slate-200">
                {offer.points.map((point) => (
                  <li key={point} className="list-disc leading-7 marker:text-blue-400">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <Link
                  href={offer.href}
                  className="inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
                >
                  {offer.cta} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="realizacie"
        tabIndex={-1}
        className="mx-auto max-w-6xl px-6 py-12 outline-none md:py-16"
      >
        <div className="max-w-3xl">
          <div className="kicker text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Realizácie
          </div>
          <h2 className="mt-4 text-3xl font-bold">Ukážky mojej práce</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Weby, ktoré som pripravil alebo práve pripravujem, a anonymizovaný výsledok
            pilotu z prevádzky.
          </p>
        </div>

        <div className="mt-8">
          <WebRealizations />
        </div>

        <article
          id="ukazky-riesenia"
          className="mt-6 rounded-2xl border border-slate-700/80 bg-slate-900 p-6 shadow-xl md:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                  Anonymizovaný pilot
                </span>
                <span className="text-sm text-slate-400">Firemný nástroj z dát</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold">
                Plánovacia kniha z viacerých dátových vstupov
              </h3>
              <blockquote className="mt-4 border-l-2 border-blue-400/50 pl-4">
                <p className="text-lg leading-8 text-slate-100">
                  „Ručná aktualizácia plánovacej knihy trvala týždeň až týždeň a pol. Po
                  prepojení existujúcich dát sa rovnaká kontrola skrátila na niekoľko
                  minút.“
                </p>
                <footer className="mt-2 text-sm text-slate-400">
                  — Anonymizovaný pilot, výrobná firma, sklad náhradných dielov
                </footer>
              </blockquote>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/sluzby#ukazky-riesenia"
                  className="inline-flex rounded-xl border border-slate-600 px-5 py-3 font-medium text-slate-100 transition hover:border-blue-400/50 hover:bg-slate-950"
                >
                  Ukážky firemných nástrojov
                </Link>
              </div>
            </div>
            <figure>
              <div className="relative overflow-hidden rounded-xl border border-blue-300/25 bg-slate-950/70 shadow-2xl">
                <div className="pointer-events-none absolute left-3 top-3 z-10 rounded-full border border-emerald-400/30 bg-slate-950/80 px-3 py-1 text-xs font-medium text-emerald-100">
                  Anonymizovaná ukážka
                </div>
                <img
                  src="/ukazky/interny-prehlad-poloziek.webp"
                  alt="Anonymizovaný pracovný pohľad na kritické diely a objednávky"
                  width={1672}
                  height={941}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-slate-400">
                Ukážky používajú anonymizované dáta, bez reálnych názvov zariadení a
                zákaziek.
              </figcaption>
            </figure>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="max-w-3xl">
          <div className="kicker text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Spolupráca
          </div>
          <h2 className="mt-4 text-3xl font-bold">Ako spolupracujeme</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Pri webe aj pri firemnom nástroji je postup podobný.
          </p>
        </div>
        <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cooperationSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 text-sm font-semibold text-blue-100">
                {index + 1}
              </div>
              <div className="mt-4 text-lg font-semibold">{step.title}</div>
              <p className="mt-2 leading-7 text-slate-400">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 leading-7 text-slate-400">
          Podrobný postup nájdete na stránke{' '}
          <Link
            href="/tvorba-webov#postup"
            className="text-blue-200 underline decoration-blue-400/40 underline-offset-4 hover:text-white"
          >
            Tvorba webov
          </Link>{' '}
          a pri firemných nástrojoch v časti{' '}
          <Link
            href="/sluzby#pilot"
            className="text-blue-200 underline decoration-blue-400/40 underline-offset-4 hover:text-white"
          >
            Pilot pracovného pohľadu
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
            <img
              src="/profilovka.webp"
              alt="Marek Belko"
              width={320}
              height={320}
              loading="lazy"
              decoding="async"
              className="h-24 w-24 rounded-2xl object-cover ring-1 ring-blue-400/25 md:h-28 md:w-28"
            />
            <div>
              <div className="kicker text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Kto za TechBases stojí
              </div>
              <h2 className="mt-2 text-2xl font-bold">Marek Belko</h2>
              <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                TechBases je moja značka. Pracujem ako technik v priemyselnej prevádzke a
                19 rokov sa pohybujem v plánovaní, výrobe a údržbe. Preto pri firemných
                nástrojoch viem, čo stojí jeden chýbajúci diel pred opravou.
              </p>
              <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                Weby aj firemné nástroje robím sám.
              </p>
              <Link
                href="/o-mne"
                className="mt-5 inline-flex rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-950"
              >
                Viac o mne
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-6xl px-6 pb-20 pt-12">
        <div className="max-w-3xl">
          <div className="kicker text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Kontakt
          </div>
          <h2 className="mt-4 text-3xl font-bold">Napíšte mi, čo potrebujete</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Vyberte si, čo riešite. Na začiatok stačí pár viet, odpoviem vám osobne.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <InquiryCard topic="web" />
          <InquiryCard topic="data" />
        </div>
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="leading-7 text-slate-300">
            Radšej telefonicky? Alebo chcete poslať správu cez formulár?
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+421948684756"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-950"
            >
              <PhoneIcon />
              +421 948 684 756
            </a>
            <Link
              href="/kontakt#formular"
              className="inline-flex rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-950"
            >
              Kontaktný formulár
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
