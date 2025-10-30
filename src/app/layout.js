import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ✅ Metadata used by Next.js (SEO + sharing)
export const metadata = {
  metadataBase: new URL('https://febiverse.vercel.app'),
  title: 'Febiverse - Febin Sebastian',
  description:
    'Meet Febin Sebastian — a teenager redefining creativity. He is a professional video editor, website developer, and musician. Febin is the creator of Febiverse, a universe of innovation, visuals, and technology.',
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
      'Teenage creator, video editor, developer, and musician — discover Febin Sebastian’s Febiverse.',
    images: ['/images/febin-sebastian.jpg'],
    creator: '@febiverse',
  },
  alternates: {
    canonical: 'https://febiverse.vercel.app',
  },
};

// ✅ Default export — must return <html> and <body>
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
