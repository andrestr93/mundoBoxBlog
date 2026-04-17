import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: "**/*.yaml" }),
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
        details: z.array(
            z.object({
                title: z.string(),
                content: z.string(),
                icon: z.string(),
            })
        ).min(3), // Obligas a que al menos haya 3 para mantener el SEO
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



