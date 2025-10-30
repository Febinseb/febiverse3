import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOJsonLd from './SEOJsonLd';


// ✅ Metadata used by Next.js (SEO + sharing)
export const metadata = {
  metadataBase: new URL('https://febiverse.vercel.app'),
  title: 'Febiverse — Febin Sebastian',
  description:
    'Febin Sebastian is a teenager redefining creativity. He is a professional video editor, website developer, and musician. Febin is also the creator of Febiverse, a universe of innovation, creativity, visuals, and technology.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    url: 'https://febiverse.vercel.app',
    title: 'Febiverse — Febin Sebastian',
    description:
      'Febin Sebastian is a teenage creator, video editor, developer, and musician, building the Febiverse: a universe of creativity, visuals, and code.',
    siteName: 'Febiverse',
    images: [
      {
        url: '/images/febin-sebastian.jpg',
        width: 1200,
        height: 1200,
        alt: 'Febin Sebastian — portrait',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Febiverse — Febin Sebastian',
    description:
      'Teenage creator, video editor, developer, and musician, discover Febin Sebastian’s Febiverse.',
    images: ['/images/febin-sebastian.jpg'],
    creator: '@febiverse',
  },
  alternates: {
    canonical: 'https://febiverse.vercel.app',
  },
  // ✅ Put your Search Console code here (NO <meta> tag)
  verification: {
    google: 'vSVkTE7zazlAYnMct99F17dlaeyo1WFdJKY4egIT41Y',
    // yahoo: '', yandex: '', me: ''  // (optional others)
  },
};

// ✅ Default export — must return <html> and <body>
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <SEOJsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
