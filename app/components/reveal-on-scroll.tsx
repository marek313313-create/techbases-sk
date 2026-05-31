'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>('main > section'));

    if (!targets.length) {
      return;
    }

    targets.forEach((target) => target.classList.add('reveal'));

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return;
    }

    document.documentElement.classList.add('motion-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
    };
  }, [pathname]);

  return null;
}

