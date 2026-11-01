import type { Metadata } from 'next';
import Link from 'next/link';
import { inquiryLinks } from '../site-data';
import { BrowserFrame, PhoneFrame } from './components/device-frames';
import { InquiryForm } from './components/inquiry-form';
import { SectionIntro } from './components/section-intro';
import { getProject, type Project } from './projects';

const pageTitle = 'TechBases.sk | Webové stránky na mieru';
const pageDescription =
  'Webové stránky pre firmy, živnostníkov a ubytovacie zariadenia. Individuálny dizajn a priama spolupráca od návrhu až po spustenie.';

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://techbases.sk',
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

// Prevzaté z pôvodnej úvodnej stránky, aby vyhľadávače nestratili údaje o službe
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

// Úvod drží len stručné, porovnateľné body; podrobnosti sú v detailoch realizácií.
// Jednoduchý dopytový formulár je v základnej dodávke; rozšírené formuláre,
// rezervácie a platby sú samostatný rozsah (rovnako v cene aj v otázkach nižšie).
const included = [
  'návrh štruktúry stránky',
  'individuálny dizajn',
  'mobilná verzia',
  'základná úprava dodaných textov a fotografií',
  'vloženie dodaného videa',
  'kontaktné údaje a jednoduchý dopytový formulár',
  'rýchle načítanie a základné technické SEO',
  'dve kolá súhrnných pripomienok',
  'kontrola a spustenie webu',
];

const notIncluded = [
  'doména a hosting',
  'ďalšie podstránky a jazykové verzie',
  'tvorba kompletných textov',
  'rozsiahle retuše fotografií a výroba videa',
  'rozšírené formuláre, rezervácie a platby',
  'redakčný systém na samostatné úpravy',
  'platené služby tretích strán',
  'úpravy nad rámec dvoch kôl pripomienok',
];

const steps = [
  {
    title: 'Zadanie a cieľ webu',
    text: 'Krátky rozhovor alebo e-mail: čo ponúkate a čo má návštevník urobiť.',
  },
  {
    title: 'Dohoda rozsahu, ceny a podkladov',
    text: 'Navrhnem rozsah a cenu a dohodneme, aké podklady dodáte.',
  },
  {
    title: 'Schválenie návrhu',
    text: 'Pripravím návrh vzhľadu a štruktúry. Ďalej pracujem až po vašom schválení.',
  },
  {
    title: 'Realizácia a pripomienky',
    text: 'Web pošlem na kontrolu. V cene sú dve kolá súhrnných pripomienok.',
  },
  {
    title: 'Kontrola, odovzdanie a spustenie',
    text: 'Skontrolujem mobil aj počítač, web odovzdám a nasadím na dohodnutú doménu.',
  },
];

const priceFactors = [
  'rozsah stránky a počet sekcií',
  'množstvo a stav dodaných podkladov',
  'rozšírené funkcie, napríklad viac formulárov, rezervácie alebo platby',
  'doplnkové služby mimo základnej dodávky',
];

// Potvrdené pravidlá (prevzaté z pôvodnej /tvorba-webov): dve kolá pripomienok, neskoršie zmeny
// podľa rozsahu, doména a hosting mimo ceny, bez redakčného systému. Postup pri chybe,
// zálohy a odovzdanie prístupov zatiaľ nie sú rozhodnuté – texty preto nič nesľubujú.
const afterLaunch = [
  {
    title: 'Chyba v dodanom webe',
    answer: 'postup uvediem v ponuke',
    detail:
      'Chyba je to, čo nefunguje podľa schváleného zadania. Nová požiadavka ide nad jeho rámec. Postup pri chybe uvediem v cenovej ponuke.',
  },
  {
    title: 'Nová požiadavka alebo zmena obsahu',
    answer: 'podľa rozsahu',
    detail:
      'Pred spustením sú v cene dve kolá súhrnných pripomienok. Neskoršie zmeny, napríklad nové texty, fotografie, sekcie alebo rozšírené formuláre, dohodneme podľa rozsahu.',
  },
  {
    title: 'Doména a hosting',
    answer: 'nie sú v cene webu',
    detail:
      'Zabezpečíte si ich sami alebo ich dohodneme osobitne. Ak už doménu máte, web nasadím na ňu.',
  },
  {
    title: 'Zálohovanie',
    answer: 'podľa hostingu',
    detail:
      'Závisí od hostingu, na ktorom web pobeží. Spôsob záloh si ujasníme spolu s jeho výberom.',
  },
  {
    title: 'Prístupy, vlastníctvo a odovzdanie',
    answer: 'dohodneme v ponuke',
    detail:
      'Na koho budú doména a hosting, aké prístupy dostanete a ktoré súbory odovzdám, dohodneme v cenovej ponuke ešte pred začiatkom práce.',
  },
  {
    title: 'Samostatná úprava obsahu',
    answer: 'nie je v základnej dodávke',
    detail:
      'Základná dodávka neobsahuje redakčný systém ani administráciu. Zmeny obsahu zapracujem ja podľa podkladov, ktoré mi pošlete. Ak chcete obsah upravovať sami, povedzte to pri zadaní.',
  },
];

