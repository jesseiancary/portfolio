# Portfolio

A static portfolio site built with [Astro](https://astro.build) + Tailwind CSS,
designed to showcase side projects to potential employers. Deploys to Vercel.

## Commands

```bash
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build to ./dist
npm run preview   # preview the production build locally
```

## Where to edit things

| What | File |
| --- | --- |
| Name, summary, tagline, email, résumé link | `src/data/site.ts` |
| Social / contact links | `src/data/site.ts` (`socials`) |
| Skills | `src/data/site.ts` (`skillGroups`) |
| Your custom domain (for SEO/sitemap/OG URLs) | `astro.config.mjs` (`site`) |
| Résumé PDF | `public/resume.pdf` (replace the placeholder) |
| Link-preview image | `public/og.png` (replace the placeholder) |

## Adding a project

Each project is one Markdown (or `.mdx`) file in `src/content/projects/`. The
filename becomes the URL slug (`taskflow.md` → `/projects/taskflow`). Put images
in `src/assets/projects/` - they are optimized to WebP at build time.

```markdown
---
title: My Project
description: One-line blurb shown on the homepage card.
thumbnail: ../../assets/projects/my-project-thumb.png
screenshots:
  - ../../assets/projects/my-project-1.png
  - ../../assets/projects/my-project-2.png
videoUrl: https://www.youtube.com/watch?v=VIDEO_ID   # optional demo embed
githubUrl: https://github.com/you/my-project
liveUrl: https://my-project.example.com              # optional
tech: [React, TypeScript, Node.js]
featured: true    # surface first on the homepage
order: 1          # lower sorts earlier; ties break on date (newest first)
date: 2025-08-14
draft: false      # true keeps it out of the build
---

## Overview

The Markdown body here is the long-form write-up shown on the detail page.
```

The full schema (and which fields are required) lives in `src/content.config.ts`.
`videoUrl` accepts normal YouTube/Vimeo watch links - they are converted to embeds
automatically.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project** and import the repo. Vercel auto-detects Astro
   (build command `npm run build`, output `dist`) - no config needed.
3. Add your custom domain under **Settings → Domains**, then point your
   registrar's DNS at Vercel (A record `76.76.21.21`, or CNAME
   `cname.vercel-dns.com` for a subdomain). SSL is automatic.
4. Update `site` in `astro.config.mjs` to your real domain so the sitemap and
   link-preview URLs are correct.

Every push to `main` deploys to production; pull requests get preview URLs.

## Notes

- Dark mode follows the visitor's OS preference automatically.
- `@astrojs/check` (standalone `astro check`) does not yet support Astro 7, so
  type-checking happens via `npm run build`. Re-add it once it supports Astro 7.
