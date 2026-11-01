import Link from 'next/link';
import type { ReactNode } from 'react';
import { MailIcon, WhatsAppIcon } from './contact-icons';
import { inquiryLinks, type InquiryTopic } from '../site-data';

const inquiryContent: Record<
  InquiryTopic,
  {
    kicker: string;
    title: string;
    text: string;
    mailLabel: string;
    detailHref: string;
    detailLabel: string;
  }
> = {
  web: {
    kicker: 'Tvorba webov',
    title: 'Dopyt na web',
    text: 'Pre firmu, živnostníka, ubytovanie aj osobný projekt. Napíšte, čím sa zaoberáte, či už máte web alebo doménu a aké podklady máte k dispozícii.',
    mailLabel: 'Poslať dopyt e-mailom',
    detailHref: '/#ponuka',
    detailLabel: 'Čo obsahuje tvorba webu',
  },
  data: {
    kicker: 'Firemné nástroje a dáta',
    title: 'Opis prevádzkového problému',
    text: 'Pre údržbu, sklad, výrobu a plánovanie. Napíšte, čo dnes hľadáte ručne a z akých systémov alebo exportov dáta pochádzajú.',
    mailLabel: 'Opísať problém e-mailom',
    detailHref: '/sluzby',
    detailLabel: 'Ako pracujem s firemnými dátami',
  },
};

type InquiryCardProps = {
  topic: InquiryTopic;
  headingAs?: 'h2' | 'h3';
  showDetailLink?: boolean;
  children?: ReactNode;
};

export function InquiryCard({
  topic,
  headingAs: Heading = 'h3',
  showDetailLink = true,
  children,
}: InquiryCardProps) {
  const content = inquiryContent[topic];
  const links = inquiryLinks[topic];

  return (
    <div className="flex h-full flex-col rounded-2xl border border-blue-400/25 bg-gradient-to-br from-blue-600/10 to-slate-900 p-6 shadow-xl md:p-8">
      <div className="kicker text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
        {content.kicker}
      </div>
      <Heading className="mt-3 text-2xl font-bold">{content.title}</Heading>
      <p className="mt-3 leading-7 text-slate-300">{content.text}</p>
      {children}
      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <a
          href={links.mailto}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
        >
          <MailIcon />
          {content.mailLabel}
        </a>
        <a
          href={links.whatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <WhatsAppIcon className="h-4 w-4 text-[#25d366]" />
          WhatsApp
          <span className="sr-only"> (otvorí sa nové okno)</span>
        </a>
      </div>
      {showDetailLink ? (
        <Link
          href={content.detailHref}
          className="mt-5 inline-flex w-fit text-sm font-medium text-blue-200 underline decoration-blue-400/40 underline-offset-4 transition hover:text-white hover:decoration-blue-300"
        >
          {content.detailLabel} →
        </Link>
      ) : null}
    </div>
  );
}
