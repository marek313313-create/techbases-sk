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
    title: 'PrehÄľad skladu z viacerĂ˝ch zdrojov',
    text: 'SpojĂ­m dĂˇta o zĂˇsobĂˇch z ERP, Excelov a exportov do jednĂ©ho prehÄľadu, kde vidno aktuĂˇlny stav, chĂ˝bajĂşce poloĹľky aj rizikovĂ© miesta.',
  },
  {
    title: 'Spotreba materiĂˇlu a kritickĂ© poloĹľky',
    text: 'VytvorĂ­m prehÄľad spotreby, vĂ˝dajov a kritickĂ˝ch poloĹľiek, aby bolo jasnĂ©, ÄŤo sa mĂ­Ĺa a ÄŤo treba rieĹˇiĹĄ skĂ´r.',
  },
  {
    title: 'InternĂ˝ prehÄľad tam, kde systĂ©m nestaÄŤĂ­',
    text: 'DoplnĂ­m jednoduchĂ˝ internĂ˝ pohÄľad pre vĂ˝robu, ĂşdrĹľbu alebo sklad tam, kde existujĂşci systĂ©m nevie ukĂˇzaĹĄ to podstatnĂ©.',
  },
  {
    title: 'JednoduchĂ˝ nĂˇstroj pre ruÄŤnĂ˝ proces',
    text: 'Ak sa vo firme nieÄŤo rieĹˇi stĂˇle ruÄŤne, navrhnem internĂ˝ nĂˇstroj, ktorĂ˝ proces zrĂ˝chli a sprehÄľadnĂ­.',
  },
];

const caseStudies: CaseStudy[] = [
  {
    title: 'PlĂˇnovacia kniha z viacerĂ˝ch dĂˇtovĂ˝ch vstupov',
    problem:
      'ExistujĂşci systĂ©m nevedel pripraviĹĄ jeden pouĹľiteÄľnĂ˝ vĂ˝stup pre plĂˇnovanie. PotrebnĂ© Ăşdaje boli rozdelenĂ© medzi viac zdrojov a bez ruÄŤnĂ©ho spracovania nebolo moĹľnĂ© zĂ­skaĹĄ rĂ˝chly prehÄľad.',
    solution:
      'Prepojil som potrebnĂ© dĂˇta do jednĂ©ho plĂˇnovacieho modelu, ktorĂ˝ spojil kÄľĂşÄŤovĂ© vstupy do prehÄľadnĂ©ho a pouĹľiteÄľnĂ©ho formĂˇtu.',
    result:
      'Vznikla plĂˇnovacia kniha, ktorĂˇ zjednoduĹˇila plĂˇnovanie a vytvorila jeden jasnĂ˝ podklad pre ÄŹalĹˇiu prĂˇcu a rozhodovanie.',
  },
  {
    title: 'PrehÄľad skladu z viacerĂ˝ch zdrojov',
    problem:
      'DĂˇta o zĂˇsobĂˇch boli roztrĂşsenĂ© vo viacerĂ˝ch exportoch a sĂşboroch, takĹľe nebolo jednoduchĂ© vidieĹĄ aktuĂˇlny stav ani rizikovĂ© miesta bez zdÄşhavĂ©ho dohÄľadĂˇvania.',
    solution:
      'Spojil som Ăşdaje z rĂ´znych zdrojov do jednĂ©ho prehÄľadu, ktorĂ˝ zjednotil stav zĂˇsob a kÄľĂşÄŤovĂ© informĂˇcie potrebnĂ© pre prevĂˇdzku.',
    result:
      'Namiesto viacerĂ˝ch neprehÄľadnĂ˝ch vstupov vznikol jeden pouĹľiteÄľnĂ˝ prehÄľad skladu, podÄľa ktorĂ©ho sa dalo rĂ˝chlejĹˇie rozhodovaĹĄ.',
  },
  {
    title: 'InternĂ˝ nĂˇstroj pre ĂşdrĹľbu, sklad a rozhodovanie',
    problem:
      'DĂ´leĹľitĂ© informĂˇcie o zĂˇsobĂˇch, spotrebe a rozpracovanĂ˝ch vstupoch boli rozdelenĂ© medzi viac zdrojov, takĹľe neexistoval jeden pouĹľiteÄľnĂ˝ pohÄľad pre rĂ˝chle rozhodovanie v prevĂˇdzke.',
    solution:
      'Navrhol som internĂ˝ nĂˇstroj, ktorĂ˝ spojil kÄľĂşÄŤovĂ© prevĂˇdzkovĂ© dĂˇta do jednĂ©ho prehÄľadu a doplnil ich o logiku pre vyhodnocovanie stavu a podporu ÄŹalĹˇĂ­ch krokov.',
    result:
      'Vznikol praktickĂ˝ pracovnĂ˝ nĂˇstroj pre ĂşdrĹľbu a sklad, ktorĂ˝ zjednoduĹˇil orientĂˇciu v dĂˇtach a posunul prehÄľad bliĹľĹˇie k reĂˇlnemu rozhodovaniu.',
  },
];

