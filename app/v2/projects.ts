// Realizácie pre návrh V2. Každé tvrdenie vychádza z podkladov projektu:
// Zrub pri Hrone – README a docs/stav-projektu.md projektu, snímky živého webu
// z 28. 10. 2026; OslovMa.sk – živý web a jeho podmienky používania (prevádzkovateľ
// Marek Belko); prevádzkové prehľady – anonymizované ukážky už zverejnené na techbases.sk.

export type ProjectShot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  name: string;
  kind: string;
  category: string;
  status: string;
  statusDone: boolean;
  summary: string;
  briefLabel: string;
  brief: string;
  solution: string;
  features: string[];
  result: string;
  note?: string;
  liveUrl?: string;
  liveLabel?: string;
  frameUrl: string;
  shotsSource: string;
  desktopShots: ProjectShot[];
  mobileShots: ProjectShot[];
};

export const projects: Project[] = [
  {
    slug: 'zrub-pri-hrone',
    name: 'Zrub pri Hrone',
    kind: 'Klientska zákazka',
    category: 'Web pre ubytovanie',
    status: 'Spustený web, priebežne dopĺňaný',
    statusDone: true,
    summary:
      'Prezentačný web pre prenájom celého dreveného zrubu pri rieke Hron v Brezne.',
    briefLabel: 'Zadanie',
    brief:
      'Ukázať zrub, oplotený areál, interiér a okolie tak, aby si hosť vedel pobyt predstaviť, a umožniť mu poslať dopyt na konkrétny termín.',
    solution:
      'Web postavený na fotografiách: miesto a areál, interiér, dispozícia a vybavenie, galéria, okolie, podmienky pobytu a dopytový formulár. Doplnený o samostatné stránky pre oslavy a pobyt so psom.',
    features: [
      'galéria s otvorením fotografií na celú obrazovku, ovládateľná klávesnicou aj potiahnutím prsta',
      'dopytový formulár: príchod, odchod, počet hostí a kontakt',
      'mobilná navigácia a stále dostupné tlačidlo na overenie termínu',
      'fotografie optimalizované vo formátoch AVIF a WebP',
      'ochrana formulára pred spamom a doručenie dopytu e-mailom',
    ],
    result:
      'Web beží na zrubprihrone.sk a dopyty z formulára prichádzajú majiteľovi e-mailom.',
    note: 'Dopyt nie je automatická rezervácia. Hosť pošle želaný termín a majiteľ mu dostupnosť a cenu potvrdí sám.',
    liveUrl: 'https://zrubprihrone.sk',
    liveLabel: 'zrubprihrone.sk',
    frameUrl: 'zrubprihrone.sk',
    shotsSource: 'Snímky živého webu z 28. 10. 2026.',
    desktopShots: [
      {
        src: '/v2/zrub-uvod.webp',
        alt: 'Úvod webu Zrub pri Hrone: drevený zrub pri jazierku, nadpis Celý zrub. Len pre vás. a údaje o kapacite',
        caption:
          'Úvod s fotografiou zrubu, hlavnými údajmi a tlačidlom na overenie termínu.',
        width: 1440,
        height: 810,
      },
      {
        src: '/v2/zrub-priestory.webp',
        alt: 'Sekcia o polohe zrubu a areáli s fotografiami terasy',
        caption: 'Predstavenie miesta a areálu.',
        width: 1440,
        height: 810,
      },
      {
        src: '/v2/zrub-galeria.webp',
        alt: 'Galéria interiéru zrubu s fotografiami obývačky a kuchyne',
        caption: 'Galéria interiéru – fotografie sa otvoria na celú obrazovku.',
        width: 1440,
        height: 810,
      },
      {
        src: '/v2/zrub-dopyt.webp',
        alt: 'Sekcia rezervácie s cenou za noc a formulárom na dopyt termínu',
        caption: 'Dopyt na termín s cenou za noc a podmienkami pobytu.',
        width: 1440,
        height: 810,
      },
    ],
    mobileShots: [
      {
        src: '/v2/zrub-uvod-mobil.webp',
        alt: 'Úvod webu Zrub pri Hrone v mobile',
        caption: 'Úvod v mobile',
        width: 540,
        height: 1169,
      },
      {
        src: '/v2/zrub-galeria-mobil.webp',
        alt: 'Galéria webu Zrub pri Hrone v mobile',
        caption: 'Galéria v mobile',
        width: 540,
        height: 1169,
      },
      {
        src: '/v2/zrub-dopyt-mobil.webp',
        alt: 'Sekcia dopytu webu Zrub pri Hrone v mobile s textom, že dostupnosť a cenu potvrdí majiteľ',
        caption: 'Dopyt v mobile – dostupnosť a cenu potvrdí majiteľ',
        width: 540,
        height: 1169,
      },
    ],
  },
  {
    slug: 'oslovma',
    name: 'OslovMa.sk',
    kind: 'Vlastný produkt',
    category: 'Webová aplikácia',
    status: 'Spustená aplikácia',
    statusDone: true,
    summary:
      'Pracovný portál naopak: ľudia si vytvoria pracovný profil a firmy ich vyhľadajú a oslovia.',
    briefLabel: 'Cieľ',
    brief:
      'Umožniť firmám nájsť skúsených ľudí aj vtedy, keď si prácu aktívne nehľadajú, a kandidátom ponechať kontrolu nad tým, kto uvidí ich kontakt.',
    solution:
      'Webová aplikácia s účtami pre kandidátov a firmy, vyhľadávaním podľa skúseností a lokality a pravidlami súkromia, ktoré platia v celej aplikácii.',
    features: [
      'registrácia a prihlásenie pre kandidátov aj firmy',
      'pracovný profil s nastaviteľnou viditeľnosťou: anonymný, obmedzený alebo viditeľný',
      'vyhľadávanie podľa profesie, praxe, zručností, lokality a pracovných preferencií',
      'kontakt a životopis firma uvidí až po súhlase kandidáta',
    ],
    result: 'Aplikácia beží na oslovma.sk.',
    note: 'Webová aplikácia s účtami a databázou nie je súčasťou balíka prezentačného webu.',
    liveUrl: 'https://oslovma.sk',
    liveLabel: 'oslovma.sk',
    frameUrl: 'oslovma.sk',
    shotsSource: 'Snímky živej aplikácie z 1. 11. 2026. Profily v ukážkach sú fiktívne.',
    desktopShots: [
      {
        src: '/v2/oslovma-vyhladavanie.webp',
        alt: 'Ukážka vyhľadávania v OslovMa.sk: výber profesie, praxe, lokality a jazyka',
        caption: 'Vyhľadávanie podľa skúseností, lokality a podmienok (fiktívne dáta).',
        width: 1440,
        height: 900,
      },
      {
        src: '/v2/oslovma-uvod.webp',
        alt: 'Úvod OslovMa.sk s nadpisom Skúsení ľudia si prácu často aktívne nehľadajú a ukážkou anonymného profilu',
        caption: 'Úvod s ukážkou anonymného pracovného profilu (fiktívny profil).',
        width: 1440,
        height: 900,
      },
    ],
    mobileShots: [
      {
        src: '/v2/oslovma-mobil.webp',
        alt: 'Úvod OslovMa.sk v mobile',
        caption: 'Úvod v mobile',
        width: 540,
        height: 1169,
      },
    ],
  },
  {
    slug: 'prevadzkove-prehlady',
    name: 'Prevádzkové prehľady pre údržbu a sklad',
    kind: 'Anonymizovaný pilot',
    category: 'Firemný nástroj z dát',
    status: 'Ukážky s anonymizovanými dátami',
    statusDone: false,
    summary:
      'Pracovný pohľad nad existujúcimi exportmi z ERP a Excelu pre údržbu, sklad náhradných dielov a plánovanie.',
    briefLabel: 'Východisko',
    brief:
      'Údaje pre plánovanie a údržbu boli rozdelené vo viacerých exportoch. Bez ručného spracovania nebolo rýchlo vidieť, čo je skladom, čo je objednané a čo môže zdržať opravu.',
    solution:
      'Prepojenie skladu, výdajov, objednávok a plánovacej knihy do jedného pracovného pohľadu nad existujúcimi dátami, bez výmeny ERP systému.',
    features: [
      'kritické diely a objednávky, ktoré môžu zdržať opravu',
      'výdaje materiálu podľa prác a období',
      'nepohyblivá zásoba, ktorá viaže peniaze',
      'prestoje a opakované poruchy podľa zariadení',
    ],
    result:
      'Ľudia v prevádzke vidia stav položky, posledný výdaj a otvorené objednávky na jednom mieste.',
    note: 'Ukážky používajú anonymizované dáta. Názvy zariadení, zákaziek ani interné údaje nezverejňujem.',
    frameUrl: 'interný pracovný prehľad',
    shotsSource: 'Anonymizované ukážky.',
    desktopShots: [
      {
        src: '/ukazky/interny-prehlad-poloziek.webp',
        alt: 'Anonymizovaný pracovný pohľad na kritické diely a objednávky',
        caption: 'Kritické diely a objednávky.',
        width: 1672,
        height: 941,
      },
      {
        src: '/ukazky/vydaj-materialu.webp',
        alt: 'Anonymizovaný pracovný pohľad na výdaje materiálu',
        caption: 'Výdaje materiálu podľa prác a období.',
        width: 1672,
        height: 941,
      },
      {
        src: '/ukazky/nepohybliva-zasoba.webp',
        alt: 'Anonymizovaný pracovný pohľad na nepohyblivú zásobu',
        caption: 'Nepohyblivá zásoba.',
        width: 1672,
        height: 941,
      },
      {
        src: '/ukazky/prestoje-priorita-zasahu.webp',
        alt: 'Anonymizovaný pracovný pohľad na prestoje a poruchy',
        caption: 'Prestoje a opakované poruchy.',
        width: 1672,
        height: 941,
      },
    ],
    mobileShots: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
