import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ochrana osobných údajov',
  description:
    'Základné informácie o spracúvaní osobných údajov pri kontakte cez web TechBases.sk.',
  alternates: {
    canonical: '/ochrana-osobnych-udajov',
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <section className="max-w-3xl">
        <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
          Ochrana osobných údajov
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Ako pristupujem k osobným údajom pri kontakte cez TechBases.sk
        </h1>
        <p className="mt-6 leading-8 text-slate-300">
          Táto stránka vysvetľuje základný spôsob spracúvania osobných údajov,
          ak ma kontaktujete prostredníctvom e-mailu alebo telefonicky.
        </p>
      </section>

      <section className="mt-12 grid gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
          <h2 className="text-2xl font-semibold">Kto spracúva údaje</h2>
          <p className="mt-4 leading-8 text-slate-400">
            Prevádzkovateľom webu TechBases.sk je osoba prevádzkujúca túto
            stránku pod značkou TechBases.sk. Kontakt:
            <br />
            e-mail: kontakt@techbases.sk
            <br />
            telefón: +421 948 684 756
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
          <h2 className="text-2xl font-semibold">Aké údaje môžu byť spracúvané</h2>
          <p className="mt-4 leading-8 text-slate-400">
            Ak ma kontaktujete, môžem spracúvať najmä údaje, ktoré uvediete v
            e-maile alebo pri telefonickom kontakte. Typicky ide o meno,
            kontaktné údaje, názov firmy, pracovnú rolu a informácie o vašom
            dopyte alebo probléme, ktorý chcete riešiť.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
          <h2 className="text-2xl font-semibold">Na aký účel údaje používam</h2>
          <p className="mt-4 leading-8 text-slate-400">
            Osobné údaje používam len na vybavenie dopytu, komunikáciu o
            možnej spolupráci a nadväzujúcu prevádzkovú komunikáciu súvisiacu s
            vaším záujmom o služby TechBases.sk.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
          <h2 className="text-2xl font-semibold">Ako dlho údaje uchovávam</h2>
          <p className="mt-4 leading-8 text-slate-400">
            Údaje uchovávam len po dobu potrebnú na vybavenie komunikácie alebo
            prípadnej spolupráce a následne len tak dlho, ako je to primerané
            vzhľadom na účel komunikácie a bežné prevádzkové potreby.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
          <h2 className="text-2xl font-semibold">Vaše práva</h2>
          <p className="mt-4 leading-8 text-slate-400">
            Máte právo požiadať o prístup k údajom, ich opravu, vymazanie alebo
            obmedzenie spracúvania, ak to povoľujú príslušné právne predpisy.
            Ak chcete uplatniť svoje práva, napíšte na kontakt@techbases.sk.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
          <h2 className="text-2xl font-semibold">Doplňujúca poznámka</h2>
          <p className="mt-4 leading-8 text-slate-400">
            Na webe momentálne nie je registračný systém ani kontaktný formulár.
            Akékoľvek údaje mi poskytujete najmä cez e-mailový alebo telefonický
            kontakt z vašej iniciatívy.
          </p>
        </div>
      </section>
    </main>
  );
}

