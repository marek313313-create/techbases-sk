'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { PhoneIcon } from './contact-icons';
import { navLinks, type NavLink } from '../site-data';

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const visibleNavLinks = navLinks.filter((item) => item.href !== '/kontakt');

  const matchesPath = (baseHref: string) =>
    pathname === baseHref || pathname.startsWith(`${baseHref}/`);

  const isActive = ({ href, activePaths = [] }: NavLink) => {
    const baseHref = href.split('#')[0];

    if (href.includes('#')) {
      return false;
    }

    if (baseHref === '/') {
      return pathname === '/';
    }

    return matchesPath(baseHref) || activePaths.some(matchesPath);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      // Focus trap: Tab cykluje vnútri otvoreného menu
      if (event.key === 'Tab') {
        const focusable = menuPanelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );

        if (!focusable || focusable.length === 0) {
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    // html má overflow-x: hidden, preto posúvanie stránky riadi html, nie body
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }

  return (
    <>
      <header className="relative overflow-hidden border-b border-[rgba(64,120,180,0.22)] bg-[rgba(3,8,24,0.94)] shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-[14px] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[linear-gradient(90deg,transparent,rgba(0,132,255,0.8),transparent)]">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-2.5 sm:px-6">
          <Link href="/" className="flex shrink-0 items-center rounded-lg">
            <img
              src="/techbase-logo-v2.webp"
              alt="TechBases.sk – úvodná stránka"
              width={347}
              height={112}
              decoding="async"
              className="h-12 w-auto object-contain sm:h-14"
            />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <nav
              aria-label="Hlavná navigácia"
              className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/8 bg-slate-950/35 p-1 shadow-inner shadow-black/25"
            >
              {visibleNavLinks.map((item) => {
                const active = isActive(item);

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

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/kontakt"
              aria-current={pathname === '/kontakt' ? 'page' : undefined}
              className="rounded-lg bg-[linear-gradient(135deg,#1479ff,#005fd1)] px-4 py-1.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(0,102,255,0.28)] transition hover:brightness-110"
            >
              Kontakt
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-500/18 bg-slate-900/35 text-slate-200 transition hover:border-blue-400/35 hover:bg-blue-500/8 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            ref={menuPanelRef}
            className="absolute right-0 top-0 flex h-full w-72 max-w-[85%] flex-col gap-6 overflow-y-auto border-l border-slate-800 bg-slate-950 p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Menu
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeMenu}
                aria-label="Zavrieť menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-xl text-slate-200 transition hover:border-blue-400 hover:bg-slate-900"
              >
                ×
              </button>
            </div>

            <nav aria-label="Hlavná navigácia" className="grid gap-1.5">
              {[{ href: '/', label: 'Úvod' }, ...visibleNavLinks].map((item) => {
                const active = isActive(item);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={[
                      'rounded-lg border px-4 py-3 text-base font-medium transition',
                      active
                        ? 'border-blue-400/45 bg-blue-500/10 text-white'
                        : 'border-transparent text-slate-300/85 hover:bg-slate-800/45 hover:text-white',
                    ].join(' ')}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/kontakt"
                aria-current={pathname === '/kontakt' ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-lg bg-[linear-gradient(135deg,#1479ff,#005fd1)] px-4 py-3 text-center text-base font-semibold text-white shadow-[0_14px_32px_rgba(0,102,255,0.28)] transition hover:brightness-110"
              >
                Kontakt
              </Link>
            </nav>

            <a
              href="tel:+421948684756"
              className="mt-auto inline-flex items-center gap-2 rounded-lg border border-slate-500/18 bg-slate-900/35 px-4 py-3 text-sm font-medium text-slate-200/85 transition hover:border-blue-400/35 hover:bg-blue-500/8 hover:text-white"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-blue-200/75" />
              +421 948 684 756
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
