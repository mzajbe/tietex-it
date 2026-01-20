"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroImageSection from "@/components/portfolio/HeroImageSection";
import PortfolioContent from "@/components/portfolio/PortfolioContent";
import { useLanguage } from "@/context/LanguageContext";

import heroImage from "@/./../public/nasa-Q1p7bh3SHj8-unsplash.jpg";

export default function PortfolioPageClient() {
  const { language } = useLanguage();
  const copy = {
    en: {
      title: "Our Portfolio",
      subtitle:
        "Some of our completed projects that demonstrate the impact we deliver.",
      cta: "Discuss a Project",
      heroAlt: "Tietex IT portfolio banner",
      projects: [
        {
          title: "E-Commerce Platform",
          desc: "Built a scalable e-commerce site with admin dashboard & payment integration.",
          image:
            "https://i.pinimg.com/1200x/1b/ef/90/1bef907a0a1af5edfffd7e027c487082.jpg",
          liveUrl: "https://example.com",
          category: "E-Commerce",
        },
        {
          title: "Company Website",
          desc: "Modern marketing website with SEO optimization and blazing performance.",
          image:
            "https://i.pinimg.com/1200x/09/82/d0/0982d04c7dec73b27e144de342abdb17.jpg",
          liveUrl: "https://example.com",
          category: "Real Estate",
        },
        {
          title: "Company Website",
          desc: "Modern marketing website with SEO optimization and blazing performance.",
          image:
            "https://i.pinimg.com/736x/9a/36/7c/9a367cc4207ce4aa1e49a5474a85719f.jpg",
          liveUrl: "https://example.com",
          category: "Beauty",
        },
        {
          title: "Company Website",
          desc: "Modern marketing website with SEO optimization and blazing performance.",
          image:
            "https://i.pinimg.com/736x/29/d2/a4/29d2a40b5df235c396c69448ff0799e4.jpg",
          liveUrl: "https://example.com",
          category: "Real Estate",
        },
        {
          title: "Company Website",
          desc: "Modern marketing website with SEO optimization and blazing performance.",
          image:
            "https://i.pinimg.com/736x/43/ab/ed/43abedf3871bd9023313a82b61fc06b7.jpg",
          liveUrl: "https://example.com",
          category: "Beauty",
        },
        {
          title: "Company Website",
          desc: "Modern marketing website with SEO optimization and blazing performance.",
          image:
            "https://i.pinimg.com/1200x/47/1f/e3/471fe38c28442075b27435a54857aa34.jpg",
          liveUrl: "https://example.com",
          category: "Real Estate",
        },
        {
          title: "Company Website",
          desc: "Modern marketing website with SEO optimization and blazing performance.",
          image:
            "https://i.pinimg.com/736x/a7/45/67/a745677bd7c3042fba83fdc96a401437.jpg",
          liveUrl: "https://example.com",
          category: "E-Commerce",
        },
        {
          title: "Company Website",
          desc: "Modern marketing website with SEO optimization and blazing performance.",
          image:
            "https://i.pinimg.com/736x/f4/87/85/f48785297dd83fa1bae45bb0ad8dd0e4.jpg",
          liveUrl: "https://example.com",
          category: "Beauty",
        },
      ],
    },
    bn: {
      title: "আমাদের পোর্টফোলিও",
      subtitle:
        "আমাদের কিছু সম্পন্ন প্রজেক্ট যা আমাদের ডেলিভারি করা ইমপ্যাক্ট দেখায়।",
      cta: "প্রজেক্ট নিয়ে কথা বলুন",
      heroAlt: "Tietex IT পোর্টফোলিও ব্যানার",
      projects: [
        {
          title: "ই-কমার্স প্ল্যাটফর্ম",
          desc: "অ্যাডমিন ড্যাশবোর্ড ও পেমেন্ট ইন্টিগ্রেশনসহ স্কেলেবল ই-কমার্স সাইট।",
          image:
            "https://i.pinimg.com/1200x/1b/ef/90/1bef907a0a1af5edfffd7e027c487082.jpg",
          liveUrl: "https://example.com",
          category: "E-Commerce",
        },
        {
          title: "কোম্পানি ওয়েবসাইট",
          desc: "SEO অপ্টিমাইজেশন ও দ্রুত পারফরম্যান্সসহ আধুনিক মার্কেটিং সাইট।",
          image:
            "https://i.pinimg.com/1200x/09/82/d0/0982d04c7dec73b27e144de342abdb17.jpg",
          liveUrl: "https://example.com",
          category: "Real Estate",
        },
        {
          title: "কোম্পানি ওয়েবসাইট",
          desc: "SEO অপ্টিমাইজেশন ও দ্রুত পারফরম্যান্সসহ আধুনিক মার্কেটিং সাইট।",
          image:
            "https://i.pinimg.com/736x/9a/36/7c/9a367cc4207ce4aa1e49a5474a85719f.jpg",
          liveUrl: "https://example.com",
          category: "Beauty",
        },
        {
          title: "কোম্পানি ওয়েবসাইট",
          desc: "SEO অপ্টিমাইজেশন ও দ্রুত পারফরম্যান্সসহ আধুনিক মার্কেটিং সাইট।",
          image:
            "https://i.pinimg.com/736x/29/d2/a4/29d2a40b5df235c396c69448ff0799e4.jpg",
          liveUrl: "https://example.com",
          category: "Real Estate",
        },
        {
          title: "কোম্পানি ওয়েবসাইট",
          desc: "SEO অপ্টিমাইজেশন ও দ্রুত পারফরম্যান্সসহ আধুনিক মার্কেটিং সাইট।",
          image:
            "https://i.pinimg.com/736x/43/ab/ed/43abedf3871bd9023313a82b61fc06b7.jpg",
          liveUrl: "https://example.com",
          category: "Beauty",
        },
        {
          title: "কোম্পানি ওয়েবসাইট",
          desc: "SEO অপ্টিমাইজেশন ও দ্রুত পারফরম্যান্সসহ আধুনিক মার্কেটিং সাইট।",
          image:
            "https://i.pinimg.com/1200x/47/1f/e3/471fe38c28442075b27435a54857aa34.jpg",
          liveUrl: "https://example.com",
          category: "Real Estate",
        },
        {
          title: "কোম্পানি ওয়েবসাইট",
          desc: "SEO অপ্টিমাইজেশন ও দ্রুত পারফরম্যান্সসহ আধুনিক মার্কেটিং সাইট।",
          image:
            "https://i.pinimg.com/736x/a7/45/67/a745677bd7c3042fba83fdc96a401437.jpg",
          liveUrl: "https://example.com",
          category: "E-Commerce",
        },
        {
          title: "কোম্পানি ওয়েবসাইট",
          desc: "SEO অপ্টিমাইজেশন ও দ্রুত পারফরম্যান্সসহ আধুনিক মার্কেটিং সাইট।",
          image:
            "https://i.pinimg.com/736x/f4/87/85/f48785297dd83fa1bae45bb0ad8dd0e4.jpg",
          liveUrl: "https://example.com",
          category: "Beauty",
        },
      ],
    },
  };

  const t = language === "bn" ? copy.bn : copy.en;

  return (
    <main className=" -mt-24">
      <div className="relative">
        <HeroImageSection
          src={heroImage}
          alt={t.heroAlt}
          heightClassName="h-[51vh]"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="px-4 text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              {t.title}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
              {t.subtitle}
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button className="bg-primary text-white">
                  {t.cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PortfolioContent projects={t.projects} />
    </main>
  );
}
