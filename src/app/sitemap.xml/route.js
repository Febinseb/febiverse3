export async function GET() {
  const baseUrl = 'https://febiverse.vercel.app';
  const pages = ['', 'about', 'projects', 'services', 'collaborate'];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${baseUrl}/${p}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${p === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${p === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
