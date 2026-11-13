import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown/MDX file per project lives in src/content/projects/.
// The Markdown body is the long-form write-up; frontmatter is typed below.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Short blurb shown on the homepage card.
      description: z.string(),
      // Card thumbnail - optimized at build time.
      thumbnail: image(),
      // Detail-page gallery images.
      screenshots: z.array(image()).default([]),
      // Optional embedded demo (YouTube/Vimeo watch or embed URL).
      videoUrl: z.string().url().optional(),
      githubUrl: z.string().url().optional(),
      liveUrl: z.string().url().optional(),
      // Tech-stack tags.
      tech: z.array(z.string()).default([]),
      // Surface this project first on the homepage.
      featured: z.boolean().default(false),
      // Lower numbers sort earlier; ties break on date (newest first).
      order: z.number().default(999),
      date: z.coerce.date().optional(),
      // Set true to keep a project out of the build.
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
