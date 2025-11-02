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

        {/* Portrait */}
        <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10">
          <Image
            src="/images/febin-sebastian.jpg"
            alt="Febin Sebastian portrait"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

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

        {/* Circular Gallery */}
        <section className="w-full pt-8">
          <h2 className="text-2xl font-semibold mb-4">Snapshots</h2>

          <ul className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
            {gallery.map((img, i) => (
              <li key={i} className="flex items-center justify-center">
                <div
                  className="relative aspect-square w-36 sm:w-40 md:w-44 rounded-full overflow-hidden
                             ring-1 ring-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]
                             transition-transform duration-300 ease-out hover:scale-105"
                  title={img.alt}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 9rem, (max-width: 768px) 10rem, 11rem"
                  />
                </div>
              </li>
            ))}
          </ul>

          <p className="sr-only">
            Gallery of circular photos showing Febin Sebastian at work — editing, coding, and music.
          </p>
        </section>
      </div>
    </main>
  );
}
