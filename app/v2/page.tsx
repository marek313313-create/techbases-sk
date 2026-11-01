import type { Metadata } from 'next';
import Link from 'next/link';
import { inquiryLinks } from '../site-data';
import { BrowserFrame, PhoneFrame } from './components/device-frames';
import { InquiryForm } from './components/inquiry-form';
import { getProject, type Project } from './projects';

export const metadata: Metadata = {
  title: {
    absolute: 'TechBases.sk | Webové stránky na mieru (návrh V2)',
  },
  description:
    'Webové stránky pre firmy, živnostníkov a ubytovacie zariadenia. Individuálny dizajn a priama spolupráca od návrhu až po spustenie.',
  alternates: {
    canonical: '/v2',
  },
};

const deliverables = [
  {
    title: 'Návrh štruktúry',
    text: 'Spolu určíme, čo má byť na stránke a v akom poradí, aby návštevník rýchlo našiel to podstatné.',
  },
  {
    title: 'Individuálny dizajn',
    text: 'Vzhľad pripravím pre vašu firmu a jej ponuku, nie podľa všeobecnej šablóny.',
  },
  {
    title: 'Mobilné spracovanie',
    text: 'Web sa prispôsobí telefónu, tabletu aj počítaču. Texty sú čitateľné a tlačidlá sa dajú pohodlne stlačiť.',
  },
  {
    title: 'Práca s podkladmi',
    text: 'Dodané texty a fotografie základne upravím a vložím, rovnako aj dodané video podľa zadania.',
  },
  {
    title: 'Kontakt alebo dopytový formulár',
    text: 'Telefón a e-mail na viditeľnom mieste. Dopytový formulár s odosielaním doplním, ak je súčasťou dohodnutého rozsahu.',
  },
  {
    title: 'Technické základy',
    text: 'Rýchle načítanie, optimalizované obrázky a základné technické SEO: titulky, popisy a štruktúra stránky pre vyhľadávače.',
  },
  {
    title: 'Kontrola a spustenie',
    text: 'Dve kolá súhrnných pripomienok, kontrola na mobile aj na počítači a nasadenie webu.',
  },
];

const notIncluded = [
  'doména a hosting',
  'ďalšie podstránky a jazykové verzie',
  'tvorba kompletných textov',
  'rozsiahle retuše fotografií a výroba videa',
  'rezervačný systém s kalendárom a platbami',
  'redakčný systém na samostatné úpravy obsahu',
  'platené služby tretích strán',
  'úpravy nad rámec dvoch kôl pripomienok',
];

const steps = [
  {
    title: 'Zadanie a cieľ webu',
    text: 'Krátky rozhovor alebo e-mail: čo ponúkate, komu je web určený a čo má návštevník urobiť – zavolať, napísať alebo poslať dopyt.',
  },
  {
    title: 'Dohoda rozsahu, ceny a podkladov',
    text: 'Navrhnem rozsah a cenu. Dohodneme, aké texty, fotografie a ďalšie podklady dodáte.',
  },
  {
    title: 'Schválenie návrhu',
    text: 'Pripravím návrh vzhľadu a štruktúry stránky. Ďalej pracujem až po vašom schválení.',
  },
  {
    title: 'Realizácia a pripomienky',
    text: 'Web pripravím a pošlem vám ho na kontrolu. V cene sú dve kolá súhrnných pripomienok.',
  },
  {
    title: 'Kontrola, odovzdanie a spustenie',
    text: 'Web skontrolujem na mobile aj na počítači, odovzdám vám ho a nasadím na dohodnutú doménu.',
  },
];

const priceFactors = [
  'rozsah stránky a počet sekcií',
  'množstvo a stav dodaných textov a fotografií',
  'požadované funkcie, napríklad dopytový formulár',
  'doplnkové služby, ktoré nie sú automaticky v cene',
];

const offerTerms = [
  'rozsah a cenu',
  'aké podklady dodáte a dokedy',
  'kto zabezpečí doménu a hosting',
  'ako budeme riešiť zmeny po spustení',
];

