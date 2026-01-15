import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Globe, Palette, Shield, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Services - Tietex IT',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Custom Web Development',
      desc: 'Scalable, high-performance websites and web apps built for growth.',
      icon: Code2,
      bullets: ['Next.js & React builds', 'API integrations', 'Performance tuning'],
    },
    {
      title: 'E-commerce Solutions',
      desc: 'Conversion-first storefronts with smooth checkout and inventory flow.',
      icon: Globe,
      bullets: ['Storefront UX', 'Payment gateways', 'Automation & analytics'],
    },
    {
      title: 'UI/UX Design',
      desc: 'Design systems and interfaces that make your product feel premium.',
      icon: Palette,
      bullets: ['Design systems', 'Prototyping', 'User journeys'],
    },
    {
      title: 'Maintenance & Support',
      desc: 'Stay secure, fast, and updated with proactive support.',
      icon: Shield,
      bullets: ['Security updates', 'Bug fixes', 'Ongoing improvements'],
    },
  ];

  return (
    <main className='-mt-24'>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_10%_20%,#38bdf8_0%,transparent_45%),radial-gradient(circle_at_90%_10%,#22c55e_0%,transparent_35%)]" />
        <div className="absolute -top-24 right-[-6rem] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80">
                <Sparkles className="h-4 w-4 text-cyan-200" />
                Services
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Design-led engineering for ambitious brands
              </h1>
              <p className="text-lg text-white/75 max-w-xl">
                From strategy to launch, we build digital products that look
                sharp, load fast, and scale with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:opacity-90">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Portfolio
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {['Fast delivery', 'Modern stack', 'Clear communication', 'Conversion focus'].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur"
                >
                  <p className="text-sm uppercase tracking-widest text-white/50">Focus</p>
                  <p className="mt-2 text-lg font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400">Service</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-900">{s.title}</h3>
                    <p className="mt-3 text-slate-600">{s.desc}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-900 transition group-hover:bg-slate-900 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-6 grid gap-2 text-sm text-slate-600">
                  {s.bullets.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-[32px] bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-12 text-white">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Let&apos;s build something that feels premium and performs fast.
                </h2>
                <p className="mt-4 text-white/70 max-w-xl">
                  We combine strategy, design, and engineering to deliver websites
                  and apps that stand out.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link href="/contact">
                  <Button className="bg-white text-slate-900 hover:bg-white/90">
                    Start a Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Talk to Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
