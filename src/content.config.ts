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
        updatedDate: z.date().optional(),
        metaTitle: z.string().max(80),
        metaDescription: z.string().max(160),
        characteristics: z.array(z.string().max(80)).max(5).default([]),
        author: z.string(),
        category: z.enum(['Zapatillas', 'Combas', 'Calleras', 'Suplementos']),
        brand: z.string().optional(),
        type: z.enum(['Análisis', 'Guia de Solución', 'Comparativa']),
        image: image(),
        // Campos de producto: obligatorios en los "Análisis" (un solo producto)
        rating: z.number().optional(),
        reviewCount: z.number().optional(),
        linkAfiliates: z.string().optional(),
        pros: z.array(z.string().max(80)).max(4).default([]),
        contras: z.array(z.string().max(80)).max(4).default([]),
        // Lista de productos: solo para las "Comparativa" (rankings)
        products: z
            .array(
                z.object({
                    id: z.string(),
                    name: z.string(),
                    brand: z.string(),
                    bestFor: z.string().max(60),
                    linkAfiliates: z.string(),
                    image: image().optional(),
                    reviewUrl: z.string().optional(),
                    pros: z.array(z.string().max(80)).max(4),
                    contras: z.array(z.string().max(80)).max(4),
                }),
            )
            .optional(),

    }).superRefine((data, ctx) => {
        if (data.type === 'Análisis') {
            for (const field of ['brand', 'rating', 'reviewCount', 'linkAfiliates'] as const) {
                if (data[field] === undefined) {
                    ctx.addIssue({ code: 'custom', path: [field], message: `"${field}" es obligatorio en los análisis` });
                }
            }
        }
        if (data.type === 'Comparativa' && !data.products?.length) {
            ctx.addIssue({ code: 'custom', path: ['products'], message: 'Las comparativas necesitan al menos un producto' });
        }
    }),
});

export const collections = { blog };