const afterLaunch = [
  {
    title: 'Chyba v dodanom webe',
    text: 'Ak niečo nefunguje tak, ako sme sa dohodli, ide o chybu dodávky, nie o novú požiadavku. Spôsob jej riešenia uvediem v cenovej ponuke.',
  },
  {
    title: 'Nová požiadavka alebo zmena obsahu',
    text: 'Nové texty, fotografie či sekcie po spustení dohodneme podľa rozsahu.',
  },
  {
    title: 'Doména a hosting',
    text: 'Nie sú súčasťou ceny webu. Zabezpečíte si ich sami alebo ich dohodneme osobitne. Ak už doménu máte, web nasadím na ňu.',
  },
  {
    title: 'Zálohovanie',
    text: 'Závisí od hostingu, na ktorom web pobeží. Spôsob záloh si ujasníme spolu s výberom hostingu.',
  },
  {
    title: 'Prístupy, vlastníctvo a odovzdanie',
    text: 'Pred spustením si dohodneme, na koho bude doména a hosting a aké prístupy dostanete, a zapíšeme to do ponuky.',
  },
  {
    title: 'Samostatná úprava obsahu',
    text: 'Základná dodávka neobsahuje redakčný systém. Zmeny obsahu robím ja podľa vašich podkladov. Ak chcete obsah upravovať sami, povedzte to pri zadaní.',
  },
];

function SectionIntro({
  index,
  eyebrow,
  title,
  lead,
  id,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
  id?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="v2-eyebrow">
        <span className="v2-eyebrow-index">{index}</span>
        {eyebrow}
      </div>
      <h2 id={id} className="v2-h2 mt-4">
        {title}
      </h2>
      {lead ? <p className="v2-lead mt-5">{lead}</p> : null}
    </div>
  );
}

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
    <article className="grid gap-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="v2-label-caps">
          {project.kind} · {project.category}
        </div>
        <StatusBadge project={project} />
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
        <h3 className="v2-h3">{project.name}</h3>
        <p className="v2-lead">{project.summary}</p>
      </div>

      <Link
        href={`/v2/realizacie/${project.slug}`}
        className="v2-shot-link relative block pb-8"
        aria-label={`Detail realizácie ${project.name}`}
      >
        <BrowserFrame {...desktop} url={project.frameUrl} />
        {mobile ? (
          <div className="absolute bottom-0 right-3 w-[26%] max-w-[210px] sm:right-6">
            <PhoneFrame {...mobile} />
          </div>
        ) : null}
      </Link>

      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="v2-label-caps">{project.briefLabel}</h4>
          <p className="v2-muted mt-3">{project.brief}</p>
        </div>
        <div>
          <h4 className="v2-label-caps">Riešenie</h4>
          <p className="v2-muted mt-3">{project.solution}</p>
        </div>
        <div>
          <h4 className="v2-label-caps">Čo web robí</h4>
          <ul className="v2-list mt-3">
            {project.features.slice(0, 3).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-5 border-t border-[var(--line)] pt-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div>
          <p className="font-semibold">
            <span className="v2-muted font-normal">Výsledok: </span>
            {project.result}
          </p>
          {project.note ? <p className="v2-muted v2-small mt-2">{project.note}</p> : null}
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href={`/v2/realizacie/${project.slug}`} className="v2-link">
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
      </div>
    </article>
  );
}

