import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: "**/*.mdx" }),
    schema: ({ image }) => z.object({
        title: z.string().max(50),
        slug: z.string(),
        time: z.number(),
        name: z.string(),
        pubDate: z.date(),
        metaTitle: z.string().max(60),
        metaDescription: z.string().max(160),
        characteristics: z.array(z.string().max(80)).max(5),
        details: z.array(
            z.object({
                title: z.string(),
                content: z.string(),
                icon: z.string(),
            })
        ).min(3), // Obligas a que al menos haya 3 para mantener el SEO
        category: z.enum(['Zapatillas', 'Combas', 'Calleras']),
        brand: z.string(),
        tags: z.array(z.string()).max(4),
        type: z.enum(['Comparativas', 'Reviews', 'Rankings', 'Guias de Solucion']),
        image: image(),
        rating: z.number(),
        reviewsCount: z.number(),
        amazonLink: z.string().url(),
        pros: z.array(z.string().max(80)).max(4),
        contras: z.array(z.string().max(80)).max(4),

    }),
});

export const collections = { blog };



