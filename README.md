# doris lam — personal site

Source for [dorisslam.ca](https://dorisslam.ca). Built with Next.js (App Router) + Tailwind, deployed on Cloudflare Pages.

## development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## structure

```
app/
  layout.tsx           # root layout, fonts, theme, dino canvas
  page.tsx             # home (single-viewport, scroll locked)
  projects/            # /projects index + /projects/[slug] detail
  misc/                # /misc (top artists + favourite albums)
  api/spotify/         # spotify endpoints
components/
  main-content.tsx     # home content
  projects.tsx         # project data, list, and detail body
  dino-game.tsx        # chrome dino canvas at the bottom of every page
  ...
public/
  dino-sprite.png      # chrome dino sprite sheet
  icon.png             # favicon (cropped dino)
```
