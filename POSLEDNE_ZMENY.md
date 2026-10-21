# Posledné zmeny

Aktualizované: 2026-10-21

## Nasadené 2026-10-21 — dve služby pod jednou značkou

Worker `techbases-sk`, verzia `707ed18a-8975-4b71-85a8-f46d7dbee3ba`; predchádzajúca
verzia `4357e261-8b4d-4644-9eae-761322b6ff16` (návrat: `npx wrangler rollback`).
Next.js 15.5.15 už nemá oficiálnu podporu, OpenNext preto build bez prepínača
odmietne: `npx opennextjs-cloudflare build --dangerouslyUseUnsupportedNextVersion`
a potom `npx opennextjs-cloudflare deploy`. Prechod na Next 16 je samostatná úloha.

- Úvod (`app/page.tsx`) je rozcestník: nový hero, dve ponuky (Tvorba webov →
  `/tvorba-webov`, Firemné nástroje a dáta → `/sluzby`), sekcia `#realizacie`,
  spoločný postup, predstavenie autora a `#kontakt` s dvoma vstupmi.
- Nová predajná stránka `/tvorba-webov` (balík 500 – 1 200 €, postup, FAQ,
  dopyt vs. rezervácia, JSON-LD Service + FAQPage, vlastné OG).
- Priemyselný obsah z pôvodného úvodu (kontrola exportov, pilot, pred/po,
  ukážky `#ukazky-riesenia`, poznámky, FAQ + FAQPage JSON-LD) je presunutý na
  `/sluzby`. Starý odkaz `/#ukazky-riesenia` ostáva funkčný — na úvode má
  rovnaké `id` karta anonymizovaného pilotu s odkazom na `/sluzby#ukazky-riesenia`.
- Realizácie webov: `app/components/web-realizations.tsx` (Zrub pri Hrone – vo
  vývoji, OslovMa.sk – spustený web; typ a stav sa pri ňom zámerne nezobrazujú).
  Snímky obrazovky
  živých webov z 21. 10. 2026 v `public/realizacie/` (zdrojové PNG v `assets-src/`).
- Kontakt: `inquiryLinks` v `app/site-data.ts` (mailto s predvyplneným predmetom
  a telom + WhatsApp text pre web aj pre dáta), komponent `InquiryCard`.
  Formulár má voliteľnú tému (`web` / `data` / `ine`), predvyberie sa cez
  `/kontakt?tema=web#formular`; API ju pridá do predmetu e-mailu.
- Navigácia: Tvorba webov, Firemné nástroje, Realizácie, O mne, Kontakt;
  poznámky, ukážky, audit a sklad ND sú v pätičke. Mobilné menu má focus trap
  a položku Úvod. Pribudol skip link a globálny `:focus-visible`.
- Odstránené `app/sluzby/layout.tsx` a `app/audit-erp-dat/layout.tsx` — boli to
  šablónové root layouty z create-next-app, vnárali druhý `<html lang="en">`
  a spôsobovali hydration error.
- Mobil: `main .flex` sa zalamuje len bez triedy `flex-nowrap` (riadky ikona +
  text sa už nerozpadajú); video v hero je na úzkom displeji stlmené kvôli
  kontrastu textu.
- Meta/OG texty pre obe služby, nový `public/og-image.png`
  (`assets-src/make-og-image.mjs`), sitemap s `/tvorba-webov`.
- Root layout už nenastavuje OG/Twitter titulok, popis ani `og:url` — každá
  stránka ich preberá zo svojich metadát (predtým všetky hlásili úvod).
- Prístupnosť po revízii: ciele kotiev (`#realizacie`, `#formular`, `#dopyt`)
  prijímajú fokus, formulár presúva fokus na prvú chybu a na potvrdenie,
  mobilné menu zamyká posúvanie cez `html`, kontrastnejší skip link a
  fokus WhatsApp tlačidla, všeobecné mailto má predmet (`generalMailto`).
- Ochrana osobných údajov: opravená nepravdivá veta, že web nemá kontaktný
  formulár (doplnený formulár a Resend) — na kontrolu autorom.

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
