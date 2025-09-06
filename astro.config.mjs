// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    // @ts-ignore - Tailwind 4 Vite plugin compatibility
    plugins: [tailwindcss()],
  },
  output: 'hybrid',
  adapter: vercel(),
});
