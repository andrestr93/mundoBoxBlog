import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: "**/*.mdx" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        slug: z.string(),
        metaTitle: z.string().max(60), // Título para Google
        metaDescription: z.string().max(160), // Descripción para Google
        category: z.string(),
        image: z.string(),
        rating: z.string(),
        reviewsCount: z.string(),
        amazonLink: z.string().url(),
        features: z.array(z.string()),
        pros: z.array(z.string()),
        contras: z.array(z.string()),

    }),
});

export const collections = { blog };