export default function V2HomePage() {
  const zrub = getProject('zrub-pri-hrone')!;
  const oslovma = getProject('oslovma')!;
  const pilot = getProject('prevadzkove-prehlady')!;

  return (
    <main id="v2-obsah" className="v2-main" tabIndex={-1}>
      {/* A + B: hero – obsah a CTA sú viditeľné hneď, bez animácie */}
      <section className="v2-dark v2-hero">
        <div className="v2-container grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <div className="v2-eyebrow">Tvorba webových stránok · Marek Belko</div>
            <h1 className="v2-display mt-5">Váš nový web. Lepší prvý dojem.</h1>
            <p className="v2-lead mt-6 max-w-xl">
              Vytváram webové stránky pre firmy, živnostníkov a ubytovacie zariadenia.
              Individuálny dizajn a priama spolupráca od návrhu až po spustenie.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/v2#dopyt" className="v2-btn v2-btn-primary">
                Nezáväzne naceniť web
              </Link>
              <Link href="/v2#realizacie" className="v2-btn v2-btn-secondary">
                Pozrieť realizácie
              </Link>
            </div>
            <p className="v2-muted v2-small mt-6 max-w-md">
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
            <figcaption className="v2-muted v2-small mt-4">
              Realizácia: Zrub pri Hrone, web pre ubytovanie v Brezne.{' '}
              <Link href="/v2/realizacie/zrub-pri-hrone" className="v2-link">
                Pozrieť realizáciu
              </Link>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* C: realizácie – hlavný dôkaz kvality */}
      <section id="realizacie" className="v2-paper v2-section">
        <div className="v2-container">
          <SectionIntro
            index="01"
            eyebrow="Realizácie"
            title="Vybrané realizácie"
            lead="Ukazujem len skutočné projekty. Pri každom uvádzam, či ide o zákazku pre klienta, vlastný produkt alebo anonymizovaný pilot."
          />

          <div className="mt-16 grid gap-24">
            <FeaturedProject project={zrub} desktopIndex={2} mobileIndex={2} />
            <FeaturedProject project={oslovma} desktopIndex={0} mobileIndex={0} />

            <article className="grid gap-8 border-t border-[var(--line)] pt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="v2-label-caps">
                    {pilot.kind} · {pilot.category}
                  </span>
                </div>
                <h3 className="v2-h3 mt-4">{pilot.name}</h3>
                <p className="v2-muted mt-4">{pilot.summary}</p>
                <p className="mt-4 font-semibold">
                  <span className="v2-muted font-normal">Výsledok: </span>
                  {pilot.result}
                </p>
                <p className="v2-muted v2-small mt-3">{pilot.note}</p>
                <Link
                  href={`/v2/realizacie/${pilot.slug}`}
                  className="v2-link mt-5 inline-block"
                >
                  Detail a ďalšie ukážky
                </Link>
              </div>
              <BrowserFrame {...pilot.desktopShots[0]} url={pilot.frameUrl} />
            </article>
          </div>
        </div>
      </section>

      {/* D: čo zákazník dostane */}
      <section id="ponuka" className="v2-white v2-section">
        <div className="v2-container grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionIntro
              index="02"
              eyebrow="Tvorba webov"
              title="Čo dostanete"
              lead="Prezentačný web na mieru. Základom je jedna hlavná stránka v slovenčine a vopred viete, čo je v cene a čo sa dohaduje osobitne."
            />
            <p className="mt-6">
              <Link href="/v2#cena" className="v2-link">
                Cena a starostlivosť po spustení
              </Link>
            </p>
          </div>

          <div>
            <ol className="grid">
              {deliverables.map((item, index) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-t border-[var(--line)] py-6"
                >
                  <span className="v2-muted font-semibold tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="v2-h4">{item.title}</h3>
                    <p className="v2-muted mt-1.5">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl bg-[var(--v2-paper)] p-6 md:p-8">
              <h3 className="v2-h4">Nie je automaticky v cene</h3>
              <p className="v2-muted mt-2">Ak to potrebujete, dohodneme to osobitne:</p>
              <ul className="v2-list v2-list-2col mt-5">
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
          <ol className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-[var(--line)] pt-6">
                <div className="v2-step-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="v2-h4 mt-5">{step.title}</h3>
                <p className="v2-muted mt-2">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="v2-muted v2-small mt-12">
            Termíny dohodneme podľa rozsahu a toho, kedy budú podklady pripravené.
          </p>
        </div>
      </section>

      {/* F: kto za TechBases stojí */}
      <section id="o-mne" className="v2-dark-2 v2-section">
        <div className="v2-container grid items-center gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
          <img
            src="/v2/marek-belko.webp"
            alt="Marek Belko"
            width={640}
            height={640}
            loading="lazy"
            decoding="async"
            className="w-full max-w-[420px] rounded-2xl"
          />
          <div>
            <SectionIntro
              index="04"
              eyebrow="Kto za TechBases stojí"
              title="Marek Belko"
            />
            <p className="v2-lead v2-lead-strong mt-6">
              Weby navrhujem a programujem sám. Od prvého rozhovoru po spustenie hovoríte
              priamo s človekom, ktorý na vašom webe pracuje.
            </p>
            <p className="v2-muted mt-5">
              TechBases je moja značka. Devätnásť rokov pracujem v priemyselnej prevádzke,
              v plánovaní, výrobe a údržbe. Táto prax je základom mojich firemných
              nástrojov pre údržbu a sklad a naučila ma začínať tým, ako veci fungujú v
              praxi, až potom riešiť techniku.
            </p>
            <p className="v2-muted mt-5">
              Tento web aj realizácie uvedené vyššie som pripravil sám.
            </p>
            <Link href="/o-mne" className="v2-link mt-7 inline-block">
              Viac o mne
            </Link>
          </div>
        </div>
      </section>

      {/* G: cena a starostlivosť po spustení */}
      <section id="cena" className="v2-paper v2-section">
        <div className="v2-container">
          <SectionIntro
            index="05"
            eyebrow="Cena a starostlivosť"
            title="Cena a starostlivosť po spustení"
          />
          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div className="v2-form-card self-start">
              <div className="v2-label-caps">Prezentačný web na mieru</div>
              <div className="v2-h2 mt-3">500 – 1&nbsp;200&nbsp;€</div>
              <p className="v2-muted mt-2">
                Orientačná cena. Presnú cenu navrhnem po prvom zadaní, ešte pred začiatkom
                práce.
              </p>
              <h3 className="v2-h4 mt-8">Od čoho cena závisí</h3>
              <ul className="v2-list mt-3">
                {priceFactors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="v2-h4 mt-8">V ponuke dohodneme</h3>
              <ul className="v2-list mt-3">
                {offerTerms.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                href="/v2#dopyt"
                className="v2-btn v2-btn-primary mt-8 w-full sm:w-auto"
              >
                Nezáväzne naceniť web
              </Link>
            </div>

            <div>
              <h3 className="v2-h3">Po spustení</h3>
              <p className="v2-muted mt-3">
                Rozlišujem, či ide o chybu v dodávke, novú požiadavku alebo technickú
                prevádzku webu.
              </p>
              <dl className="v2-deflist mt-8">
                {afterLaunch.map((item) => (
                  <div key={item.title}>
                    <dt className="v2-h4">{item.title}</dt>
                    <dd className="v2-muted m-0">{item.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* H: druhá špecializácia */}
      <section id="firemne-nastroje" className="v2-dark-2 v2-section">
        <div className="v2-container grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <SectionIntro
              index="06"
              eyebrow="Druhá špecializácia"
              title="Firemné nástroje a práca s dátami"
              lead="Pre údržbu, sklad, výrobu a plánovanie pripravujem pracovné prehľady a interné nástroje nad dátami z ERP, Excelu a exportov, bez výmeny ERP systému. Tu najviac zúročujem prax z priemyslu."
            />
            <ul className="v2-list mt-7">
              <li>bezplatná kontrola 2–3 anonymizovaných exportov</li>
              <li>
                pilot jedného prevádzkového problému orientačne 1&nbsp;200 –
                2&nbsp;500&nbsp;€
              </li>
              <li>audit ručného dohľadávania v ERP dátach</li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href="/sluzby" className="v2-btn v2-btn-secondary">
                Firemné nástroje a dáta
              </Link>
              <Link href={`/v2/realizacie/${pilot.slug}`} className="v2-link">
                Ukážka anonymizovaného pilotu
              </Link>
            </div>
          </div>
          <figure>
            <BrowserFrame {...pilot.desktopShots[2]} url={pilot.frameUrl} />
            <figcaption className="v2-muted v2-small mt-3">
              Anonymizovaná ukážka: nepohyblivá zásoba.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* I: záverečný dopyt */}
      <section id="kontakt" className="v2-paper v2-section">
        <div className="v2-container grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <SectionIntro
              index="07"
              eyebrow="Kontakt"
              title="Nezáväzne naceniť web"
              lead="Napíšte mi pár viet o vašej firme a o tom, aký web potrebujete. Ozvem sa vám a navrhnem ďalší postup aj orientačnú cenu."
            />
            <dl className="mt-10 grid gap-5">
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
            <p className="v2-muted v2-small mt-10">
              Riešite skôr prevádzkový problém s dátami?{' '}
              <Link href="/kontakt?tema=data#formular" className="v2-link">
                Opíšte ho tu
              </Link>
              .
            </p>
          </div>

          <div id="dopyt" className="v2-form-card" tabIndex={-1}>
            <h3 className="v2-h4">Dopyt na web</h3>
            <p className="v2-muted v2-small mt-1">Všetky tri polia sú povinné.</p>
            <div className="mt-6">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
