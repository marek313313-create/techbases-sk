# TODO — manuálne kroky

## 0. Cloudflare Web Analytics token

1. Cloudflare dashboard → účet → **Analytics & Logs → Web Analytics** → **Add a site** → zadať `techbases.sk`.
2. Vypnúť „automatic setup" (skript už je v kóde) a skopírovať **token** z JS snippetu (`"token": "..."`).
3. V projekte vytvoriť `.env.local` (podľa `.env.example`) s `NEXT_PUBLIC_CF_ANALYTICS_TOKEN=<token>`.
4. Znova nasadiť: `npm run deploy`. Bez tokenu sa beacon skript nevykreslí.

## 1. Kompresia videa (ffmpeg nie je v prostredí dostupné)

`public/video.mp4` má ~3 MB. Po nainštalovaní ffmpeg (napr. `winget install Gyan.FFmpeg`)
spustiť z koreňa projektu:

```
ffmpeg -i public/video.mp4 -vf "scale=1280:-2" -c:v libx264 -crf 31 -preset slow -movflags +faststart -an public/video-compressed.mp4
```

Potom skontrolovať kvalitu (video je dekoratívne pozadie s opacitou 0,7 prekryté
gradientom, takže CRF 31 je v poriadku), nahradiť súbor:

```
move /Y public\video-compressed.mp4 public\video.mp4
```

Cieľ: pod 1 MB.
