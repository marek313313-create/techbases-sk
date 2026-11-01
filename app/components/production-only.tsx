'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

// Trasy v app/(v2) – úvod a realizácie – majú vlastnú hlavičku, pätičku a štýly.
// Prvky pôvodného webu sa na nich nevykreslia, ostatné stránky sa nemenia.
export function isV2Path(pathname: string | null) {
  return pathname === '/' || Boolean(pathname?.startsWith('/realizacie/'));
}

export function ProductionOnly({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return isV2Path(pathname) ? null : children;
}
