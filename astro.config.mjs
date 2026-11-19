// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// /bus-log-analyzer/ was the user guide's address, and the application's F1
// key and its Help menu open it. Its pages are now help topics of this site,
// and the redirects below keep every former address working. Never remove
// them: installed copies of the application hold those addresses.
export default defineConfig({
  site: 'https://osvanta.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // /download/ is a fixed address that shipped builds and documents may hold.
  redirects: {
    '/download/': '/products/bus-log-analyzer/download/',
    '/bus-log-analyzer/': '/products/bus-log-analyzer/help/',
    '/bus-log-analyzer/getting-started/': '/products/bus-log-analyzer/help/getting-started/',
    '/bus-log-analyzer/keyboard-shortcuts/': '/products/bus-log-analyzer/help/keyboard-shortcuts/',
    '/bus-log-analyzer/help/': '/products/bus-log-analyzer/help/troubleshooting/',
    '/bus-log-analyzer/security-and-data/': '/products/bus-log-analyzer/help/security-and-data/',
    // The first help topic was split in two; its address was already public.
    '/products/bus-log-analyzer/help/install-and-first-start/':
      '/products/bus-log-analyzer/help/download-and-start/',
  },
});
