export async function GET() {
  const images = [
    { url: 'https://www.kumararanya.in/assets/images/scenic_villa.png', caption: 'Aranya NA Bungalow Plots Scenic Villa View' },
    { url: 'https://www.kumararanya.in/assets/images/clubhouse.jpg', caption: '2.5 Acre Grand Clubhouse at Aranya' },
    // A dynamic engine could populate hundreds of images here
  ];

  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://www.kumararanya.in/</loc>
    ${images.map(img => `
    <image:image>
      <image:loc>${img.url}</image:loc>
      <image:caption>${img.caption}</image:caption>
    </image:image>
    `).join('')}
  </url>
</urlset>`;

  return new Response(sitemapXML, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
