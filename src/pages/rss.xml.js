import rss from '@astrojs/rss';
import { posts } from '../data/site.js';

export function GET(context) {
  return rss({
    title: 'Abiotov · Writing',
    description: 'Notes on building AI systems in production.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.title,
      pubDate: new Date(p.date),
      description: p.excerpt,
      link: p.href,
    })),
    customData: '<language>en</language>',
  });
}
