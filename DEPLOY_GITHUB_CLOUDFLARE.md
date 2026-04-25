# Deploy: GitHub + Cloudflare (techbases.sk)

## 1) Push projektu na GitHub

```powershell
cd "C:\Users\Doma 1\techbases.sk"
git add .
git commit -m "Initial Cloudflare deployment setup"
git remote add origin https://github.com/<tvoj-username>/<tvoj-repo>.git
git push -u origin main
```

## 2) Cloudflare build pre Next.js (Workers)

1. V Cloudflare chod do `Workers & Pages`.
2. Klikni `Create application` -> `Import a repository`.
3. Pripoj GitHub a vyber tento repozitár.
4. Cloudflare by mal projekt detegovať automaticky.
5. Ak treba ručne, build/deploy je v `package.json`:
   - `preview`: `opennextjs-cloudflare build && opennextjs-cloudflare preview`
   - `deploy`: `opennextjs-cloudflare build && opennextjs-cloudflare deploy`

## 3) Pripojenie domény techbases.sk

1. V Cloudflare pridaj doménu `techbases.sk` (Add site).
2. Cloudflare ti pridelí 2 nameservery.
3. Vo Webglobe otvor doménu `techbases.sk` -> nameservery (NS) a prepíš na tie z Cloudflare.
4. Po aktivácii zóny v Cloudflare:
   - otvor nasadený Worker projekt,
   - `Settings` -> `Domains & Routes` -> `Add Custom Domain`,
   - pridaj `techbases.sk` a potom aj `www.techbases.sk`.

## 4) Overenie

- Počkaj na DNS propagáciu (zvyčajne minúty až niekoľko hodín, max ~24h).
- Otestuj:
  - `https://techbases.sk`
  - `https://www.techbases.sk`

