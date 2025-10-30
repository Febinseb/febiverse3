'use client';

import { useState, useEffect } from 'react';
import HeroContent from '@/components/HeroContent';
import Loader from '@/components/Loader';
import SEOJsonLd from '@/components/SEOJsonLd';

export default function HomePage() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <SEOJsonLd />
      {!videoLoaded && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black z-50">
          <Loader />
        </div>
      )}

      <main
        className={`relative h-screen w-full overflow-hidden transition-opacity duration-500 ${
          videoLoaded ? 'opacity-100' : 'opacity-50'
        }`}
      >
        <div className="absolute inset-0 z-[-1]">
          <video
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlayThrough={() => setVideoLoaded(true)}
            onError={(e) => {
              console.error('video error', e);
              setVideoLoaded(true);
            }}
          >
            <source src="https://github.com/Febinseb/febiverse3/releases/download/v1.0/hero-video.mp4" type="video/mp4" />
            <source src="/videos/hero-video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-[1]" />

        <HeroContent />
      </main>
    </>
  );
}
