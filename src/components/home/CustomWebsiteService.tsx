"use client";

import { CheckCircle2, Globe, Zap, ShieldCheck, MousePointer2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function CustomWebsiteService() {
  const { language } = useLanguage();
  const copy = {
    en: {
      badge: "Custom Web Development",
      title: "Don't just build a website.",
      highlight: "Build a digital asset.",
      description:
        "At Tietex IT, we move beyond off-the-shelf templates. We engineer bespoke web solutions from the ground up, ensuring your digital presence is as unique as your business operations.",
      benefits: [
        {
          title: "Performance Optimized",
          description:
            "Unlike templates, our custom code is bloat-free, ensuring lightning-fast load speeds and better SEO rankings.",
          icon: <Zap className="w-5 h-5 text-amber-500" />,
        },
        {
          title: "Scalable Architecture",
          description:
            "Built with Next.js, your site grows with your business. Add features easily without starting from scratch.",
          icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
        },
        {
          title: "Unique Brand Identity",
          description:
            "Stand out from competitors with a 100% unique design tailored to your specific brand DNA.",
          icon: <MousePointer2 className="w-5 h-5 text-indigo-500" />,
        },
      ],
      infraTitle: "Zero-Hassle Infrastructure",
      infraBody:
        "Stop worrying about technical setups. We provide premium Domain & High-Speed Hosting at an unbeatable price point, exclusively for our development clients.",
      infraHighlights: [
        "99.9% Uptime Guarantee",
        "Free SSL Certificates",
        "Managed Weekly Backups",
      ],
      bundleTitle: "Special Bundle Price",
      bundleLead: "Starting from Only",
      bundleNote: "Talk to our Dhaka Team for a Quote",
      cta: "Get Your Custom Quote",
    },
    bn: {
      badge: "কাস্টম ওয়েব ডেভেলপমেন্ট",
      title: "শুধু ওয়েবসাইট নয়।",
      highlight: "ডিজিটাল অ্যাসেট তৈরি করুন।",
      description:
        "Tietex IT প্রস্তুত টেমপ্লেট ছাড়িয়ে যায়। আমরা শূন্য থেকে কাস্টম ওয়েব সল্যুশন তৈরি করি, যাতে আপনার ডিজিটাল উপস্থিতি আপনার ব্যবসার মতোই ইউনিক হয়।",
      benefits: [
        {
          title: "পারফরম্যান্স অপ্টিমাইজড",
          description:
            "টেমপ্লেটের মতো বloat নয়—আমাদের কাস্টম কোড দ্রুত লোডিং ও ভালো SEO নিশ্চিত করে।",
          icon: <Zap className="w-5 h-5 text-amber-500" />,
        },
        {
          title: "স্কেলেবল আর্কিটেকচার",
          description:
            "Next.js দিয়ে তৈরি, আপনার ব্যবসার সঙ্গে সাইটও বাড়ে। নতুন ফিচার সহজে যুক্ত করা যায়।",
          icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
        },
        {
          title: "ইউনিক ব্র্যান্ড আইডেন্টিটি",
          description:
            "আপনার ব্র্যান্ডের জন্য ১০০% ইউনিক ডিজাইন—কম্পিটিটরের ভিড়ে আলাদা হয়ে উঠুন।",
          icon: <MousePointer2 className="w-5 h-5 text-indigo-500" />,
        },
      ],
      infraTitle: "ঝামেলাহীন ইনফ্রাস্ট্রাকচার",
      infraBody:
        "টেকনিক্যাল সেটআপ নিয়ে চিন্তা বন্ধ করুন। ডেভেলপমেন্ট ক্লায়েন্টদের জন্য আমরা প্রিমিয়াম ডোমেইন ও হাই-স্পিড হোস্টিং দিই সেরা মূল্যে।",
      infraHighlights: [
        "৯৯.৯% আপটাইম গ্যারান্টি",
        "ফ্রি SSL সার্টিফিকেট",
        "সাপ্তাহিক ম্যানেজড ব্যাকআপ",
      ],
      bundleTitle: "স্পেশাল বান্ডল প্রাইস",
      bundleLead: "শুরু মাত্র",
      bundleNote: "কোট পেতে আমাদের ঢাকা টিমের সাথে কথা বলুন",
      cta: "কাস্টম কোট নিন",
    },
  };

  const t = language === "bn" ? copy.bn : copy.en;

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: The Narrative */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-3 py-1 text-primary">
                {t.badge}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight  dark:text-slate-100">
                {t.title} <br />
                <span className="text-primary">{t.highlight}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              {t.benefits.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors border border-transparent ">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: The "All-in-One" Hosting Offer */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4  rounded-[2rem] blur-2xl" />
            <div className="relative bg-card border shadow-2xl rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t.infraTitle}</h3>
              </div>
              
              <p className="text-muted-foreground mb-8">
                {t.infraBody}
              </p>

              <ul className="space-y-4 mb-10">
                {t.infraHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500" /> {item}
                  </li>
                ))}
              </ul>

              <div className="p-6  rounded-2xl border border-dashed border-primary/30">
                <p className="text-sm font-semibold uppercase tracking-wider text-center mb-2">{t.bundleTitle}</p>
                <div className="text-center">
                  <span className="text-3xl font-bold">{t.bundleLead}</span>
                  <p className="text-primary font-medium mt-1">{t.bundleNote}</p>
                </div>
              </div>

              <Button className="w-full mt-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/20">
                {t.cta}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
