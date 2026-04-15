import { defineConfig } from "tinacms";

export default defineConfig({
    branch: "main",
    clientId: process.env.TINA_CLIENT_ID,
    token: process.env.TINA_TOKEN,
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "src/images",
            publicFolder: "",
        },
    },
    schema: {
        collections: [
            {
                name: "blog",
                label: "Posts de Blog",
                path: "src/content/blog",
                format: "mdx",
                ui: {
                    router: ({ document }) => `/blog/${document._sys.filename}`,
                },
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Título (H1)",
                        isTitle: true,
                        required: true,
                        ui: {
                            validate: (val) => (val?.length > 50 ? "Máximo 50 caracteres" : undefined)
                        }
                    },
                    {
                        type: "string",
                        name: "metaTitle",
                        label: "Meta Title (SEO)",
                        ui: {
                            validate: (val) => (val?.length > 60 ? "Máximo 60 caracteres" : undefined)
                        }
                    },
                    {
                        type: "string",
                        name: "slug",
                        label: "Slug (URL)",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "metaDescription",
                        label: "Meta Description",
                        ui: {
                            component: "textarea",
                            validate: (val) => (val?.length > 160 ? "Máximo 160 caracteres" : undefined)
                        }
                    },
                    {
                        type: "datetime",
                        name: "pubDate",
                        label: "Fecha de publicación",
                    },
                    {
                        type: "number",
                        name: "time",
                        label: "Tiempo de lectura (min)",
                    },
                    {
                        type: "string",
                        name: "name",
                        label: "Nombre del Producto",
                    },
                    {
                        type: "string",
                        name: "author",
                        label: "Autor",
                    },
                    {
                        type: "string",
                        name: "category",
                        label: "Categoría",
                        options: ["Zapatillas", "Combas", "Calleras"],
                    },
                    {
                        type: "string",
                        name: "brand",
                        label: "Marca",
                    },
                    {
                        type: "string",
                        name: "type",
                        label: "Tipo de contenido",
                        options: ["Comparativa", "Review", "Ranking", "Guia de Solucion"],
                    },
                    {
                        type: "image",
                        name: "image",
                        label: "Imagen de portada",
                    },
                    {
                        type: "number",
                        name: "rating",
                        label: "Puntuación (Rating)",
                    },
                    {
                        type: "number",
                        name: "reviewCount",
                        label: "Número de reseñas",
                    },
                    {
                        type: "string",
                        name: "amazonLink",
                        label: "Link de Amazon",
                    },
                    {
                        type: "string",
                        name: "tags",
                        label: "Tags",
                        list: true,
                        ui: {
                            validate: (val) => (val?.length > 4 ? "Máximo 4 tags" : undefined)
                        }
                    },
                    {
                        type: "string",
                        name: "characteristics",
                        label: "Características principales",
                        list: true,
                        ui: {
                            validate: (val) => (val?.length > 5 ? "Máximo 5 características" : undefined)
                        }
                    },
                    {
                        type: "string",
                        name: "pros",
                        label: "Pros",
                        list: true,
                        ui: {
                            validate: (val) => (val?.length > 4 ? "Máximo 4 pros" : undefined)
                        }
                    },
                    {
                        type: "string",
                        name: "contras",
                        label: "Contras",
                        list: true,
                        ui: {
                            validate: (val) => (val?.length > 4 ? "Máximo 4 contras" : undefined)
                        }
                    },
                    {
                        type: "object",
                        name: "details",
                        label: "Secciones de Detalles",
                        list: true,
                        ui: {
                            itemProps: (item) => ({ label: item?.title }),
                            validate: (val) => (!val || val.length < 3 ? "Mínimo 3 secciones requeridas" : undefined)
                        },
                        fields: [
                            { type: "string", name: "title", label: "Título" },
                            { type: "string", name: "content", label: "Contenido", ui: { component: "textarea" } },
                            { type: "string", name: "icon", label: "Icono" },
                        ],
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Contenido del Post",
                        isBody: true,
                    },
                ],
            },
        ],
    },
});