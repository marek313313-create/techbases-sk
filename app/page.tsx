type FeatureCard = {
  title: string;
  text: string;
};

type CaseStudy = {
  title: string;
  problem: string;
  solution: string;
  result: string;
};

const useCases: FeatureCard[] = [
  {
    title: 'Prehľad skladu z viacerých zdrojov',
    text: 'Spojím dáta o zásobách z ERP, Excelov a exportov do jedného prehľadu, kde vidno aktuálny stav, chýbajúce položky aj rizikové miesta.',
  },
  {
    title: 'Spotreba materiálu a kritické položky',
    text: 'Vytvorím prehľad spotreby, výdajov a kritických položiek, aby bolo jasné, čo sa míňa a čo treba riešiť skôr.',
  },
  {
    title: 'Interný prehľad tam, kde systém nestačí',
    text: 'Doplním jednoduchý interný pohľad pre výrobu, údržbu alebo sklad tam, kde existujúci systém nevie ukázať to podstatné.',
  },
  {
    title: 'Jednoduchý nástroj pre ručný proces',
    text: 'Ak sa vo firme niečo rieši stále ručne, navrhnem interný nástroj, ktorý proces zrýchli a sprehľadní.',
  },
];

const caseStudies: CaseStudy[] = [
  {
    title: 'Plánovacia kniha z viacerých dátových vstupov',
    problem:
      'Existujúci systém nevedel pripraviť jeden použiteľný výstup pre plánovanie. Potrebné údaje boli rozdelené medzi viac zdrojov a bez ručného spracovania nebolo možné získať rýchly prehľad.',
    solution:
      'Prepojil som potrebné dáta do jedného plánovacieho modelu, ktorý spojil kľúčové vstupy do prehľadného a použiteľného formátu.',
    result:
      'Vznikla plánovacia kniha, ktorá zjednodušila plánovanie a vytvorila jeden jasný podklad pre ďalšiu prácu a rozhodovanie.',
  },
  {
    title: 'Prehľad skladu z viacerých zdrojov',
    problem:
      'Dáta o zásobách boli roztrúsené vo viacerých exportoch a súboroch, takže nebolo jednoduché vidieť aktuálny stav ani rizikové miesta bez zdĺhavého dohľadávania.',
    solution:
      'Spojil som údaje z rôznych zdrojov do jedného prehľadu, ktorý zjednotil stav zásob a kľúčové informácie potrebné pre prevádzku.',
    result:
      'Namiesto viacerých neprehľadných vstupov vznikol jeden použiteľný prehľad skladu, podľa ktorého sa dalo rýchlejšie rozhodovať.',
  },
  {
    title: 'Interný nástroj pre údržbu, sklad a rozhodovanie',
    problem:
      'Dôležité informácie o zásobách, spotrebe a rozpracovaných vstupoch boli rozdelené medzi viac zdrojov, takže neexistoval jeden použiteľný pohľad pre rýchle rozhodovanie v prevádzke.',
    solution:
      'Navrhol som interný nástroj, ktorý spojil kľúčové prevádzkové dáta do jedného prehľadu a doplnil ich o logiku pre vyhodnocovanie stavu a podporu ďalších krokov.',
    result:
      'Vznikol praktický pracovný nástroj pre údržbu a sklad, ktorý zjednodušil orientáciu v dátach a posunul prehľad bližšie k reálnemu rozhodovaniu.',
  },
];

const targetGroups: FeatureCard[] = [
  {
    title: 'Menšie výrobné firmy',
    text: 'Kde sú dôležité dáta roztrúsené, procesy zbytočne ručné a chýbajú jednoduché interné nástroje.',
  },
  {
    title: 'Technické a servisné prevádzky',
    text: 'Kde záleží na rýchlom prístupe k správnym údajom a na tom, aby interné nástroje reálne pomáhali ľuďom v prevádzke.',
  },
];

const typicalProblems: string[] = [
  'Dáta sú roztrúsené vo viacerých súboroch alebo systémoch a firma z nich nevie spraviť použiteľný podklad na rozhodovanie.',
  'Vo firme sa veľa vecí rieši ručne, opakovane a bez jednoduchého interného nástroja, ktorý by proces zrýchlil.',
  'Existujúci software nepokrýva špecifický problém firmy a univerzálne riešenie by bolo zbytočne drahé alebo nešikovné.',
];

