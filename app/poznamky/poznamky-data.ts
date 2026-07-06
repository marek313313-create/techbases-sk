export type PracticeNote = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
};

export const practiceNotes: PracticeNote[] = [
  {
    title: 'Keď sklad vie, čo prišlo, ale nevie, komu to patrí',
    slug: '/poznamky/ked-sklad-vie-co-prislo-ale-nevie-komu-to-patri',
    description:
      'Bez kontextu je nepohyblivá zásoba len zoznam položiek. Keď sa prepojí sklad, príjemka a objednávací návrh, dá sa zistiť, kto materiál potreboval a čo s ním má zmysel urobiť ďalej.',
    tags: ['nepohyblivá zásoba', 'ERP dáta', 'SAP', 'sklad', 'objednávacie návrhy', 'dátová stopa'],
    image: '/Keď sklad vie, čo prišlo, ale nevie, komu to patrí.png',
    imageAlt: 'Ilustračný vizuál k poznámke o sklade, príjemke a dohľadávaní pôvodnej potreby materiálu',
  },
  {
    title: 'Keď jedna položka v ERP znamená celú zostavu',
    slug: '/poznamky/jedna-polozka-cela-zostava',
    description:
      'Prečo pri zostave nestačí pozrieť jednu skladovú kartu a ako sa z ERP dát dá rýchlo zistiť, čo je skladom, čo je rezervované a čo treba objednať.',
    tags: ['zostava', 'kusovník', 'rezervácie', 'objednávky'],
    image: '/Keď jedna položka v ERP znamená celaú zostavu.png',
    imageAlt: 'Ilustračný vizuál k poznámke o zostave, kusovníku a ERP dátach',
  },
  {
    title: 'ERP dáta samé o sebe nevytvoria rozhodnutie',
    slug: '/poznamky/data-nie-su-problem-it',
    description:
      'Sklad môže ukazovať kusy, objednávka môže existovať a výdaj môže byť zaevidovaný. Otázka je, čo z toho platí pre konkrétnu opravu, zákazku alebo odstávku.',
    tags: ['ERP dáta', 'prevádzka', 'zodpovednosť za dáta', 'rozhodovanie'],
    image: '/Dáta nie sú problém IT. Sú problem prevádzky..png',
    imageAlt: 'Ilustračný vizuál k poznámke o ERP dátach, prevádzke a rozhodovaní',
  },
  {
    title: 'ERP nie je problém. Problém je, keď z neho nevzniká odpoveď.',
    slug: '/poznamky/erp-nie-je-problem',
    description:
      'ERP môže byť správny zdroj dát. Ak však človek v prevádzke stále hľadá odpoveď cez viac obrazoviek, exportov a tabuliek, chýba pracovný pohľad medzi systémom a rozhodnutím.',
    tags: ['ERP dáta', 'prevádzka', 'ručné dohľadávanie', 'pracovný pohľad'],
    image: '/ERP nie je problém. Problém je, keď z neho nevzniká odpoveď.png',
    imageAlt:
      'Ilustračný vizuál k poznámke o ERP dátach, ručnom dohľadávaní a pracovnom pohľade',
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
    image: '/Nepohyblivá zásoba ponechať, preradiť, vydať alebo zošrotovať.png',
    imageAlt: 'Ilustračný vizuál k poznámke o nepohyblivej zásobe a rozhodovaní o položkách',
  },
];

export const latestPracticeNoteSlugs = [
  '/poznamky/ked-sklad-vie-co-prislo-ale-nevie-komu-to-patri',
  '/poznamky/jedna-polozka-cela-zostava',
];

export const latestPracticeNotes = practiceNotes.filter((note) =>
  latestPracticeNoteSlugs.includes(note.slug),
);
