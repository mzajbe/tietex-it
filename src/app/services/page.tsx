import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Services - Tietex IT',
};

export default function ServicesPage() {
  const services = [
    { title: 'Custom Web Development', desc: 'Scalable and performant web applications.' },
    { title: 'E-commerce Solutions', desc: 'Complete online store implementation & integrations.' },
    { title: 'UI/UX Design', desc: 'User-first design to increase conversions.' },
    { title: 'Maintenance & Support', desc: 'Reliable long-term support and improvements.' },
  ];

  return (
    <main>
      <section className="py-24 text-center bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">We deliver end-to-end web solutions tailored to your business.</p>
          <div className="mt-6">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">Request a Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl border bg-background shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
