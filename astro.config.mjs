// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Nota: Cambiaremos esta URL luego cuando crees tu proyecto en Pages de verdad
  site: "https://mundoboxblog.andrestr93.workers.dev/",
  output: "static", // 100% estático
  base: "/",
  build: {
    assets: "assets", // Mantenemos tu genial idea de quitar el guion bajo
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
  image: {
    service: {
      // Usamos Sharp en tu PC, las imágenes subirán ya optimizadas a Cloudflare
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
