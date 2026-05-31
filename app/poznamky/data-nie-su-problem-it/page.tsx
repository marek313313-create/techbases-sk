import type { Metadata } from 'next';
import Link from 'next/link';

const canonicalUrl = 'https://techbases.sk/poznamky/data-nie-su-problem-it';
const pageTitle = 'Dáta nie sú problém IT. Dáta sú problém prevádzky | TechBases.sk';
const pageDescription =
  'Prečo zrelá práca s dátami začína tým, že prevádzka rozumie vlastným ERP dátam, pravidlám, výnimkám a rozhodnutiam, ktoré z nich majú vzniknúť.';
const pageImage = '/Dáta nie sú problém IT. Sú problem prevádzky..png';

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: '/poznamky/data-nie-su-problem-it',
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
        alt: 'Ilustračný vizuál k poznámke o ERP dátach, prevádzke a rozhodovaní',
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
  headline: 'Dáta nie sú problém IT. Dáta sú problém prevádzky',
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

const exceptions = [
  'skladom neznamená vždy dostupné',
  'objednané neznamená použiteľné',
  'rezervované neznamená voľné',
  'vydané neznamená automaticky spotrebované',
  'jedna položka nemusí byť jeden diel, môže to byť celá zostava',
];

const pilotQuestions = [
  'kto robí dané rozhodnutia',
  'aké dáta dnes používam na rozhodnutie',
  'ktoré výnimky menia výsledok',
  'čo dnes dohľadávam ručne',
  'čo má byť po pilote viditeľné a rýchlejšie',
  'ako spoznáme, že výstup má naozaj hodnotu',
];

const calculationRows = [
  ['Skladom', '12 ks'],
  ['Rezervované pre inú odstávku', '10 ks'],
  ['Použiteľné pre aktuálnu opravu', '2 ks'],
];

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

export default function DataOwnershipNotePage() {
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
          ERP dáta samé o sebe nevytvoria rozhodnutie
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Sklad ukazuje kusy, objednávka má stav a výdaj je zaevidovaný. Pri
          oprave však treba vedieť, čo je naozaj použiteľné pre konkrétny diel,
          zákazku alebo odstávku.
        </p>
        <p className="mt-4 leading-8 text-slate-400">
          Rovnaké číslo môže znamenať voľný materiál, rezerváciu pre inú prácu
          alebo položku, ktorá príde až po termíne opravy. Preto nestačí údaje len
          vytiahnuť zo systému.
        </p>

        <figure className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          <img
            src="/Dáta nie sú problém IT. Sú problem prevádzky..png"
            alt="Ilustračný vizuál k poznámke o ERP dátach, prevádzke a rozhodovaní"
            className="w-full object-cover"
          />
        </figure>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Prečo nestačí mať ERP dáta</h2>
          <p className="mt-4 leading-8 text-slate-300">
            ERP môže obsahovať sklad, objednávky, výdaje, rezervácie, položky aj
            históriu. Otázka je, ktoré z týchto údajov platia pre aktuálnu opravu
            a ktoré patria k inej zákazke alebo odstávke.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Objednávka môže existovať. Ak je však termín dodania až po plánovanej
            oprave, položka je pre údržbu stále riziko.
          </p>
          <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6 text-lg font-semibold leading-8 text-blue-50">
            Dáta nestačí len vytiahnuť z ERP. Treba rozumieť tomu, čo znamenajú v
            prevádzke.
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Príklad: skladom neznamená že materiál je dostupný</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Sklad ukazuje 12 kusov. Na prvý pohľad to vyzerá, že diel je
            dostupný. Ak je však 10 kusov rezervovaných pre inú odstávku, pre
            aktuálnu opravu sú použiteľné len 2 kusy.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            V plánovacej knihe sa preto nemá objaviť len stav skladu. Dôležité je
            aj chýbajúce množstvo pre konkrétnu prácu.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            {calculationRows.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[1fr_auto] gap-4 border-t border-slate-800 px-5 py-4 first:border-t-0"
              >
                <span className="text-slate-400">{label}</span>
                <span className="font-semibold text-slate-100">{value}</span>
              </div>
            ))}
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Výdaj je zaevidovaný. To ešte neznamená, že diel bol použitý na
            konkrétnu poruchu. Bez väzby na zákazku, opravu alebo zariadenie
            zostáva časť kontextu mimo pohľadu.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Výnimky rozhodujú o výsledku</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Najdôležitejšie často nie sú bežné prípady, ale výnimky. Rezervácia,
            špeciálna zákazka, iný typ výdaja, oneskorená objednávka alebo položka
            v zostave môžu úplne zmeniť výsledok.
          </p>
          <BulletList items={exceptions} />
          <p className="mt-5 leading-8 text-slate-400">
            Podobné je to pri plánovacej knihe. Ak treba ku každej položke ručne
            dopĺňať sklad, objednávku, zákazku a množstvo, nejde len o čas. Pri
            živom sklade sa ručne zapísané údaje rýchlo menia. Pracovný pohľad
            má preto riešiť nielen rýchlosť, ale aj aktuálnosť odpovede.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Kto rozumie tomu, čo dáta znamenajú</h2>
          <p className="mt-4 leading-8 text-slate-300">
            IT môže pomôcť údaje vytiahnuť, spojiť alebo technicky spracovať. To,
            či je diel voľný, rezervovaný alebo použiteľný až po termíne dodania,
            musí potvrdiť človek, ktorý pozná sklad, údržbu alebo plánovanie.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Ak tieto pravidlá nie sú pomenované, vznikne len tabuľka, ktorej ľudia
            pri oprave alebo odstávke aj tak neveria.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Čo musí byť jasné pred pilotom</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Pred pilotom nemá byť prvá otázka, aký graf alebo dashboard chceme.
            Prvá otázka má byť, čo dnes vzniká ručne.
          </p>
          <BulletList items={pilotQuestions} />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Dáta bez kontextu sú len čísla</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Zrelosť práce s dátami nezačína nákupom ďalšieho systému. Začína tým,
            že firma vie pomenovať výnimky: rezerváciu, oneskorenú objednávku,
            výdaj bez väzby na opravu alebo chýbajúce množstvo v zostave.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Potom môže vzniknúť prehľad, ktorý ľuďom v údržbe, sklade, výrobe
            alebo plánovaní ukáže, čo treba riešiť skôr.
          </p>
        </section>

        <section className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 text-center shadow-2xl md:p-10">
          <h2 className="text-3xl font-bold">Riešite podobný problém?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            Pošlite stručný opis situácie, ktorú dnes riešite. Na začiatok
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
