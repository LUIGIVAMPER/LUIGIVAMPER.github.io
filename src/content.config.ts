import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const links = z
  .object({
    paper: z.string().optional(),
    project: z.string().optional(),
    code: z.string().optional(),
    video: z.string().optional(),
  })
  .default({});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    role: z.string(),
    status: z.string(),
    stage: z.enum(['understanding', 'acting', 'adapting']),
    order: z.number(),
    /** Path under /public, e.g. /images/projects/roboarc.mp4 (image or mp4/webm). */
    cover: z.string().optional(),
    /** Still image shown before a video cover loads. */
    poster: z.string().optional(),
    coverAlt: z.string().optional(),
    /** Optional media grid shown on the project page. */
    gallery: z
      .object({
        title: z.string(),
        note: z.string().optional(),
        items: z.array(z.object({ src: z.string(), poster: z.string().optional(), caption: z.string() })),
      })
      .optional(),
    question: z.string(),
    contribution: z.array(z.string()),
    findings: z.array(z.string()).default([]),
    links,
    hasPage: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    extraVenues: z.array(z.string()).default([]),
    year: z.number(),
    award: z.string().optional(),
    category: z.enum(['main', 'preparation', 'earlier']),
    order: z.number().default(0),
    links,
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    date: z.coerce.date(),
    text: z.string(),
    link: z.string().optional(),
  }),
});

export const collections = { projects, publications, news };
