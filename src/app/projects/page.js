import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    id: 1,
    type: 'video',
    src: 'https://player.vimeo.com/video/1117414686', 
    altText: 'Video Editing Project 1',
    description: 'An example of a recent video editing project with vfx.',
    href: '#',
    posterSrc: '/thumbnails/edit-project-1-thumb.jpg'
  },
  {
    id: 2,
    type: 'image',
    src: '/images/website-project-1.png',
    altText: 'Website Development Project 1',
    description: 'A church website built with HTML and CSS.',
    href: 'https://velankanniparish-mysore.netlify.app'
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 pt-20">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-6xl font-extrabold mb-12 text-center">
          <span className="text-white">My</span>{' '}
          <span className="text-green-400">Projects</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              type={project.type}
              src={project.src}
              altText={project.altText}
              description={project.description}
              href={project.href}
              posterSrc={project.posterSrc}
            />
          ))}
        </div>
      </div>
    </main>
  );
}