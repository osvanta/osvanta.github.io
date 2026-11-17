// @ts-check
import { defineConfig } from 'astro/config';

// The user guide is published by the app repository at /bus-log-analyzer/.
// Never add a page or a public/ folder with that name here: it would shadow it.
export default defineConfig({
  site: 'https://osvanta.com',
  trailingSlash: 'always',
  // /download/ is a fixed address that shipped builds and documents may hold.
  redirects: {
    '/download/': '/products/bus-log-analyzer/download/',
  },
});
