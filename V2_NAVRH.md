# Návrh V2 – interné poznámky

Stav k 1. 11. 2026: **V2 je nasadená ako hlavný web techbases.sk** (commit `1ab13b6` na
`main`, verzia Workera `9f940af5-d214-4d14-a002-67dfd76a1dac`). Postup a kontroly sú
v časti „Nasadenie V2“.

## Ako otvoriť

    npm run dev

- http://localhost:3000/ – úvodná stránka (V2)
- http://localhost:3000/realizacie/zrub-pri-hrone, `/oslovma`, `/prevadzkove-prehlady` (Techbases),
  `/archiv-udrzby` – detaily realizácií
- `/sluzby`, `/kontakt`, `/poznamky`, `/audit-erp-dat` … – obsah v pôvodnom vzhľade, hlavička
  a pätička jednotné
- `/tvorba-webov` → `/#ponuka`, `/o-mne` → `/#o-mne` (trvalé presmerovanie 308)

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
  Techbases, nový detail `/realizacie/archiv-udrzby` tri snímky z telefónu.
- **Štítky:** obe aplikácie sú „Interný nástroj“ (produkcia ich opisuje ako „interný
  pracovný pohľad“ / „interný portál“), nie klientska zákazka ani pilot pre klienta.
  Techbases a Archív údržby sú označené samostatne. Spoločný systém nie je overený, Archív
  len preberá katalóg výkresov zo súborov Techbases (README Archívu), preto ich web nespája.

### Prechod na hlavný web (1. 11. 2026, tretí prechod)

- `app/v2/` → skupina trás `app/(v2)/` (v adrese sa nezobrazuje): úvod `/`, detaily
  `/realizacie/[slug]`. Pôvodná úvodná stránka `app/page.tsx`, pracovná stránka
  `/v2/porovnanie` a nepoužitý `hero-video.tsx` sú odstránené (ostávajú v histórii Gitu).
  `public/video.mp4` (~3 MB) už nič nepoužívalo, je odstránené. V `globals.css` ostali
  nepoužité triedy `.hero-video*` (neškodia).
- Bez `noindex`; titulky bez „(návrh V2)“; canonical a `og:url`: `/` a `/realizacie/<slug>`.
  Štruktúrované dáta `ProfessionalService` prevzaté z pôvodného úvodu.
- Sitemap: `/` a štyri `/realizacie/…` (lastmod 1. 11. 2026); `/v2` v nej nie je a vracia 404
  (V2 nebola nikdy nasadená, presmerovanie netreba).
- Hlavička a pätička V2 odkazujú na `/#…`; z pätičky zmizol odkaz na porovnanie a text
  „Návrh V2 na posúdenie – neindexovaný“.
- `/tvorba-webov` zjednotená s úvodom: v balíku „kontaktné údaje a jednoduchý dopytový
  formulár“, osobitne „rozšírené formuláre, rezervácie a platby“, v otázke o neskorších
  zmenách aj rozšírené formuláre.
- Pôvodné stránky (`/tvorba-webov`, `/sluzby`, `/kontakt`, `/o-mne`, `/poznamky`, `/audit-erp-dat`,
  ochrana osobných údajov, 404) majú pôvodnú hlavičku a pätičku a vzhľad sa nemenil.
  Ich odkaz „Realizácie“ (`/#realizacie`) vedie na sekciu nového úvodu.

## Technické riešenie a izolácia

- Úvod a realizácie sú v `app/(v2)/` (layout, stránky, komponenty, `projects.ts`, `v2.css`).
- `v2.css`: všetky pravidlá sú pod triedou `.v2`, takže po klientskej navigácii na pôvodné
  stránky nič nepresakuje. `html:has(.v2)` mení `overflow-x` na `clip`, inak by globálne
  `overflow-x: hidden` vyplo sticky hlavičku.
- Písmo tela V2 je Inter (`next/font`), nadpisy ostávajú Space Grotesk.
- `app/components/production-only.tsx`: na `/` a `/realizacie/…` sa nevykreslí hlavička,
  pätička, skip link ani `RevealOnScroll` pôvodného webu (V2 nemá animácie odďaľujúce obsah).
  Ostáva, kým majú ostatné stránky pôvodný vzhľad.
- `app/globals.css`: mobilné pravidlá pre `main` platia len pre `main:not(:where(.v2-main))`.
  `:where` zachováva špecificitu, pôvodný web sa správa rovnako (overené: H1 35 px pri 390 px).
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

