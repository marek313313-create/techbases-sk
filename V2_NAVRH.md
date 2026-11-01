# Návrh V2 – interné poznámky

Stav k 1. 11. 2026: návrh na posúdenie na vetve `v2-navrh`. **Nenasadený.**
Pôvodný web (produkcia) ostáva bez zmeny.

## Ako otvoriť

    npm run dev

- http://localhost:3000/v2 – hlavná stránka V2
- http://localhost:3000/v2/porovnanie – odkazy na obe verzie a prehľad zmien
- http://localhost:3000/v2/realizacie/zrub-pri-hrone, `/oslovma`, `/prevadzkove-prehlady` (Techbases),
  `/archiv-udrzby` – detaily

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
  štítky pri projektoch (Klientska zákazka, Vlastný produkt, Interný nástroj).

### Obsah a firemné nástroje (1. 11. 2026, druhý prechod)

- **Dopytový formulár:** jednoduchý dopytový formulár je v základnej dodávke („kontaktné
  údaje a jednoduchý dopytový formulár“). Rozšírené formuláre, rezervácie a platby sú
  samostatný rozsah: v zozname „Dohodneme osobitne“, v „Od čoho cena závisí“ aj v otázke
  „Nová požiadavka alebo zmena obsahu“. Ceny sa nemenili.
- **Podpora po spustení:** potvrdené pravidlá sú sformulované konkrétne, nepotvrdené
  neutrálne (pozri nižšie). Žiadne nové záruky, reakčné časy ani lehoty.
- **Firemné nástroje:** staré ukážky z `/ukazky/*` už V2 nepoužíva. Sekcia na úvode ukazuje
  graf prestojov zo skutočnej desktopovej aplikácie Techbases a pod ním kompaktne mobilnú
  aplikáciu Archív údržby s vlastným štítkom. Detail `/prevadzkove-prehlady` má tri snímky
  Techbases, nový detail `/archiv-udrzby` tri snímky z telefónu.
- **Štítky:** obe aplikácie sú „Interný nástroj“ (produkcia ich opisuje ako „interný
  pracovný pohľad“ / „interný portál“), nie klientska zákazka ani pilot pre klienta.
  Techbases a Archív údržby sú označené samostatne. Spoločný systém nie je overený, Archív
  len preberá katalóg výkresov zo súborov Techbases (README Archívu), preto ich web nespája.

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
- Snímky: `public/v2/*.webp` (spolu ~1,2 MB, načítavajú sa postupne).
  Zdroje: `E:\Marek (Dev)\Zrubprihrone-showcase\audit` (živý web 28. 10. 2026),
  OslovMa.sk nasnímané 1. 11. 2026 (`assets-src/v2/`), portrét `assets-src/profilovka.png`,
  firemné nástroje `assets-src/v2/firemne-nastroje/` (anonymizované PNG; `assets-src/` je
  v `.gitignore`).
- `projects.ts` má pole `service` (`web` / `data`): detail podľa neho volí nadpis funkcií,
  výzvu a odkaz späť. Projekt bez desktopových snímok ukáže mobilné snímky hneď v úvode.

## Snímky firemných nástrojov (1. 11. 2026)

| Súbor (`public/v2/`)                | Rozmer              | Kde je použitý                                                       |
| ----------------------------------- | ------------------- | -------------------------------------------------------------------- |
| `techbases-prestoje.webp`           | 1600 × 1044, 106 kB | úvod `/v2#firemne-nastroje`, detail `/prevadzkove-prehlady` (Ukážky) |
| `techbases-prehlad-poloziek.webp`   | 1600 × 1044, 142 kB | detail `/prevadzkove-prehlady` (úvodná snímka)                       |
| `techbases-vydaje-materialu.webp`   | 1600 × 1044, 139 kB | detail `/prevadzkove-prehlady` (Ukážky)                              |
| `archiv-udrzby-karta-agregatu.webp` | 540 × 1147, 39 kB   | úvod `/v2#firemne-nastroje` (telefón), detail `/archiv-udrzby`       |
| `archiv-udrzby-prehlad.webp`        | 540 × 1147, 33 kB   | detail `/archiv-udrzby`                                              |
| `archiv-udrzby-historia.webp`       | 540 × 1147, 43 kB   | detail `/archiv-udrzby`                                              |

