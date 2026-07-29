# PUPTIDES — $PUPTIDES

Memecoin site. Advanced peptide science. For dogs. On Solana. Science. Strength. Woof.

Funny lab-clinic style: jacked shiba lab director, 4 fake peptide compounds (BPC-157, TB-500,
CJC-1295, IGF-1) + $PUPTIDES (pure hopium), clinical trials (n=1, p<woof), Certificate of
Analysis as tokenomics, dosing protocol as how-to-buy.

Static site — no build step, no dependencies.

## Run locally

```bash
node serve.js
```

→ http://localhost:8791

## Launch checklist

- [ ] Set `CA` in `js/main.js` (auto-wires pump.fun buy + dexscreener chart links + copy button)
- [ ] X + Telegram links in hero (`index.html`, currently `#`)
- [ ] Deploy to Vercel: `vercel --prod`

## Assets

- `assets/img/banner.jpg` — wide product-line banner (hero band + og:image)
- `assets/img/doge-lab.jpg` — Dr. Doge with syringe (hero + clinical trials)

Pending: 2 more art pieces exist (shaker doge "Science doesn't lie. Results do.",
vials-only square poster) — not yet saved to disk. Drop them in `assets/img/` to use.

## Nota

El disclaimer del footer no se quita: memecoin sin valor intrínseco, no es consejo
médico/veterinario/financiero, y nadie debe inyectar péptidos a su perro por un shiba de dibujos.
