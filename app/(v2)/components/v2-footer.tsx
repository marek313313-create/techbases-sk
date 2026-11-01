import Link from 'next/link';
import { generalMailto, whatsAppUrl } from '../../site-data';

const pageLinks = [
  { href: '/#ponuka', label: 'Tvorba webov' },
  { href: '/#realizacie', label: 'Realizácie' },
  { href: '/#spolupraca', label: 'Spolupráca' },
  { href: '/#o-mne', label: 'O mne' },
  { href: '/#cena', label: 'Cena a starostlivosť' },
  { href: '/#kontakt', label: 'Kontakt' },
];

const moreLinks = [
  { href: '/sluzby', label: 'Firemné nástroje a dáta' },
  { href: '/poznamky', label: 'Poznámky z prevádzky' },
  { href: '/ochrana-osobnych-udajov', label: 'Ochrana osobných údajov' },
];

export function V2Footer() {
  return (
    <footer className="v2-footer v2-dark border-t border-white/10">
      <div className="v2-container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img
            src="/techbase-logo-v2.webp"
            alt="TechBases.sk"
            width={347}
            height={112}
            loading="lazy"
            decoding="async"
            className="h-10 w-auto"
          />
          <p className="v2-muted v2-small mt-4 max-w-xs">
            Webové stránky na mieru a firemné nástroje z dát. Za TechBases stojím ja,
            Marek Belko.
          </p>
        </div>
        <nav aria-label="Stránka">
          <div className="v2-label-caps">Stránka</div>
          <ul className="mt-4 grid gap-2.5 text-[0.9375rem]">
            {pageLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Ďalšie stránky">
          <div className="v2-label-caps">Viac</div>
          <ul className="mt-4 grid gap-2.5 text-[0.9375rem]">
            {moreLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <div className="v2-label-caps">Kontakt</div>
          <ul className="mt-4 grid gap-2.5 text-[0.9375rem]">
            <li>
              <a href="tel:+421948684756">+421 948 684 756</a>
            </li>
            <li>
              <a href={generalMailto}>kontakt@techbases.sk</a>
            </li>
            <li>
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp<span className="sr-only"> (otvorí sa nové okno)</span>
              </a>
            </li>
          </ul>
          <p className="v2-muted v2-small mt-4">Slovensko, spolupráca aj na diaľku</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="v2-container v2-muted v2-small flex flex-col gap-2 py-5 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} TechBases.sk</span>
          <span>Webové stránky na mieru · Firemné nástroje z dát</span>
        </div>
      </div>
    </footer>
  );
}
