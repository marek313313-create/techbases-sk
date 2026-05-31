export type FeatureCard = {
  title: string;
  text: string;
};

export type CaseStudy = {
  title: string;
  problem: string;
  solution: string;
  result: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const whatsAppUrl =
  'https://wa.me/421948684756?text=Dobr%C3%BD%20de%C5%88%2C%20m%C3%A1m%20z%C3%A1ujem%20o%20rie%C5%A1enie%20pre%20preh%C4%BEad%20%C3%BAdr%C5%BEby%20a%20skladu.';

export const navLinks = [
  { href: '/', label: 'Domov' },
  { href: '/sluzby', label: 'Služby' },
  { href: '/#ukazky-riesenia', label: 'Ukážky' },
  { href: '/poznamky', label: 'Poznámky' },
  { href: '/o-mne', label: 'O mne' },
  { href: '/kontakt', label: 'Kontakt' },
];

export const useCases: FeatureCard[] = [
  {
    title: 'Potrebujeme rýchlo zistiť, čo máme skladom, čo sa míňa a čo je objednané.',
    text: 'Jeden pracovný pohľad nad skladom, výdajmi a otvorenými objednávkami.',
  },
  {
    title: 'Chceme vidieť objednávky po termíne a diely, ktoré môžu zdržať opravu.',
    text: 'Prehľad čakajúcich dodaní, termínov a rizík pre opravu alebo odstávku.',
  },
  {
    title: 'Plánovacia kniha nie je prepojená so skladom a objednávkami.',
    text: 'Rýchla kontrola pripravenosti plánovaných prác podľa dostupnosti materiálu.',
  },
  {
    title: 'Jedna položka je zostava a plánovanie potrebuje rýchlo zistiť, ktoré diely sú skladom, rezervované alebo chýbajú.',
    text: 'Rozpad zostavy na sklad, rezervácie a potrebu objednania bez ručného skladania tabuliek.',
  },
  {
    title: 'Nevieme, ktoré položky sú kritické a ktoré iba viažu peniaze.',
    text: 'Oddelenie kritických dielov od nepohyblivej zásoby a nadzásoby.',
  },
  {
    title: 'Prestoje a opakované poruchy riešime skôr pocitovo než z histórie.',
    text: 'Prevádzkový prehľad nad trendmi, opakovaním a dopadom na výrobu.',
  },
  {
    title: 'Dáta máme v ERP, ale odpovede stále skladáme v Exceli.',
    text: 'Spojenie ERP exportov do výstupu, ktorý ľudia v prevádzke vedia použiť.',
  },
  {
    title: 'Chceme vidieť vývoj nepohyblivej zásoby a jej medzimesačný nárast.',
    text: 'Prehľad položiek, ktoré sa nehýbu, rastú v hodnote a postupne začínajú viazať peniaze.',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: 'Plánovacia kniha z viacerých dátových vstupov',
    problem:
      'Potrebné údaje pre plánovanie boli rozdelené medzi viac zdrojov. Bez ručného spracovania nebolo rýchlo vidieť, či sú plánované práce materiálovo pripravené.',
    solution:
      'Prepojil som plánovaciu knihu, skladové údaje a dostupné objednávky do jedného pracovného pohľadu nad existujúcimi dátami.',
    result:
      'Vznikol jasný podklad pre údržbu a plánovanie, podľa ktorého sa dali skôr odhaliť chýbajúce diely a riziká pred opravou alebo odstávkou.',
  },
  {
    title: 'Prehľad skladu z viacerých zdrojov',
    problem:
      'Dáta o zásobách, výdajoch a objednávkach boli roztrúsené vo viacerých exportoch a súboroch.',
    solution:
      'Spojil som dostupné ERP, Excel alebo CSV výstupy do jedného pracovného pohľadu pre sklad náhradných dielov a údržbu.',
    result:
      'Ľudia v prevádzke videli stav položky, posledný výdaj, otvorené objednávky a rizikové miesta bez zdĺhavého dohľadávania.',
  },
  {
    title: 'Interný portál pre údržbu, sklad a plánovanie',
    problem:
      'Údržba a sklad pracovali s viacerými exportmi: sklad, výdaje, objednávky, plánované práce, dokumenty a poruchovosť.',
    solution:
      'Vznikol interný pracovný pohľad, ktorý spojil kľúčové prevádzkové dáta bez výmeny ERP systému.',
    result:
      'Údržba a sklad získali jedno miesto pre dostupnosť materiálu, históriu spotreby, otvorené objednávky a pripravenosť plánovaných prác.',
  },
];

export const targetGroups: FeatureCard[] = [
  {
    title: 'Výrobné firmy s údržbou',
    text: 'Firmy, ktoré majú sklad náhradných dielov, plánované opravy, odstávky a potrebujú rýchlejšie odpovede nad existujúcimi dátami.',
  },
  {
    title: 'Technické prevádzky',
    text: 'Prevádzky, kde chýbajúci diel, oneskorená objednávka alebo opakovaná porucha vie zdržať opravu alebo výrobu.',
  },
];

export const typicalProblems: string[] = [
  'sklad ND, výdaje a objednávky sú v oddelených exportoch',
  'údržba hľadá posledný výdaj ručne',
  'objednávky po termíne nie sú viditeľné na jednom mieste',
  'nepohyblivá zásoba viaže peniaze',
  'plánovacia kniha nie je prepojená so skladom',
  'jedna položka je v skutočnosti zostava a plánovanie musí ručne dohľadávať dostupnosť všetkých dielov',
  'opakované poruchy sa riešia pocitovo, nie podľa histórie',
  'prestoje a ich dopad nie sú viditeľné v jednom pracovnom pohľade',
];

export const collaborationSteps: FeatureCard[] = [
  {
    title: '1. Vyberieme konkrétny problém',
    text: 'Nie celý podnik naraz. Začíname jednou otázkou, ktorá dnes zaberá čas alebo spôsobuje neistotu.',
  },
  {
    title: '2. Pošlete exporty alebo ukážku dát',
    text: 'Sklad, výdaje, objednávky, prestoje, plánovaciu knihu alebo iný dostupný výstup.',
  },
  {
    title: '3. Spojím dáta do pracovného pohľadu',
    text: 'Vznikne jeden prehľad nad existujúcimi dátami bez výmeny ERP systému.',
  },
  {
    title: '4. Overíte výstup v prevádzke',
    text: 'Skontroluje sa, či výstup reálne pomáha ľuďom v údržbe, sklade alebo plánovaní.',
  },
  {
    title: '5. Rozhodnete, či má zmysel pokračovať',
    text: 'Po pilote je jasnejšie, či má riešenie hodnotu a čo by malo byť ďalším krokom.',
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'Je to vhodné aj pre firmu, ktorá už má ERP alebo SAP?',
    answer:
      'Áno. TechBases nenahrádza ERP ani SAP. Dopĺňa praktický pracovný pohľad nad existujúcimi ERP dátami tam, kde odpovede pre údržbu, sklad alebo výrobu stále vznikajú ručne.',
  },
  {
    question: 'Potrebujem mať všetky dáta v jednom systéme?',
    answer:
      'Nie. Často sa začína práve tým, že dáta sú v ERP exportoch, Exceli, CSV súboroch alebo plánovacej knihe. Pilot preverí, čo sa dá z týchto vstupov zmysluplne spojiť.',
  },
  {
    question: 'Nahrádza TechBases ERP, WMS alebo MES?',
    answer:
      'Nie. TechBases nenahrádza ERP, WMS, MES, CMMS ani SAP PM. Je to rozhodovacia a prevádzková vrstva nad dátami, ktoré už firma má.',
  },
  {
    question: 'Vie TechBases pomôcť aj s plánovaním údržby?',
    answer:
      'Áno, ak je plánovacia kniha dostupná ako export, Excel alebo iný použiteľný výstup. Dá sa prepojiť so skladom, výdajmi a objednávkami, aby bolo vidieť pripravenosť plánovaných prác.',
  },
  {
    question: 'Je výstup iba graf alebo tabuľka?',
    answer:
      'Nie. Hodnota nie je v samotnom grafe. Hodnota je v tom, že sa prepojí prevádzkový kontext: poruchy s materiálom, objednávky s opravami, prestoje s trendmi a plánované práce s dostupnosťou dielov.',
  },
  {
    question: 'Čo si pripraviť na prvý rozhovor?',
    answer:
      'Stačí stručne opísať, čo dnes hľadáte ručne, z akých systémov alebo exportov dáta pochádzajú, kto s výstupom pracuje a ako často sa problém opakuje.',
  },
  {
    question: 'Môže začať pilot aj bez presného zadania?',
    answer:
      'Áno. Na začiatok stačí pomenovať konkrétnu otázku alebo neistotu v prevádzke. Pilot má pevný rozsah a ďalšie zdroje dát alebo nové pohľady sa naceňujú samostatne.',
  },
];