export default function TechbasesHomepage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex flex-col items-start gap-2">
            <img
              src="/techbase-logo-v2.png"
              alt="TechBases logo"
              className="h-10 w-auto object-contain sm:h-12"
            />
            <div className="text-xs text-slate-400 sm:text-sm">Dáta a interné nástroje pre výrobu, údržbu a sklad</div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+421948684756"
              className="hidden rounded-2xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-900 sm:inline-flex"
            >
              +421 948 684 756
            </a>
            <a
              href="#kontakt"
              className="rounded-2xl bg-blue-600 px-4 py-2 text-sm font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
            >
              Kontakt
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
              Pre výrobu, údržbu a sklad
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Keď váš systém nedáva potrebný prehľad, spojím kľúčové dáta do jedného použiteľného pohľadu.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Pomáham menším výrobným a technickým firmám prepájať dáta z rôznych zdrojov a vytvárať prehľady a interné nástroje tam, kde existujúci systém nestačí na reálne rozhodovanie.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="rounded-2xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
              >
                Dohodnúť úvodný rozhovor
              </a>
              <a
                href="#sluzby"
                className="rounded-2xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-900"
              >
                Čo viem vyriešiť
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-2xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <div className="mb-4 text-sm text-slate-400">Čo firma reálne získa</div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <div className="font-medium">Jedno miesto pre kľúčové dáta</div>
                  <div className="mt-2 text-sm text-slate-400">
                    Namiesto hľadania v exportoch, Exceloch a rôznych systémoch vznikne jeden použiteľný prehľad.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <div className="font-medium">Menej ručného dohľadávania</div>
                  <div className="mt-2 text-sm text-slate-400">
                    Dôležité informácie sú na jednom mieste a dostupné skôr pre výrobu, sklad aj údržbu.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <div className="font-medium">Riešenie bez veľkého IT projektu</div>
                  <div className="mt-2 text-sm text-slate-400">
                    Doplním chýbajúci pohľad alebo interný nástroj tam, kde firemný software nestačí.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sluzby" className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">Konkrétne situácie, s ktorými viem pomôcť</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Keď sa dôležité dáta strácajú medzi exportmi, Excelmi a ručnými krokmi, doplním chýbajúci prehľad alebo jednoduchý nástroj pre konkrétny problém.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">Modelové príklady riešení</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Ukážky typických situácií, kde existujúci systém nestačí a potrebné dáta je nutné spojiť do jedného použiteľného výstupu.
            </p>
          </div>
          <div className="mt-10 grid gap-6">
            {caseStudies.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                    <div className="text-sm uppercase tracking-wider text-blue-300">Problém</div>
                    <p className="mt-3 leading-7 text-slate-300">{item.problem}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                    <div className="text-sm uppercase tracking-wider text-blue-300">Riešenie</div>
                    <p className="mt-3 leading-7 text-slate-300">{item.solution}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                    <div className="text-sm uppercase tracking-wider text-blue-300">Výsledok</div>
                    <p className="mt-3 leading-7 text-slate-300">{item.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-10">
            <h2 className="text-3xl font-bold">Pre koho je to vhodné</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {targetGroups.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                  <div className="font-semibold">{item.title}</div>
                  <div className="mt-2 text-slate-400">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {typicalProblems.map((text, index) => (
              <div key={index} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-blue-300">
                  <img
                    src="/mini-logo.png"
                    alt="Mini logo"
                    className="h-5 w-5 rounded object-cover"
                  />
                  <span>Typický problém</span>
                </div>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="kontakt" className="mx-auto max-w-4xl px-6 py-20">
          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 text-center shadow-2xl md:p-10">
            <h2 className="text-3xl font-bold">Dohodnime si úvodný rozhovor</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
              Ak vo firme riešite neprehľadné dáta, ručné procesy alebo chýbajúci interný nástroj pre výrobu, údržbu či sklad, ozvite sa. Spoločne prejdeme, či má riešenie pre vašu prevádzku reálny prínos.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:kontakt@techbases.sk"
                className="rounded-2xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
              >
                kontakt@techbases.sk
              </a>
              <a
                href="tel:+421948684756"
                className="rounded-2xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-950"
              >
                +421 948 684 756
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} TechBases.sk</div>
          <div>Dáta a interné nástroje pre výrobu, údržbu a sklad</div>
        </div>
      </footer>
    </div>
  );
}