const targetGroups: FeatureCard[] = [
  {
    title: 'MenĹˇie vĂ˝robnĂ© firmy',
    text: 'Kde sĂş dĂ´leĹľitĂ© dĂˇta roztrĂşsenĂ©, procesy zbytoÄŤne ruÄŤnĂ© a chĂ˝bajĂş jednoduchĂ© internĂ© nĂˇstroje.',
  },
  {
    title: 'TechnickĂ© a servisnĂ© prevĂˇdzky',
    text: 'Kde zĂˇleĹľĂ­ na rĂ˝chlom prĂ­stupe k sprĂˇvnym Ăşdajom a na tom, aby internĂ© nĂˇstroje reĂˇlne pomĂˇhali ÄľuÄŹom v prevĂˇdzke.',
  },
];

const typicalProblems: string[] = [
  'DĂˇta sĂş roztrĂşsenĂ© vo viacerĂ˝ch sĂşboroch alebo systĂ©moch a firma z nich nevie spraviĹĄ pouĹľiteÄľnĂ˝ podklad na rozhodovanie.',
  'Vo firme sa veÄľa vecĂ­ rieĹˇi ruÄŤne, opakovane a bez jednoduchĂ©ho internĂ©ho nĂˇstroja, ktorĂ˝ by proces zrĂ˝chlil.',
  'ExistujĂşci software nepokrĂ˝va ĹˇpecifickĂ˝ problĂ©m firmy a univerzĂˇlne rieĹˇenie by bolo zbytoÄŤne drahĂ© alebo neĹˇikovnĂ©.',
];

