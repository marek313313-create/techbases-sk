import type { Metadata } from 'next';
import { ContactForm } from '../components/contact-form';
import { MailIcon, PhoneIcon } from '../components/contact-icons';
import { InquiryCard } from '../components/inquiry-card';
import { MiniLogoBullet } from '../components/mini-logo-bullet';
import { contactEmail, generalMailto } from '../site-data';

export const metadata: Metadata = {
  title: {
    absolute: 'Kontakt | TechBases.sk',
  },
  description:
    'Pošlite dopyt na tvorbu webu alebo opis prevádzkového problému s ERP dátami. E-mail, telefón, WhatsApp aj kontaktný formulár.',
  alternates: {
    canonical: '/kontakt',
  },
};

const webQuestions = [
  'Čím sa zaoberáte alebo čo ponúkate?',
  'Máte už web alebo doménu?',
  'Aké podklady máte: texty, fotografie, logo, video?',
  'Pri ubytovaní: stačí, aby vám hostia poslali dopyt, alebo chcete automatickú rezerváciu?',
];

const whatToSend = [
  'Čo dnes hľadáte ručne?',
  'Z akých systémov alebo exportov dáta pochádzajú?',
  'Týka sa problém skladu, objednávok, výdajov, prestojov, plánovania alebo zostáv/kusovníkov?',
  'Kto by s výstupom pracoval?',
  'Ako často sa problém opakuje?',
];

const dataNotes = [
  'Prvý kontakt môže byť úplne stručný. Stačí aj pár viet alebo ukážka anonymizovaného exportu.',
  'Na začiatku riešime konkrétnu otázku, nie celý podnik naraz.',
  'TechBases nenahrádza ERP, WMS ani MES. Dopĺňa pracovný pohľad nad existujúcimi dátami.',
  'Typický začiatok je pilot jedného prevádzkového problému z dát, ktoré už máte k dispozícii.',
];

const dataExamples = [
  'Môžete napísať napríklad: máme export skladu, výdajov a objednávok. Chceme vedieť, čo chýba, čo je kritické a čo sa dlhodobo nehýbe.',
  'Ak problém súvisí so zostavou alebo kusovníkom, stačí popísať, ako dnes overujete dostupnosť dielov a potrebu objednania.',
];

function QuestionList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-6">
      <div className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
        {title}
      </div>
      <ul className="mt-3 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex flex-nowrap gap-3 leading-7 text-slate-300">
            <MiniLogoBullet />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="max-w-4xl">
        <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
          Kontakt
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Napíšte mi, aký web potrebujete alebo aký prevádzkový problém riešite
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Vyberte si, čo riešite. Na začiatok netreba veľké zadanie, stačí pár viet.
          Odpovedám osobne.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="tel:+421948684756"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-900"
          >
            <PhoneIcon />
            +421 948 684 756
          </a>
          <a
            href={generalMailto}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-900"
          >
            <MailIcon />
            {contactEmail}
          </a>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <InquiryCard topic="web" headingAs="h2">
          <QuestionList title="Čo mi napísať" items={webQuestions} />
        </InquiryCard>
        <InquiryCard topic="data" headingAs="h2">
          <QuestionList title="Stačia odpovede na 5 otázok" items={whatToSend} />
        </InquiryCard>
      </section>

      <section
        id="formular"
        tabIndex={-1}
        className="mt-16 rounded-2xl outline-none border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-slate-900 p-8 shadow-2xl md:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="kicker text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Bez e-mailového programu
            </div>
            <h2 className="mt-4 text-3xl font-bold">Poslať správu priamo z webu</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Ak vám nefunguje odkaz na e-mail alebo je to jednoduchšie, napíšte správu
              priamo tu. Príde na {contactEmail} a odpoveď dostanete na e-mail, ktorý
              uvediete.
            </p>
            <p className="mt-4 leading-8 text-slate-400">
              Neposielajte citlivé alebo kompletné firemné dáta. Na prvé posúdenie stačí
              opis problému — anonymizované ukážky exportov si dohodneme neskôr.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-10">
        <div className="kicker text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Prakticky
        </div>
        <h2 className="mt-4 text-2xl font-bold">Pri firemných nástrojoch a dátach</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {dataNotes.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-slate-950 p-5 leading-7 text-slate-300"
            >
              {item}
            </div>
          ))}
          {dataExamples.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-blue-500/25 bg-blue-500/10 p-5 leading-7 text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
