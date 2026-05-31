'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PhoneIcon } from './contact-icons';
import { navLinks } from '../site-data';

export function SiteHeader() {
  const pathname = usePathname();
  const visibleNavLinks = navLinks.filter((item) => item.href !== '/kontakt');

  const isActive = (href: string) => {
    const baseHref = href.split('#')[0];

    if (href.includes('#')) {
      return false;
    }

    if (baseHref === '/') {
      return pathname === '/';
    }

    return pathname === baseHref || pathname.startsWith(`${baseHref}/`);
  };

  return (
    <header className="relative overflow-hidden border-b border-[rgba(64,120,180,0.22)] bg-[rgba(3,8,24,0.94)] shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-[14px] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[linear-gradient(90deg,transparent,rgba(0,132,255,0.8),transparent)]">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-2.5 px-5 py-2.5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex shrink-0 items-center self-start lg:self-center">
          <img
            src="/techbase-logo-v2.png"
            alt="TechBases logo"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        <div className="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:gap-4">
          <nav className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/8 bg-slate-950/35 p-1 shadow-inner shadow-black/25">
            {visibleNavLinks.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={[
                    'relative rounded-lg border px-3 py-1.5 text-sm font-medium transition',
                    'before:absolute before:inset-x-3 before:-bottom-px before:h-px before:rounded-full before:transition',
                    active
                      ? 'border-blue-400/45 bg-blue-500/10 text-white shadow-[0_0_20px_rgba(0,132,255,0.12)] before:bg-blue-400/85'
                      : 'border-transparent text-slate-300/85 before:bg-transparent hover:border-slate-400/15 hover:bg-slate-800/45 hover:text-white hover:before:bg-blue-400/45',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="tel:+421948684756"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-500/18 bg-slate-900/35 px-3 py-1.5 text-sm font-medium text-slate-200/85 transition hover:border-blue-400/35 hover:bg-blue-500/8 hover:text-white"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-blue-200/75" />
              +421 948 684 756
            </a>
            <Link
              href="/kontakt"
              aria-current={pathname === '/kontakt' ? 'page' : undefined}
              className="rounded-lg bg-[linear-gradient(135deg,#1479ff,#005fd1)] px-4 py-1.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(0,102,255,0.28)] transition hover:brightness-110"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
