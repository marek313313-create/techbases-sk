import type { Metadata } from 'next';
import Link from 'next/link';
import { getPracticeNote } from '../poznamky-data';

const note = getPracticeNote('/poznamky/ked-sklad-vie-co-prislo-ale-nevie-komu-to-patri');
const canonicalUrl = 'https://techbases.sk/poznamky/ked-sklad-vie-co-prislo-ale-nevie-komu-to-patri';
const pageTitle = 'Keď sklad vie, čo prišlo, ale nevie, komu to patrí | TechBases';
const pageDescription =
  'Nepohyblivá zásoba nie je len zoznam položiek bez pohybu. Bez dohľadania pôvodnej potreby neviete, či ide o zbytočný nákup, rezervu, duplicitu alebo materiál, ktorý len stratil kontext.';
const pageImage = '/ked-sklad-vie-co-prislo.webp';

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: '/poznamky/ked-sklad-vie-co-prislo-ale-nevie-komu-to-patri',
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
        alt: 'Ilustračný vizuál k poznámke o sklade, príjemke a dohľadávaní pôvodnej potreby materiálu',
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

const articleStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Keď sklad vie, čo prišlo, ale nevie, komu to patrí',
  description: pageDescription,
  image: [`https://techbases.sk${pageImage}`],
  mainEntityOfPage: canonicalUrl,
  dateModified: note.dateModified,
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

const dataTrailQuestions = [
  'prečo to vôbec máme na sklade',
  'kto materiál pôvodne potreboval',
  'či bol objednaný pre konkrétnu opravu, zákazku alebo oddelenie',
  'či ide o zbytočný nákup, rezervu, duplicitu alebo položku bez kontextu',
];

const typicalFlow = [
  'technik vytvorí objednávací návrh na materiál',
  'nákup z neho vystaví objednávku',
  'materiál príde na sklad cez príjemku',
  'po naskladnení je viditeľný hlavne stav, skladové číslo a dátum príjmu',
  'po dlhšom čase sa položka objaví v nepohyblivej zásobe',
];

const linkFields = [
  'skladové číslo materiálu',
  'dátum posledného príjmu',
  'číslo objednávky alebo príjemky',
  'číslo objednávacieho návrhu',
  'meno alebo oddelenie, ktoré potrebu vytvorilo',
];

const uncertainCases = [
  'rovnaký materiál prišiel v rovnaký deň viackrát',
  'dátum je v jednom exporte text a v druhom číslo',
  'doklady používajú rôzne formáty identifikátorov',
  'časť väzieb medzi dokladmi chýba alebo je neúplná',
  'údaje sú zadané ručne a nie sú jednotné',
];

const usefulOutcomes = [
  'ponechať položku na sklade s jasným dôvodom držania',
  'preveriť ju ako možnú havarijnú zásobu',
  'použiť ju pri plánovanej oprave',
  'označiť ju ako duplicitu na preverenie',
  'zaradiť ju medzi kandidátov na vyradenie',
  'doplniť vlastníkovi alebo oddeleniu spätnú väzbu k pôvodnej potrebe',
];

const relatedNotes = [
  {
    title: 'Nepohyblivá zásoba: ponechať, preradiť, vydať alebo zošrotovať',
    href: '/poznamky/nepohybliva-zasoba-co-s-polozkami',
  },
  {
    title: 'ERP dáta samé o sebe nevytvoria rozhodnutie',
    href: '/poznamky/data-nie-su-problem-it',
  },
];

