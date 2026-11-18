// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The user guide is published by the app repository at /bus-log-analyzer/.
// Never add a page or a public/ folder with that name here: it would shadow it.
export default defineConfig({
  site: 'https://osvanta.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // /download/ is a fixed address that shipped builds and documents may hold.
  redirects: {
    '/download/': '/products/bus-log-analyzer/download/',
    // The first help topic was split in two; its address was already public.
    '/products/bus-log-analyzer/help/install-and-first-start/':
      '/products/bus-log-analyzer/help/download-and-start/',
  },
});
