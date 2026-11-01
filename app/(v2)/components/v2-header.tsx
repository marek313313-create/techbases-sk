'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const navItems = [
  { href: '/#ponuka', label: 'Tvorba webov' },
  { href: '/#realizacie', label: 'Realizácie' },
  { href: '/#spolupraca', label: 'Spolupráca' },
  { href: '/#o-mne', label: 'O mne' },
  { href: '/#kontakt', label: 'Kontakt' },
];

// Druhá špecializácia ostáva na existujúcej adrese pôvodného webu
const secondaryItem = { href: '/sluzby', label: 'Firemné nástroje' };

export function V2Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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

      // Focus trap: Tab cykluje medzi tlačidlom menu a odkazmi v paneli
      if (event.key === 'Tab') {
        const focusable = [
          menuButtonRef.current,
          ...(panelRef.current?.querySelectorAll<HTMLElement>('a[href]') ?? []),
        ].filter((element): element is HTMLElement => Boolean(element));
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

    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    panelRef.current?.querySelector<HTMLElement>('a[href]')?.focus();

    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="v2-header">
      <div className="v2-container v2-header-inner">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/techbase-logo-v2.webp"
            alt="TechBases.sk – úvodná stránka"
            width={347}
            height={112}
            decoding="async"
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav aria-label="Hlavná navigácia" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="v2-nav-link">
              {item.label}
            </Link>
          ))}
          <span aria-hidden="true" className="mx-2 h-5 w-px bg-white/15" />
          <Link href={secondaryItem.href} className="v2-nav-link v2-nav-secondary">
            {secondaryItem.label}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#dopyt" className="v2-btn v2-btn-primary v2-btn-small">
            Naceniť web
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="v2-menu"
            aria-label={menuOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-100 lg:hidden"
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

      {menuOpen ? (
        <div id="v2-menu" ref={panelRef} className="v2-menu-panel lg:hidden">
          <nav aria-label="Hlavná navigácia">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="v2-menu-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 grid gap-3">
            <Link
              href="/#dopyt"
              className="v2-btn v2-btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              Nezáväzne naceniť web
            </Link>
            <Link
              href={secondaryItem.href}
              className="v2-btn v2-btn-secondary"
              onClick={() => setMenuOpen(false)}
            >
              Firemné nástroje a dáta
            </Link>
            <a href="tel:+421948684756" className="v2-btn v2-btn-secondary">
              Zavolať +421 948 684 756
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
