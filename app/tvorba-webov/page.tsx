import type { Metadata } from 'next';
import Link from 'next/link';
import { MailIcon, PhoneIcon, WhatsAppIcon } from '../components/contact-icons';
import { WebRealizations } from '../components/web-realizations';
import { inquiryLinks } from '../site-data';

const pageTitle = 'Tvorba webov na mieru | TechBases.sk';
const pageDescription =
  'Prezentačný web na mieru pre firmu, živnostníka, ubytovanie či osobný projekt: prehľadná ponuka, mobilná verzia, galéria a kontakt. Orientačne 500 – 1 200 €.';

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: '/tvorba-webov',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://techbases.sk/tvorba-webov',
    siteName: 'TechBases.sk',
    locale: 'sk_SK',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TechBases.sk — webové stránky a firemné nástroje na mieru',
      },
    ],
  },
};

const audiences = [
  {
    title: 'Firmy a živnostníci',
    text: 'Remeselníci, servisy, obchody, štúdiá či samostatní odborníci, ktorí chcú jasne ukázať, čo robia, kde pôsobia a ako sa s nimi spojiť.',
  },
  {
    title: 'Chaty, chalupy a penzióny',
    text: 'Ubytovanie, ktoré chce ukázať priestory a okolie vo fotografiách a hosťom uľahčiť dopyt na termín.',
  },
  {
    title: 'Organizácie a osobné projekty',
    text: 'Spolky, organizátori podujatí či jednotlivci, ktorí chcú prehľadne predstaviť svoju činnosť, portfólio alebo projekt na jednom mieste.',
  },
];

const deliverables = [
  {
    title: 'Prehľadná prezentácia ponuky',
    text: 'Návštevník rýchlo pochopí, čo ponúkate, pre koho to je a prečo sa ozvať práve vám.',
  },
  {
    title: 'Použiteľný mobilný web',
    text: 'Stránka sa prispôsobí telefónu, tabletu aj počítaču. Texty sa dajú pohodlne čítať a tlačidlá stlačiť palcom.',
  },
  {
    title: 'Galéria',
    text: 'Vaše fotografie priestorov, práce alebo produktov prehľadne usporiadané na jednom mieste.',
  },
  {
    title: 'Kontakt na dosah',
    text: 'Telefón a e-mail viditeľne na stránke. Návštevník vám z mobilu zavolá alebo napíše jedným ťuknutím.',
  },
  {
    title: 'Rýchle načítanie',
    text: 'Optimalizované obrázky a ľahký kód, aby sa stránka načítala rýchlo aj na mobilnom pripojení.',
  },
];

const processSteps = [
  {
    title: 'Zadanie a podklady',
    text: 'Porozprávame sa o vašej ponuke a o tom, čo má web dosiahnuť. Pošlete texty, fotografie, logo a prípadne video.',
  },
  {
    title: 'Schválenie návrhu',
    text: 'Pripravím návrh vzhľadu a štruktúry stránky. Pokračujem až po vašom schválení.',
  },
  {
    title: 'Realizácia',
    text: 'Web naprogramujem a prispôsobím mobilu. Dodané texty a fotografie upravím a vložím doň.',
  },
  {
    title: 'Pripomienky',
    text: 'Web si prejdete a pošlete súhrnné pripomienky. V cene sú dve kolá.',
  },
  {
    title: 'Spustenie',
    text: 'Po odsúhlasení web nasadím a skontrolujem, či funguje na mobile aj na počítači.',
  },
];

const packageIncluded = [
  'jedna hlavná prezentačná stránka v slovenčine',
  'individuálne spracovaný dizajn',
  'prispôsobenie pre mobil',
  'galéria fotografií',
  'kontaktné údaje a jednoduchý dopytový formulár',
  'vloženie dodaného videa podľa zadania',
  'základná úprava dodaných textov a fotografií',
  'základné technické SEO: titulky, popisy a štruktúra stránky pre vyhľadávače',
  'nasadenie webu',
  'dve kolá súhrnných pripomienok',
];

const packageSeparate = [
  'doména a hosting',
  'platené služby tretích strán',
  'rozsiahle retuše fotografií',
  'výroba videa',
  'rozšírené formuláre, rezervácie a platby',
];