function StatusBadge({ project }: { project: Project }) {
  return (
    <span className="v2-badge">
      <span
        className={
          project.statusDone ? 'v2-badge-dot' : 'v2-badge-dot v2-badge-dot-neutral'
        }
        aria-hidden="true"
      />
      {project.status}
    </span>
  );
}

function ExternalArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

// Na úvode: veľká ukážka, krátky opis prínosu a odkaz na detail
function FeaturedProject({
  project,
  desktopIndex,
  mobileIndex,
}: {
  project: Project;
  desktopIndex: number;
  mobileIndex: number;
}) {
  const desktop = project.desktopShots[desktopIndex];
  const mobile = project.mobileShots[mobileIndex];

  return (
    <article className="grid gap-4 lg:gap-6">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="v2-label-caps">
          {project.kind} · {project.category}
        </span>
        <StatusBadge project={project} />
      </div>

      <div className="grid gap-2 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end lg:gap-10">
        <h3 className="v2-h3">{project.name}</h3>
        <p className="v2-muted lg:text-lg">{project.highlight}</p>
      </div>

      <Link
        href={`/realizacie/${project.slug}`}
        className="v2-shot-link relative mt-2 block pb-8"
        aria-label={`Detail realizácie ${project.name}`}
      >
        <BrowserFrame {...desktop} url={project.frameUrl} />
        {mobile ? (
          <div className="absolute bottom-0 right-3 w-[26%] max-w-[210px] sm:right-6">
            <PhoneFrame {...mobile} />
          </div>
        ) : null}
      </Link>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link href={`/realizacie/${project.slug}`} className="v2-link">
          Detail realizácie
        </Link>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="v2-btn v2-btn-secondary v2-btn-small"
          >
            {project.liveLabel}
            <ExternalArrow />
            <span className="sr-only"> (otvorí sa nové okno)</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function V2HomePage() {
  const zrub = getProject('zrub-pri-hrone')!;
  const oslovma = getProject('oslovma')!;
  const tool = getProject('prevadzkove-prehlady')!;
  // na úvode graf prestojov – v malej ukážke je čitateľnejší ako tabuľky
  const toolShot = tool.desktopShots[2];
  // samostatná mobilná aplikácia – vlastný štítok, nie súčasť Techbases
  const archiv = getProject('archiv-udrzby')!;

  return (
    <main id="v2-obsah" className="v2-main" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* A + B: hero – obsah a CTA hneď, ukážka práce čo najvyššie aj na mobile */}
      <section className="v2-dark v2-hero">
        <div className="v2-container grid items-center gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <div className="v2-eyebrow">Tvorba webových stránok</div>
            <h1 className="v2-display mt-4 sm:mt-5">Váš nový web. Lepší prvý dojem.</h1>
            <p className="v2-lead mt-4 max-w-xl sm:mt-6">
              Weby pre firmy, živnostníkov a ubytovacie zariadenia. Individuálny dizajn a
              priama spolupráca od návrhu po spustenie.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-8">
              <Link href="/#dopyt" className="v2-btn v2-btn-primary">
                Nezáväzne naceniť web
              </Link>
              <Link href="/#realizacie" className="v2-link">
                Pozrieť realizácie
              </Link>
            </div>
            <p className="v2-muted v2-small mt-6 hidden max-w-md sm:block">
              Prezentačný web orientačne 500 – 1&nbsp;200&nbsp;€. Presnú cenu poznáte ešte
              pred začiatkom práce.
            </p>
          </div>

          <figure>
            <div className="v2-hero-visual">
              <BrowserFrame {...zrub.desktopShots[0]} url={zrub.frameUrl} priority />
              <div className="v2-hero-phone">
                <PhoneFrame {...zrub.mobileShots[0]} priority />
              </div>
            </div>
            <figcaption className="v2-muted v2-small mt-3 sm:mt-4">
              Realizácia: Zrub pri Hrone, web pre ubytovanie v Brezne.{' '}
              <Link href="/realizacie/zrub-pri-hrone" className="v2-link">
                Pozrieť realizáciu
              </Link>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* C: realizácie – úvod sekcie vedie rovno k práci */}
      <section id="realizacie" className="v2-paper v2-section">
        <div className="v2-container">
          <SectionIntro index="01" eyebrow="Realizácie" title="Vybrané realizácie" />

          <div className="mt-8 grid gap-16 lg:mt-12 lg:gap-24">
            <FeaturedProject project={zrub} desktopIndex={2} mobileIndex={2} />
            <FeaturedProject project={oslovma} desktopIndex={0} mobileIndex={0} />
          </div>
        </div>
      </section>

      {/* D: čo zákazník dostane – stručné, porovnateľné body */}
      <section id="ponuka" className="v2-white v2-section">
        <div className="v2-container">
          <SectionIntro
            index="02"
            eyebrow="Tvorba webov"
            title="Čo dostanete"
            lead="Prezentačný web na mieru. Základom je jedna hlavná stránka v slovenčine."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-12">
            <div className="rounded-2xl border border-[var(--line)] p-6 md:p-8">
              <h3 className="v2-h4">V základnej dodávke</h3>
              <ul className="v2-list mt-4">
                {included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[var(--v2-paper)] p-6 md:p-8">
              <h3 className="v2-h4">Dohodneme osobitne</h3>
              <ul className="v2-list v2-list-quiet mt-4">
                {notIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* E: priebeh spolupráce */}
      <section id="spolupraca" className="v2-dark v2-section">
        <div className="v2-container">
          <SectionIntro
            index="03"
            eyebrow="Spolupráca"
            title="Ako spolupráca prebieha"
            lead="Päť krokov od prvého rozhovoru po spustený web. Počas celej spolupráce komunikujete priamo so mnou."
          />
          <ol className="mt-8 grid gap-x-8 gap-y-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-5 lg:gap-y-8">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-2 border-t border-[var(--line)] pt-5 lg:block lg:pt-6"
              >
                <div className="v2-step-number">{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="v2-h4 lg:mt-5">{step.title}</h3>
                  <p className="v2-muted mt-1.5">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="v2-muted v2-small mt-8 lg:mt-10">
            Termíny dohodneme podľa rozsahu a toho, kedy budú podklady pripravené.
          </p>
        </div>
      </section>

      {/* F: kto za TechBases stojí */}
      <section id="o-mne" className="v2-dark-2 v2-section">
        <div className="v2-container grid items-center gap-8 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
          <img
            src="/v2/marek-belko.webp"
            alt="Marek Belko"
            width={640}
            height={640}
            loading="lazy"
            decoding="async"
            className="w-full max-w-[200px] rounded-2xl sm:max-w-[420px]"
          />
          <div>
            <SectionIntro
              index="04"
              eyebrow="Kto za TechBases stojí"
              title="Marek Belko"
            />
            <p className="v2-lead v2-lead-strong mt-5">
              Weby navrhujem a programujem sám. Od prvého rozhovoru po spustenie hovoríte
              priamo s človekom, ktorý na vašom webe pracuje.
            </p>
            <p className="v2-muted mt-4">
              TechBases je moja značka. Devätnásť rokov pracujem v priemyselnej prevádzke,
              v plánovaní, výrobe a údržbe. Táto prax je základom mojich firemných
              nástrojov a naučila ma začínať tým, ako veci fungujú v praxi.
            </p>
          </div>
        </div>
      </section>

      {/* G: cena a starostlivosť – základné odpovede, podrobnosti na rozbalenie */}
      <section id="cena" className="v2-paper v2-section">
        <div className="v2-container grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <SectionIntro
              index="05"
              eyebrow="Cena a starostlivosť"
              title="Cena a starostlivosť po spustení"
            />
            <div className="v2-form-card mt-8">
              <div className="v2-label-caps">Prezentačný web na mieru</div>
              <div className="v2-h2 mt-2">500 – 1&nbsp;200&nbsp;€</div>
              <p className="v2-muted mt-2">
                Orientačná cena. Presnú cenu navrhnem po prvom zadaní, ešte pred začiatkom
                práce.
              </p>
              <h3 className="v2-h4 mt-6">Od čoho cena závisí</h3>
              <ul className="v2-list mt-3">
                {priceFactors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                href="/#dopyt"
                className="v2-btn v2-btn-primary mt-6 w-full sm:w-auto"
              >
                Nezáväzne naceniť web
              </Link>
            </div>
          </div>

          <div className="lg:pt-24">
            <h3 className="v2-h3">Po spustení</h3>
            <p className="v2-muted mt-2">
              Chyba v dodávke, nová požiadavka a technická prevádzka webu sú rôzne veci.
            </p>
            <div className="v2-accordion mt-5">
              {afterLaunch.map((item) => (
                <details key={item.title}>
                  <summary>
                    <span className="v2-h4 flex-1">{item.title}</span>
                    <span className="v2-muted v2-small text-right">{item.answer}</span>
                  </summary>
                  <p className="v2-accordion-body">{item.detail}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* H: druhá špecializácia s reálnou anonymizovanou ukážkou */}
      <section id="firemne-nastroje" className="v2-dark-2 v2-section">
        <div className="v2-container grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <SectionIntro
              index="06"
              eyebrow="Druhá špecializácia"
              title="Firemné nástroje a práca s dátami"
              lead="Pre údržbu, sklad, výrobu a plánovanie pripravujem pracovné prehľady nad dátami z ERP, Excelu a exportov, bez výmeny ERP systému. Tu zúročujem prax z priemyslu."
            />
            <ul className="v2-list mt-6">
              <li>bezplatná kontrola 2–3 anonymizovaných exportov</li>
              <li>
                pilot jedného prevádzkového problému orientačne 1&nbsp;200 –
                2&nbsp;500&nbsp;€
              </li>
              <li>audit ručného dohľadávania v ERP dátach</li>
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href="/sluzby" className="v2-btn v2-btn-secondary">
                Firemné nástroje a dáta
              </Link>
              <Link href={`/realizacie/${tool.slug}`} className="v2-link">
                Ukážky aplikácie Techbases
              </Link>
            </div>
          </div>
          <div>
            <figure>
              <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="v2-label-caps">
                  {tool.kind} · {tool.category}
                </span>
              </div>
              <BrowserFrame {...toolShot} url={tool.frameUrl} />
              <figcaption className="v2-muted v2-small mt-3">
                {toolShot.caption} Údaje na snímke sú anonymizované.
              </figcaption>
            </figure>
            <figure className="mt-8 grid grid-cols-[minmax(0,7.5rem)_minmax(0,1fr)] items-center gap-5 sm:grid-cols-[minmax(0,9rem)_minmax(0,1fr)] sm:gap-6">
              <PhoneFrame {...archiv.mobileShots[1]} />
              <figcaption>
                <span className="v2-label-caps">
                  {archiv.kind} · {archiv.category}
                </span>
                <p className="v2-h4 mt-2">{archiv.name}</p>
                <p className="v2-muted v2-small mt-1">
                  {archiv.highlight} Údaje na snímke sú anonymizované.
                </p>
                <Link
                  href={`/realizacie/${archiv.slug}`}
                  className="v2-link v2-small mt-3 inline-block"
                >
                  Ukážky v mobile
                </Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* I: záverečný dopyt – na mobile formulár hneď pod nadpisom */}
      <section id="kontakt" className="v2-paper v2-section">
        <div className="v2-container grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-10">
          <div className="lg:col-start-1 lg:row-start-1">
            <SectionIntro
              index="07"
              eyebrow="Kontakt"
              title="Nezáväzne naceniť web"
              lead="Napíšte mi pár viet o vašej firme a o tom, aký web potrebujete. Ozvem sa vám a navrhnem ďalší postup aj orientačnú cenu."
            />
          </div>

          <div
            id="dopyt"
            className="v2-form-card lg:col-start-2 lg:row-span-2 lg:row-start-1"
            tabIndex={-1}
          >
            <h3 className="v2-h4">Dopyt na web</h3>
            <p className="v2-muted v2-small mt-1">Všetky tri polia sú povinné.</p>
            <div className="mt-6">
              <InquiryForm />
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
                  <a href={inquiryLinks.web.mailto} className="v2-link">
                    kontakt@techbases.sk
                  </a>
                </dd>
              </div>
              <div>
                <dt className="v2-label-caps">WhatsApp</dt>
                <dd className="m-0 mt-1">
                  <a
                    href={inquiryLinks.web.whatsApp}
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
              Riešite skôr prevádzkový problém s dátami?{' '}
              <Link href="/kontakt?tema=data#formular" className="v2-link">
                Opíšte ho tu
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
