import Link from 'next/link';
import { MailIcon, PhoneIcon, WhatsAppIcon } from './contact-icons';
import { whatsAppUrl } from '../site-data';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="text-lg font-semibold text-slate-100">TechBases.sk</div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
            Praktický pracovný pohľad nad ERP dátami pre výrobu, údržbu, sklad
            náhradných dielov a plánovanie prác.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Navigácia
          </div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <Link href="/">Domov</Link>
            <Link href="/sluzby">Služby</Link>
            <Link href="/#ukazky-riesenia">Ukážky</Link>
            <Link href="/poznamky">Poznámky</Link>
            <Link href="/o-mne">O mne</Link>
            <Link href="/kontakt">Kontakt</Link>
            <Link href="/ochrana-osobnych-udajov">Ochrana osobných údajov</Link>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Kontakt
          </div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <a href="mailto:kontakt@techbases.sk" className="inline-flex items-center gap-2">
              <MailIcon className="h-3.5 w-3.5" />
              E-mail: kontakt@techbases.sk
            </a>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-[#25d366]" />
              WhatsApp: Napísať správu
            </a>
            <a href="tel:+421948684756" className="inline-flex items-center gap-2">
              <PhoneIcon className="h-3.5 w-3.5" />
              Telefón: +421 948 684 756
            </a>
            <span className="text-slate-500">Slovensko, spolupráca aj na diaľku</span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} TechBases.sk. Všetky práva vyhradené.</div>
          <div>Pracovný pohľad pre údržbu, sklad a plánovanie prác</div>
        </div>
      </div>
    </footer>
  );
}
