import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    absolute: 'Porovnanie pôvodného webu a návrhu V2 | TechBases.sk',
  },
  description: 'Odkazy na pôvodný web a návrh V2 a prehľad podstatných zmien.',
  alternates: {
    canonical: '/v2/porovnanie',
  },
};

const changes = [
  {
    topic: 'Hlavný cieľ úvodu',
    original:
      'Rozcestník dvoch rovnocenných služieb: tvorby webov a firemných nástrojov.',
    v2: 'Predáva tvorbu webov. Firemné nástroje majú samostatnú, stručnú sekciu a vlastnú stránku.',
  },
  {
    topic: 'Prvá obrazovka',
    original: 'Nadpis a podnadpis na pozadí s videom značky, pod nimi dve ponuky.',
    v2: 'Nadpis, ponuka a dve tlačidlá spolu s veľkou ukážkou skutočného webu Zrub pri Hrone na počítači aj v mobile.',
  },
  {
    topic: 'Realizácie',
    original: 'Karty so snímkou úvodu, zadaním a stavom projektu.',
    v2: 'Veľké ukážky s označením typu projektu a krátkym opisom prínosu. Zadanie, riešenie a výsledok sú na detailnej stránke projektu.',
  },
  {
    topic: 'Čo zákazník dostane',
    original: 'Na samostatnej stránke /tvorba-webov.',
    v2: 'Priamo na úvode, rozdelené na základnú dodávku a to, čo nie je automaticky v cene. Jednoduchý dopytový formulár je v základnej dodávke, rozšírené formuláre, rezervácie a platby sú samostatný rozsah.',
  },
  {
    topic: 'Spolupráca',
    original: 'Štyri kroky spoločné pre obe služby.',
    v2: 'Päť krokov pre tvorbu webu: zadanie, dohoda, návrh, realizácia s pripomienkami, spustenie.',
  },
  {
    topic: 'Cena a starostlivosť',
    original: 'Cena a otázky na stránke /tvorba-webov.',
    v2: 'Cena, od čoho závisí a šesť situácií po spustení: chyba, nová požiadavka, doména a hosting, zálohy, prístupy a samostatné úpravy.',
  },
  {
    topic: 'Kto za webom stojí',
    original: 'Krátke predstavenie s malou fotografiou.',
    v2: 'Osobné predstavenie s veľkou fotografiou. Priemyselná prax vysvetlená ako základ firemných nástrojov, nie ako roky vo webe.',
  },
  {
    topic: 'Firemné nástroje',
    original:
      'Samostatná stránka /sluzby s anonymizovanými ukážkami prevádzkových prehľadov.',
    v2: 'Stručná sekcia na úvode so snímkami skutočných aplikácií s anonymizovanými údajmi: desktopová aplikácia Techbases a samostatne označená mobilná aplikácia Archív údržby.',
  },
  {
    topic: 'Dopyt',
    original: 'Dva vstupy cez e-mail a WhatsApp, formulár na stránke /kontakt.',
    v2: 'Formulár s tromi poľami priamo na úvode, k tomu telefón, e-mail a WhatsApp.',
  },
  {
    topic: 'Vizuál',
    original: 'Tmavý dizajn s farebnými prechodmi, svetelnými efektmi a videom.',
    v2: 'Pokojnejší dizajn: tmavá hlavička a úvod, svetlé sekcie na čítanie, bez ikonových kariet a svetelných efektov.',
  },
];

export default function ComparisonPage() {
  return (
    <main id="v2-obsah" className="v2-main" tabIndex={-1}>
      <section className="v2-dark v2-hero">
        <div className="v2-container">
          <div className="v2-eyebrow">Návrh V2 na posúdenie</div>
          <h1 className="v2-display mt-5 max-w-4xl">Pôvodný web a návrh V2</h1>
          <p className="v2-lead mt-6 max-w-3xl">
            Návrh V2 beží na samostatnej adrese a vyhľadávače ho neindexujú. Pôvodný web
            ostáva bez zmeny. Ceny sú v oboch verziách rovnaké.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
            <Link href="/" className="v2-form-card block no-underline">
              <span className="v2-label-caps">Pôvodný web</span>
              <span className="v2-h4 mt-2 block">techbases.sk →</span>
            </Link>
            <Link href="/v2" className="v2-form-card block no-underline">
              <span className="v2-label-caps">Návrh V2</span>
              <span className="v2-h4 mt-2 block">techbases.sk/v2 →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="v2-paper v2-section">
        <div className="v2-container">
          <h2 className="v2-h2">Podstatné zmeny</h2>
          <div className="mt-10 grid">
            <div className="v2-label-caps hidden gap-8 border-b border-[var(--line)] pb-3 md:grid md:grid-cols-[0.6fr_1fr_1fr]">
              <span>Oblasť</span>
              <span>Pôvodný web</span>
              <span>Návrh V2</span>
            </div>
            {changes.map((change) => (
              <div
                key={change.topic}
                className="grid gap-2 border-b border-[var(--line)] py-5 md:grid-cols-[0.6fr_1fr_1fr] md:gap-8"
              >
                <h3 className="v2-h4">{change.topic}</h3>
                <p className="v2-muted">
                  <span className="v2-label-caps md:hidden">Pôvodný web: </span>
                  {change.original}
                </p>
                <p>
                  <span className="v2-label-caps md:hidden">Návrh V2: </span>
                  {change.v2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
