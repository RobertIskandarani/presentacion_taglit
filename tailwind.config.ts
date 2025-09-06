import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'rubik-mono': ['Rubik Mono One', 'monospace'],
        'rubik-doodle': ['Rubik Doodle Shadow', 'system-ui'],
      },
    },
  },
} satisfies Config;