PNG zdroje (2880 × 1880 a 1080 × 2294) sú v `assets-src/v2/firemne-nastroje/` pod rovnakými
názvami. Každá snímka má spodný pás „Anonymizované ukážkové údaje · …“. Alt texty a popisy
sú v `projects.ts` a opisujú len funkcie viditeľné na snímke.

**Techbases (desktop, verzia 1.1.7):** nainštalovaná aplikácia nemá ukážkový režim. Rozhranie
sa zobrazilo v prehliadači cez zdokumentovanú záložnú cestu (`MIGRATION-CLOUDFLARE.md`):
lokálny statický server len na čítanie (GET/HEAD, 127.0.0.1) nad nainštalovaným priečinkom.
Nič sa nezapisovalo do aplikácie ani do dát, aplikácia sa nespúšťala s novými parametrami.
Obrazovky: Interný prehľad položiek, Výdaje materiálu, Prestoje.

**Archív údržby (mobil, `sk.archivudrzby.mobil` 0.1.0):** telefón cez USB ADB s konkrétnym
ID zariadenia. Iba otvorenie aplikácie a navigácia (Prehľad → Agregáty → karta agregátu →
posun na technickú históriu). Karta je podľa aplikácie „iba na čítanie“. Bez inštalácie,
bez bezdrôtového ADB, bez zmeny nastavení telefónu. Obrazovka sa počas snímania udržiavala
zapnutá klávesom WAKEUP, časový limit telefónu ostal nezmenený. Snímky sa prenášali binárne
(`adb exec-out screencap -p` v Bash), hlavička PNG overená.

**Anonymizácia (bez zverejnenia pôvodných údajov):** texty sa nahradili priamo v zobrazení
(DOM) pred snímkou. V Archíve cez ladiaci soket WebView presmerovaný cez USB, ktorý sa
po snímaní zrušil. Nahradené boli len zobrazené texty, nie dáta, a bez udalostí formulára.
Náhrady sú konzistentné v rámci snímky a zjavne ukážkové:

- kódy agregátov → `AG01…`, názvy zariadení → `ZARIADENIE A…` / `Zariadenie A…`,
  strediská a nákladové strediská → `Prevádzka A`, `NS-01`, kód prevádzky v názve opravy → `P01`;
- názvy dielov → všeobecné názvy (Ložisko 6205 2RS…), uzly → všeobecné uzly, JKPOV → `TB-0001…`,
  uložné miesta → `Regál A-01…`;
- doklady, žiadanky, zákazky, objednávky, čísla porúch a prác → `DOK-`, `ŽIAD-`, `ZÁK-`, `OBJ-`,
  `PO-`, `PR-` s poradovým číslom; dodávatelia → `Dodávateľ A…`; kódy príčin → `K01 – …`;
- mená, majstri a iniciály používateľa → `Technik 01`, `Majster 01`, `T1`;
- voľné poznámky k zásahom → všeobecné ukážkové texty;
- sumy v € prepočítané koeficientom a dopočítané tak, aby súčty sedeli;
- cesty k súborom a zdroj dát → „anonymizované ukážkové dáta“, bubliny (`title`) odstránené;
- stavový riadok s notifikáciami a navigačná lišta telefónu odrezané.
  QR ani čiarové kódy sa na vybraných obrazovkách nenachádzajú. Kontrola: vzory interných kódov
  v celom DOM (aj v skrytých častiach a atribútoch) bez nálezu, zoznam mien v DOM po náhrade bez
  osôb, potom vizuálna kontrola každej snímky v plnom rozlíšení a výrezov pri zväčšení.

