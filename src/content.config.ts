import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: "**/*.mdx" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        slug: z.string(),
        time: z.string(),
        metaTitle: z.string().max(60),
        metaDescription: z.string().max(160),
        descriptions: z.array(z.string()),
        characteristics: z.array(z.string()),
        category: z.enum(['Calzado', 'Combas', 'Calleras']),
        tags: z.array(z.string()),
        type: z.enum(['Comparativas', 'Reviews', 'Rankings', 'Guias de Solucion']),
        image: image(),
        rating: z.string(),
        reviewsCount: z.string(),
        amazonLink: z.string().url(),
        pros: z.array(z.string()),
        contras: z.array(z.string()),

    }),
});

export const collections = { blog };



