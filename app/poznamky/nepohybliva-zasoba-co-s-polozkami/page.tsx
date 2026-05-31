import type { Metadata } from 'next';
import Link from 'next/link';

const canonicalUrl = 'https://techbases.sk/poznamky/nepohybliva-zasoba-co-s-polozkami';
const pageTitle = 'Nepohyblivá zásoba: čo s položkami | TechBases.sk';
const pageDescription =
  'Nepohyblivá zásoba nie je automaticky odpad. Ako rozhodnúť, ktoré položky ponechať, preradiť, vydať na údržbu, znížiť alebo zošrotovať.';
const pageImage = '/Nepohyblivá zásoba ponechať, preradiť, vydať alebo zošrotovať.png';

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: '/poznamky/nepohybliva-zasoba-co-s-polozkami',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: 'TechBases.sk',
    locale: 'sk_SK',
    type: 'article',
    images: [
      {
        url: pageImage,
        alt: 'Ilustračný vizuál k poznámke o nepohyblivej zásobe a rozhodovaní o položkách',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
};

const decisionOptions = [
  'ponechať v sklade, ak má položka stále jasný dôvod držania',
  'preveriť technický význam položky',
  'znížiť množstvo, ak je skladom viac kusov než dáva zmysel',
  'vydať na sklad údržby alebo použiť pri plánovaných opravách',
  'preradiť do havarijnej zásoby, ak to potvrdí technické posúdenie',
  'zlúčiť s inou položkou, ak ide o duplicitu alebo náhradu',
  'zošrotovať alebo odpísať, ak položka nemá použitie',
  'doplniť vlastníka, zariadenie alebo dôvod držania',
];

const verificationSignals = [
  'posledný pohyb je starý niekoľko rokov',
  'položka nemá väzbu na aktuálne zariadenie',
  'nie je jasné, kto je vlastník položky',
  'neexistuje plánované použitie',
  'množstvo je vyššie než reálna potreba',
  'položka zostala po ukončenom projekte, odstávke alebo modernizácii',
  'hodnota rastie, ale množstvo ani dôvod držania sa nepreverovali',
  'v sklade existujú podobné alebo duplicitné položky',
];

const furtherUseSignals = [
  'položka sa dá použiť pri plánovanej oprave',
  'položka sa dá vydať na sklad údržby',
  'položka má alternatívne použitie pri inom zariadení',
  'položka môže nahradiť podobný diel',
  'položka má technický význam, ktorý ešte nebol správne zaevidovaný',
  'položka má byť preradená do iného režimu zásoby',
];

const valueGrowthReasons = [
  'nárast nákupných cien',
  'vyššie množstvo rovnakých položiek',
  'nové položky bez pohybu',
  'položky po ukončených projektoch',
  'historické zvyšky po opravách alebo odstávkach',
  'zlé plánovanie alebo nákup pre istotu',
  'chýbajúce preradenie do správneho režimu zásoby',
];

const workingViewFields = [
  'položka',
  'hodnota zásoby',
  'množstvo',
  'posledný výdaj',
  'posledná objednávka',
  'väzba na zariadenie',
  'možné použitie pri údržbe',
  'podobné alebo duplicitné položky',
  'dôvod držania',
  'návrh ďalšieho kroku',
  'vlastník na preverenie',
];

const outputCategories = [
  'ponechať',
  'preveriť',
  'znížiť množstvo',
  'vydať na údržbu',
  'použiť pri plánovanej oprave',
  'preradiť do havarijnej zásoby po posúdení',
  'zlúčiť s podobnou položkou',
  'kandidát na odpis alebo šrot',
  'nejasné - chýba vlastník alebo väzba',
];


const relatedNotes = [
  {
    title: 'ERP nie je problém. Problém je, keď z neho nevzniká odpoveď.',
    href: '/poznamky/erp-nie-je-problem',
  },
  {
    title: 'ERP dáta samé o sebe nevytvoria rozhodnutie',
    href: '/poznamky/data-nie-su-problem-it',
  },
];

const relatedServices = [
  {
    title: 'Audit ručného dohľadávania v ERP dátach',
    href: '/audit-erp-dat',
  },
  {
    title: 'Sklad náhradných dielov',
    href: '/sluzby/sklad-nahradnych-dielov',
  },
];

const articleStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Nepohyblivá zásoba: ponechať, preradiť, vydať alebo zošrotovať',
  description: pageDescription,
  image: [`https://techbases.sk${pageImage}`],
  mainEntityOfPage: canonicalUrl,
  dateModified: '2026-05-31',
  author: {
    '@type': 'Person',
    name: 'Marek Belko',
  },
  publisher: {
    '@type': 'Organization',
    name: 'TechBases.sk',
    logo: {
      '@type': 'ImageObject',
      url: 'https://techbases.sk/techbase-logo-v2.png',
    },
  },
  inLanguage: 'sk-SK',
};

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

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6 text-lg font-semibold leading-8 text-blue-50">
      {children}
    </div>
  );
}

export default function SlowMovingStockDecisionNotePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <article>
        <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
          Poznámka z prevádzky
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Nepohyblivá zásoba: ponechať, preradiť, vydať alebo zošrotovať
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Nepohyblivá zásoba sa často rieši ako zoznam položiek bez pohybu.
          Lenže samotný dátum posledného výdaja nestačí na rozhodnutie, čo s
          položkou ďalej.
        </p>
        <p className="mt-4 leading-8 text-slate-400">
          Položka bez pohybu nemusí byť automaticky odpad. Môže ísť o položku,
          ktorú treba preveriť, znížiť množstvom, vydať na údržbu, ponechať v
          sklade alebo po technickom posúdení preradiť do havarijnej zásoby.
        </p>

        <figure className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          <img
            src={pageImage}
            alt="Ilustračný vizuál k poznámke o nepohyblivej zásobe a rozhodovaní o položkách"
            className="w-full object-cover"
          />
        </figure>

        <Highlight>
          Nepohyblivá zásoba je zoznam položiek na rozhodnutie, nie automaticky
          zoznam na odpis.
        </Highlight>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Nepohyblivá zásoba nie je havarijná zásoba</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Nepohyblivá zásoba a havarijná zásoba sú dva rozdielne režimy zásob.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Havarijná zásoba je vedome držaná poistka pre kritické situácie.
            Rieši sa samostatne a nemá sa automaticky miešať do nepohyblivej
            zásoby.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Pri preverovaní nepohyblivých položiek však môže vzniknúť otázka, či
            niektorá položka nemá technický význam a nemá byť po posúdení
            preradená do havarijnej zásoby.
          </p>
          <Highlight>
            Zoznam nepohyblivej zásoby nemá končiť pri čísle. Má končiť
            rozhodnutím: ponechať, preveriť, znížiť, vydať, preradiť alebo
            zošrotovať.
          </Highlight>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Prečo samotný zoznam bez pohybu nestačí</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Ak sa pozeráme iba na položky bez výdaja, všetky vyzerajú podobne. V
            skutočnosti však môžu mať úplne odlišný dôvod, prečo sa nehýbu.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Jedna položka môže byť historický zvyšok po projekte. Druhá môže byť
            použiteľná pri bežných opravách. Tretia môže byť skladom v príliš
            vysokom množstve. Štvrtá môže patriť k zariadeniu, ktoré sa už
            nepoužíva.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Bez kontextu sa nedá rozhodnúť, či ide o problém, príležitosť na
            spotrebu, kandidáta na odpis alebo položku na technické preverenie.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Možné rozhodnutia pri položke</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Cieľom pracovného pohľadu nie je iba povedať, čo sa nehýbe. Cieľom
            je pripraviť ďalší krok pri konkrétnej položke.
          </p>
          <BulletList items={decisionOptions} />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Kedy je položka kandidát na preverenie</h2>
          <BulletList items={verificationSignals} />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Kedy môže mať položka ďalšie použitie</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Niektoré nepohyblivé položky nemusia ísť hneď na odpis. Môžu byť
            použiteľné pri údržbe, plánovaných opravách alebo ako náhrada za inú
            položku.
          </p>
          <BulletList items={furtherUseSignals} />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Rast hodnoty treba rozdeliť na príčiny</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Pri nepohyblivej zásobe nestačí pozerať iba na celkovú hodnotu. Ak
            hodnota rovnakých alebo podobných položiek narastie napríklad z
            260 000 eur na 430 000 eur, treba zistiť, čo tento nárast spôsobilo.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Mohla narásť cena. Mohlo narásť množstvo. Mohli pribudnúť nové
            položky. Alebo sa len dlhšie neriešili historické zvyšky po opravách,
            odstávkach alebo projektoch.
          </p>
          <BulletList items={valueGrowthReasons} />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Čo má ukázať pracovný pohľad</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Použiteľný pracovný pohľad má pomôcť rozdeliť nepohyblivé položky
            podľa ďalšieho kroku. Nemá to byť len export zo skladu.
          </p>
          <BulletList items={workingViewFields} />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Aké výstupy dávajú zmysel</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Pri nepohyblivej zásobe je praktickejšie vytvoriť kategórie na
            ďalšie riešenie než jeden spoločný zoznam.
          </p>
          <BulletList items={outputCategories} />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Veľké číslo bez kontextu nestačí</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Nepohyblivá zásoba nie je jeden problém. Je to zoznam položiek, pri
            ktorých treba rozhodnúť ďalší krok.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Niektoré položky sa majú ponechať. Niektoré preveriť. Niektoré
            znížiť množstvom. Niektoré vydať na údržbu. Niektoré preradiť do
            iného režimu zásoby. A niektoré naozaj patria na odpis alebo šrot.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Bez kontextu zostáva len veľké číslo. S rozpadom na príčiny a ďalší
            krok vzniká zoznam rozhodnutí.
          </p>
        </section>

        <section className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 text-center shadow-2xl md:p-10">
          <h2 className="text-3xl font-bold">Riešite nepohyblivú zásobu?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            Pošlite stručný opis problému alebo ukážku exportu. Na začiatok
            stačí vedieť, aké skladové dáta máte, čo dnes riešite ručne a aké
            rozhodnutie potrebujete pripraviť.
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

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Súvisiace poznámky</h2>
            <div className="mt-5 grid gap-3">
              {relatedNotes.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="leading-7 text-slate-300 transition hover:text-blue-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Súvisiace služby</h2>
            <div className="mt-5 grid gap-3">
              {relatedServices.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="leading-7 text-slate-300 transition hover:text-blue-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
