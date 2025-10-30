export function GET() {
  return new Response(
`User-agent: *
Allow: /

Sitemap: https://febiverse.vercel.app/sitemap.xml
`, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
