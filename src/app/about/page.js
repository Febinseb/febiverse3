import Image from 'next/image';
import Link from 'next/link';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 pt-20">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', item: 'https://febiverse.vercel.app/' },
          { name: 'About', item: 'https://febiverse.vercel.app/about' },
        ]}
      />
      <div className="max-w-4xl mx-auto flex flex-col items-start space-y-8">
        <h1 className="text-6xl font-extrabold">
          <span className="text-white">About</span>{' '}
          <span className="text-green-400">Me</span>
        </h1>

        {/* Portrait Image */}
        <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden">
          <Image
            src="/images/febin-sebastian.jpg"
            alt="Febin Sebastian portrait"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Conversational Intro */}
        <p className="text-lg font-light leading-relaxed">
          Hey there 👋 I’m <span className="font-semibold text-green-400">Febin Sebastian</span> -
          a teenager who loves creating things that look, sound, and feel awesome.
          I started <span className="text-green-400 font-semibold">Febiverse</span> as my own
          little corner of the internet, a place where creativity and technology
          collide.
        </p>

        <p className="text-lg font-light leading-relaxed">
          I’ve been editing videos since I was barely a kid, building websites that
          actually work (and look clean), and making music that keeps me sane while
          doing it all 🎧. Every part of Febiverse reflects what I love doing,
          crafting ideas into something real.
        </p>

        <p className="text-lg font-light leading-relaxed">
          My goal? To inspire people who think they’re “too young” or “not ready yet.”
          If you’ve got a vision, it doesn’t matter how old you are, just start.
          I’m building Febiverse to prove that.
        </p>

        {/* Contact Button */}
        <Link
          href="mailto:febiverse@gmail.com"
          className="mt-4 px-6 py-3 border-2 border-white text-white font-bold text-lg hover:bg-green-400 hover:text-black transition-colors duration-300 rounded-full"
        >
          Let&apos;s Talk!
        </Link>
      </div>
    </main>
  );
}
