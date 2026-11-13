# CLAUDE.md

Portfolio website showcasing side projects to potential employers. Static site,
Astro 7 + Tailwind CSS v4, deployed to Vercel (auto-deploys on push to `main`).

## Rules

- **Never stage changes.** Do not run `git add` (or otherwise stage). Leave all
  edits unstaged - I review and stage/commit manually.
- **Always use the short dash `-`, never the long dash `—` (em dash).** This
  applies everywhere: site content, project Markdown, code comments, commit
  messages, PR titles/descriptions, and docs. Use ` - ` where you'd reach for an
  em dash. (Same goes for en dashes `–`.)

## Commands

```bash
npm run dev       # dev server at http://localhost:4321
npm run build     # production build to ./dist (also type-checks)
npm run preview   # serve the production build locally
```

There is no standalone `astro check` yet - `@astrojs/check` does not support
Astro 7. Type-checking happens via `npm run build`.

## Architecture

Content-driven: personal info and projects are data, not markup.

- `src/data/site.ts` - single source of truth for name, summary, tagline,
  contact/social links, résumé link, and skills. **Edit here, not in components.**
- `src/content/projects/*.md` - one file per project; filename is the URL slug
  (`taskflow.md` → `/projects/taskflow`). Markdown body is the long-form write-up.
- `src/content.config.ts` - typed frontmatter schema for projects (the contract).
- `src/assets/projects/` - project images (optimized to WebP at build via `<Image>`).
- `src/pages/index.astro` - homepage (hero, skills, project grid).
- `src/pages/projects/[...slug].astro` - project detail page.
- `src/components/` - `ProjectCard`, `SkillsList`, `Gallery` (auto-embeds
  YouTube/Vimeo URLs), `Header`, `Footer`.
- `astro.config.mjs` - `site` must be the real domain (drives sitemap + OG/canonical URLs).

## Conventions

- Adding a project = add one Markdown file + its images. Prefer `/add-project`.
- Styling is Tailwind utility classes; shared tokens/prose styles in
  `src/styles/global.css`. Dark mode follows OS preference (`dark:` variants).
- Keep images in `src/assets/` (optimized), not `public/` (served as-is).
  Exceptions in `public/`: `resume.pdf`, `og.png`, favicons.

See `.claude/AGENTS.md` for Astro's framework-level agent guide.