const faqItems = [
  {
    question: 'Aké podklady potrebujem pripraviť?',
    answer:
      'Stačí to, čo máte: texty o vašej ponuke (aj nahrubo napísané), fotografie, logo, kontaktné údaje a prípadne video. Základná úprava textov a fotografií je v cene. Ak niečo chýba, pri zadaní spolu prejdeme, čo treba doplniť.',
  },
  {
    question: 'Čo ak budem chcieť web neskôr upraviť?',
    answer:
      'Pred spustením sú v cene dve kolá súhrnných pripomienok. Neskoršie zmeny, napríklad nové texty, fotografie, sekcie alebo rozšírené formuláre, si dohodneme podľa rozsahu.',
  },
  {
    question: 'Budem si môcť obsah meniť sám?',
    answer:
      'Balík neobsahuje redakčný systém ani administráciu na samostatné úpravy. Zmeny obsahu zapracujem ja podľa podkladov, ktoré mi pošlete.',
  },
  {
    question: 'Sú doména a hosting v cene?',
    answer:
      'Nie. Doménu a hosting si buď zabezpečíte sami, alebo ich dohodneme osobitne. Ak už doménu máte, web nasadím na ňu.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tvorba webov na mieru',
  serviceType: 'Tvorba prezentačných webových stránok',
  url: 'https://techbases.sk/tvorba-webov',
  areaServed: 'Slovakia',
  provider: {
    '@type': 'ProfessionalService',
    name: 'TechBases.sk',
    url: 'https://techbases.sk',
  },
  offers: {
    '@type': 'Offer',
    name: 'Prezentačný web na mieru',
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: 500,
      maxPrice: 1200,
      priceCurrency: 'EUR',
    },
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

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-1 h-4 w-4 shrink-0 text-blue-300"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function WebDevelopmentPage() {
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

      <section className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        <div>
          <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
            Tvorba webov
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Tvorba webov na mieru
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Navrhnem a pripravím vám prezentačný web, ktorý zrozumiteľne ukáže vašu
            ponuku, dobre sa používa na mobile a návštevníkom uľahčí kontakt. Pre firmu,
            živnostníka, ubytovanie aj osobný projekt.
          </p>
          <p className="mt-4 max-w-2xl leading-8 text-slate-400">
            Od prvého zadania po spustenie komunikujete priamo so mnou.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#dopyt"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
            >
              Poslať dopyt na web
            </a>
            <a
              href="#balik"
              className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              Čo obsahuje balík
            </a>
          </div>
        </div>

        <aside className="rounded-2xl border border-blue-400/25 bg-gradient-to-br from-blue-600/15 to-slate-900 p-6 shadow-2xl md:p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
            Prezentačný web na mieru
          </div>
          <div className="mt-3 text-4xl font-bold text-white">
            500 – 1&nbsp;200&nbsp;€
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Orientačná cena. Presná závisí od rozsahu.
          </p>
          <ul className="mt-6 grid gap-3 text-slate-200">
            <li className="flex flex-nowrap gap-3 leading-6">
              <CheckIcon />
              individuálne spracovaný dizajn
            </li>
            <li className="flex flex-nowrap gap-3 leading-6">
              <CheckIcon />
              mobil aj počítač
            </li>
            <li className="flex flex-nowrap gap-3 leading-6">
              <CheckIcon />
              nasadenie a dve kolá pripomienok
            </li>
          </ul>
        </aside>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Pre koho web pripravím</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Pre každého, kto sa potrebuje na internete predstaviť zrozumiteľne a
            dôveryhodne. Napríklad:
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 rounded-xl border border-white/10 bg-slate-950/60 px-5 py-4 text-sm leading-6 text-slate-400">
          Balík je prezentačný web. E-shop ani web s vlastnou administráciou jeho súčasťou
          nie sú.
        </p>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Čo dostanete</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Web, ktorý návštevníkovi rýchlo povie to podstatné a uľahčí mu ďalší krok.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => (
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

      <section id="ukazka" className="mt-20">
        <div className="max-w-3xl">
          <div className="kicker text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Realizácie
          </div>
          <h2 className="mt-4 text-3xl font-bold">Ukážky z praxe</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Weby, ktoré som pripravil alebo práve pripravujem. Ukazujem ich tak, ako
            aktuálne vyzerajú.
          </p>
        </div>
        <div className="mt-8">
          <WebRealizations />
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            Dopyt na pobyt alebo automatická rezervácia?
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Pri ubytovaní je dobré od začiatku vedieť, čo má web robiť. Ide o dve
            rozdielne riešenia.
          </p>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-blue-400/25 bg-gradient-to-br from-blue-600/10 to-slate-900 p-6 md:p-8">
            <h3 className="text-2xl font-semibold">Dopyt na pobyt</h3>
            <p className="mt-4 leading-8 text-slate-300">
              Hosť vám pošle želaný termín, počet osôb a kontakt, napríklad telefonicky
              alebo e-mailom. Dostupnosť a cenu mu potvrdíte vy. Obsadenosť si spravujete
              tak ako doteraz.
            </p>
            <p className="mt-4 leading-8 text-slate-400">
              Web nemusí byť napojený na kalendár ani na platby. Takto funguje aj Zrub pri
              Hrone: hosť pošle dopyt a majiteľ mu potvrdí dostupnosť a cenu.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700/80 bg-slate-900 p-6 md:p-8">
            <h3 className="text-2xl font-semibold">Automatická rezervácia</h3>
            <p className="mt-4 leading-8 text-slate-300">
              Hosť na webe vidí voľné termíny, sám si pobyt rezervuje a často ho aj
              zaplatí online. Vyžaduje to rezervačný systém, zosúladenie kalendárov a
              jasné platobné a storno podmienky.
            </p>
            <p className="mt-4 leading-8 text-slate-400">
              Rezervačný systém nie je súčasťou balíka. Ak ho potrebujete, dohodneme ho
              osobitne.
            </p>
          </div>
        </div>
      </section>

      <section id="postup" className="mt-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Ako spolupráca prebieha</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Päť krokov od prvého zadania po spustený web.
          </p>
        </div>
        <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 text-sm font-semibold text-blue-100">
                {index + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="balik"
        className="mt-20 rounded-2xl border border-blue-400/25 bg-gradient-to-br from-blue-600/10 to-slate-900 p-6 shadow-2xl md:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="kicker text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Orientačný balík
            </div>
            <h2 className="mt-4 text-3xl font-bold">Prezentačný web na mieru</h2>
            <div className="mt-5 text-4xl font-bold text-white md:text-5xl">
              500 – 1&nbsp;200&nbsp;€
            </div>
            <p className="mt-4 leading-8 text-slate-300">
              Orientačná cena. Presná závisí od rozsahu, navrhnem vám ju po prvom zadaní,
              ešte pred začiatkom práce.
            </p>
            <p className="mt-4 leading-8 text-slate-400">
              Základné technické SEO pomáha vyhľadávačom stránku správne prečítať.
              Konkrétne umiestnenie vo výsledkoch vyhľadávania sa zaručiť nedá.
            </p>
            <a
              href="#dopyt"
              className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
            >
              Poslať dopyt na web
            </a>
          </div>

          <div className="grid gap-5">
            <div className="rounded-xl border border-white/10 bg-slate-950/70 p-6">
              <h3 className="text-lg font-semibold">V cene</h3>
              <ul className="mt-4 grid gap-3 text-slate-200">
                {packageIncluded.map((item) => (
                  <li key={item} className="flex flex-nowrap gap-3 leading-6">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/40 p-6">
              <h3 className="text-lg font-semibold">Dohadujeme osobitne</h3>
              <ul className="mt-4 grid gap-2 pl-5 text-slate-300">
                {packageSeparate.map((item) => (
                  <li key={item} className="list-disc leading-7">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Časté otázky k tvorbe webu</h2>
        </div>
        <div className="mt-8 divide-y divide-slate-800 border-y border-slate-800">
          {faqItems.map((item) => (
            <div key={item.question} className="py-6">
              <h3 className="text-xl font-semibold">{item.question}</h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="dopyt"
        tabIndex={-1}
        className="mt-20 rounded-2xl outline-none border border-blue-400/25 bg-gradient-to-br from-blue-600/10 to-slate-900 p-6 shadow-2xl md:p-10"
      >
        <div className="max-w-3xl">
          <div className="kicker text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Dopyt na web
          </div>
          <h2 className="mt-4 text-3xl font-bold">Napíšte mi, aký web potrebujete</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Stačí pár viet: čím sa zaoberáte, pre koho má byť web, či už máte doménu a aké
            podklady máte k dispozícii. Ozvem sa vám a dohodneme ďalší postup.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={inquiryLinks.web.mailto}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
          >
            <MailIcon />
            Poslať dopyt e-mailom
          </a>
          <a
            href={inquiryLinks.web.whatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25d366]" />
            Napísať cez WhatsApp
            <span className="sr-only"> (otvorí sa nové okno)</span>
          </a>
          <a
            href="tel:+421948684756"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-950"
          >
            <PhoneIcon />
            Zavolať: +421 948 684 756
          </a>
        </div>
        <p className="mt-6 text-sm leading-6 text-slate-400">
          Nepoužívate e-mailový program?{' '}
          <Link
            href="/kontakt?tema=web#formular"
            className="text-blue-200 underline decoration-blue-400/40 underline-offset-4 hover:text-white"
          >
            Napíšte mi cez formulár na stránke Kontakt
          </Link>
          .
        </p>
      </section>

      <p className="mt-10 text-center leading-7 text-slate-400">
        Riešite skôr prevádzkový problém s dátami?{' '}
        <Link
          href="/sluzby"
          className="text-blue-200 underline decoration-blue-400/40 underline-offset-4 hover:text-white"
        >
          Pozrite si firemné nástroje
        </Link>
        .
      </p>
    </main>
  );
}
