import ShortAbout from '@/components/home/ShortAbout';
import PrestigiousClients from '@/components/home/PrestigiousClients';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'About - Tietex IT',
};

export default function AboutPage() {
  return (
    <main>
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">About Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We build secure, scalable, and beautiful web products for ambitious companies. Our mission is to empower businesses with modern web technology and product-driven design.
          </p>
          <div className="mt-8">
            <Link href="/#contact">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">Get In Touch</Button>
            </Link>
          </div>
        </div>
      </section>

      <ShortAbout />

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-muted-foreground">We help businesses scale by building tailored web solutions that combine fast performance with thoughtful design.</p>
      </section>

      <PrestigiousClients />
    </main>
  );
}
