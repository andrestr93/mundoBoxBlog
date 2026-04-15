// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "src/images",
      publicFolder: ""
    }
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Posts de Blog",
        path: "src/content/blog",
        format: "mdx",
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "T\xEDtulo (H1)",
            isTitle: true,
            required: true,
            ui: {
              validate: (val) => val?.length > 50 ? "M\xE1ximo 50 caracteres" : void 0
            }
          },
          {
            type: "string",
            name: "metaTitle",
            label: "Meta Title (SEO)",
            ui: {
              validate: (val) => val?.length > 60 ? "M\xE1ximo 60 caracteres" : void 0
            }
          },
          {
            type: "string",
            name: "slug",
            label: "Slug (URL)",
            required: true
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description",
            ui: {
              component: "textarea",
              validate: (val) => val?.length > 160 ? "M\xE1ximo 160 caracteres" : void 0
            }
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Fecha de publicaci\xF3n"
          },
          {
            type: "number",
            name: "time",
            label: "Tiempo de lectura (min)"
          },
          {
            type: "string",
            name: "name",
            label: "Nombre del Producto"
          },
          {
            type: "string",
            name: "author",
            label: "Autor"
          },
          {
            type: "string",
            name: "category",
            label: "Categor\xEDa",
            options: ["Zapatillas", "Combas", "Calleras"]
          },
          {
            type: "string",
            name: "brand",
            label: "Marca"
          },
          {
            type: "string",
            name: "type",
            label: "Tipo de contenido",
            options: ["Comparativa", "Review", "Ranking", "Guia de Solucion"]
          },
          {
            type: "image",
            name: "image",
            label: "Imagen de portada"
          },
          {
            type: "number",
            name: "rating",
            label: "Puntuaci\xF3n (Rating)"
          },
          {
            type: "number",
            name: "reviewCount",
            label: "N\xFAmero de rese\xF1as"
          },
          {
            type: "string",
            name: "amazonLink",
            label: "Link de Amazon"
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              validate: (val) => val?.length > 4 ? "M\xE1ximo 4 tags" : void 0
            }
          },
          {
            type: "string",
            name: "characteristics",
            label: "Caracter\xEDsticas principales",
            list: true,
            ui: {
              validate: (val) => val?.length > 5 ? "M\xE1ximo 5 caracter\xEDsticas" : void 0
            }
          },
          {
            type: "string",
            name: "pros",
            label: "Pros",
            list: true,
            ui: {
              validate: (val) => val?.length > 4 ? "M\xE1ximo 4 pros" : void 0
            }
          },
          {
            type: "string",
            name: "contras",
            label: "Contras",
            list: true,
            ui: {
              validate: (val) => val?.length > 4 ? "M\xE1ximo 4 contras" : void 0
            }
          },
          {
            type: "object",
            name: "details",
            label: "Secciones de Detalles",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title }),
              validate: (val) => !val || val.length < 3 ? "M\xEDnimo 3 secciones requeridas" : void 0
            },
            fields: [
              { type: "string", name: "title", label: "T\xEDtulo" },
              { type: "string", name: "content", label: "Contenido", ui: { component: "textarea" } },
              { type: "string", name: "icon", label: "Icono" }
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido del Post",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
