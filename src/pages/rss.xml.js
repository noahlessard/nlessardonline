import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'nlessard.online Project Blog',
    description: 'This page is a mix of a personal blog and a projects list. The entries range from personal thoughts and learnings to more substantial resume material. Its here to help you learn something, find inspiration, or learn more about me and hear my opinions.',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob(['./projects/*.mdx', '!./projects/temp-*.mdx']),
    ),
  });
}