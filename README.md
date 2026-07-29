# PUPTIDES — $PUPTIDES

Memecoin site. Research. Develop. Transform. Advanced peptide science, for dogs, on Solana.

Premium white lab style, short one-pager: responsive hero art, CA action bar, marquee,
5 compound cards (BPC-157, TB-500, CJC-1295, IGF-1 + $PUPTIDES "pure hopium"),
Certificate of Analysis as tokenomics, RX dosing protocol as how-to-buy.

**LIVE:** https://puptides.vercel.app
GitHub: `ciberneticatradingdev/puptides` → connected to Vercel, push to `main` auto-deploys.

## Run locally

```bash
node serve.js
```

→ http://localhost:8791

## Launch checklist

- [ ] Set `CA` in `js/main.js` (auto-wires pump.fun buy buttons + dexscreener chart + copy)
- [ ] X + Telegram links in the action bar (`index.html`, currently `#`)
- [ ] Replace `assets/img/hero-tablet.jpg` (3:4 art) and `assets/img/hero-mobile.jpg`
      (9:16 art) — both are currently copies of the desktop art. Same filenames, push, done.

## Hero art

`<picture>` in `index.html` picks by viewport:

| File | Breakpoint | Status |
|---|---|---|
| `assets/img/hero-desktop.jpg` | > 1024px | real art ✓ |
| `assets/img/hero-tablet.jpg` | ≤ 1024px | placeholder (desktop copy) |
| `assets/img/hero-mobile.jpg` | ≤ 640px | placeholder (desktop copy) |

## Nota

El disclaimer del footer no se quita: memecoin sin valor intrínseco, no es consejo
médico/veterinario/financiero, y nadie debe inyectar péptidos a su perro por un shiba de dibujos.
