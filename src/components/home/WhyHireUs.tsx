"use client";

import { 
  Award, 
  Users, 
  Zap, 
  Headphones, 
  Clock, 
  Palette, 
  BarChart3, 
  SearchCode, 
  ShieldCheck 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyHireUs() {
  const { language } = useLanguage();
  const copy = {
    en: {
      title: "Why Hire",
      highlight: "Tietex IT",
      subtitle:
        "We combine technical mastery with a commitment to excellence, making us the preferred partner for businesses looking to scale.",
      highlights: [
        {
          title: "Long Experience",
          desc: "Years of industry expertise bringing complex digital visions to life.",
          icon: <Award className="w-6 h-6" />,
          color: "bg-blue-500/10 text-blue-600",
        },
        {
          title: "Creative Tech-Park",
          desc: "A hub of innovation where the latest technology meets creative thinking.",
          icon: <Users className="w-6 h-6" />,
          color: "bg-purple-500/10 text-purple-600",
        },
        {
          title: "Highly Professional",
          desc: "A disciplined approach to project management and communication.",
          icon: <ShieldCheck className="w-6 h-6" />,
          color: "bg-slate-500/10 text-slate-600",
        },
        {
          title: "Quick Support",
          desc: "Dedicated support team ready to assist you whenever you need help.",
          icon: <Headphones className="w-6 h-6" />,
          color: "bg-green-500/10 text-green-600",
        },
        {
          title: "Fast Delivery",
          desc: "We respect your timelines, ensuring quality launches without delays.",
          icon: <Clock className="w-6 h-6" />,
          color: "bg-orange-500/10 text-orange-600",
        },
        {
          title: "Excellent UI-UX",
          desc: "User-centric designs that ensure high engagement and ease of use.",
          icon: <Palette className="w-6 h-6" />,
          color: "bg-pink-500/10 text-pink-600",
        },
        {
          title: "Focus On Results",
          desc: "We don't just build; we ensure your website drives business growth.",
          icon: <BarChart3 className="w-6 h-6" />,
          color: "bg-indigo-500/10 text-indigo-600",
        },
        {
          title: "Technical Audit",
          desc: "Deep technical scans to ensure security, speed, and SEO health.",
          icon: <SearchCode className="w-6 h-6" />,
          color: "bg-cyan-500/10 text-cyan-600",
        },
        {
          title: "Satisfied Guarantee",
          desc: "Your success is ours. We guarantee a product you'll be proud of.",
          icon: <Zap className="w-6 h-6" />,
          color: "bg-yellow-500/10 text-yellow-600",
        },
      ],
    },
    bn: {
      title: "কেন নেবেন",
      highlight: "Tietex IT",
      subtitle:
        "আমরা টেকনিক্যাল দক্ষতা ও এক্সেলেন্সের প্রতিশ্রুতি একসাথে আনি—যাতে স্কেল করতে চাওয়া ব্যবসার পছন্দের পার্টনার হতে পারি।",
      highlights: [
        {
          title: "দীর্ঘ অভিজ্ঞতা",
          desc: "ইন্ডাস্ট্রির বহু বছরের অভিজ্ঞতায় জটিল ডিজিটাল ভিশন বাস্তব করি।",
          icon: <Award className="w-6 h-6" />,
          color: "bg-blue-500/10 text-blue-600",
        },
        {
          title: "ক্রিয়েটিভ টেক-পার্ক",
          desc: "সর্বশেষ প্রযুক্তি ও সৃজনশীল ভাবনার মিলনস্থল।",
          icon: <Users className="w-6 h-6" />,
          color: "bg-purple-500/10 text-purple-600",
        },
        {
          title: "অত্যন্ত পেশাদার",
          desc: "প্রজেক্ট ম্যানেজমেন্ট ও কমিউনিকেশনে শৃঙ্খলাবদ্ধতা।",
          icon: <ShieldCheck className="w-6 h-6" />,
          color: "bg-slate-500/10 text-slate-600",
        },
        {
          title: "দ্রুত সাপোর্ট",
          desc: "যখনই প্রয়োজন, সহায়তার জন্য প্রস্তুত ডেডিকেটেড টিম।",
          icon: <Headphones className="w-6 h-6" />,
          color: "bg-green-500/10 text-green-600",
        },
        {
          title: "দ্রুত ডেলিভারি",
          desc: "টাইমলাইনের প্রতি শ্রদ্ধা—বিলম্ব ছাড়াই মানসম্মত লঞ্চ।",
          icon: <Clock className="w-6 h-6" />,
          color: "bg-orange-500/10 text-orange-600",
        },
        {
          title: "এক্সেলেন্ট UI-UX",
          desc: "ইউজার-কেন্দ্রিক ডিজাইন যা এনগেজমেন্ট ও ব্যবহারযোগ্যতা নিশ্চিত করে।",
          icon: <Palette className="w-6 h-6" />,
          color: "bg-pink-500/10 text-pink-600",
        },
        {
          title: "রেজাল্ট ফোকাস",
          desc: "শুধু তৈরি নয়—ওয়েবসাইটকে ব্যবসার গ্রোথে কাজে লাগাই।",
          icon: <BarChart3 className="w-6 h-6" />,
          color: "bg-indigo-500/10 text-indigo-600",
        },
        {
          title: "টেকনিক্যাল অডিট",
          desc: "সিকিউরিটি, স্পিড ও SEO নিশ্চিত করতে ডিপ টেক স্ক্যান।",
          icon: <SearchCode className="w-6 h-6" />,
          color: "bg-cyan-500/10 text-cyan-600",
        },
        {
          title: "সন্তুষ্টি গ্যারান্টি",
          desc: "আপনার সাফল্যই আমাদের সাফল্য—গর্ব করার মতো পণ্য নিশ্চিত করি।",
          icon: <Zap className="w-6 h-6" />,
          color: "bg-yellow-500/10 text-yellow-600",
        },
      ],
    },
  };

  const t = language === "bn" ? copy.bn : copy.en;

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t.title} <span className="text-primary">{t.highlight}</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.highlights.map((item, index) => (
            <Card key={index} className="border-none bg-background shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="pt-8">
                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
