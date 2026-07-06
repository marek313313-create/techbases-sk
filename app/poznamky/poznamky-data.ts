export type PracticeNote = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  dateModified: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export function getPracticeNote(slug: string): PracticeNote {
  const note = practiceNotes.find((item) => item.slug === slug);

  if (!note) {
    throw new Error(`Practice note not found: ${slug}`);
  }

  return note;
}

export const practiceNotes: PracticeNote[] = [
  {
    title: 'Keď sklad vie, čo prišlo, ale nevie, komu to patrí',
    slug: '/poznamky/ked-sklad-vie-co-prislo-ale-nevie-komu-to-patri',
    description:
      'Bez kontextu je nepohyblivá zásoba len zoznam položiek. Keď sa prepojí sklad, príjemka a objednávací návrh, dá sa zistiť, kto materiál potreboval a čo s ním má zmysel urobiť ďalej.',
    tags: ['nepohyblivá zásoba', 'ERP dáta', 'SAP', 'sklad', 'objednávacie návrhy', 'dátová stopa'],
    dateModified: '2026-07-06',
    image: '/ked-sklad-vie-co-prislo.webp',
    imageAlt: 'Ilustračný vizuál k poznámke o sklade, príjemke a dohľadávaní pôvodnej potreby materiálu',
    imageWidth: 1672,
    imageHeight: 941,
  },
  {
    title: 'Keď jedna položka v ERP znamená celú zostavu',
    slug: '/poznamky/jedna-polozka-cela-zostava',
    description:
      'Prečo pri zostave nestačí pozrieť jednu skladovú kartu a ako sa z ERP dát dá rýchlo zistiť, čo je skladom, čo je rezervované a čo treba objednať.',
    tags: ['zostava', 'kusovník', 'rezervácie', 'objednávky'],
    dateModified: '2026-05-31',
    image: '/jedna-polozka-cela-zostava.webp',
    imageAlt: 'Ilustračný vizuál k poznámke o zostave, kusovníku a ERP dátach',
    imageWidth: 1672,
    imageHeight: 941,
  },
  {
    title: 'ERP dáta samé o sebe nevytvoria rozhodnutie',
    slug: '/poznamky/data-nie-su-problem-it',
    description:
      'Sklad môže ukazovať kusy, objednávka môže existovať a výdaj môže byť zaevidovaný. Otázka je, čo z toho platí pre konkrétnu opravu, zákazku alebo odstávku.',
    tags: ['ERP dáta', 'prevádzka', 'zodpovednosť za dáta', 'rozhodovanie'],
    dateModified: '2026-05-31',
    image: '/data-nie-su-problem-it.webp',
    imageAlt: 'Ilustračný vizuál k poznámke o ERP dátach, prevádzke a rozhodovaní',
    imageWidth: 1672,
    imageHeight: 941,
  },
  {
    title: 'ERP nie je problém. Problém je, keď z neho nevzniká odpoveď.',
    slug: '/poznamky/erp-nie-je-problem',
    description:
      'ERP môže byť správny zdroj dát. Ak však človek v prevádzke stále hľadá odpoveď cez viac obrazoviek, exportov a tabuliek, chýba pracovný pohľad medzi systémom a rozhodnutím.',
    tags: ['ERP dáta', 'prevádzka', 'ručné dohľadávanie', 'pracovný pohľad'],
    dateModified: '2026-05-31',
    image: '/erp-nie-je-problem.webp',
    imageAlt:
      'Ilustračný vizuál k poznámke o ERP dátach, ručnom dohľadávaní a pracovnom pohľade',
    imageWidth: 1535,
    imageHeight: 1024,
  },
  {
    title: 'Nepohyblivá zásoba: ponechať, preradiť, vydať alebo zošrotovať',
    slug: '/poznamky/nepohybliva-zasoba-co-s-polozkami',
    description:
      'Nepohyblivá zásoba nie je automaticky odpad. Je to zoznam položiek, pri ktorých treba rozhodnúť, či majú zostať v sklade, znížiť sa, vydať sa na údržbu, preradiť sa do havarijného režimu alebo ísť na odpis.',
    tags: [
      'nepohyblivá zásoba',
      'sklad ND',
      'viazaný kapitál',
      'údržba',
      'rozhodnutie z dát',
    ],
    dateModified: '2026-05-31',
    image: '/nepohybliva-zasoba-co-s-polozkami.webp',
    imageAlt: 'Ilustračný vizuál k poznámke o nepohyblivej zásobe a rozhodovaní o položkách',
    imageWidth: 1254,
    imageHeight: 1254,
  },
  {
    title: 'Keď má prevádzka report, ale odpoveď stále hľadá ručne',
    slug: '/poznamky/report-nie-je-rozhodnutie',
    description:
      'Report ukáže hodnotu skladu, počet objednávok alebo trend výdajov. Údržba a plánovanie však potrebujú vedieť, ktorý diel chýba, ktorá objednávka mešká a čo môže zdržať plánovanú prácu.',
    tags: ['report', 'pracovný pohľad', 'rozhodovanie', 'ERP dáta'],
    dateModified: '2026-05-31',
  },
];

export const latestPracticeNoteSlugs = [
  '/poznamky/ked-sklad-vie-co-prislo-ale-nevie-komu-to-patri',
  '/poznamky/jedna-polozka-cela-zostava',
];

export const latestPracticeNotes = practiceNotes.filter((note) =>
  latestPracticeNoteSlugs.includes(note.slug),
);
