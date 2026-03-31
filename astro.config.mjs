// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://mundoboxblog.andrestr93.workers.dev/",
  output: "static",
  base: "/", // Asegura que todo parta de la raíz
  adapter: cloudflare({
    imageService: "passthrough",
  }),
  build: {
    // Aquí le decimos a Astro: "No crees la carpeta _astro, crea una llamada assets"
    assets: "assets",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), sitemap()],
  image: {
    // Esto le dice a Astro: "Optimiza tú las imágenes usando Sharp
    // durante el build, no le pidas nada a Cloudflare luego"
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