Surové zábery s internými údajmi sú iba v dočasnom pracovnom priečinku mimo repozitára
(`%TEMP%\claude\…\scratchpad`). Nie sú v `public/`, v `assets-src/` ani v Gite; po
odsúhlasení ich možno zmazať.

## Podpora a odovzdanie – čo je potvrdené

Overené zdroje: produkčná stránka `/tvorba-webov` (balík a otázky). `public/TechBases_podmienky_v2.pdf`
je pracovný návrh podmienok technickej koordinácie (GO, odstávky, investície), nie podmienky
tvorby webov. Pre web z neho neplynie nič okrem všeobecného princípu, že zmeny rozsahu sa
potvrdzujú písomne. Priečinky `predaj-web` (ukážka pre reštauráciu) a `ceny` (analýza cien
dielov) s podmienkami webu nesúvisia.

| Téma                                      | Stav                        | Text vo V2                                                                 |
| ----------------------------------------- | --------------------------- | -------------------------------------------------------------------------- |
| Pripomienky pred spustením                | potvrdené (`/tvorba-webov`) | dve kolá súhrnných pripomienok                                             |
| Neskoršie zmeny a nový obsah              | potvrdené                   | nové texty, fotografie, sekcie, rozšírené formuláre – podľa rozsahu        |
| Doména a hosting                          | potvrdené                   | nie sú v cene; zabezpečí klient alebo osobitne; existujúcu doménu použijem |
| Redakčný systém                           | potvrdené                   | nie je v základnej dodávke; zmeny robí Marek podľa podkladov               |
| Cena                                      | potvrdené                   | orientačne 500 – 1 200 €, presná po prvom zadaní, pred začiatkom práce     |
| Chyba voči schválenému zadaniu            | **nerozhodnuté**            | definícia chyby vs. novej požiadavky; postup „uvediem v cenovej ponuke“    |
| Zálohy                                    | **nerozhodnuté**            | závisí od hostingu, ujasníme pri jeho výbere                               |
| Prístupy, vlastníctvo, odovzdanie súborov | **nerozhodnuté**            | dohodneme v cenovej ponuke pred začiatkom práce                            |

## Rozhodnutia pred produkčným nasadením

Web nerozhodnuté body zámerne formuluje neutrálne („uvediem / dohodneme v ponuke“). Treba rozhodnúť:

1. **Oprava chyby v dodávke po spustení** – bezplatne? Do kedy?
2. **Zálohovanie** – ponúkať ako službu, alebo len podľa hostingu?
3. **Prístupy a vlastníctvo** – na koho budú doména a hosting, odovzdáva sa zdrojový kód,
   prístupy a ktoré súbory?
4. **Redakčný systém (CMS)** – ponúkať ako doplnok? Za akú cenu?
5. **Doplnky** – ďalšie podstránky, jazykové verzie, tvorba textov, rozšírené formuláre,
   rezervácie, platby: orientačné ceny?
6. **Platobné podmienky a termíny** – zatiaľ sa nezverejňujú.
7. **Súhlas zamestnávateľa so zverejnením snímok Techbases a Archívu údržby** – aj
   anonymizované obrazovky pochádzajú z interných nástrojov nad prevádzkovými dátami. Skoršia
   poznámka k Archívu predpokladala súhlas pred verejnou prezentáciou. **Blokuje produkciu**
   (nie návrh V2, ktorý je neindexovaný a nenasadený).
8. **Štítok „Interný nástroj“** pre Techbases a Archív – potvrdiť (predtým „Anonymizovaný pilot“).
9. **Jednoduchý formulár v základnej dodávke** je zatiaľ len vo V2. Produkčná `/tvorba-webov`
   ho v balíku neuvádza (produkcia sa podľa pokynu nemenila); pri nasadení zjednotiť.
