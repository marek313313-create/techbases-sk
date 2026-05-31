import type { Metadata } from 'next';
import { MailIcon, PhoneIcon } from '../components/contact-icons';
import { whatsAppUrl } from '../site-data';

export const metadata: Metadata = {
  title: {
    absolute: 'Kontakt | TechBases.sk',
  },
  description:
    'Pošlite opis problému alebo ukážku exportu. Overenie pilotného pracovného pohľadu nad ERP dátami pre údržbu, sklad alebo výrobu.',
  alternates: {
    canonical: '/kontakt',
  },
};

const whatToSend = [
  'Čo dnes hľadáte ručne?',
  'Z akých systémov alebo exportov dáta pochádzajú?',
  'Týka sa problém skladu, objednávok, výdajov, prestojov, plánovania alebo zostáv/kusovníkov?',
  'Kto by s výstupom pracoval?',
  'Ako často sa problém opakuje?',
];

function MiniLogoBullet() {
  return (
    <img
      src="/mini-logo.png"
      alt=""
      aria-hidden="true"
      className="mt-1 h-5 w-5 shrink-0 rounded object-cover"
    />
  );
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
            Kontakt
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Máte dáta, ale odpovede stále skladáte ručne?
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Pošlite krátky opis problému alebo ukážku exportu. Na začiatok netreba
            veľké zadanie. Stačí vedieť, aké dáta máte, kto s nimi pracuje a akú
            odpoveď dnes hľadáte príliš dlho.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4">
            <a
              href="mailto:kontakt@techbases.sk"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
            >
              <MailIcon />
              Opísať problém
            </a>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              Poslať ukážku exportu
            </a>
            <a
              href="tel:+421948684756"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-900"
            >
              <PhoneIcon />
              +421 948 684 756
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Prakticky
          </div>
          <div className="mt-5 grid gap-4 text-slate-300">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              Prvý kontakt môže byť úplne stručný. Stačí aj pár viet alebo ukážka
              anonymizovaného exportu.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              Na začiatku riešime konkrétnu otázku, nie celý podnik naraz.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              TechBases nenahrádza ERP, WMS ani MES. Dopĺňa pracovný pohľad nad
              existujúcimi dátami.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              Typický začiatok je pilot jedného prevádzkového problému z dát, ktoré
              už máte k dispozícii.
            </div>
            <div className="rounded-xl border border-blue-500/25 bg-blue-500/10 p-5">
              Môžete napísať napríklad: máme export skladu, výdajov a objednávok.
              Chceme vedieť, čo chýba, čo je kritické a čo sa dlhodobo nehýbe.
            </div>
            <div className="rounded-xl border border-blue-500/25 bg-blue-500/10 p-5">
              Ak problém súvisí so zostavou alebo kusovníkom, stačí popísať, ako
              dnes overujete dostupnosť dielov a potrebu objednania.
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-10">
        <h2 className="text-3xl font-bold">Stačí poslať odpovede na 5 otázok</h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          Bez zadania, bez prezentácie, bez prípravy. Stačí stručne opísať, kde
          dnes vzniká ručné dohľadávanie.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {whatToSend.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950 p-5 leading-7 text-slate-300"
            >
              <MiniLogoBullet />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
