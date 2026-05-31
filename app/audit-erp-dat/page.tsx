import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    absolute: 'Audit ERP dát | Ručné dohľadávanie v údržbe a sklade',
  },
  description:
    'Audit ručného dohľadávania v ERP dátach pomáha zistiť, kde plánovanie, údržba alebo sklad strácajú čas pri aktualizácii plánovacej knihy, objednávok, skladových údajov a množstiev.',
  alternates: {
    canonical: '/audit-erp-dat',
  },
};

const fitItems = [
  'výrobná firma, kde údržba alebo sklad stále hľadajú odpovede v exportoch',
  'plánovanie, ktoré ručne overuje sklad, rezervácie, objednávky alebo zostavy',
  'prevádzka, kde chýbajúci diel vie zdržať opravu alebo odstávku',
  'firma s ERP/SAP, kde dáta existujú, ale odpoveď nevznikne priamo',
  'tím, ktorý nechce meniť ERP, ale chce zistiť, či sa dá z dát pripraviť pracovný pohľad',
];

const situations = [
  {
    title: 'Jedna položka je celá zostava',
    text: 'Plánovanie musí ručne zistiť, čo patrí do zostavy, čo je skladom, čo je rezervované a čo treba doobjednať.',
  },
  {
    title: 'Sklad, výdaje a objednávky sú oddelené',
    text: 'Údržba alebo sklad vidia dáta v rôznych exportoch, ale nie v jednom pracovnom pohľade.',
  },
  {
    title: 'Objednávky po termíne nie sú jasne viditeľné',
    text: 'Diel je síce objednaný, ale nie je hneď jasné, či mešká a či blokuje opravu alebo odstávku.',
  },
  {
    title: 'Nepohyblivá zásoba viaže peniaze',
    text: 'Niektoré položky chránia výrobu, iné sa roky nehýbu. Audit pomôže pomenovať, čo sa oplatí preveriť.',
  },
  {
    title: 'Prestoje sa riešia pocitovo',
    text: 'História porúch a prestojov existuje, ale nie je jasne prepojená s dopadom, agregátmi alebo materiálom.',
  },
];

const outputs = [
  'popis jedného konkrétneho prevádzkového problému',
  'zoznam dostupných zdrojov dát',
  'pomenovanie ručných krokov, ktoré dnes zdržujú prácu',
  'identifikácia dátových výnimiek a rizík',
  'návrh prvého pracovného pohľadu',
  'odporúčaný rozsah pilotu',
  'odporúčanie: riešiť / neriešiť / najskôr upratať dáta',
];

const auditSteps = [
  {
    title: 'Krátky úvodný rozhovor',
    text: 'Pomenujeme, čo dnes ľudia hľadajú ručne, kto s tým pracuje a kde vzniká zdržanie.',
  },
  {
    title: 'Ukážka exportov alebo dát',
    text: 'Stačí anonymizovaný export, ukážka štruktúry dát alebo popis dostupných výstupov z ERP, Excelu alebo CSV.',
  },
  {
    title: 'Mapovanie ručného dohľadávania',
    text: 'Pozrieme sa, ktoré kroky dnes vznikajú cez filtre, prepisovanie, porovnávanie alebo dohľadávanie v histórii.',
  },
  {
    title: 'Návrh pracovného pohľadu',
    text: 'Navrhnem, ako by mohol vyzerať prvý pohľad nad dátami: čo má ukázať, komu má slúžiť a aké rozhodnutie má zrýchliť.',
  },
  {
    title: 'Rozhodnutie o pilote',
    text: 'Na konci má byť jasné, či má zmysel pilot, aký má mať rozsah a čo treba pripraviť pred jeho spustením.',
  },
];

const notIncluded = [
  'nenahrádza ERP, SAP, WMS, MES ani CMMS',
  'nerieši fyzické skladové procesy, skenery alebo príjem/výdaj materiálu',
  'negarantuje úspory bez overenia na dátach',
  'nerobí automatické objednávanie bez kontroly človeka',
  'neopravuje disciplínu používania systému',
  'nerieši všetky firemné dáta naraz',
];

const packageItems = [
  'jeden konkrétny proces alebo problém',
  '1 až 3 dátové zdroje',
  'ukážka exportov alebo popis dát',
  'návrh pracovného pohľadu',
  'odporúčaný rozsah pilotu',
];

const calculationRows = [
  ['Potrebné množstvo', '10 ks'],
  ['Skladom', '6 ks'],
  ['Rezervované na inú zákazku', '2 ks'],
  ['Voľné množstvo', '4 ks'],
  ['Treba doobjednať', '6 ks'],
];

