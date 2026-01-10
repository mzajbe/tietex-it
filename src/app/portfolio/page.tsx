import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Portfolio - Tietex IT',
};

export default function PortfolioPage() {
  const projects = new Array(8).fill(0).map((_, i) => ({
    title: `Project ${i + 1}`,
    desc: 'A short summary highlighting the challenge and the outcome.',
  }));

  return (
    <main>
      <section className="py-24 text-center bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Our Portfolio</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Some of our recent work that demonstrates the impact we deliver.</p>
          <div className="mt-6">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">Discuss a Project</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border bg-background hover:shadow-lg transition">
              <div className="h-44 bg-slate-100 flex items-center justify-center text-muted-foreground">Preview</div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