| Súbor (`public/v2/`)                | Rozmer              | Kde je použitý                                                                |
| ----------------------------------- | ------------------- | ----------------------------------------------------------------------------- |
| `techbases-prestoje.webp`           | 1600 × 1044, 106 kB | úvod `/#firemne-nastroje`, detail `/realizacie/prevadzkove-prehlady` (Ukážky) |
| `techbases-prehlad-poloziek.webp`   | 1600 × 1044, 142 kB | detail `/realizacie/prevadzkove-prehlady` (úvodná snímka)                     |
| `techbases-vydaje-materialu.webp`   | 1600 × 1044, 139 kB | detail `/realizacie/prevadzkove-prehlady` (Ukážky)                            |
| `archiv-udrzby-karta-agregatu.webp` | 540 × 1147, 39 kB   | úvod `/#firemne-nastroje` (telefón), detail `/realizacie/archiv-udrzby`       |
| `archiv-udrzby-prehlad.webp`        | 540 × 1147, 33 kB   | detail `/realizacie/archiv-udrzby`                                            |
| `archiv-udrzby-historia.webp`       | 540 × 1147, 43 kB   | detail `/realizacie/archiv-udrzby`                                            |

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

Zverejnenie anonymizovaných snímok oboch aplikácií schválil autor aplikácií Marek Belko
(1. 11. 2026); ukážky ostávajú vo V2.

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
7. **Obsah stránok v pôvodnom vzhľade** – `/kontakt`, `/poznamky`, `/audit-erp-dat` a
   `/sluzby/sklad-nahradnych-dielov` (stále staré ukážky `/ukazky/*`) majú jednotnú hlavičku
   a pätičku, no obsah v pôvodnom vzhľade. `/sluzby` je prerobená (pozri nižšie).

**`/sluzby` vo vzhľade úvodu (1. 11. 2026):** stránka je v `app/(v2)/sluzby/`. Úvod
s prestojmi Techbases → ukážkové pracovné pohľady (Techbases 2 snímky, Archív údržby 3,
každý so samostatným štítkom) → ako začať (kontrola exportov zadarmo, pilot 1 200 – 2 500 €,
audit) → anonymizovaný výsledok pilotu → časté otázky (rozbaľovacie, JSON-LD FAQ ostáva) →
formulár s témou „Firemné nástroje a dáta“. Texty sú skrátené z pôvodnej stránky, ponuky
a ceny sa nemenili. Mobil 22 851 → 7 959 px, ~1 970 → ~530 viditeľných slov. Kotvy
`#ukazky-riesenia`, `#kontrola-exportov`, `#pilot`, `#audit`, `#otazky`, `#kontakt` ostali.

**Rozhodnuté (Marek Belko, 1. 11. 2026):**

- Techbases a Archív údržby: „Interný nástroj“; anonymizované ukážky ostávajú zverejnené.
- OslovMa.sk: „Vlastný produkt“ (na úvode a v detaile; `/tvorba-webov` štítok nemá).
- Zrub pri Hrone: „Spustený web, priebežne dopĺňaný“ – na úvode, v detaile aj na
  `/tvorba-webov` (predtým tam bolo „Vo vývoji“).
- `public/video.mp4` odstránené (nič naň neodkazovalo).
- Jednotná hlavička a pätička na všetkých stránkach; `/tvorba-webov` a `/o-mne` zrušené
  s trvalým presmerovaním na sekcie úvodu; `/sluzby` (Firemné nástroje) ostáva.
- Nadpis nad hlavným titulkom úvodu: „Tvorba webových stránok“ (bez „· Marek Belko“).

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

## Nasadenie V2

Body 1–6 v rozhodnutiach sú na webe formulované neutrálne, nasadenie neblokovali.

**Priebeh 1. 11. 2026** (účet Cloudflare marek313313@gmail.com, Worker `techbases-sk`;
`origin/main` sa medzitým nezmenil, všetko fast-forward bez vynúteného pushu):

| Commit    | Verzia Workera | Čo                                                                      |
| --------- | -------------- | ----------------------------------------------------------------------- |
| –         | `707ed18a`     | pôvodná produkcia (21. 10. 2026) – cieľ návratu                         |
| `bf60099` | `59ee7466`     | V2 ako hlavný web; **regresia:** `/realizacie/*` vracali 404            |
| `abd1545` | `a2af8bcc`     | oprava: bez `dynamicParams = false` (OpenNext nemá inkrementálnu cache) |
| `1ab13b6` | `9f940af5`     | jednotná hlavička a pätička, `/tvorba-webov` a `/o-mne` → 308 na úvod   |

