'use client';

import { useState, useEffect } from 'react'; // Import useEffect
import HeroContent from '@/components/HeroContent';
import Loader from '@/components/Loader';

export default function HomePage() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  // Use a fallback timer to hide the loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 5000); // Set a timeout of 5 seconds

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty array ensures this runs only once on mount

  return (
    <>
      {!videoLoaded && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black z-50">
          <Loader />
        </div>
      )}

      <main className={`relative h-screen w-full overflow-hidden transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={handleVideoLoad} // The primary way to load
          className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[1]"></div>

        <HeroContent />
      </main>
    </>
  );
}