import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    absolute: 'ERP nie je problém. Problém je, keď z neho nevzniká odpoveď | TechBases.sk',
  },
  description:
    'Prečo ERP dáta nestačí mať. Ak údržba, sklad alebo plánovanie stále hľadajú odpoveď cez exporty, obrazovky a Excel, chýba pracovný pohľad nad dátami.',
  alternates: {
    canonical: '/poznamky/erp-nie-je-problem',
  },
};

const connectedAreas = [
  'sklad + rezervácie',
  'objednávky + termíny',
  'zákazky + materiál',
  'plánovacia kniha + dostupnosť dielov',
  'prestoje + agregáty',
  'výdaje + opravy alebo odstávky',
];

const symptoms = [
  'ľudia sa boja kliknúť, aby niečo nepokazili',
  'seniorní používatelia poznajú postup, ale nevedia ho jednoducho vysvetliť',
  'rovnaká odpoveď sa hľadá cez viac modulov',
  'objednávky, sklad a plánovanie sa porovnávajú mimo ERP',
  'dôležité výnimky pozná iba jeden človek',
  'školenie ukazuje, kam kliknúť, ale nie prečo',
  'výsledkom je Excel, ktorý supluje pracovný pohľad',
];

const workingViewAnswers = [
  'čo je skladom',
  'čo je reálne voľné',
  'čo je rezervované',
  'čo je objednané',
  'čo mešká',
  'čo treba doobjednať',
  'čo môže zdržať opravu alebo odstávku',
  'ktoré dáta sú neúplné alebo rizikové',
];


const relatedNotes = [
  {
    title: 'Keď jedna položka v ERP znamená celú zostavu',
    href: '/poznamky/jedna-polozka-cela-zostava',
  },
  {
    title: 'ERP dáta samé o sebe nevytvoria rozhodnutie',
    href: '/poznamky/data-nie-su-problem-it',
  },
];

const relatedServices = [
  {
    title: 'Audit ručného dohľadávania v ERP dátach',
    href: '/audit-erp-dat',
  },
  {
    title: 'Sklad náhradných dielov',
    href: '/sluzby/sklad-nahradnych-dielov',
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-3 text-slate-300">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6 text-lg font-semibold leading-8 text-blue-50">
      {children}
    </div>
  );
}

export default function ErpIsNotTheProblemNotePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <article>
        <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
          Poznámka z prevádzky
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          ERP nie je problém. Problém je, keď z neho nevzniká odpoveď.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          ERP má byť systém záznamu. Nemá byť každodenná hádanka.
        </p>
        <p className="mt-4 leading-8 text-slate-400">
          Sklad je v ERP. Objednávka je v ERP. Rezervácia je v ERP. Plán je v
          Exceli alebo plánovacej knihe. Odpoveď však vzniká až vtedy, keď človek
          tieto údaje ručne spojí.
        </p>

        <figure className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          <img
            src="/ERP nie je problém. Problém je, keď z neho nevzniká odpoveď.png"
            alt="Ilustračný vizuál k poznámke o ERP dátach, ručnom dohľadávaní a pracovnom pohľade"
            className="w-full object-cover"
          />
        </figure>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Keď systém dáta má, ale človek stále hľadá</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Ak pracovník potrebuje zistiť stav materiálu, objednávku, rezerváciu
            alebo väzbu na zákazku, často musí prechádzať viac obrazoviek,
            exportov alebo tabuliek. Každý údaj existuje niekde samostatne.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Výsledkom je situácia, kde sklad ukazuje kusy, objednávka má termín a
            rezervácia patrí k zákazke, ale použiteľná odpoveď vzniká až po ich
            ručnom spojení.
          </p>
          <Highlight>
            ERP môže byť správny zdroj dát. Ale ak z neho nevzniká odpoveď pre
            konkrétnu prácu, prevádzka stále funguje na ručnom dohľadávaní.
          </Highlight>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Prečo to nie je vždy chyba ERP</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Nie každý problém s ERP znamená, že systém je zlý. Často ide o
            kombináciu procesov, starých obchádzok a údajov, ktoré sú rozdelené
            medzi sklad, nákup, zákazky a plánovanie.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            ERP môže byť nastavené ako systém záznamu pre financie, sklad alebo
            nákup. Lenže údržba, výroba alebo plánovanie často potrebujú odpoveď,
            ktorá spája viac oblastí naraz.
          </p>
          <BulletList items={connectedAreas} />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Typické príznaky</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Ak sa vo firme opakujú tieto situácie, problém nemusí byť v množstve
            údajov. Často chýba miesto, kde sa spolu ukáže diel, objednávka,
            rezervácia a termín dodania.
          </p>
          <BulletList items={symptoms} />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Príklad: plánovacia kniha a živý sklad</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Typický problém vzniká pri plánovacej knihe. Ku každej položke treba
            overiť sklad, objednávku, zákazku, počet kusov alebo rezervácie. Ak
            ide o stovky až tisíce položiek, ručné dopĺňanie prestáva byť
            administratíva.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Pri živom sklade je problém ešte väčší. Ručne zapísaný stav môže byť o
            deň neskôr neaktuálny.
          </p>
          <Highlight>
            Ručná plánovacia kniha nie je len pomalá. Pri živom sklade môže byť
            neaktuálna už v momente, keď ju človek dokončí.
          </Highlight>
          <p className="mt-5 leading-8 text-slate-300">
            Pohľad nad existujúcimi údajmi má preto riešiť nielen rýchlosť, ale aj
            aktuálnosť stavu skladu, objednávok a rezervácií.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Čo má vzniknúť namiesto ďalšieho reportu</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Cieľom nemá byť ďalší report, ktorý si niekto raz za čas otvorí.
            Cieľom má byť pohľad, ktorý pri položke ukáže, čo je skladom, čo je
            rezervované a čo môže zdržať opravu.
          </p>
          <p className="mt-4 leading-8 text-slate-400">Pracovný pohľad má ukázať napríklad:</p>
          <BulletList items={workingViewAnswers} />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Medzi systémom a rozhodnutím chýba vrstva</h2>
          <p className="mt-4 leading-8 text-slate-300">
            ERP nie je nepriateľ. ERP je často správny zdroj dát.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Problém vzniká vtedy, keď medzi systémom a človekom chýba vrstva,
            ktorá spojí sklad, objednávku, rezerváciu a plán.
          </p>
          <Highlight>ERP dáta existujú. Odpovede stále vznikajú ručne.</Highlight>
        </section>

        <section className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 text-center shadow-2xl md:p-10">
          <h2 className="text-3xl font-bold">Riešite podobný problém?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            Pošlite stručný opis situácie, ktorú dnes riešite ručne. Na začiatok
            netreba zadanie ani technickú špecifikáciu.
          </p>
          <div className="mt-8">
            <Link
              href="/kontakt"
              className="inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
            >
              Opísať problém
            </Link>
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Súvisiace poznámky</h2>
            <div className="mt-5 grid gap-3">
              {relatedNotes.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="leading-7 text-slate-300 transition hover:text-blue-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Súvisiace služby</h2>
            <div className="mt-5 grid gap-3">
              {relatedServices.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="leading-7 text-slate-300 transition hover:text-blue-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
