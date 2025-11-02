// app/about/page.js
import Image from 'next/image';
import Link from 'next/link';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

const SITE = 'https://febiverse.tech';
const PERSON_ID = `${SITE}#person`;

export const metadata = {
  title: 'About - Febin Sebastian',
  description:
    'About Febin Sebastian - Video Editor, Frontend Developer, and Musician. Creator of Febiverse.',
  alternates: { canonical: `${SITE}/about` },
  openGraph: { url: `${SITE}/about` },
};

export default function AboutPage() {
  // Images live in /public/images — rename these to your actual files
  const gallery = [
    { src: '/images/about-1.jpg', alt: 'Febin editing timeline' },
    { src: '/images/about-2.jpg', alt: 'Frontend dev workspace' },
    { src: '/images/about-3.jpg', alt: 'Music production setup' },
    { src: '/images/about-4.jpg', alt: 'Behind the scenes filming' },
    { src: '/images/about-5.jpg', alt: 'Color grading session' },
    { src: '/images/about-6.jpg', alt: 'UI mockup preview' },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white p-8 pt-20">
      {/* soft decorative glow */}

      {/* JSON-LD: tell Google this page profiles the Person entity on the home URL */}
      <script
        type="application/ld+json"
        // ProfilePage ties this page to your Person entity defined site-wide
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            url: `${SITE}/about`,
            name: 'About — Febin Sebastian',
            about: { '@id': PERSON_ID },
            primaryTopic: { '@id': PERSON_ID },
          }),
        }}
      />

      <BreadcrumbJsonLd
        items={[
          { name: 'Home', item: `${SITE}/` },
          { name: 'About', item: `${SITE}/about` },
        ]}
      />

      <div className="max-w-4xl mx-auto flex flex-col items-start space-y-8">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          <span className="text-white">About</span>{' '}
          <span className="text-green-400">Me</span>
        </h1>

   {/* Photo Album (overlapping circles) */}
<div className="relative w-full max-w-xl mx-auto h-72 sm:h-80 md:h-96">
  {/* big circle - left */}
  <div className="group absolute left-0 top-0 w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60
                  rounded-full overflow-hidden ring-2 ring-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]
                  transition-transform duration-300 hover:scale-[1.03]">
    {/* decorative square outline behind */}
    <span className="pointer-events-none absolute -inset-3 rounded-xl border-2 border-violet-400/60"></span>
    <Image
      src="/images/album-1.jpg"   // e.g. keep your /images/febin-sebastian.jpg here
      alt="Febin Sebastian — portrait"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 12rem, (max-width: 1024px) 15rem, 18rem"
      priority
    />
  </div>

  {/* small circle - upper middle */}
  <div className="absolute left-[57%] top-6 sm:top-8 -translate-x-1/2
                  w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
                  rounded-full overflow-hidden ring-2 ring-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]
                  transition-transform duration-300 hover:scale-[1.05]">
    <Image
      src="/images/album-2.png"
      alt="Febin — event photo"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 6rem, (max-width: 1024px) 7rem, 8rem"
    />
  </div>

  {/* medium circle - bottom center/left */}
  <div className="absolute left-12 sm:left-40 bottom-7
                  w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36
                  rounded-full overflow-hidden ring-2 ring-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]
                  transition-transform duration-300 hover:scale-[1.05]">
    <Image
      src="/images/album-3.jpg"
      alt="Febin — studio / BTS"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 8rem, (max-width: 1024px) 9rem, 10rem"
    />
  </div>

  {/* large circle - bottom right */}
  <div className="absolute right-2 bottom-7
                  w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64
                  rounded-full overflow-hidden ring-2 ring-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]
                  transition-transform duration-300 hover:scale-[1.03]">
    <Image
      src="/images/album-4.jpg"
      alt="Febin — outdoor portrait"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 11rem, (max-width: 1024px) 14rem, 16rem"
    />
  </div>
</div>
{/* JSON-LD: Image gallery for Google Images */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',          // alias of CollectionPage of images
      name: 'Febin Sebastian Photo Album',
      url: 'https://febiverse.tech/about',
      about: { '@id': 'https://febiverse.tech#person' },
      image: [
        {
          '@type': 'ImageObject',
          contentUrl: 'https://febiverse.tech/images/album-1.jpg',
          url: 'https://febiverse.tech/images/album-1.jpg',
          caption: 'Febin Sebastian — portrait',
          author: { '@type': 'Person', name: 'Febin Sebastian' },
          creditText: 'Febiverse',
        },
        {
          '@type': 'ImageObject',
          contentUrl: 'https://febiverse.tech/images/album-2.jpg',
          url: 'https://febiverse.tech/images/album-2.jpg',
          caption: 'Event photo',
          author: { '@type': 'Person', name: 'Febin Sebastian' },
          creditText: 'Febiverse',
        },
        {
          '@type': 'ImageObject',
          contentUrl: 'https://febiverse.tech/images/album-3.jpg',
          url: 'https://febiverse.tech/images/album-3.jpg',
          caption: 'Studio / BTS',
          author: { '@type': 'Person', name: 'Febin Sebastian' },
          creditText: 'Febiverse',
        },
        {
          '@type': 'ImageObject',
          contentUrl: 'https://febiverse.tech/images/album-4.jpg',
          url: 'https://febiverse.tech/images/album-4.jpg',
          caption: 'Outdoor portrait',
          author: { '@type': 'Person', name: 'Febin Sebastian' },
          creditText: 'Febiverse',
        },
      ],
    }),
  }}
/>


        {/* Intro */}
        <p className="text-lg font-light leading-relaxed">
          Hey there 👋 I’m <span className="font-semibold text-green-400">Febin Sebastian</span> - a
          teenager who loves creating things that look, sound, and feel awesome. I started{' '}
          <span className="text-green-400 font-semibold">Febiverse</span> as my own little corner of
          the internet, where creativity and technology collide.
        </p>

        <p className="text-lg font-light leading-relaxed">
          I’ve been editing videos since I was barely a kid, building websites that actually work
          (and look clean), and making music that keeps me sane while doing it all 🎧. Every part of
          Febiverse reflects what I love doing, crafting ideas into something real.
        </p>

        <p className="text-lg font-light leading-relaxed">
          My goal? To inspire people who think they’re “too young” or “not ready yet.” If you’ve got
          a vision, it doesn’t matter how old you are, just start. I’m building Febiverse to prove
          that.
        </p>

        {/* Contact */}
        <Link
          href="mailto:febiverse@gmail.com"
          className="mt-2 inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-bold text-lg rounded-full transition-colors duration-300 hover:bg-green-400 hover:text-black"
        >
          Let&apos;s Talk!
        </Link>
      </div>
    </main>
  );
}
