---
description: Scaffold a new project entry in src/content/projects/
argument-hint: [project name]
---

Add a new project to the portfolio: **$ARGUMENTS**

1. Pick a kebab-case slug from the name (it becomes the URL and the filename).
2. Read `src/content.config.ts` to confirm the current frontmatter schema, and
   skim an existing file in `src/content/projects/` to match style.
3. Create `src/content/projects/<slug>.md` with complete frontmatter (title,
   description, thumbnail, screenshots, tech, githubUrl, liveUrl, videoUrl if
   any, featured, order, date) and a Markdown body with the long-form write-up
   (Overview / What I built / Challenges / Outcome, or similar).
4. Ask me for any details you don't know (GitHub URL, live URL, tech stack,
   whether it should be `featured`) rather than guessing.
5. Remind me which images to drop into `src/assets/projects/` — a 16:9
   thumbnail and 1–2 screenshots — and reference them with relative paths
   (`../../assets/projects/<slug>-thumb.png`). Do not invent image files.
6. Run `npm run build` to confirm the schema validates and the page renders.
