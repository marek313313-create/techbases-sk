import { ExternalLinkIcon } from './contact-icons';

// Realizácie webov: zobrazujeme len overiteľné údaje – zadanie, stav a snímky
// verejne dostupných webov. Ceny zákaziek neuvádzame.
type WebRealization = {
  name: string;
  // typ a stav sa zobrazia len pri rozpracovaných weboch
  type?: string;
  status?: string;
  intro: string;
  listTitle: string;
  list: string[];
  state: string;
  url: string;
  urlLabel: string;
  desktopImage: { src: string; alt: string };
  mobileImage: { src: string; alt: string };
};

const screenshotDate = '21. 10. 2026';

const webRealizations: WebRealization[] = [
  {
    name: 'Zrub pri Hrone',
    type: 'Prezentačný web pre ubytovanie',
    status: 'Spustený web, priebežne dopĺňaný',
    intro: 'Prezentačný web pre prenájom celého dreveného zrubu pri rieke Hron v Brezne.',
    listTitle: 'Zadanie',
    list: [
      'ukázať celý zrub, záhradu, interiér a okolie vo fotografiách a galérii',
      'prehľadne uviesť kapacitu, dispozíciu, vybavenie a podmienky pobytu',
      'umožniť hosťom poslať dopyt na termín – dostupnosť a cenu potvrdzuje majiteľ',
      'zabezpečiť pohodlné používanie na mobile aj na počítači',
    ],
    state: 'web je verejne dostupný a ďalej ho dopĺňam podľa podkladov od majiteľa.',
    url: 'https://zrubprihrone.sk',
    urlLabel: 'zrubprihrone.sk',
    desktopImage: {
      src: '/realizacie/zrub-pri-hrone-desktop.webp',
      alt: 'Úvodná obrazovka webu Zrub pri Hrone na počítači: drevený zrub so záhradou a nadpis Celý zrub. Len pre vás.',
    },
    mobileImage: {
      src: '/realizacie/zrub-pri-hrone-mobil.webp',
      alt: 'Úvodná obrazovka webu Zrub pri Hrone v mobile',
    },
  },
  {
    name: 'OslovMa.sk',
    intro:
      'Webová aplikácia, v ktorej si človek vytvorí pracovný profil a firmy ho môžu vyhľadať a osloviť.',
    listTitle: 'Čo web robí',
    list: [
      'kandidát si vytvorí pracovný profil a sám nastaví, čo z neho firmy uvidia',
      'firmy vyhľadávajú ľudí podľa skúseností, zručností, lokality a pracovných preferencií',
      'kontakt a životopis kandidáta firma uvidí až po jeho súhlase',
      'prihlasovanie a samostatné účty pre kandidátov aj firmy',
    ],
    state: 'web je spustený a plne funkčný.',
    url: 'https://oslovma.sk',
    urlLabel: 'oslovma.sk',
    desktopImage: {
      src: '/realizacie/oslovma-desktop.webp',
      alt: 'Úvodná obrazovka webu OslovMa.sk na počítači: nadpis Skúsení ľudia si prácu často aktívne nehľadajú a ukážka anonymného pracovného profilu.',
    },
    mobileImage: {
      src: '/realizacie/oslovma-mobil.webp',
      alt: 'Úvodná obrazovka webu OslovMa.sk v mobile',
    },
  },
];

function RealizationCard({ realization }: { realization: WebRealization }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <figure className="flex flex-col justify-center bg-slate-950/80 p-5 sm:p-8">
          <div className="relative sm:pb-6">
            <img
              src={realization.desktopImage.src}
              alt={realization.desktopImage.alt}
              width={1200}
              height={750}
              loading="lazy"
              decoding="async"
              className="w-full rounded-xl border border-slate-700 shadow-2xl sm:w-[86%]"
            />
            <img
              src={realization.mobileImage.src}
              alt={realization.mobileImage.alt}
              width={480}
              height={1039}
              loading="lazy"
              decoding="async"
              className="absolute bottom-0 right-0 hidden w-[24%] max-w-[150px] rounded-2xl border-4 border-slate-950 shadow-2xl ring-1 ring-slate-600 sm:block"
            />
          </div>
          <figcaption className="mt-4 text-sm leading-6 text-slate-400">
            Snímky úvodnej obrazovky webu na počítači a v mobile, stav k {screenshotDate}.
          </figcaption>
        </figure>

        <div className="p-6 md:p-8">
          {realization.status || realization.type ? (
            <div className="mb-4 flex flex-wrap items-center gap-3">
              {realization.status ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-100">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-amber-300"
                    aria-hidden="true"
                  />
                  {realization.status}
                </span>
              ) : null}
              {realization.type ? (
                <span className="text-sm text-slate-400">{realization.type}</span>
              ) : null}
            </div>
          ) : null}
          <h3 className="text-2xl font-bold">{realization.name}</h3>
          <p className="mt-3 leading-7 text-slate-300">{realization.intro}</p>

          <div className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            {realization.listTitle}
          </div>
          <ul className="mt-3 grid gap-2 pl-5 text-slate-300">
            {realization.list.map((item) => (
              <li key={item} className="list-disc leading-7">
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 rounded-xl border border-white/10 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300">
            <span className="font-semibold text-slate-100">Aktuálny stav: </span>
            {realization.state}
          </p>

          <a
            href={realization.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 font-medium text-slate-100 transition hover:border-blue-400/50 hover:bg-slate-950"
          >
            Pozrieť web {realization.urlLabel}
            <ExternalLinkIcon className="h-4 w-4 text-slate-400" />
            <span className="sr-only"> (otvorí sa nové okno)</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function WebRealizations() {
  return (
    <div className="grid gap-6">
      {webRealizations.map((realization) => (
        <RealizationCard key={realization.url} realization={realization} />
      ))}
    </div>
  );
}
