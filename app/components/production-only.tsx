'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

// Návrh V2 (/v2) má vlastnú hlavičku, pätičku a štýly. Prvky pôvodného webu
// sa na jeho trasách nevykreslia, inde sa nič nemení.
export function isV2Path(pathname: string | null) {
  return pathname === '/v2' || Boolean(pathname?.startsWith('/v2/'));
}

export function ProductionOnly({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return isV2Path(pathname) ? null : children;
}
