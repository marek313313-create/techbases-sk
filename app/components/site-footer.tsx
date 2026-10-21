import Link from 'next/link';
import { MailIcon, PhoneIcon, WhatsAppIcon } from './contact-icons';
import { contactEmail, generalMailto, whatsAppUrl } from '../site-data';

const footerLinkClassName = 'w-fit transition hover:text-white';

const serviceLinks = [
  { href: '/tvorba-webov', label: 'Tvorba webov' },
  { href: '/sluzby', label: 'Firemné nástroje a dáta' },
  { href: '/audit-erp-dat', label: 'Audit ERP dát' },
  { href: '/sluzby/sklad-nahradnych-dielov', label: 'Sklad náhradných dielov' },
];

const moreLinks = [
  { href: '/', label: 'Úvod' },
  { href: '/#realizacie', label: 'Realizácie' },
  { href: '/sluzby#ukazky-riesenia', label: 'Ukážky firemných nástrojov' },
  { href: '/poznamky', label: 'Poznámky z prevádzky' },
  { href: '/o-mne', label: 'O mne' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: '/ochrana-osobnych-udajov', label: 'Ochrana osobných údajov' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div>
          <Link
            href="/"
            className="text-lg font-semibold text-slate-100 transition hover:text-white"
          >
            TechBases.sk
          </Link>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
            Tvorba webov na mieru a firemné nástroje z dát pre údržbu, sklad, výrobu a
            plánovanie. Za značkou TechBases stojím ja, Marek Belko, a komunikujete priamo
            so mnou.
          </p>
        </div>
        <nav aria-label="Služby">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Služby
          </div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            {serviceLinks.map((item) => (
              <Link key={item.href} href={item.href} className={footerLinkClassName}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
        <nav aria-label="Ďalšie stránky">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Viac
          </div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            {moreLinks.map((item) => (
              <Link key={item.href} href={item.href} className={footerLinkClassName}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Kontakt
          </div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <a
              href={generalMailto}
              className={`inline-flex items-center gap-2 ${footerLinkClassName}`}
            >
              <MailIcon className="h-3.5 w-3.5" />
              {contactEmail}
            </a>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 ${footerLinkClassName}`}
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-[#25d366]" />
              WhatsApp: Napísať správu
              <span className="sr-only"> (otvorí sa nové okno)</span>
            </a>
            <a
              href="tel:+421948684756"
              className={`inline-flex items-center gap-2 ${footerLinkClassName}`}
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              +421 948 684 756
            </a>
            <span className="text-slate-400">Slovensko, spolupráca aj na diaľku</span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} TechBases.sk. Všetky práva vyhradené.</div>
          <div>Webové stránky na mieru · Firemné nástroje z dát</div>
        </div>
      </div>
    </footer>
  );
}
