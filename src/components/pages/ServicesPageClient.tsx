"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Globe, Palette, Shield, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPageClient() {
  const { language } = useLanguage();
  const copy = {
    en: {
      badge: "Services",
      title: "Design-led engineering for ambitious brands",
      description:
        "From strategy to launch, we build digital products that look sharp, load fast, and scale with your business.",
      primaryCta: "Request a Quote",
      secondaryCta: "View Portfolio",
      focusLabel: "Focus",
      serviceLabel: "Service",
      focusItems: ["Fast delivery", "Modern stack", "Clear communication", "Conversion focus"],
      services: [
        {
          title: "Custom Web Development",
          desc: "Scalable, high-performance websites and web apps built for growth.",
          icon: Code2,
          bullets: ["Next.js & React builds", "API integrations", "Performance tuning"],
        },
        {
          title: "E-commerce Solutions",
          desc: "Conversion-first storefronts with smooth checkout and inventory flow.",
          icon: Globe,
          bullets: ["Storefront UX", "Payment gateways", "Automation & analytics"],
        },
        {
          title: "UI/UX Design",
          desc: "Design systems and interfaces that make your product feel premium.",
          icon: Palette,
          bullets: ["Design systems", "Prototyping", "User journeys"],
        },
        {
          title: "Maintenance & Support",
          desc: "Stay secure, fast, and updated with proactive support.",
          icon: Shield,
          bullets: ["Security updates", "Bug fixes", "Ongoing improvements"],
        },
      ],
      ctaTitle: "Let's build something that feels premium and performs fast.",
      ctaBody:
        "We combine strategy, design, and engineering to deliver websites and apps that stand out.",
      ctaPrimary: "Start a Project",
      ctaSecondary: "Talk to Us",
    },
    bn: {
      badge: "সার্ভিস",
      title: "অ্যাম্বিশাস ব্র্যান্ডের জন্য ডিজাইন-লেড ইঞ্জিনিয়ারিং",
      description:
        "স্ট্র্যাটেজি থেকে লঞ্চ পর্যন্ত, আমরা এমন ডিজিটাল প্রোডাক্ট তৈরি করি যা শার্প দেখায়, দ্রুত লোড হয় এবং আপনার ব্যবসার সাথে স্কেল করে।",
      primaryCta: "কোট চান",
      secondaryCta: "পোর্টফোলিও দেখুন",
      focusLabel: "ফোকাস",
      serviceLabel: "সার্ভিস",
      focusItems: ["দ্রুত ডেলিভারি", "মডার্ন স্ট্যাক", "স্বচ্ছ কমিউনিকেশন", "কনভার্সন ফোকাস"],
      services: [
        {
          title: "কাস্টম ওয়েব ডেভেলপমেন্ট",
          desc: "গ্রোথের জন্য স্কেলেবল, হাই-পারফরম্যান্স ওয়েবসাইট ও ওয়েব অ্যাপ।",
          icon: Code2,
          bullets: ["Next.js ও React বিল্ড", "API ইন্টিগ্রেশন", "পারফরম্যান্স টিউনিং"],
        },
        {
          title: "ই-কমার্স সল্যুশন",
          desc: "স্মুথ চেকআউট ও ইনভেন্টরি ফ্লোসহ কনভার্সন-ফার্স্ট স্টোরফ্রন্ট।",
          icon: Globe,
          bullets: ["স্টোরফ্রন্ট UX", "পেমেন্ট গেটওয়ে", "অটোমেশন ও অ্যানালিটিক্স"],
        },
        {
          title: "UI/UX ডিজাইন",
          desc: "ডিজাইন সিস্টেম ও ইন্টারফেস যা আপনার প্রোডাক্টকে প্রিমিয়াম করে তোলে।",
          icon: Palette,
          bullets: ["ডিজাইন সিস্টেম", "প্রোটোটাইপিং", "ইউজার জার্নি"],
        },
        {
          title: "মেইনটেন্যান্স ও সাপোর্ট",
          desc: "প্রোঅ্যাকটিভ সাপোর্টে সিকিউর, দ্রুত ও আপডেটেড থাকুন।",
          icon: Shield,
          bullets: ["সিকিউরিটি আপডেট", "বাগ ফিক্স", "চলমান উন্নতি"],
        },
      ],
      ctaTitle: "প্রিমিয়াম ও দ্রুত পারফর্মিং কিছু তৈরি করি।",
      ctaBody:
        "স্ট্র্যাটেজি, ডিজাইন ও ইঞ্জিনিয়ারিং একসাথে এনে আমরা আলাদা ওয়েবসাইট ও অ্যাপ তৈরি করি।",
      ctaPrimary: "প্রজেক্ট শুরু করুন",
      ctaSecondary: "আমাদের সাথে কথা বলুন",
    },
  };

  const t = language === "bn" ? copy.bn : copy.en;

  return (
    <main className="-mt-24">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_10%_20%,#F16F31_0%,transparent_30%),radial-gradient(circle_at_90%_10%,#F16F31_0%,transparent_35%)]" />
        <div className="absolute -top-24 right-[-6rem] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80">
                <Sparkles className="h-4 w-4 text-cyan-200" />
                {t.badge}
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                {t.title}
              </h1>
              <p className="text-lg text-white/75 max-w-xl">
                {t.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-primary text-slate-950 hover:opacity-90">
                    {t.primaryCta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  {t.secondaryCta}
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.focusItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur"
                >
                  <p className="text-sm uppercase tracking-widest text-white/50">{t.focusLabel}</p>
                  <p className="mt-2 text-lg font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400">{t.serviceLabel}</p>
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
                  {t.ctaTitle}
                </h2>
                <p className="mt-4 text-white/70 max-w-xl">
                  {t.ctaBody}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link href="/contact">
                  <Button className="bg-white text-slate-900 hover:bg-white/90">
                    {t.ctaPrimary}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  {t.ctaSecondary}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
