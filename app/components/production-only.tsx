'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

// Trasy v app/(v2) – úvod a realizácie – nemajú animácie RevealOnScroll, ktoré
// používa obsah ostatných stránok v pôvodnom vzhľade.
export function isV2Path(pathname: string | null) {
  return pathname === '/' || Boolean(pathname?.startsWith('/realizacie/'));
}

export function ProductionOnly({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return isV2Path(pathname) ? null : children;
}
