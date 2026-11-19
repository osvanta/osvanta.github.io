// Addresses used in more than one place.
export const PRODUCT = '/products/bus-log-analyzer/';
export const HELP = `${PRODUCT}help/`;
export const DOWNLOAD = `${PRODUCT}download/`;
export const FEATURES = `${PRODUCT}features/`;

// The two help topics other pages link to by name. The application's F1 key
// opens /bus-log-analyzer/getting-started/, which redirects to the first.
export const GETTING_STARTED = `${HELP}getting-started/`;
export const SECURITY = `${HELP}security-and-data/`;

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

// A function, not a constant: a topic imports its layout, which imports this
// file, so the topics' frontmatter is not there yet while this file loads.
export function getHelpTopics(): HelpTopic[] {
  return Object.entries(files)
    .map(([path, mod]) => {
      const fm = (mod as any).frontmatter;
      const slug = path.split('/').pop()!.replace(/\.md$/, '');
      return { title: fm.title, summary: fm.summary, order: fm.order, url: `${HELP}${slug}/` };
    })
    .sort((a, b) => a.order - b.order);
}

export const HELP_INDEX = `${HELP}a-z/`;

export interface IndexEntry {
  text: string;
  url: string;
  topic: string;
}

// Section headings that say nothing about their content out of context.
const NOT_INDEXED = new Set(['Next', 'Summary', 'Before you start', 'Where to go from here', 'Examples']);

// The A to Z index of Help: every topic and every section heading in a topic,
// by name. It is built from the pages, so it cannot go out of date.
export function getHelpIndex(): IndexEntry[] {
  const entries: IndexEntry[] = [];
  for (const [path, mod] of Object.entries(files)) {
    const { frontmatter, getHeadings } = mod as any;
    const url = `${HELP}${path.split('/').pop()!.replace(/\.md$/, '')}/`;
    entries.push({ text: frontmatter.title, url, topic: '' });
    for (const heading of getHeadings() as { depth: number; slug: string; text: string }[]) {
      // "3. Decode" is indexed as "Decode".
      const text = heading.text.replace(/^\d+\.\s*/, '');
      if (heading.depth > 3 || NOT_INDEXED.has(text) || text === frontmatter.title) continue;
      entries.push({ text, url: `${url}#${heading.slug}`, topic: frontmatter.title });
    }
  }
  return entries.sort((a, b) => a.text.localeCompare(b.text, 'en', { sensitivity: 'base' }));
}