Postup (pre ďalšie nasadenia):

    npx wrangler whoami        # účet TechBases, nie profil Zrubu
    npx opennextjs-cloudflare build --dangerouslyUseUnsupportedNextVersion
    npx opennextjs-cloudflare deploy

- Push na GitHub build nespúšťa, nasadzuje sa lokálne. Pred nasadením sa oplatí
  `npx opennextjs-cloudflare preview` – regresiu s 404 by `next start` neodhalil.
- Návrat: `npx wrangler rollback <verzia>` (pôvodný web: `707ed18a-8975-4b71-85a8-f46d7dbee3ba`).
- `ProductionOnly` ostáva len pre `RevealOnScroll` (animácie obsahu v pôvodnom vzhľade),
  `main:not(:where(.v2-main))` ostáva pre mobilné pravidlá tohto obsahu.

**Test formulárov (verzia `a2af8bcc`):** `/#dopyt` 15:02:42 UTC a `/kontakt` 15:03:29 UTC –
`POST /api/kontakt` 200, formulár ukázal potvrdenie. Predmety: „[Tvorba webu] Správa z webu
od: TEST nasadenia V2 – formulár /#dopyt“ a „… /kontakt“. **Doručenie do schránky
kontakt@techbases.sk neoverené** (schránka u mx-hub ani Resend nie sú pre agenta prístupné).
Verzia `9f940af5` mení len hlavičku a pätičku; formuláre sa znova neodosielali, overené je
`GET /api/kontakt` → `sending: true` a vykreslenie formulára.

**Zostáva:** potvrdiť doručenie oboch testovacích e-mailov; v Search Console odoslať sitemap
a požiadať o indexovanie `/`; overiť náhľad odkazu (Open Graph) v sociálnych sieťach.

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

### Tretí prechod – V2 ako hlavný web (1. 11. 2026)

- Čistý `npm run build` (27 stránok: `/`, 4× `/realizacie/…`, pôvodné stránky), `tsc --noEmit`,
  `npm run lint`, Prettier – OK. OpenNext build pre Cloudflare – OK.
- `next start`: `/` a `/realizacie/*` – `index, follow`, canonical a `og:url` na nových adresách,
  titulky bez „návrh V2“, JSON-LD na `/`; `/v2` → 404; sitemap a `robots.txt` overené.
- Pôvodné stránky (`/tvorba-webov`, `/sluzby`, `/kontakt`, `/o-mne`, `/poznamky`) – 200,
  `index, follow`, pôvodná hlavička.
- (Kontroly tretieho prechodu boli lokálne cez `next start`; po nasadení pozri „Nasadenie V2“
  a „Kontroly na produkcii“.)
- Chrome: úvod pri 1440 × 900 a 390 × 844 rovnaký ako predtým `/v2`; klientsky prechod
  `/` → `/sluzby` → `/` → `/realizacie/…` prepína hlavičku, pätičku aj `overflow-x` správne;
  9 stránok pri 390 px bez horizontálneho pretekania a bez nenačítaných obrázkov.
- Anonymizácia: kontroly vzorov v DOM bez nálezu, vizuálna kontrola všetkých šiestich snímok.

### Kontroly na produkcii (techbases.sk, verzia `9f940af5`, 1. 11. 2026)

- 12 stránok (`/`, 4× `/realizacie/…`, `/sluzby`, `/sluzby/sklad-nahradnych-dielov`,
  `/audit-erp-dat`, `/kontakt`, `/poznamky`, poznámka, ochrana osobných údajov): 200,
  `index, follow`, vlastný canonical, jednotná hlavička, žiadna stará hlavička ani text návrhu.
- `/tvorba-webov` → 308 `/#ponuka`, `/o-mne` → 308 `/#o-mne` (v prehliadači sekcia končí pod
  hlavičkou); `/v2`, `/video.mp4` a neznáma realizácia → 404.
- Sitemap 17 adries, všetky dostupné; `robots.txt` povoľuje indexovanie a odkazuje na sitemap
  (Cloudflare pred neho pridáva vlastné pravidlá pre AI crawlery).
- Chrome 1440 × 900: 12 stránok bez nenačítaných obrázkov a bez horizontálneho pretekania;
  390 × 844 (mobil): úvod, `/sluzby`, `/kontakt`, mobilné menu a prechody medzi stránkami.
  Na predchádzajúcej verzii `a2af8bcc` aj 13 stránok pri 390 px.
- Konzola: jediná chyba je beacon Cloudflare Web Analytics (499), ktorý blokuje lokálny
  antivírus Kaspersky – nie chyba webu.
