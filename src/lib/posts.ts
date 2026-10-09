import { getCollection } from "astro:content";

/**
 * Devuelve los artículos publicables.
 * - En producción (pnpm build) se excluyen los que tienen `draft: true`.
 * - En desarrollo (pnpm dev) se muestran todos, para poder previsualizar borradores.
 */
export async function getPublishedPosts() {
    return getCollection(
        "blog",
        ({ data }) => import.meta.env.DEV || data.draft !== true,
    );
}