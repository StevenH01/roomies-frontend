# Roomies Landing (Figma parity)

This is a drop-in landing page that mirrors the structure of https://plugin-value-scrum.figma.site/,
adapted for a roommate-finding startup.

## How to use

**Option A: Drop into an existing Next.js (App Router) project using `src/` structure**

1. Copy the `src/` folder and `postcss.config.mjs` into your project root.
2. Ensure Tailwind v4 is set up:
   ```bash
   npm i tailwindcss @tailwindcss/postcss postcss
   ```
   `postcss.config.mjs` should include:
   ```js
   export default { plugins: { "@tailwindcss/postcss": {} } }
   ```
3. Install MUI + Emotion:
   ```bash
   npm i -E @mui/material @mui/system @mui/icons-material @mui/material-nextjs @emotion/react @emotion/styled @emotion/cache
   ```
   Make sure all `@mui/*` packages are the same version (v7 series).
4. Run dev (Turbopack recommended):
   ```bash
   npm run dev -- --turbopack
   ```

**Option B: Start fresh**

```bash
npx create-next-app@latest roomies-web
cd roomies-web
# Install deps
npm i -E @mui/material @mui/system @mui/icons-material @mui/material-nextjs @emotion/react @emotion/styled @emotion/cache
npm i tailwindcss @tailwindcss/postcss postcss
# Replace your src/ with the src/ in this archive and add postcss.config.mjs
npm run dev -- --turbopack
```

## Notes

- Components that import MUI include `"use client"` at top to avoid SSR crashes.
- We use per-component imports (e.g., `@mui/material/Button`) instead of the `@mui/material` barrel.
- Brand color is **green** `#16a34a`. Change it once in `src/theme.ts` and it will propagate. We also inject the same color as `--color-primary` CSS var in `layout.tsx` for Tailwind utility usage.
- The content structure mirrors the Figma site sections: Hero → Trusted By → Benefits → Big Picture → Specs/Compare → Testimonial → Steps → CTA → Footer.