export default function TechbasesHomepage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex flex-col items-start gap-2">
            <img
              src="/techbase-logo.png"
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
              Pre vĂ˝robu, ĂşdrĹľbu a sklad
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              KeÄŹ vĂˇĹˇ systĂ©m nedĂˇva potrebnĂ˝ prehÄľad, spojĂ­m kÄľĂşÄŤovĂ© dĂˇta do jednĂ©ho pouĹľiteÄľnĂ©ho pohÄľadu.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              PomĂˇham menĹˇĂ­m vĂ˝robnĂ˝m a technickĂ˝m firmĂˇm prepĂˇjaĹĄ dĂˇta z rĂ´znych zdrojov a vytvĂˇraĹĄ prehÄľady a internĂ© nĂˇstroje tam, kde existujĂşci systĂ©m nestaÄŤĂ­ na reĂˇlne rozhodovanie.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="rounded-2xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
              >
                DohodnĂşĹĄ ĂşvodnĂ˝ rozhovor
              </a>
              <a
                href="#sluzby"
                className="rounded-2xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-900"
              >
                ÄŚo viem vyrieĹˇiĹĄ
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-2xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <div className="mb-4 text-sm text-slate-400">ÄŚo firma reĂˇlne zĂ­ska</div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <div className="font-medium">Jedno miesto pre kÄľĂşÄŤovĂ© dĂˇta</div>
                  <div className="mt-2 text-sm text-slate-400">
                    Namiesto hÄľadania v exportoch, Exceloch a rĂ´znych systĂ©moch vznikne jeden pouĹľiteÄľnĂ˝ prehÄľad.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <div className="font-medium">Menej ruÄŤnĂ©ho dohÄľadĂˇvania</div>
                  <div className="mt-2 text-sm text-slate-400">
                    DĂ´leĹľitĂ© informĂˇcie sĂş na jednom mieste a dostupnĂ© skĂ´r pre vĂ˝robu, sklad aj ĂşdrĹľbu.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <div className="font-medium">RieĹˇenie bez veÄľkĂ©ho IT projektu</div>
                  <div className="mt-2 text-sm text-slate-400">
                    DoplnĂ­m chĂ˝bajĂşci pohÄľad alebo internĂ˝ nĂˇstroj tam, kde firemnĂ˝ software nestaÄŤĂ­.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sluzby" className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">KonkrĂ©tne situĂˇcie, s ktorĂ˝mi viem pomĂ´cĹĄ</h2>
            <p className="mt-4 leading-8 text-slate-300">
              KeÄŹ sa dĂ´leĹľitĂ© dĂˇta strĂˇcajĂş medzi exportmi, Excelmi a ruÄŤnĂ˝mi krokmi, doplnĂ­m chĂ˝bajĂşci prehÄľad alebo jednoduchĂ˝ nĂˇstroj pre konkrĂ©tny problĂ©m.
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
            <h2 className="text-3xl font-bold">ModelovĂ© prĂ­klady rieĹˇenĂ­</h2>
            <p className="mt-4 leading-8 text-slate-300">
              UkĂˇĹľky typickĂ˝ch situĂˇciĂ­, kde existujĂşci systĂ©m nestaÄŤĂ­ a potrebnĂ© dĂˇta je nutnĂ© spojiĹĄ do jednĂ©ho pouĹľiteÄľnĂ©ho vĂ˝stupu.
            </p>
          </div>
          <div className="mt-10 grid gap-6">
            {caseStudies.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                    <div className="text-sm uppercase tracking-wider text-blue-300">ProblĂ©m</div>
                    <p className="mt-3 leading-7 text-slate-300">{item.problem}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                    <div className="text-sm uppercase tracking-wider text-blue-300">RieĹˇenie</div>
                    <p className="mt-3 leading-7 text-slate-300">{item.solution}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                    <div className="text-sm uppercase tracking-wider text-blue-300">VĂ˝sledok</div>
                    <p className="mt-3 leading-7 text-slate-300">{item.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-10">
            <h2 className="text-3xl font-bold">Pre koho je to vhodnĂ©</h2>
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
                  <span>TypickĂ˝ problĂ©m</span>
                </div>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="kontakt" className="mx-auto max-w-4xl px-6 py-20">
          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 text-center shadow-2xl md:p-10">
            <h2 className="text-3xl font-bold">Dohodnime si ĂşvodnĂ˝ rozhovor</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
              Ak vo firme rieĹˇite neprehÄľadnĂ© dĂˇta, ruÄŤnĂ© procesy alebo chĂ˝bajĂşci internĂ˝ nĂˇstroj pre vĂ˝robu, ĂşdrĹľbu ÄŤi sklad, ozvite sa. SpoloÄŤne prejdeme, ÄŤi mĂˇ rieĹˇenie pre vaĹˇu prevĂˇdzku reĂˇlny prĂ­nos.
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
          <div>Â© {new Date().getFullYear()} TechBases.sk</div>
          <div>DĂˇta a internĂ© nĂˇstroje pre vĂ˝robu, ĂşdrĹľbu a sklad</div>
        </div>
      </footer>
    </div>
  );
}

