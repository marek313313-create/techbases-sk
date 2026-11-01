import type { Metadata } from 'next';
import Link from 'next/link';
import { faqItems, inquiryLinks } from '../../site-data';
import { BrowserFrame, PhoneFrame } from '../components/device-frames';
import { InquiryForm } from '../components/inquiry-form';
import { SectionIntro } from '../components/section-intro';
import { getProject } from '../projects';

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

// Stručná verzia pôvodnej stránky: rovnaké ponuky a ceny, kratšie texty, cieľ je dopyt
const startOptions = [
  {
    id: 'kontrola-exportov',
    tag: 'Zadarmo',
    title: 'Kontrola 2–3 exportov',
    text: 'Pošlite anonymizované exporty, napríklad sklad, výdaje a objednávky. Poviem, či z nich má zmysel robiť pracovný prehľad. Ak nie, poviem to rovno.',
  },
  {
    id: 'pilot',
    tag: 'Orientačne 1 200 – 2 500 €',
    title: 'Pilot jedného problému',
    text: 'Jeden pracovný pohľad nad 1 až 3 zdrojmi dát s pevne dohodnutým rozsahom, bez zásahu do ERP. Cena podľa počtu zdrojov a kvality exportov.',
  },
  {
    id: 'audit',
    tag: 'Pred pilotom',
    title: 'Audit ručného dohľadávania',
    text: 'Keď neviete, kde začať: prejdeme exporty a ručné kroky a navrhnem rozsah pilotu.',
    href: '/audit-erp-dat',
    linkLabel: 'Viac o audite',
  },
];

const answers = [
  'kritické diely, ktoré môžu zdržať opravu alebo odstávku',
  'objednávky po termíne a položky čakajúce na dodanie',
  'nepohyblivá zásoba, ktorá viaže peniaze',
  'prestoje a opakované poruchy podľa agregátov',
  'pripravenosť plánovaných prác podľa dostupnosti materiálu',
  'rozpad zostavy na sklad, rezervácie a chýbajúce množstvá',
];

