import type { Metadata } from 'next';
import Link from 'next/link';
import { SolutionPreviews } from '../../components/solution-previews';

export const metadata: Metadata = {
  title: {
    absolute: 'Sklad náhradných dielov | Objednávky, výdaje a kritické diely',
  },
  description:
    'Prehľad skladu náhradných dielov, výdajov, objednávok, kritických položiek a materiálovej pripravenosti zostáv z existujúcich ERP, Excel alebo CSV exportov.',
  alternates: {
    canonical: '/sluzby/sklad-nahradnych-dielov',
  },
  openGraph: {
    title: 'Sklad náhradných dielov, objednávky a výdaje',
    description:
      'Pracovný pohľad nad skladom náhradných dielov, výdajmi, objednávkami, kritickými položkami a materiálovou pripravenosťou zostáv z existujúcich ERP, Excel alebo CSV exportov.',
    url: 'https://techbases.sk/sluzby/sklad-nahradnych-dielov',
    type: 'website',
  },
};

const painPoints = [
  'sklad má veľa položiek, ale nie je jasné, čo je kritické a čo iba viaže peniaze',
  'pri oprave sa ručne dohľadáva, či diel existuje, kde je a či je objednaný',
  'ERP alebo SAP údaje má, ale bežný človek sa k odpovedi dostáva pomaly',
  'objednávky po termíne nie sú spojené s plánovanými prácami alebo opravami',
  'chýba jeden pohľad na stav zásob, posledný výdaj, spotrebu a otvorené objednávky',
  'jedna položka môže byť zostava a plánovanie musí ručne overovať dostupnosť všetkých dielov',
];


const dataInputs = [
  'kód a názov položky',
  'aktuálny stav zásob',
  'skladovú cenu alebo hodnotu',
  'výdaje a spotrebu za posledné obdobie',
  'objednávky, príjmy alebo otvorené požiadavky',
  'dátum posledného výdaja',
  'plánovaciu knihu alebo zoznam plánovaných prác, ak existuje',
  'zostavy, kusovník alebo väzby položiek, ak sú dostupné',
];

const outputs = [
  'stav položky',
  'posledný výdaj',
  'spotreba',
  'otvorené objednávky',
  'kritické položky',
  'nepohyblivá zásoba',
  'viazané peniaze v zásobách',
  'pripravenosť plánovaných prác',
  'chýbajúci materiál pred opravou alebo odstávkou',
  'materiálová pripravenosť zostavy',
  'skladové rezervácie a chýbajúce množstvá',
  'podklady pre objednávku',
];

