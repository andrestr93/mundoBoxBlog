import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap"; // Debe aparecer aquí
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
  // SUSTITUYE POR TU DOMINIO REAL
  site: "https://mundobox.blog",

  vite: {
    plugins: [tailwindcss()],
  },

  // El orden de las integraciones no suele afectar, pero déjalas así:
  integrations: [mdx(), sitemap()],
  image: {
    // 2. Esto le dice a Astro: "No proceses imágenes en el Worker"
    service: passthroughImageService(),
  },
});
