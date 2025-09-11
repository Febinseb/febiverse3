import Card from '@/components/Card';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 pt-20">
      <div className="max-w-6xl mx-auto py-12">
        <h1 className="text-6xl font-extrabold mb-12 text-center">
  <span className="text-white">Services</span>{' '}
  <span className="text-green-400">Offered</span>
</h1>

        <div className="grid md:grid-cols-2 gap-8 px-4">
          <Card
            title="Editing"
            description="Expert video editing, color grading, and motion graphics for your projects."
            href="/order?service=editing"
          />
          <Card
            title="Website Development"
            description="Modern, responsive, and high-performance websites built with the latest technologies."
            href="/order?service=webdev"
          />
        </div>
      </div>
    </main>
  );
}