const faqItems = [
  {
    question: 'Nahrádza TechBases WMS?',
    answer:
      'Nie. TechBases nerieši príjem, výdaj, skenery, skladové pozície ani fyzickú logistiku. Dopĺňa pracovný pohľad nad existujúcimi dátami pre údržbu, sklad a plánovanie.',
  },
  {
    question: 'Nahrádza TechBases ERP alebo SAP?',
    answer:
      'Nie. ERP alebo SAP zostáva zdrojom dát. TechBases pomáha tieto dáta spojiť, vyčistiť a zobraziť tak, aby boli použiteľné pre každodenné rozhodovanie v údržbe, sklade a plánovaní.',
  },
  {
    question: 'Vie TechBases pracovať s plánovacou knihou?',
    answer:
      'Áno, ak je dostupná vo forme exportu, Excelu alebo iného použiteľného výstupu. Dá sa prepojiť so skladom, objednávkami a výdajmi, aby bolo vidieť pripravenosť plánovaných prác.',
  },
  {
    question: 'Vie TechBases pracovať so zostavami alebo kusovníkom?',
    answer:
      'Áno, ak sú zostavy, kusovník alebo väzby položiek dostupné v ERP exporte, Exceli alebo inom použiteľnom výstupe. TechBases vie takýto výstup spojiť so skladom, rezerváciami a objednávkami, aby bolo vidieť, čo je dostupné, čo je blokované a čo treba doobjednať.',
  },
  {
    question: 'Čo ak nemáme dáta úplné?',
    answer:
      'To je bežné. Na začiatku sa najprv pozrie, ktoré údaje existujú a čo z nich dáva zmysel vyhodnotiť. Aj neúplné dáta často ukážu, kde sú najväčšie prevádzkové riziká.',
  },
  {
    question: 'Je cieľom znížiť sklad za každú cenu?',
    answer:
      'Nie. Cieľom je oddeliť zásoby, ktoré chránia výrobu, od zásob, ktoré iba viažu peniaze alebo sa roky nepohli.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sklad náhradných dielov, objednávky a výdaje',
  serviceType: 'Pracovný pohľad nad skladom náhradných dielov',
  provider: {
    '@type': 'ProfessionalService',
    name: 'TechBases.sk',
    url: 'https://techbases.sk',
    email: 'kontakt@techbases.sk',
    telephone: '+421948684756',
  },
  areaServed: 'Slovakia',
  url: 'https://techbases.sk/sluzby/sklad-nahradnych-dielov',
  description:
    'Pracovný pohľad skladu náhradných dielov z existujúcich ERP, Excel a CSV exportov: stav položky, posledný výdaj, spotreba, objednávky, kritické diely, rozpad zostavy a pripravenosť plánovaných prác.',
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

const breadcrumbStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Domov',
      item: 'https://techbases.sk',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Služby',
      item: 'https://techbases.sk/sluzby',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Sklad náhradných dielov',
      item: 'https://techbases.sk/sluzby/sklad-nahradnych-dielov',
    },
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

export default function SparePartsInventoryPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <section className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
            Sklad ND, objednávky a výdaje bez výmeny ERP/SAP
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Sklad ND nestačí mať — treba ho vedieť čítať
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            TechBases vytvára pracovný prehľad nad skladom náhradných dielov,
            výdajmi, otvorenými objednávkami a položkami, ktoré môžu zdržať opravu
            alebo odstávku. Začať sa dá z existujúcich ERP, Excel alebo CSV
            exportov bez výmeny ERP systému.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-slate-400">
            Najväčší prínos vzniká vtedy, keď sa sklad ND spojí s plánovanými
            prácami, históriou výdajov a objednávkami. Vtedy je rýchlo vidieť, či
            je plánovaná práca materiálovo pripravená a ktoré diely predstavujú
            riziko.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="rounded-xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
            >
              Poslať ukážku exportu
            </Link>
            <Link
              href="/sluzby"
              className="rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-900"
            >
              Pozrieť všetky služby
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Typický výsledok
          </div>
          <h2 className="mt-3 text-2xl font-semibold">
            Jeden pohľad pre sklad, údržbu a plánovanie
          </h2>
          <p className="mt-4 leading-8 text-slate-400">
            Fiktívna ukážka ukazuje typ informácie, nie reálne interné položky,
            kódy ani zariadenia.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-700 bg-slate-950">
            <div className="grid grid-cols-3 gap-2 bg-slate-900 px-4 py-3 text-xs font-medium text-slate-400">
              <span>Položka</span>
              <span>Čo vidíte</span>
              <span>Prečo je dôležitá</span>
            </div>
            {[
              ['Ložisko / remeň / snímač', 'nízky stav + otvorená objednávka', 'môže zdržať opravu'],
              ['Pneumatický prvok', 'bez pohybu 24 mesiacov', 'viaže peniaze'],
              ['Elektro diel', 'opakovaná spotreba', 'kandidát na kritickú položku'],
            ].map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-3 gap-2 border-t border-slate-800 px-4 py-4 text-sm text-slate-300"
              >
                {row.map((cell) => (
                  <span key={cell}>
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 shadow-xl md:p-8">
          <h2 className="text-3xl font-bold">Sklad ND nestačí sledovať sám osebe</h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            Cieľ nie je znížiť sklad za každú cenu. Cieľ je vidieť, ktoré zásoby
            chránia výrobu a ktoré iba viažu peniaze.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Pri plánovanej oprave alebo odstávke je dôležité rýchlo vidieť, či sú
            potrebné diely skladom, či sú objednané, kedy bol posledný výdaj a
            ktoré položky môžu zdržať realizáciu.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 shadow-xl md:p-8">
          <h2 className="text-3xl font-bold">Kde to typicky bolí</h2>
          <ul className="mt-6 grid gap-3 text-slate-300">
            {painPoints.map((item) => (
              <li key={item} className="flex gap-3 leading-7">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 shadow-2xl md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Materiálová pripravenosť
            </div>
            <h2 className="mt-4 text-3xl font-bold">Keď je jedna položka celá zostava</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-200">
              Ak jedna položka znamená celú zostavu, ERP dáta nestačia len mať.
              Treba ich vedieť rýchlo rozpadnúť na rozhodnutie: čo máme, čo je
              rezervované a čo treba objednať.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              Pri plánovaní opravy, údržby alebo výroby môže jedna položka
              predstavovať zostavu z viacerých dielov. Vtedy nestačí pozrieť stav
              jednej skladovej karty. Treba overiť dostupnosť všetkých položiek
              zostavy, rezervácie na iné zákazky a množstvo, ktoré treba
              doobjednať.
            </p>
            <p className="mt-4 leading-8 text-slate-400">
              TechBases vie z existujúcich ERP dát pripraviť pohľad, ktorý ukáže
              rozpad zostavy, stav skladu, rezervácie, chýbajúce množstvá a
              podklady pre objednávku.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <h2 className="text-2xl font-semibold">Čo pilot ukáže</h2>
          <ul className="mt-5 grid gap-3 text-slate-400">
            {outputs.map((item) => (
              <li key={item} className="flex gap-3 leading-7">
                <MiniLogoBullet />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <h2 className="text-2xl font-semibold">Aké dáta stačia na začiatok</h2>
          <ul className="mt-5 grid gap-3 text-slate-400">
            {dataInputs.map((item) => (
              <li key={item} className="leading-7">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SolutionPreviews />

      <section className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 shadow-2xl md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Pilot
            </div>
            <h2 className="mt-4 text-3xl font-bold">Ako vyzerá prvý krok</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-200">
              Najrozumnejší začiatok je malý pilot: jeden konkrétny problém,
              existujúce exporty a jeden použiteľný pracovný pohľad pre ľudí,
              ktorí so skladom a údržbou reálne pracujú.
            </p>
            <p className="mt-4 leading-8 text-slate-400">
              Orientačný rozsah pilotu je 1 200 až 2 500 € podľa počtu dátových
              zdrojov, kvality exportov a rozsahu výstupu.
            </p>
            <p className="mt-4 leading-8 text-slate-400">
              Pilot má pevne dohodnutý rozsah. Ďalšie požiadavky, nové zdroje dát
              alebo nové pohľady sa naceňujú samostatne.
            </p>
            <div className="mt-7">
              <Link
                href="/kontakt"
                className="inline-flex rounded-xl bg-blue-600 px-5 py-3 text-center font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
              >
                Poslať ukážku exportu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Časté otázky</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Najčastejšie otázky pred prvým pilotom skladu náhradných dielov.
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

      <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center shadow-2xl md:p-10">
        <h2 className="text-3xl font-bold">
          Máte sklad ND, ale chýba vám jasný pohľad na riziká?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
          Pošlite stručne, aký systém používate, aké exporty máte a čo dnes
          najčastejšie dohľadávate ručne.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/kontakt"
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
          >
            Prebrať váš prípad zadarmo
          </Link>
        </div>
      </section>
    </main>
  );
}
