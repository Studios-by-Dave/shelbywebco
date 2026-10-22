import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    // Optional short title for the <title> tag and OG headline. Use it when
    // the visible title is keyword-rich but pushes the tag past 60 chars.
    seoTitle: z.string().optional(),
    description: z.string(),
    cluster: z.enum(['local-seo', 'website-cost', 'ai-search', 'spotlight', 'official']),
    datePublished: z.string(),
    dateModified: z.string(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    authorName: z.string().default('Dave Richardson'),
    pillar: z.object({ label: z.string(), href: z.string() }).optional(),
    serviceLink: z.object({ label: z.string(), href: z.string() }).optional(),
    related: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .default([]),
  }),
});

export const collections = { blog };
