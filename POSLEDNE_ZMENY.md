# Posledné zmeny

Aktualizované: 2026-07-06

## Najnovšie commity

0. Séria 2026-07-06 — výkon, SEO, formulár, UX, poriadok v repe
   - obrázky konvertované na WebP (~15 MB → ~1,1 MB), ASCII názvy, lazy loading
   - SEO: zaradený osirotený článok, noindex na placeholder poznámky,
     dateModified per poznámka, vlastný OG obrázok 1200×630
   - Cloudflare Web Analytics (čaká na token — viď TODO.md)
   - kontaktný formulár na /kontakt + /api/kontakt cez Resend (čaká na API kľúč)
   - mobilné hamburger menu, focus trap v lightboxe, video rešpektuje
     prefers-reduced-motion
   - ESLint + Prettier, bezpečnostné hlavičky, zdrojové grafiky v assets-src/
   - manuálne kroky: TODO.md

1. `ff3b485` - Update contact email to kontakt@techbases.sk
   - `app/page.tsx`
   - zmena kontaktného e-mailu na `kontakt@techbases.sk`

2. `17af33c` - Fix Slovak text encoding on homepage
   - `app/page.tsx`
   - oprava kódovania textov (správna slovenčina/UTF-8)

3. `404904c` - Use versioned header logo asset to bypass cache
   - `app/page.tsx`
   - `public/techbase-logo-v2.png`
   - použitie verziovaného loga kvôli cache

4. `7b1697c` - Fix public logo filename for header
   - `public/techbase-logo.png`
   - oprava názvu súboru loga pre hlavičku

5. `8367338` - Update header logo and add SEO metadata/robots/sitemap
   - `app/layout.tsx`
   - `app/page.tsx`
   - `app/robots.ts`
   - `app/sitemap.ts`
   - nové SEO metadata, robots a sitemap + úpravy hlavičky

## Poznámka

Po každej novej úprave môžeme tento súbor doplniť o ďalší commit.
