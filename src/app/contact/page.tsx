import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Contact - Tietex IT',
};

export default function ContactPage() {
  return (
    <main>
      <section className="py-24 text-center bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Get in touch to discuss your next project or request a quote.</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 max-w-2xl">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input className="w-full rounded-md border px-3 py-2" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input className="w-full rounded-md border px-3 py-2" placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea className="w-full rounded-md border px-3 py-2 h-32" placeholder="Tell us about your project"></textarea>
          </div>

          <div>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">Send Message</Button>
          </div>
        </form>
      </section>
    </main>
  );
}
