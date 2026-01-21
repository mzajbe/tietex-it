"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/context/LanguageContext";

const ShortAbout = () => {
  const { language } = useLanguage();
  const copy = {
    en: {
      titleTop: "Crafting Digital",
      titleAccent: "Excellence at Tietex IT.",
      lead:
        "We are a dedicated software company specializing in building high-performance e-commerce platforms and stunning portfolio websites. Our team bridges the gap between complex technology and user-centric design.",
      body:
        "Whether you need a custom-built CMS to manage your content with ease or a robust web solution tailored to your specific business needs, we provide end-to-end development. Our expertise doesn't stop at code; we integrate digital marketing strategies into every project to ensure your brand doesn't just exist online, but thrives.",
      keywords: ["E-Commerce", "Portfolio", "CMS", "Digital Marketing", "Web Automation"],
    },
    bn: {
      titleTop: "ডিজিটাল",
      titleAccent: "এক্সেলেন্স তৈরি করি Tietex IT-এ।",
      lead:
        "আমরা একটি নিবেদিত সফটওয়্যার কোম্পানি, যারা হাই-পারফরম্যান্স ই-কমার্স প্ল্যাটফর্ম এবং দারুণ পোর্টফোলিও ওয়েবসাইট তৈরি করি। আমাদের টিম জটিল প্রযুক্তি ও ব্যবহারকারীমুখী ডিজাইনের মধ্যে সেতু গড়ে।",
      body:
        "আপনার কনটেন্ট সহজে ম্যানেজ করার জন্য কাস্টম CMS হোক বা ব্যবসার জন্য বিশেষভাবে তৈরি ওয়েব সল্যুশন—আমরা এন্ড-টু-এন্ড ডেভেলপমেন্ট দিই। আমাদের দক্ষতা শুধু কোডেই সীমাবদ্ধ নয়; আমরা প্রতিটি প্রজেক্টে ডিজিটাল মার্কেটিং স্ট্র্যাটেজি যুক্ত করি যেন আপনার ব্র্যান্ড অনলাইনে শুধু থাকে না, বরং এগিয়ে যায়।",
      keywords: ["ই-কমার্স", "পোর্টফোলিও", "CMS", "ডিজিটাল মার্কেটিং", "ওয়েব অটোমেশন"],
    },
  };

  const t = language === "bn" ? copy.bn : copy.en;

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Bold Title */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {t.titleTop} <br />
              <span className="text-primary">{t.titleAccent}</span>
            </h2>
            <div className="mt-6 h-1.5 w-20 bg-primary rounded-full" />
          </div>

          {/* Right Side: Paragraph Content */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {t.lead}
            </p>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.body}
              </p>

              <Separator className="my-8" />

              {/* Simple horizontal list of keywords */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold uppercase tracking-widest text-primary/80">
                {t.keywords.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortAbout;
