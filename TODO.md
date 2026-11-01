# TODO — manuálne kroky

## 0. Cloudflare Web Analytics token

1. Cloudflare dashboard → účet → **Analytics & Logs → Web Analytics** → **Add a site** → zadať `techbases.sk`.
2. Vypnúť „automatic setup" (skript už je v kóde) a skopírovať **token** z JS snippetu (`"token": "..."`).
3. V projekte vytvoriť `.env.local` (podľa `.env.example`) s `NEXT_PUBLIC_CF_ANALYTICS_TOKEN=<token>`.
4. Znova nasadiť: `npm run deploy`. Bez tokenu sa beacon skript nevykreslí.

## 0b. Resend API kľúč pre kontaktný formulár

Formulár na /kontakt posiela cez `/api/kontakt` → Resend API. Kým kľúč nie je
nastavený, formulár vráti zrozumiteľnú chybu s odkazom na e-mail (nič sa nerozbije).

1. Na [resend.com](https://resend.com) vytvoriť účet (free tier: 100 e-mailov/deň).
2. **Domains → Add domain** → `techbases.sk` → pridať DNS záznamy (SPF/DKIM) v Cloudflare
   a overiť. Odosielateľ v kóde je `web@techbases.sk` (app/api/kontakt/route.ts).
3. **API Keys → Create API key** a nastaviť ako Cloudflare secret:
   `npx wrangler secret put RESEND_API_KEY`
4. Znova nasadiť: `npm run deploy` a otestovať formulár.

## 0c. Realizácie webov — podklady

- Snímky Zrub pri Hrone a OslovMa.sk sú z 21. 10. 2026. Pri väčšej zmene niektorého
  webu ich obnoviť (1440×900 a 390×844 @2x, prefers-reduced-motion) a previesť
  na WebP do `public/realizacie/` (šírka 1200 a 480 px).
- Pred nasadením si overiť, že majiteľ Zrubu pri Hrone súhlasí so zverejnením
  snímok a odkazu na TechBases.sk.
- Stav Zrubu pri Hrone je „Spustený web, priebežne dopĺňaný“ (úvod aj
  `app/components/web-realizations.tsx` na /tvorba-webov).
