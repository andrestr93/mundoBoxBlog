import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: "**/*.mdx" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        slug: z.string(),
        time: z.string(),
        pubDate: z.date(),
        metaTitle: z.string().max(60),
        metaDescription: z.string().max(160),
        characteristics: z.array(z.string().max(100)).max(4),
        durability: z.string(),
        performance: z.string(),
        comfort: z.string(),
        category: z.enum(['Calzado', 'Combas', 'Calleras']),
        tags: z.array(z.string()).max(4),
        type: z.enum(['Comparativas', 'Reviews', 'Rankings', 'Guias de Solucion']),
        image: image(),
        rating: z.string(),
        reviewsCount: z.string(),
        amazonLink: z.string().url(),
        pros: z.array(z.string().max(50)),
        contras: z.array(z.string().max(50)),

    }),
});

export const collections = { blog };



