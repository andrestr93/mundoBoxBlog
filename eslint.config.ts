import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  // 1. IGNORES GLOBALES
  // Agregamos src/content/ para que no intente parsear los MDX que dan error
  {
    ignores: [
      "**/dist/**",
      "**/.astro/**",
      "**/node_modules/**",
      "**/.wrangler/**",
      "**/eslint.config.js",
      "src/content/**/*.mdx",
      "src/content/**/*.md",
      "**/*.d.ts"
    ]
  },

  // 2. Configuración base de JS/TS
  ...tseslint.configs.recommended,

  // 3. Configuración de Astro
  ...eslintPluginAstro.configs.recommended,

  // 4. Reglas personalizadas para archivos de código
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,astro}"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "warn"
    }
  }
];