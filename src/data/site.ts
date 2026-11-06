// Single source of truth for everything personal on the site.
// Edit this file to update your name, summary, contact links, and skills —
// no component changes needed.

export const site = {
  name: 'Jesse Cary',
  // Shown in the browser tab and as the default OpenGraph title.
  title: 'Jesse Cary — Software Engineer',
  // Default meta description for SEO / link previews.
  description:
    'Software engineer building full-stack web applications. A showcase of side projects, with code and live demos.',
  // Short role/tagline under your name in the hero.
  tagline: 'Full-Stack Software Engineer',
  // 2–4 sentence professional summary for the hero section.
  summary:
    'I build end-to-end web applications with a focus on clean, maintainable code and thoughtful user experience. Below are a few side projects I have shipped — each with source code and a live demo. I am currently looking for a full-time software engineering role.',
  email: 'jesseiancary@gmail.com',
  // Optional résumé in /public. Set to null to hide the download button.
  resumeUrl: '/resume.pdf',
} as const;

// Social / contact links rendered in the header and footer.
// Remove any you do not want to show.
export const socials: { label: string; href: string }[] = [
  { label: 'Email', href: `mailto:${site.email}` },
  { label: 'GitHub', href: 'https://github.com/your-username' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-username' },
];

// Grouped skills shown on the homepage. Edit freely.
export const skillGroups: { category: string; items: string[] }[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Astro', 'Tailwind CSS', 'Next.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'PostgreSQL', 'REST APIs', 'Express'],
  },
  {
    category: 'Tooling & Cloud',
    items: ['Git', 'AWS', 'Vercel', 'Docker', 'CI/CD'],
  },
];
