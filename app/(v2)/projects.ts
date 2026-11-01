// Realizácie na úvode a v detailoch (/realizacie/…). Každé tvrdenie vychádza z podkladov projektu:
// Zrub pri Hrone – README a docs/stav-projektu.md projektu, snímky živého webu
// z 28. 10. 2026; OslovMa.sk – živý web a jeho podmienky používania (prevádzkovateľ
// Marek Belko); Techbases – nainštalovaná desktopová aplikácia 1.1.7, snímky
// z 1. 11. 2026 s údajmi anonymizovanými pred snímaním (postup vo V2_NAVRH.md);
// Archív údržby – mobilná aplikácia v telefóne, snímky z 1. 11. 2026, rovnaký postup.

export type ProjectShot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  // web = tvorba webov, data = firemné nástroje (iný nadpis funkcií a iná výzva v detaile)
  service: 'web' | 'data';
  name: string;
  kind: string;
  category: string;
  status: string;
  statusDone: boolean;
  summary: string;
  // krátky opis prínosu na úvodnú stránku; plné zadanie a riešenie sú v detaile
  highlight: string;
  briefLabel: string;
  brief: string;
  solution: string;
  features: string[];
  // nadpis karty s funkciami v detaile, ak sa má líšiť od predvoleného
  featuresTitle?: string;
  // úplný zoznam funkcií po moduloch (detail, sekcia „Čo aplikácia vie“)
  modules?: { title: string; items: string[] }[];
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
    service: 'web',
    name: 'Zrub pri Hrone',
    kind: 'Klientska zákazka',
    category: 'Web pre ubytovanie',
    status: 'Spustený web, priebežne dopĺňaný',
    statusDone: true,
    summary:
      'Prezentačný web pre prenájom celého dreveného zrubu pri rieke Hron v Brezne.',
    highlight:
      'Hosť si pobyt predstaví z fotografií zrubu, areálu a okolia a pošle dopyt na konkrétny termín. Dopyty prichádzajú majiteľovi e‑mailom.',
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
    service: 'web',
    name: 'OslovMa.sk',
    kind: 'Vlastný produkt',
    category: 'Webová aplikácia',
    status: 'Spustená aplikácia',
    statusDone: true,
    summary:
      'Pracovný portál naopak: ľudia si vytvoria pracovný profil a firmy ich vyhľadajú a oslovia.',
    highlight:
      'Firmy vyhľadávajú ľudí podľa skúseností a lokality. Kandidát sám rozhoduje, kto uvidí jeho kontakt.',
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
    service: 'data',
    name: 'Techbases: prehľady pre údržbu a sklad',
    kind: 'Interný nástroj',
    category: 'Desktopová aplikácia nad dátami z ERP',
    status: 'Ukážky s anonymizovanými údajmi',
    statusDone: false,
    summary:
      'Desktopová aplikácia nad exportmi z ERP a súbormi CSV pre údržbu, sklad náhradných dielov a plánovanie opráv.',
    highlight:
      'Položky plánu so stavom skladu a objednávkami, výdaje materiálu podľa druhu opravy a prestoje podľa dopadu na jednom mieste, bez výmeny ERP systému.',
    briefLabel: 'Východisko',
    brief:
      'Údaje pre plánovanie a údržbu boli rozdelené vo viacerých exportoch. Bez ručného spracovania nebolo rýchlo vidieť, čo je skladom, čo je objednané a čo môže zdržať opravu.',
    solution:
      'Desktopová aplikácia, ktorá načíta existujúce exporty a spojí ich do pracovných pohľadov: prehľad položiek, objednávky, havarijná a nepohyblivá zásoba, výdaje materiálu, prestoje a plánovanie opráv.',
    features: [
      'položky plánu s agregátom, uzlom, cenou, stavom skladu, uložným miestom a naviazanými žiadankami, zákazkami a objednávkami',
      'výdaje materiálu so súčtami podľa bežnej, strednej a generálnej opravy a s dokladom, žiadankou a zákazkou pri každom výdaji',
      'prestoje podľa agregátov: dopad, trend za šesť mesiacov, porovnanie s vlastnou históriou a najčastejšia príčina',
      'mesačný prehľad porúch a prestojov',
      'ďalšie pohľady: objednávky, havarijná a nepohyblivá zásoba a plánovanie opráv',
    ],
    result:
      'Položky, výdaje a prestoje sú v jednej aplikácii nad existujúcimi exportmi, bez ručného spájania tabuliek.',
    note: 'Snímky sú zo skutočnej aplikácie. Kódy, názvy zariadení a dielov, doklady, mená a sumy sú nahradené ukážkovými hodnotami.',
    frameUrl: 'Techbases · desktopová aplikácia',
    shotsSource:
      'Snímky aplikácie Techbases z 1. 11. 2026. Všetky údaje na snímkach sú anonymizované.',
    desktopShots: [
      {
        src: '/v2/techbases-prehlad-poloziek.webp',
        alt: 'Techbases, Interný prehľad položiek: tabuľka položiek plánu s agregátom, uzlom, cenou, skladom, uložným miestom a žiadankami. Údaje sú anonymizované.',
        caption:
          'Interný prehľad položiek: agregát, uzol, cena, sklad, uložné miesto a naviazané žiadanky, zákazky a objednávky.',
        width: 1600,
        height: 1044,
      },
      {
        src: '/v2/techbases-vydaje-materialu.webp',
        alt: 'Techbases, Výdaje materiálu: súčty za bežnú, generálnu a strednú opravu a zoznam výdajov s dokladom, žiadankou a zákazkou. Údaje sú anonymizované.',
        caption:
          'Výdaje materiálu: súčty podľa druhu opravy a jednotlivé výdaje s dokladom, žiadankou a zákazkou.',
        width: 1600,
        height: 1044,
      },
      {
        src: '/v2/techbases-prestoje.webp',
        alt: 'Techbases, Prestoje: agregáty zoradené podľa dopadu s trendom, porovnaním s históriou a mesačným grafom porúch. Údaje sú anonymizované.',
        caption:
          'Prestoje: agregáty podľa dopadu, trend za šesť mesiacov, porovnanie s vlastnou históriou a mesačný prehľad porúch.',
        width: 1600,
        height: 1044,
      },
    ],
    mobileShots: [],
  },
  {
    // samostatná aplikácia – zámerne nie je spojená s Techbases (spoločný systém nie je overený)
    slug: 'archiv-udrzby',
    service: 'data',
    name: 'Archív údržby',
    kind: 'Interný nástroj',
    category: 'Aplikácia pre údržbu, online aj v mobile',
    status: 'Ukážky s anonymizovanými údajmi',
    statusDone: false,
    // Funkcie podľa prehliadky aplikácie v telefóne (1. 11. 2026, všetkých 12 modulov)
    // a README projektu Archív údržby; bez interných názvov a adries.
    summary:
      'Evidencia opráv a údržby od požiadavky po uzatvorenie opravy: plán, poruchy, inšpekcie, výmeny a karta agregátu. Pripravená pre celý tím online aj pre telefón bez pripojenia.',
    highlight:
      'Požiadavky, opravy BO/SO/GO/VP, poruchy, inšpekcie, plán výmen a karta agregátu. Pre tím s rolami, online aj v telefóne bez pripojenia. Samostatná aplikácia, oddelená od Techbases.',
    briefLabel: 'Účel',
    brief:
      'Auditovateľný proces opráv BO, SO, GO a VP: požiadavka, posúdenie, publikovaný plán, realizácia, overenie a uzatvorenie. K tomu evidencia porúch, inšpekcií a výmen.',
    // Pripravená pre viac používateľov; zatiaľ beží ako autorova vlastná verzia
    // (firemné nasadenie netvrdiť – Marek Belko, 1. 11. 2026).
    solution:
      'Jedna aplikácia pre tím údržby s rolami pre pracovníkov, inšpekčných zámočníkov, majstrov, technikov a vedenie. Je pripravená na prevádzku online v prehliadači a beží v telefóne s Androidom, kde pracuje aj bez pripojenia s údajmi nahratými z PC.',
    featuresTitle: 'V telefóne',
    features: [
      'celá evidencia v telefóne aj bez pripojenia: prehľad, opravy, plán, karta agregátu a štatistika prestojov',
      'údaje sa do telefónu nahrajú z PC cez USB jedným krokom „Aktualizovať telefón“',
      'v teréne sa zapisujú poruchy s fotkami z fotoaparátu a vykonané inšpekcie',
      'zápisy z telefónu sa pri ďalšej aktualizácii prenesú do PC; rovnaký zápis sa neprenesie dvakrát a konflikt so zmenou na PC sa odmietne s dôvodom',
      'ostatné zmeny, výkresy a dokumenty sa robia a otvárajú na PC',
    ],
    modules: [
      {
        title: 'Prehľad',
        items: [
          'požiadavky na posúdenie, výmeny po termíne, prestoj za 30 dní a inšpekcie tohto týždňa',
          'najbližšia oprava s odpočtom dní, počtom prác a stavom plánu',
          'chýbajúce inšpekcie, blížiace sa výmeny a prestoj podľa agregátov',
        ],
      },
      {
        title: 'Požiadavky',
        items: [
          'zápis k agregátu a uzlu s termínom realizácie, zdrojom a prioritou',
          'stavy koncept, na posúdenie, vrátená, schválená, zamietnutá, zrušená',
          'otvorené, zrealizované a zamietnuté; väzby, presuny, pokračovania a história',
        ],
      },
      {
        title: 'Opravy BO, SO, GO a VP',
        items: [
          'posúdenie požiadaviek v oprave: schváliť alebo zamietnuť s novým termínom',
          'publikovaný plán v nemenných verziách, začatie opravy, výsledky prác',
          'technické overenie, uzatvorenie, neplánované práce a pokračovania',
        ],
      },
      {
        title: 'Tlačové výstupy',
        items: [
          'plánovaný a záverečný súpis s farebným vyhodnotením prác',
          'pracovné listy pre každý agregát s pevnými činnosťami a zodpovedným majstrom',
          'kontrolné protokoly',
        ],
      },
      {
        title: 'Poruchy a prestoje',
        items: [
          'zápis poruchy: agregát, uzol, typ, dátum, trvanie prestoja, popis, fotky, dokumenty a výkresy',
          'štatistika prestojov podľa agregátov, typu poruchy a mesiacov',
          'najdlhšie poruchy a filtre podľa obdobia, agregátu a typu',
        ],
      },
      {
        title: 'Inšpekcie',
        items: [
          'plány pravidelných kontrol týždenne alebo mesačne s prideleným zámočníkom',
          'zoznam na vykonanie s priebehom a zápis vykonania s poznámkou',
          'prehľad plnenia po týždňoch alebo mesiacoch',
        ],
      },
      {
        title: 'Plán výmen',
        items: [
          'cyklické výmeny a plánované demontáže: dopravníky, brzdy, motory, spojky',
          'interval, posledná a ďalšia výmena; stav po termíne, blíži sa, v pláne',
          'zaradenie do plánu opravy a história výmen každej položky',
        ],
      },
      {
        title: 'Karta agregátu',
        items: [
          'stredisko, zodpovedný majster a technologické uzly',
          'posledná práca, najbližší plán, posledná porucha a počty zásahov',
          'technická história prác, výmen, porúch a inšpekcií s filtrom',
        ],
      },
      {
        title: 'Pevné činnosti a šablóny',
        items: [
          'štandardné činnosti každého agregátu, ktoré idú na pracovný list',
          'kontrolný protokol agregátu',
          'šablóny opakovaných prác s typom opravy, opakovaním a prioritou',
        ],
      },
      {
        title: 'Ľudia a komunikácia',
        items: [
          'zodpovední majstri agregátov',
          'menný zoznam opravy: vedúci, pracovný čas, vlastní zamestnanci a externé firmy',
          '„Moje agregáty“ a správy: spoločný kanál aj súkromné konverzácie',
        ],
      },
      {
        title: 'Roly a audit',
        items: [
          'pracovník, inšpekčný, majster, technik, administrátor a vedenie len na čítanie',
          'oprávnenia kontroluje server, nielen obrazovka',
          'audit udalostí: kto, kedy, čo zmenil a s akým dôvodom',
        ],
      },
      {
        title: 'Prevádzka',
        items: [
          'pripravená na prevádzku online v prehliadači: server vo firemnej sieti alebo cloud',
          'pre viac používateľov naraz, každý so svojou rolou a „Mojimi agregátmi“',
          'telefón s Androidom aj bez pripojenia; denné zálohy s kontrolou integrity',
        ],
      },
    ],
    result:
      'Požiadavky, plán opráv, poruchy, inšpekcie, výmeny a história agregátov sú v jednej aplikácii. Je pripravená pre viac používateľov; zatiaľ ju používam vo vlastnej verzii.',
    note: 'Snímky sú zo skutočnej aplikácie. Kódy, názvy zariadení a stredísk, mená, poznámky a čísla záznamov sú nahradené ukážkovými hodnotami.',
    frameUrl: 'Archív údržby',
    shotsSource:
      'Snímky aplikácie Archív údržby v telefóne z 1. 11. 2026. Všetky údaje na snímkach sú anonymizované.',
    desktopShots: [],
    mobileShots: [
      {
        src: '/v2/archiv-udrzby-prehlad.webp',
        alt: 'Archív údržby v mobile, Prehľad: požiadavky na posúdenie, výmeny po termíne, prestoj za 30 dní, inšpekcie a najbližšia oprava. Údaje sú anonymizované.',
        caption: 'Prehľad: úlohy, prestoj a najbližšia oprava',
        width: 540,
        height: 1147,
      },
      {
        src: '/v2/archiv-udrzby-karta-agregatu.webp',
        alt: 'Archív údržby v mobile, technická karta agregátu: stredisko, majster, posledná práca, najbližší plán a posledná porucha. Údaje sú anonymizované.',
        caption: 'Technická karta agregátu',
        width: 540,
        height: 1147,
      },
      {
        src: '/v2/archiv-udrzby-historia.webp',
        alt: 'Archív údržby v mobile, technická história agregátu: vykonané práce a inšpekcia s dátumom a uzlom. Údaje sú anonymizované.',
        caption: 'Technická história zásahov',
        width: 540,
        height: 1147,
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
