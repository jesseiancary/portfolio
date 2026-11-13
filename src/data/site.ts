// Single source of truth for everything personal on the site.
// Edit this file to update your name, summary, contact links, and skills -
// no component changes needed.

export const site = {
  header: 'Portfolio',
  name: 'Jesse Ian Cary',
  // Shown in the browser tab and as the default OpenGraph title.
  title: 'Jesse Ian Cary - Full-Stack Software Engineer & Architect',
  // Default meta description for SEO / link previews.
  description:
    'Software engineer and application architect specializing in multi-tenant SaaS and secure systems for regulated domains - PCI DSS Level 1 payments and HIPAA/HL7 healthcare integrations.',
  // Short role/tagline under your name in the hero.
  tagline: 'Full-Stack Software Engineer / Architect',
  // City, shown as a muted line under the tagline. Set to null to hide.
  location: 'Tucson, AZ',
  // 2-4 sentence professional summary for the hero section.
  summary:
    "I'm a software engineer and application architect with 18 years of experience owning products end to end - from business need through architecture and hands-on implementation to production. I specialize in multi-tenant SaaS platforms and secure systems for regulated domains, including PCI DSS Level 1 payments and HIPAA-governed healthcare (HL7/EMR) integrations. Below are side projects I've built, each with source code and a live demo. I'm currently looking for a full-time role in fintech, healthtech, or SaaS.",
  email: 'jesseiancary@gmail.com',
  // Optional résumé in /public. Set to null to hide the download button.
  resumeUrl: null,
} as const;

// Social / contact links rendered in the header and footer.
// Remove any you do not want to show.
export const socials: { label: string; href: string }[] = [
  { label: 'Email', href: `mailto:${site.email}` },
  { label: 'GitHub', href: 'https://github.com/jesseiancary' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/jesseiancary' },
];

// Grouped skills shown on the homepage. Edit freely.
// Ordered to mirror target domains: SaaS/architecture → payments → healthcare.
export const skillGroups: { category: string; items: string[] }[] = [
  {
    category: 'Architecture & Systems',
    items: [
      'Application Architecture',
      'Domain-Driven Design',
      'Multi-Tenant SaaS',
      'Distributed Systems',
      'System Design',
      'Shared Services',
      'Legacy Modernization',
      'RBAC',
    ],
  },
  {
    category: 'Payments & Security',
    items: [
      'Payment Processing',
      'Tokenization',
      'Stored Credentials',
      '3-D Secure (3DS)',
      'PCI DSS Level 1',
      'Fraud Detection',
      'Chargebacks & Disputes',
      'Clover',
      'WorldPay',
      'Braintree',
      'PayEezy',
      'PayPal',
      'Apple Pay',
      'Google Pay',
    ],
  },
  {
    category: 'Healthcare & Compliance',
    items: [
      'HL7 v2/v3',
      'MLLP',
      'HIPAA',
      'EMR / EHR Integrations',
      'HIS / LIS / PACS',
      'Data Mapping',
    ],
  },
  {
    category: 'APIs & Integration',
    items: [
      'REST API Design',
      'Webhook Design',
      'OpenAPI / Swagger',
      'Event-Driven Integration',
      'API Versioning',
      'Fault Tolerance & Recovery',
      'OAuth',
    ],
  },
  {
    category: 'Languages & Frameworks',
    items: [
      'TypeScript',
      'JavaScript (ES6+)',
      'C# / .NET',
      'SQL',
      'Node.js',
      'Express',
      'Angular',
      'React',
    ],
  },
  {
    category: 'Data & Caching',
    items: [
      'MongoDB',
      'SQL Server',
      'Redis',
      'Mongoose',
      'Database Design',
      'Database Migrations',
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions', 'Observability', 'Automated Testing'],
  },
];
