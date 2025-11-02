// app/sitemap.js
const SITE = 'https://febiverse.tech';

export default function sitemap() {
  const now = new Date().toISOString();

  return [
    { url: `${SITE}/`,           lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE}/about`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/projects`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/services`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // NOTE: your folder is /colaborate (one “l”). Keep that here unless you rename it.
    { url: `${SITE}/collaborate`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/order`,      lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
