import typography from '@tailwindcss/typography'; // En Astro suele usarse import

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
