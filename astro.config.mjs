import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Personal site served at the domain root (https://abiotov.github.io).
export default defineConfig({
  site: 'https://abiotov.github.io',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: false,
    },
  },
});
