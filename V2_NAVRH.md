# Návrh V2 – interné poznámky

Stav k 1. 11. 2026: návrh na posúdenie na vetve `v2-navrh`. **Nenasadený.**
Pôvodný web (produkcia) ostáva bez zmeny.

## Ako otvoriť

    npm run dev

- http://localhost:3000/v2 – hlavná stránka V2
- http://localhost:3000/v2/porovnanie – odkazy na obe verzie a prehľad zmien
- http://localhost:3000/v2/realizacie/zrub-pri-hrone, `/oslovma`, `/prevadzkove-prehlady` – detaily

## Obsah V2

Hlavná stránka predáva tvorbu webov; firemné nástroje majú stručnú sekciu a odkaz na
existujúcu stránku `/sluzby`. Poradie: hero s ukážkou Zrubu pri Hrone → realizácie →
čo dostanete (základ vs. nie je v cene) → 5 krokov spolupráce → Marek Belko → cena
a starostlivosť po spustení → firemné nástroje → dopyt s formulárom.

Ceny sú rovnaké ako na produkcii: prezentačný web 500 – 1 200 €, pilot 1 200 – 2 500 €.
Modelový rozpočet 1 500 € zo zadania V2 nie je schválená cena a na webe nie je.

### Korekčný prechod (1. 11. 2026)

- **Tmavé náhľady** na snímkach 13, 15 a 17 neboli chybou webu. V živom prehliadači sa po
  odscrollovaní vykreslia všetky (overené na desktope aj mobile). Pri snímke celej stránky
  naraz Chrome nevykreslil obrázky ďaleko mimo okna. Nové snímky sa robia po vynútenom
  dekódovaní (`img.decoding = 'sync'`, `await img.decode()`).
- **Úvod je kratší:** realizácie majú len veľkú ukážku, krátky opis prínosu (`highlight`
  v `projects.ts`) a odkaz na detail; zadanie, riešenie a výsledok sú len v detailoch.
  Dodávka je dvojica porovnateľných zoznamov, spolupráca má päť krokov po jednej vete,
  podpora po spustení je v rozbaľovacích položkách so základnou odpoveďou viditeľnou hneď.
  Anonymizovaný pilot je len v sekcii firemných nástrojov (nie dvakrát).
- **Mobil:** kratší úvodný opis, „Pozrieť realizácie“ je textový odkaz, cena sa v hero
  ukazuje len od 640 px, menšie rozostupy. Ukážka Zrubu je celá na prvej obrazovke
  (začína na 464 px pri 390 × 844, predtým ~630 px). Formulár je hneď pod nadpisom kontaktu.
- **Dĺžka:** mobil 390 px 15 557 → 10 182 px, desktop 1440 px 11 143 → 8 456 px.
- Odstránená obhajujúca veta „Ukazujem len skutočné projekty…“; pravdivosť nesú
  štítky pri projektoch (Klientska zákazka, Vlastný produkt, Anonymizovaný pilot).

## Technické riešenie a izolácia

- Všetko pre V2 je v `app/v2/` (layout, stránky, komponenty, `projects.ts`, `v2.css`).
- `v2.css`: všetky pravidlá sú pod triedou `.v2`, takže po klientskej navigácii na pôvodný
  web nič nepresakuje. `html:has(.v2)` mení `overflow-x` na `clip`, inak by globálne
  `overflow-x: hidden` vyplo sticky hlavičku.
- Písmo tela V2 je Inter (`next/font`), nadpisy ostávajú Space Grotesk.
- `app/components/production-only.tsx`: na `/v2` sa nevykreslí hlavička, pätička, skip link
  ani `RevealOnScroll` pôvodného webu (V2 nemá animácie odďaľujúce obsah).
- `app/globals.css`: mobilné pravidlá pre `main` platia len pre `main:not(:where(.v2-main))`.
  `:where` zachováva špecificitu, pôvodný web sa správa rovnako (overené: H1 35 px pri 390 px).
- `noindex, nofollow` (aj `googlebot`) v `app/v2/layout.tsx`, vlastný canonical na každej
  stránke, V2 nie je v sitemap.
- `/api/kontakt` má nový `GET` → `{ sending: boolean }` (či je nastavený `RESEND_API_KEY`,
  hodnotu nevracia). Formulár V2 podľa toho pravdivo upozorní, že nič neodošle. `POST`
  je bez zmeny – rovnaká validácia, honeypot, téma „Tvorba webu“.
- Snímky: `public/v2/*.webp` (spolu ~650 kB, načítavajú sa postupne).
  Zdroje: `E:\Marek (Dev)\Zrubprihrone-showcase\audit` (živý web 28. 10. 2026),
  OslovMa.sk nasnímané 1. 11. 2026 (`assets-src/v2/`), portrét `assets-src/profilovka.png`.

## Rozhodnutia pred produkčným nasadením

