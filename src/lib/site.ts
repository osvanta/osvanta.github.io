// Addresses used in more than one place.
export const PRODUCT = '/products/bus-log-analyzer/';
export const HELP = `${PRODUCT}help/`;
export const DOWNLOAD = `${PRODUCT}download/`;
export const FEATURES = `${PRODUCT}features/`;

// The Getting started guide the application's F1 key opens. It is published by
// the application's own repository, not by this site.
export const GUIDE = '/bus-log-analyzer/';

export const REPO = 'https://github.com/osvanta/bus-log-analyzer';
export const RELEASES = `${REPO}/releases/latest`;
export const YOUTUBE = 'https://www.youtube.com/@osvanta';
export const EMAIL = 'support@osvanta.com';

export interface HelpTopic {
  title: string;
  summary: string;
  order: number;
  url: string;
}

// Every Markdown file in the help folder is a topic; its frontmatter gives the
// title, the one-line summary and its place in the list.
const files = import.meta.glob('../pages/products/bus-log-analyzer/help/*.md', { eager: true });

export const helpTopics: HelpTopic[] = Object.entries(files)
  .map(([path, mod]) => {
    const fm = (mod as any).frontmatter;
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    return { title: fm.title, summary: fm.summary, order: fm.order, url: `${HELP}${slug}/` };
  })
  .sort((a, b) => a.order - b.order);
