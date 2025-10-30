export default function sitemap() {
  const base = 'https://febiverse.vercel.app';
  const now = new Date().toISOString();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/collaborate`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
