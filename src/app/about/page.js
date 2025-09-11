import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="flex flex-col items-start pt-20 max-w-4xl mx-auto">
       <h1 className="text-6xl font-extrabold mb-4">
  <span className="text-white">About</span>{' '}
  <span className="text-green-400">Me</span>
</h1>
        <p className="text-lg font-light leading-relaxed">
          Hi, I&apos;m Febin Sebastian, the creator of Febiverse. I&apos;m an editor who can bring any video, photo, or media project to life, and a frontend developer passionate about building clean, modern, and mobile-friendly websites. Music is another side of my creativity, and in my free time I enjoy gaming, which fuels my imagination. I believe in strong leadership and effective communication, which has shaped me into a confident speaker and team player. Alongside my services in editing and website development, I&apos;m also working on an exciting AI project called June, a personal AI assistant. Through Febiverse, I bring together creativity, technology, and innovation to help others turn their ideas into reality.
        </p>

        
        <Link 
          href="mailto:febiverse@gmail.com" 
          className="mt-8 px-6 py-3 border-2 border-white text-white font-bold text-lg hover:bg-green-400 hover:text-black transition-colors duration-300"
        >
          Let&apos;s Talk!
        </Link>
      </div>
    </main>
  );
}