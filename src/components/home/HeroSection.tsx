"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import rightImage from "@/../public/693.png";
import Link from "next/link";
import Cloude from "@/components/animation/Cloude";

export default function HeroSection() {
  const { language } = useLanguage();
  const copy = {
    en: {
      badge: "Digital Agency",
      title: "We Build Modern Websites",
      highlight: "That Help Businesses Grow",
      description:
        "We craft premium websites and apps that are fast, modern. Strategy, design, and development - delivered by one expert team.",
      primaryCta: "Services",
      secondaryCta: "View Portfolio",
      stats: [
        { label: "Projects", value: "50+" },
        { label: "Clients", value: "30+" },
        { label: "Years", value: "1+" },
      ],
      cardLeftTitle: "Qualified team",
      cardLeftDesc: "Web + App + Automation in one sprint",
      cardRightTitle: "Delivery",
      cardRightDesc: "7 - 15 days",
      heroAlt: "Team planning a strategy",
    },
    bn: {
      badge: "ডিজিটাল এজেন্সি",
      title: "আমরা আধুনিক ওয়েবসাইট তৈরি করি",
      highlight: "যা ব্যবসার গ্রোথ বাড়ায়",
      description:
        "আমরা সুপার ফাস্ট, আধুনিক প্রিমিয়াম ওয়েবসাইট ও অ্যাপ তৈরি করি। স্ট্র্যাটেজি, ডিজাইন ও ডেভেলপমেন্ট - সবই এক্সপার্ট টিমের হাতে।",
      primaryCta: "সার্ভিস",
      secondaryCta: "পোর্টফোলিও দেখুন",
      stats: [
        { label: "প্রজেক্ট", value: "৫০+" },
        { label: "ক্লায়েন্ট", value: "৩০+" },
        { label: "বছর", value: "১+" },
      ],
      cardLeftTitle: "দক্ষ টিম",
      cardLeftDesc: "ওয়েব + অ্যাপ + আটোমেশন",
      cardRightTitle: "ডেলিভারি",
      cardRightDesc: "৭-১৫ দিন",
      heroAlt: "টিম স্ট্র্যাটেজি এবং প্ল্যান",
    },
  };

  const t = language === "bn" ? copy.bn : copy.en;
  return (
    <section className="relative overflow-hidden min-h-screen">
      <Cloude className="min-h-screen w-full" fullScreen>
        <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none" />

        <div className="relative z-20 px-4 sm:px-6 lg:px-33 pt-24 md:pt-28 pb-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80">
                {t.badge}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                {t.title}
                <span className="block text-primary">{t.highlight}</span>
              </h1>

              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                {t.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-blackhover:bg-lime-300 px-8"
                >
                  <Link href="/services">
                    {t.primaryCta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 px-8"
                >
                  <Link href="/portfolio">{t.secondaryCta}</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {t.stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur"
                  >
                    <div className="text-2xl font-bold text-white">
                      {item.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-white/60">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Image + UI blocks */}
            <div className="relative">
              <div className="relative ml-auto max-w-xl rounded-[28px] border border-white/30 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
                <div className="relative overflow-hidden rounded-2xl h-64 w-full">
                  <Image
                    src={rightImage}
                    alt={t.heroAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/20 bg-black/40 p-3 text-white">
                    <p className="text-xs uppercase tracking-widest text-white/60">
                      {t.cardLeftTitle}
                    </p>
                    <p className="mt-2 text-sm">{t.cardLeftDesc}</p>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-black/40 p-3 text-white">
                    <p className="text-xs uppercase tracking-widest text-white/60">
                      {t.cardRightTitle}
                    </p>
                    <p className="mt-2 text-sm">{t.cardRightDesc}</p>
                  </div>
                </div>
              </div>

              {/* <div className="absolute -right-8 -top-8 hidden lg:block h-24 w-24 rounded-full border border-white/30 bg-white/10 backdrop-blur" /> */}
              {/* <div className="absolute -left-10 bottom-6 hidden lg:block h-16 w-16 rounded-full border border-white/30 bg-white/10 backdrop-blur" /> */}
            </div>
          </div>
        </div>
      </Cloude>
    </section>
  );
}