Web tieto body zámerne formuluje neutrálne („dohodneme v ponuke“). Treba rozhodnúť:

1. **Oprava chyby v dodávke po spustení** – bezplatne? Do kedy? Teraz: „spôsob riešenia uvediem v cenovej ponuke“.
2. **Zálohovanie** – ponúkať ako službu? Teraz: „závisí od hostingu, ujasníme pri výbere“.
3. **Prístupy a vlastníctvo** – na koho budú doména a hosting, odovzdáva sa zdrojový kód a prístupy?
4. **Redakčný systém (CMS)** – ponúkať ako doplnok? Za akú cenu?
5. **Dopytový formulár** – je v základnej cene, alebo doplnok? Teraz: „ak je súčasťou dohodnutého rozsahu“.
6. **Doplnky** – ďalšie podstránky, jazykové verzie, tvorba textov: orientačné ceny?
7. **Platobné podmienky a termíny** – zatiaľ sa nezverejňujú.
8. **OslovMa.sk** – V2 ho podľa zadania V2 označuje „Vlastný produkt · Webová aplikácia“.
   Na produkcii je označenie skryté podľa skoršieho pokynu. Podmienky na oslovma.sk
   stále uvádzajú „bezplatný projekt v skúšobnej prevádzke“.
9. **Zrub pri Hrone** – V2: „Spustený web, priebežne dopĺňaný“ (produkcia: „Vo vývoji“).
10. **Druhá špecializácia** – V2 odkazuje na existujúcu `/sluzby` (iný vizuál). Pri prechode
    na V2 treba rozhodnúť, či sa `/sluzby` prerobí do nového vizuálu.

## Chýbajúce podklady

- **Archív údržby** – nepoužitý. `prezentacia/` je pripravená pre vedenie a obsahuje interné
  údaje vrátane mien; `Prt/` (ukážkové dáta) obsahuje mená, kódy agregátov a prihláseného
  administrátora. Na verejnú prezentáciu treba súhlas zamestnávateľa a anonymizovanú sadu
  obrazoviek (demo databáza bez mien, kódov a interných popisov). Kým nie je, V2 ukazuje
  anonymizované prevádzkové prehľady, ktoré už sú verejne na techbases.sk.
- **SURIQ / Surovec (suriq.sk)** – nezaradené. Návrh z 29. 10. 2026 beží len ako neverejný
  náhľad, značka sa strieda (SURIQ vs. Surovec), fotografia je ilustračná a v podkladoch
  chýba súhlas majiteľa so zverejnením.
- **Hodnotenie majiteľa Zrubu pri Hrone o spolupráci** – najvyššia priorita z chýbajúcich
  podkladov. Treba jeho vlastné slová a súhlas so zverejnením (meno alebo len „majiteľ“).
  Kým nie je, V2 žiadnu citáciu nepoužíva. Anonymizovaný citát z pilotu ostáva len na `/sluzby`.
- **Portrét** – súčasná fotografia je dramatická (čiernobiela, polovica tváre v tieni). Pre
  obchodnú prezentáciu by bola vhodnejšia prirodzene osvetlená fotografia; nižšia priorita
  ako hodnotenie majiteľa.
- **Video Zrubu (showcase)** – pracovná verzia na schválenie, otvorené práva k hudbe; nepoužité.

## Technické poznámky

- Favicon `/mini-logo.png` má 184 kB (aj na pôvodnom webe) – nahradiť menším súborom.
- Next.js 15 je bez podpory; build pre Cloudflare potrebuje `--dangerouslyUseUnsupportedNextVersion`.
- Ak sa V2 stane hlavným webom: presunúť obsah z `/v2` na `/`, odstrániť `noindex`
  a `ProductionOnly`, zjednotiť štýly, upraviť sitemap a interné odkazy `/v2#…`.

## Vykonané kontroly (1. 11. 2026)

- `npm run build`, `npm run lint`, `tsc --noEmit`, Prettier na nových súboroch – OK.
- Prehliadač (Chrome, produkčný build): 1440 × 900, 1024 × 768 a 390 × 844 vizuálne;
  360 a 390 px bez horizontálneho pretekania na 5 stránkach V2 a 4 pôvodných.
- `noindex, nofollow` a canonical na V2; pôvodné stránky `index, follow` s vlastnou hlavičkou.
- Klientsky prechod z V2 na `/`: vráti sa pôvodná hlavička/pätička, `overflow-x: hidden`,
  systémové písmo – bez presakovania.
- Mobilné menu V2: fokus, cyklus Tab/Shift+Tab, Escape s návratom fokusu, zámok posúvania,
  kotvy končia pod sticky hlavičkou.
- Formulár: lokálne `GET /api/kontakt` → `sending: false`, zobrazí sa upozornenie; žiadna
  skúšobná správa nebola odoslaná.
- Konzola bez chýb (okrem beaconu Cloudflare Analytics, ktorý blokuje lokálny antivírus).
