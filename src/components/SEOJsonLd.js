'use client';
import Script from 'next/script';

export default function SEOJsonLd() {
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Febin Sebastian',
      alternateName: [
  'Febin',
  'Febin S',
  'Febin Sebastian',
  'Febin Sebastian India',
  'Febin Febiverse',
  'Febiverse Febin',
  'Febiverse Official',
  'Febin the Creator',
],

      image: 'https://febiverse.vercel.app/images/febin-sebastian.jpg',
      url: 'https://febiverse.vercel.app/',
      jobTitle: ['Video Editor', 'Frontend Developer', 'Musician'],
      worksFor: {
        '@type': 'Organization',
        name: 'Febiverse',
        url: 'https://febiverse.vercel.app/',
      },
      sameAs: [
        'https://www.instagram.com/febiverse',
        'https://www.linkedin.com/in/febin-sebastian-3a589a337/',
        'https://github.com/Febinseb',
        'https://youtube.com/@febinnnnn_n',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Febiverse',
      url: 'https://febiverse.vercel.app/',
      logo: 'https://febiverse.vercel.app/favicon.ico',
      founder: { '@type': 'Person', name: 'Febin Sebastian' },
    },
  ];

  return (
    <Script
      id="seo-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
