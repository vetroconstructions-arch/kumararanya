import { getAllPosts } from '../../lib/mdx';

export async function GET() {
  const posts = getAllPosts();
  
  // Google News Sitemaps should only include posts published in the last 48 hours.
  // For this demonstration/project, we will include all recent posts.
  const DOMAIN = 'https://www.kumararanya.in';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${posts.map(post => `
  <url>
    <loc>${DOMAIN}/blog/${post.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Kumar Aranya Insights</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${new Date(post.date).toISOString()}</news:publication_date>
      <news:title>${post.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</news:title>
    </news:news>
  </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
