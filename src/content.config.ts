import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: "**/*.mdx" }),
    schema: ({ image }) => z.object({
        title: z.string().max(100),
        slug: z.string(),
        time: z.number(),
        name: z.string(),
        pubDate: z.date(),
        metaTitle: z.string().max(60),
        metaDescription: z.string().max(160),
        characteristics: z.array(z.string().max(80)).max(5),
        author: z.string(),
        category: z.enum(['Zapatillas', 'Combas', 'Calleras']),
        brand: z.string(),
        type: z.enum(['Comparativa', 'Review', 'Ranking', 'Guia de Solucion']),
        image: image(),
        rating: z.number(),
        reviewCount: z.number(),
        amazonLink: z.string().url(),
        pros: z.array(z.string().max(80)).max(4),
        contras: z.array(z.string().max(80)).max(4),

    }),
});

export const collections = { blog };



