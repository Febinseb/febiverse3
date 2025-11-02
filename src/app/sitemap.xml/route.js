// app/sitemap/route.js
export async function GET() {
  // ✅ use your verified custom domain
  const base = 'https://febiverse.tech';

  // ✅ list all public routes (match your folder names)
  // if your folder is actually “colaborate” (one L), keep that spelling below.
  const pages = ['', 'about', 'projects', 'services', 'colaborate', 'order'];

  const now = new Date().toISOString();

  // ✅ generate XML dynamically
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${base}${p ? `/${p}` : ''}</loc>
    <lastmod>${now}</lastmod>
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