const benefitEstimateItems = [
  'koľko položiek sa aktualizuje',
  'čo sa pri každej položke dohľadáva',
  'koľko trvá jedna položka',
  'ako často sa plán aktualizuje',
  'ktoré údaje už existujú v ERP alebo exportoch',
  'čo by sa dalo zobraziť automatizovane v pracovnom pohľade',
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

export default function ErpDataAuditPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="rounded-2xl border border-slate-800 bg-slate-900/55 p-6 shadow-2xl md:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
              Predstupeň pilotu
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Audit ručného dohľadávania v ERP dátach
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Zistite, kde vaša údržba, sklad alebo plánovanie strácajú čas pri
              hľadaní odpovedí v ERP exportoch, Exceli a interných tabuľkách.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-slate-400">
              Prejdeme jeden konkrétny proces, dostupné dáta a ručné kroky. Výstupom
              je návrh pracovného pohľadu, riziká v dátach a odporúčaný rozsah pilotu.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="rounded-xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
              >
                Dohodnúť audit
              </Link>
              <Link
                href="/kontakt"
                className="rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-900"
              >
                Poslať ukážku exportu
              </Link>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Na začiatok stačí stručný opis problému. Netreba zadanie ani technickú
              špecifikáciu.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-950 p-6 shadow-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Základná otázka
            </div>
            <h2 className="mt-4 text-2xl font-bold leading-tight md:text-3xl">
              ERP dáta existujú. Odpovede stále vznikajú ručne.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Audit má ukázať, kde presne ručné dohľadávanie vzniká a či z existujúcich
              ERP, Excel alebo CSV dát vie vzniknúť použiteľný pracovný pohľad.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl md:p-7">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Pre koho má audit zmysel</h2>
          <p className="mt-4 leading-8 text-slate-400">
            Audit je vhodný vtedy, keď firma ešte nechce objednávať pilot, ale chce
            vedieť, či problém v dátach stojí za ďalší krok.
          </p>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {fitItems.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/70 p-4 leading-7 text-slate-300"
            >
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Kedy sa audit oplatí</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {situations.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl md:p-7">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Čo je výstupom auditu</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Výstupom nemá byť všeobecné odporúčanie. Cieľom je konkrétne rozhodnutie,
            či má zmysel pripraviť pilotný pracovný pohľad a v akom rozsahu.
          </p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
            <BulletList items={outputs} />
          </div>
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-6 text-lg font-semibold leading-8 text-blue-50">
            Audit má ukázať, či z existujúcich dát vie vzniknúť použiteľný pracovný
            pohľad. Nie ďalší report bez využitia.
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold">Ako audit prebieha</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {auditSteps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="text-sm font-semibold text-blue-300">{index + 1}. krok</div>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl md:p-7">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Čo audit nerieši</h2>
          <p className="mt-4 leading-8 text-slate-400">
            Audit je úzky zámerne. Najprv treba overiť jeden konkrétny problém. Až
            potom má zmysel riešiť širší pilot.
          </p>
        </div>
        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/70 p-5">
          <BulletList items={notIncluded} />
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-6 shadow-2xl md:p-7">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Orientačný výpočet
          </div>
          <h2 className="mt-3 text-3xl font-bold">Ako sa dá odhadnúť prínos auditu</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Pri audite sa dá rýchlo odhadnúť, koľko práce dnes vzniká len ručným
            dohľadávaním. Počet položiek × čas na jednu položku × frekvencia
            aktualizácie ukáže, či ide o drobnú nepríjemnosť alebo o desiatky
            hodín práce.
          </p>
        </div>
        <div className="mt-7 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-xl border border-slate-800 bg-slate-950/75 p-5">
            <BulletList items={benefitEstimateItems} />
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/75 p-6">
            <p className="leading-8 text-slate-300">
              Ak má plánovacia kniha približne 3 500 položiek a pri každej treba
              ručne dohľadať sklad, objednávku, zákazku a množstvo, aj jedna
              minúta na položku znamená približne 58 hodín práce.
            </p>
            <p className="mt-4 leading-8 text-slate-400">
              Pri živom sklade navyše platí, že ručne dopísaný stav nemusí byť
              aktuálny už na ďalší deň. Tento príklad je orientačný výpočet, nie
              garantovaný výsledok pre každú firmu.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl md:p-7">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-950 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Rozsah auditu
            </div>
            <h2 className="mt-4 text-3xl font-bold">Rýchly audit ERP dát</h2>
            <div className="mt-5 text-4xl font-bold text-blue-100">od 390 €</div>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              podľa rozsahu a dostupnosti dát
            </p>
            <BulletList items={packageItems} />
            <p className="mt-5 text-sm leading-6 text-slate-500">
              Ak sa počas auditu ukáže, že problém je širší alebo dáta sú neúplné,
              ďalší rozsah sa naceňuje samostatne.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-6">
            <h2 className="text-3xl font-bold">Príklad otázky z prevádzky</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Jedna položka v ERP je v skutočnosti zostava. Plánovanie musí zistiť,
              čo patrí do zostavy, čo je skladom, čo je rezervované na inú zákazku a
              čo treba doobjednať.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
              {calculationRows.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[1fr_auto] gap-4 border-t border-slate-800 px-5 py-4 first:border-t-0"
                >
                  <span className="text-slate-400">{label}</span>
                  <span className="font-semibold text-slate-100">{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 leading-8 text-slate-400">
              Toto je rozdiel medzi dátami a rozhodnutím. ERP dáta môžu existovať,
              ale pracovný pohľad musí ukázať, čo je reálne použiteľné.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-6 text-center shadow-2xl md:p-8">
        <h2 className="text-3xl font-bold">Má zmysel audit aj u vás?</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
          Pošlite stručný opis problému alebo ukážku exportu. Stačí vedieť, čo dnes
          hľadáte ručne, kto s tým pracuje a aká odpoveď trvá príliš dlho.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/kontakt"
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
          >
            Opísať problém
          </Link>
          <Link
            href="/kontakt"
            className="rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-950"
          >
            Poslať ukážku exportu
          </Link>
        </div>
      </section>
    </main>
  );
}