10. **OslovMa.sk** – V2 ho podľa zadania V2 označuje „Vlastný produkt · Webová aplikácia“.
    Na produkcii je označenie skryté podľa skoršieho pokynu. Podmienky na oslovma.sk
    stále uvádzajú „bezplatný projekt v skúšobnej prevádzke“.
11. **Zrub pri Hrone** – V2: „Spustený web, priebežne dopĺňaný“ (produkcia: „Vo vývoji“).
12. **Druhá špecializácia** – V2 odkazuje na existujúcu `/sluzby` (iný vizuál, staré ukážky
    `/ukazky/*`). Pri prechode na V2 rozhodnúť, či sa `/sluzby` prerobí a dostane nové snímky.

## Chýbajúce podklady

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
- `tsconfig.tsbuildinfo` vzniká pri builde a nie je v `.gitignore`; necommitovať.

## Kroky pred produkčným nasadením V2

Nič z tohto zatiaľ nie je urobené. Nasadenie až po rozhodnutiach vyššie (najmä bod 7).

1. **Presun obsahu:** `/v2` → `/`, `/v2/realizacie/[slug]` → napr. `/realizacie/[slug]`;
   `/v2/porovnanie` nenasadzovať (len pracovná stránka).
2. **Indexovanie:** odstrániť `robots: noindex, nofollow` z `app/v2/layout.tsx` (alebo z nového
   layoutu); skontrolovať `robots.txt`.
3. **Canonical:** prepísať `alternates.canonical` z `/v2…` na nové adresy, overiť `og:url`.
4. **Sitemap:** pridať nové adresy realizácií, odstrániť zaniknuté; `/v2` v nej nesmie byť.
5. **Odkazy:** nahradiť interné `/v2#…` a `/v2/realizacie/…`, odstrániť odkaz „Porovnanie
   s pôvodnou verziou“ a text „Návrh V2 na posúdenie – neindexovaný“ v pätičke, „(návrh V2)“
   v titulkoch; zvážiť presmerovania zo starých adries.
6. **Izolácia:** odstrániť `ProductionOnly` a pravidlo `main:not(:where(.v2-main))`, zjednotiť
   `v2.css` s `globals.css`.
7. **Formulár:** na produkcii otestovať odoslanie dopytu cez `/api/kontakt` (Resend) a doručenie
   e-mailu. **Netestované** – lokálne `sending: false`, žiadna skúšobná správa sa neodoslala.
8. **Build a nasadenie:** `npm run build`, OpenNext s `--dangerouslyUseUnsupportedNextVersion`,
   poznačiť ID verzie Workera a predchádzajúce ID na návrat.
9. **Po nasadení:** odoslať sitemap v Search Console, skontrolovať indexovanie a canonical.

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

### Druhý prechod (1. 11. 2026)

- `npm run build` (29 stránok vrátane `/v2/realizacie/archiv-udrzby`), `npm run lint`,
  `tsc --noEmit`, Prettier – OK.
- Produkčný build v Chrome: `/v2#firemne-nastroje` pri 1440 × 900 a 390 × 844, detaily
  `/prevadzkove-prehlady` a `/archiv-udrzby` celostránkovo po vynútenom dekódovaní obrázkov
  (1440 px) a Archív aj pri 390 px. Všetky obrázky načítané, bez horizontálneho pretekania.
- V2: `noindex, nofollow` a vlastný canonical aj na novom detaile; V2 nepoužíva `/ukazky/*`.
- Pôvodný web: `/`, `/tvorba-webov`, `/sluzby`, `/kontakt` – `index, follow`, žiadny odkaz
  na `/v2`, `/v2` nie je v sitemap. Súbory mimo `app/v2` sa nemenili.
- Anonymizácia: kontroly vzorov v DOM bez nálezu, vizuálna kontrola všetkých šiestich snímok.