export default function ServicesPage() {
  const techbases = getProject('prevadzkove-prehlady')!;
  const archiv = getProject('archiv-udrzby')!;
  const [prehlad, vydaje, prestoje] = techbases.desktopShots;

  return (
    <main id="v2-obsah" className="v2-main" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* úvod: problém, jedna veta riešenia a hneď cesta k dopytu */}
      <section className="v2-dark v2-hero">
        <div className="v2-container grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <div className="v2-eyebrow">Firemné nástroje a dáta</div>
            {/* podstránka: menší titulok ako na úvode, nech sa nezalomí do šiestich riadkov */}
            <h1 className="v2-h2 mt-4 sm:mt-5">
              ERP dáta existujú. Odpovede stále vznikajú ručne.
            </h1>
            <p className="v2-lead mt-4 max-w-xl sm:mt-6">
              Z ERP exportov, Excelu a CSV pripravím pracovný prehľad pre údržbu, sklad,
              výrobu a plánovanie. Bez výmeny ERP systému.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-8">
              <Link href="/sluzby#dopyt" className="v2-btn v2-btn-primary">
                Opísať problém
              </Link>
              <Link href="/sluzby#ukazky-riesenia" className="v2-link">
                Pozrieť ukážky
              </Link>
            </div>
            <p className="v2-muted v2-small mt-6 hidden max-w-md sm:block">
              Vychádzam z 19 rokov praxe v plánovaní, výrobe a údržbe priemyselnej
              prevádzky.
            </p>
          </div>

          <figure>
            <BrowserFrame {...prestoje} url={techbases.frameUrl} priority />
            <figcaption className="v2-muted v2-small mt-3 sm:mt-4">
              Techbases, {techbases.kind.toLowerCase()}. {prestoje.caption} Údaje sú
              anonymizované.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ukážky: skutočné aplikácie, každá so samostatným štítkom */}
      <section id="ukazky-riesenia" className="v2-paper v2-section">
        <div className="v2-container">
          <SectionIntro
            index="01"
            eyebrow="Ukážky"
            title="Ukážkové pracovné pohľady"
            lead="Snímky skutočných aplikácií. Kódy, názvy, mená a sumy sú nahradené ukážkovými hodnotami."
          />

          <article className="mt-8 grid gap-4 lg:mt-12">
            <span className="v2-label-caps">
              {techbases.kind} · {techbases.category}
            </span>
            <h3 className="v2-h3">Techbases</h3>
            <div className="mt-2 grid gap-8 lg:grid-cols-2">
              {[prehlad, vydaje].map((shot) => (
                <figure key={shot.src}>
                  <BrowserFrame {...shot} url={techbases.frameUrl} />
                  <figcaption className="v2-muted v2-small mt-3">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            <Link href={`/realizacie/${techbases.slug}`} className="v2-link w-fit">
              Detail a ďalšie snímky
            </Link>
          </article>

          <article className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-16">
            <div>
              <span className="v2-label-caps">
                {archiv.kind} · {archiv.category}
              </span>
              <h3 className="v2-h3 mt-4">{archiv.name}</h3>
              <p className="v2-muted mt-3">{archiv.highlight}</p>
              <Link
                href={`/realizacie/${archiv.slug}`}
                className="v2-link mt-5 inline-block"
              >
                Detail aplikácie
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {archiv.mobileShots.map((shot) => (
                <figure key={shot.src}>
                  <PhoneFrame {...shot} />
                  <figcaption className="v2-muted v2-small mt-3">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* ako začať: tri vstupy z pôvodnej ponuky, každý vedie k dopytu */}
      <section id="ako-zacat" className="v2-white v2-section">
        <div className="v2-container">
          <SectionIntro
            index="02"
            eyebrow="Spolupráca"
            title="Ako začať"
            lead="Vždy jedným konkrétnym problémom, nie celým podnikom naraz."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3 lg:mt-12">
            {startOptions.map((option) => (
              <div
                key={option.id}
                id={option.id}
                className="rounded-2xl border border-[var(--line)] p-6 md:p-7"
              >
                <div className="v2-label-caps">{option.tag}</div>
                <h3 className="v2-h4 mt-3">{option.title}</h3>
                <p className="v2-muted mt-2">{option.text}</p>
                {option.href ? (
                  <Link href={option.href} className="v2-link mt-4 inline-block">
                    {option.linkLabel}
                  </Link>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
            <div>
              <h3 className="v2-h4">Na čo prehľady najčastejšie odpovedajú</h3>
              <ul className="v2-list mt-4">
                {answers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <Link href="/sluzby#dopyt" className="v2-btn v2-btn-primary">
                Opísať problém
              </Link>
              <p className="v2-muted v2-small mt-3">
                Nie je to ERP, WMS ani MES, ale pracovný pohľad nad dátami, ktoré firma už
                má.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* overený výsledok z pilotu, rovnaké znenie ako na pôvodnej stránke */}
      <section className="v2-dark v2-section">
        <div className="v2-container">
          <div className="max-w-4xl">
            <div className="v2-eyebrow">Anonymizovaný výsledok pilotu</div>
            <blockquote className="mt-4">
              <p className="v2-h3">
                „Ručná aktualizácia plánovacej knihy trvala týždeň až týždeň a pol. Po
                prepojení existujúcich dát sa rovnaká kontrola skrátila na niekoľko
                minút.“
              </p>
              <footer className="v2-muted v2-small mt-4">
                Anonymizovaný pilot, výrobná firma, sklad náhradných dielov
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* otázky: krátke odpovede na rozbalenie */}
      <section id="otazky" className="v2-paper v2-section">
        <div className="v2-container grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <SectionIntro index="03" eyebrow="Otázky" title="Časté otázky" />
          <div className="v2-accordion">
            {faqItems.map((item) => (
              <details key={item.question}>
                <summary>
                  <span className="v2-h4 flex-1">{item.question}</span>
                </summary>
                <p className="v2-accordion-body">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* dopyt: na mobile formulár hneď pod nadpisom, rovnako ako na úvode */}
      <section id="kontakt" className="v2-white v2-section">
        <div className="v2-container grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-10">
          <div className="lg:col-start-1 lg:row-start-1">
            <SectionIntro
              index="04"
              eyebrow="Kontakt"
              title="Opíšte prevádzkový problém"
              lead="Stačí pár viet alebo anonymizovaná ukážka exportu. Prvý rozhovor ukáže, či má zmysel overiť pilot."
            />
          </div>

          <div
            id="dopyt"
            className="v2-form-card lg:col-start-2 lg:row-span-2 lg:row-start-1"
            tabIndex={-1}
          >
            <h3 className="v2-h4">Opis problému</h3>
            <p className="v2-muted v2-small mt-1">Všetky tri polia sú povinné.</p>
            <div className="mt-6">
              <InquiryForm topic="data" />
            </div>
          </div>

          <div className="lg:col-start-1 lg:row-start-2">
            <dl className="grid gap-5">
              <div>
                <dt className="v2-label-caps">Telefón</dt>
                <dd className="m-0 mt-1">
                  <a href="tel:+421948684756" className="v2-link">
                    +421 948 684 756
                  </a>
                </dd>
              </div>
              <div>
                <dt className="v2-label-caps">E-mail</dt>
                <dd className="m-0 mt-1">
                  <a href={inquiryLinks.data.mailto} className="v2-link">
                    kontakt@techbases.sk
                  </a>
                </dd>
              </div>
              <div>
                <dt className="v2-label-caps">WhatsApp</dt>
                <dd className="m-0 mt-1">
                  <a
                    href={inquiryLinks.data.whatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="v2-link"
                  >
                    Napísať správu
                    <span className="sr-only"> (otvorí sa nové okno)</span>
                  </a>
                </dd>
              </div>
            </dl>
            <p className="v2-muted v2-small mt-8">
              Viac k téme:{' '}
              <Link href="/sluzby/sklad-nahradnych-dielov" className="v2-link">
                sklad náhradných dielov
              </Link>
              ,{' '}
              <Link href="/audit-erp-dat" className="v2-link">
                audit ERP dát
              </Link>
              ,{' '}
              <Link href="/poznamky" className="v2-link">
                poznámky z prevádzky
              </Link>
              . Hľadáte skôr nový web?{' '}
              <Link href="/#ponuka" className="v2-link">
                Tvorba webov
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