const relatedServices = [
  {
    title: 'Sklad náhradných dielov',
    href: '/sluzby/sklad-nahradnych-dielov',
  },
  {
    title: 'Audit ručného dohľadávania v ERP dátach',
    href: '/audit-erp-dat',
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-3 text-slate-300">
      {items.map((item) => (
        <li key={item} className="flex flex-nowrap gap-3 leading-7">
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

export default function StockContextNotePage() {
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
          Keď sklad vie, čo prišlo, ale nevie, komu to patrí
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Nepohyblivá zásoba nie je len zoznam položiek bez pohybu. Bez dohľadania
          pôvodnej potreby neviete, či ide o zbytočný nákup, havarijnú rezervu,
          duplicitu alebo materiál, ktorý len stratil kontext.
        </p>
        <p className="mt-4 leading-8 text-slate-400">
          ERP alebo SAP môže poznať skladové číslo, príjemku, objednávku aj
          objednávací návrh. Napriek tomu nemusí byť na prvý pohľad jasné, kto
          materiál pôvodne potreboval a čo sa s ním má urobiť ďalej.
        </p>

        <figure className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          <img
            src={pageImage}
            alt="Ilustračný vizuál k poznámke o sklade, príjemke a dohľadávaní pôvodnej potreby materiálu"
            width={1672}
            height={941}
            decoding="async"
            className="w-full object-cover"
          />
        </figure>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Problém nie je v tom, že dáta neexistujú</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Dáta väčšinou existujú. Problém je, že nie sú pripravené ako jedna
            jednoduchá odpoveď pre človeka v prevádzke.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Skladová karta ukáže materiál, množstvo a posledný príjem. Príjemka
            ukáže, kedy materiál prišiel a na základe čoho bol prijatý.
            Objednávací návrh môže obsahovať človeka alebo oddelenie, ktoré potrebu
            vytvorilo.
          </p>
          <Highlight>
            Každý doklad sám o sebe dáva zmysel. Otázka pri nepohyblivej zásobe
            však znie: prečo to vôbec máme na sklade?
          </Highlight>
          <BulletList items={dataTrailQuestions} />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Nepohyblivá zásoba bez kontextu je len číslo</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Ak položka leží na sklade dlhší čas bez pohybu, ľahko sa objaví v
            reporte nepohyblivej zásoby. Z pohľadu reportu viaže peniaze a treba
            ju preveriť.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Samotný report však nepovie, či ide o zbytočný nákup, havarijnú
            rezervu, materiál pre plánovanú prácu, duplicitu medzi oddeleniami
            alebo položku, ktorá stratila pôvodný kontext.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Bez dohľadania dátovej stopy ľudia ručne hľadajú v dokladoch, filtrujú
            exporty a porovnávajú dátumy, návrhy, príjemky a objednávky. Každý
            nájde časť pravdy, ale celkový obraz stále chýba.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Jednoduchá otázka, zložitá cesta</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Typická situácia môže vyzerať jednoducho, kým sa po roku nezačne riešiť
            nepohyblivá zásoba a niekto sa neopýta, komu položka vlastne patrí.
          </p>
          <BulletList items={typicalFlow} />
          <p className="mt-5 leading-8 text-slate-400">
            Potom už nejde o fyzické vlastníctvo. Ide o prevádzkový kontext: kto
            vytvoril potrebu, na čo bol materiál určený, prečo sa nespotreboval a
            aký ďalší krok dáva zmysel.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Riešenie nemusí byť zložité, ale musí byť presné</h2>
          <p className="mt-4 leading-8 text-slate-300">
            V niektorých prípadoch stačí nájsť správny spojovací kľúč medzi
            skladom, príjemkou a objednávacím návrhom. Zo skladovej položky sa dá
            dostať späť na príjemku, z príjemky na návrh a z návrhu na konkrétne
            meno alebo oddelenie.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Pracovný pohľad má ukázať súvislosť, nie pridať ďalšiu tabuľku na
            ručné dohľadávanie.
          </p>
          <BulletList items={linkFields} />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Pozor na falošnú jednoduchosť</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Na prvý pohľad môže stačiť spojiť materiál a dátum príjmu. V reálnych
            dátach však treba overiť, či spojenie dáva zmysel a kde vznikajú
            duplicity alebo neisté prípady.
          </p>
          <BulletList items={uncertainCases} />
          <Highlight>
            Dobrý pracovný pohľad nemá predstierať istotu tam, kde ju dáta
            nedávajú. Má ukázať jasné prípady, sporné prípady a výnimky.
          </Highlight>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Prečo má takýto pohľad hodnotu</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Hodnota nie je v tom, že vznikne ďalšia tabuľka. Hodnota je v tom, že
            sa skráti cesta od otázky k rozhodnutiu.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Ak sa prepojí sklad, príjemky a objednávacie návrhy, nepohyblivá
            zásoba získa kontext. Až potom sa dá rozhodnúť, čo má s položkou zmysel
            urobiť ďalej.
          </p>
          <BulletList items={usefulOutcomes} />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Pointa</h2>
          <p className="mt-4 leading-8 text-slate-300">
            ERP alebo SAP môže obsahovať všetky potrebné údaje. To však ešte
            neznamená, že odpoveď je pripravená pre človeka v prevádzke.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Niekedy je najväčšia hodnota práve v tom, že sa z existujúcich dát
            poskladá jednoduchá odpoveď: kto materiál potreboval, prečo prišiel na
            sklad, prečo tam zostal a čo s ním má zmysel urobiť ďalej.
          </p>
          <Highlight>
            Nie každý problém potrebuje nový systém. Niekedy stačí nájsť správnu
            dátovú stopu.
          </Highlight>
        </section>

        <section className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 text-center shadow-2xl md:p-10">
          <h2 className="text-3xl font-bold">Máte dáta, ale odpovede stále skladáte ručne?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            Pošlite krátky opis problému alebo ukážku exportu. Vyberieme jednu
            konkrétnu otázku a overíme, či sa dá z existujúcich ERP dát vytvoriť
            použiteľný pracovný pohľad.
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
