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
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type HighlightItem = {
  title: string;
  desc: string;
  icon: JSX.Element;
  // We will interpret your existing "color" string like:
  // "bg-blue-500/10 text-blue-600"
  // and convert it into:
  // - offset bg (blue/purple/etc)
  // - border color
  // - small label color
  color: string;
};

function getThemeClasses(color: string) {
  // Default fallback
  let offsetBg = "bg-indigo-500";
  let border = "border-indigo-500";
  let label = "text-indigo-500";

  if (color.includes("blue")) {
    offsetBg = "bg-blue-500";
    border = "border-blue-500";
    label = "text-blue-500";
  } else if (color.includes("purple")) {
    offsetBg = "bg-purple-500";
    border = "border-purple-500";
    label = "text-purple-500";
  } else if (color.includes("slate")) {
    offsetBg = "bg-slate-500";
    border = "border-slate-500";
    label = "text-slate-500";
  } else if (color.includes("green")) {
    offsetBg = "bg-green-500";
    border = "border-green-500";
    label = "text-green-500";
  } else if (color.includes("orange")) {
    offsetBg = "bg-orange-500";
    border = "border-orange-500";
    label = "text-orange-500";
  } else if (color.includes("pink")) {
    offsetBg = "bg-pink-500";
    border = "border-pink-500";
    label = "text-pink-500";
  } else if (color.includes("indigo")) {
    offsetBg = "bg-indigo-500";
    border = "border-indigo-500";
    label = "text-indigo-500";
  } else if (color.includes("cyan")) {
    offsetBg = "bg-cyan-500";
    border = "border-cyan-500";
    label = "text-cyan-500";
  } else if (color.includes("yellow")) {
    offsetBg = "bg-yellow-400";
    border = "border-yellow-400";
    label = "text-yellow-500";
  }

  return { offsetBg, border, label };
}

function ServiceCard({ item }: { item: HighlightItem }) {
  const theme = getThemeClasses(item.color);

  return (
    <div className="relative h-full">
      {/* offset background */}
      <span
        className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${theme.offsetBg} rounded-lg`}
        aria-hidden="true"
      />
      {/* main card */}
      <div
        className={`relative h-full p-6 bg-background border-2 ${theme.border} rounded-lg`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}
          >
            {item.icon}
          </div>

          <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
        </div>

        <p className={`mt-4 mb-2 text-xs font-semibold uppercase ${theme.label}`}>
          ------------
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
      </div>
    </div>
  );
}

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
          icon: <Award className="w-5 h-5" />,
          color: "bg-blue-500/10 text-blue-600",
        },
        {
          title: "Creative Tech-Park",
          desc: "A hub of innovation where the latest technology meets creative thinking.",
          icon: <Users className="w-5 h-5" />,
          color: "bg-purple-500/10 text-purple-600",
        },
        {
          title: "Highly Professional",
          desc: "A disciplined approach to project management and communication.",
          icon: <ShieldCheck className="w-5 h-5" />,
          color: "bg-slate-500/10 text-slate-600",
        },
        {
          title: "Quick Support",
          desc: "Dedicated support team ready to assist you whenever you need help.",
          icon: <Headphones className="w-5 h-5" />,
          color: "bg-green-500/10 text-green-600",
        },
        {
          title: "Fast Delivery",
          desc: "We respect your timelines, ensuring quality launches without delays.",
          icon: <Clock className="w-5 h-5" />,
          color: "bg-orange-500/10 text-orange-600",
        },
        {
          title: "Excellent UI-UX",
          desc: "User-centric designs that ensure high engagement and ease of use.",
          icon: <Palette className="w-5 h-5" />,
          color: "bg-pink-500/10 text-pink-600",
        },
        {
          title: "Focus On Results",
          desc: "We don't just build; we ensure your website drives business growth.",
          icon: <BarChart3 className="w-5 h-5" />,
          color: "bg-indigo-500/10 text-indigo-600",
        },
        {
          title: "Technical Audit",
          desc: "Deep technical scans to ensure security, speed, and SEO health.",
          icon: <SearchCode className="w-5 h-5" />,
          color: "bg-cyan-500/10 text-cyan-600",
        },
        {
          title: "Satisfied Guarantee",
          desc: "Your success is ours. We guarantee a product you'll be proud of.",
          icon: <Zap className="w-5 h-5" />,
          color: "bg-yellow-500/10 text-yellow-600",
        },
      ] as HighlightItem[],
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
          icon: <Award className="w-5 h-5" />,
          color: "bg-blue-500/10 text-blue-600",
        },
        {
          title: "ক্রিয়েটিভ টেক-পার্ক",
          desc: "সর্বশেষ প্রযুক্তি ও সৃজনশীল ভাবনার মিলনস্থল।",
          icon: <Users className="w-5 h-5" />,
          color: "bg-purple-500/10 text-purple-600",
        },
        {
          title: "অত্যন্ত পেশাদার",
          desc: "প্রজেক্ট ম্যানেজমেন্ট ও কমিউনিকেশনে শৃঙ্খলাবদ্ধতা।",
          icon: <ShieldCheck className="w-5 h-5" />,
          color: "bg-slate-500/10 text-slate-600",
        },
        {
          title: "দ্রুত সাপোর্ট",
          desc: "যখনই প্রয়োজন, সহায়তার জন্য প্রস্তুত ডেডিকেটেড টিম।",
          icon: <Headphones className="w-5 h-5" />,
          color: "bg-green-500/10 text-green-600",
        },
        {
          title: "দ্রুত ডেলিভারি",
          desc: "টাইমলাইনের প্রতি শ্রদ্ধা—বিলম্ব ছাড়াই মানসম্মত লঞ্চ।",
          icon: <Clock className="w-5 h-5" />,
          color: "bg-orange-500/10 text-orange-600",
        },
        {
          title: "এক্সেলেন্ট UI-UX",
          desc: "ইউজার-কেন্দ্রিক ডিজাইন যা এনগেজমেন্ট ও ব্যবহারযোগ্যতা নিশ্চিত করে।",
          icon: <Palette className="w-5 h-5" />,
          color: "bg-pink-500/10 text-pink-600",
        },
        {
          title: "রেজাল্ট ফোকাস",
          desc: "শুধু তৈরি নয়—ওয়েবসাইটকে ব্যবসার গ্রোথে কাজে লাগাই।",
          icon: <BarChart3 className="w-5 h-5" />,
          color: "bg-indigo-500/10 text-indigo-600",
        },
        {
          title: "টেকনিক্যাল অডিট",
          desc: "সিকিউরিটি, স্পিড ও SEO নিশ্চিত করতে ডিপ টেক স্ক্যান।",
          icon: <SearchCode className="w-5 h-5" />,
          color: "bg-cyan-500/10 text-cyan-600",
        },
        {
          title: "সন্তুষ্টি গ্যারান্টি",
          desc: "আপনার সাফল্যই আমাদের সাফল্য—গর্ব করার মতো পণ্য নিশ্চিত করি।",
          icon: <Zap className="w-5 h-5" />,
          color: "bg-yellow-500/10 text-yellow-600",
        },
      ] as HighlightItem[],
    },
  };

  const t = language === "bn" ? copy.bn : copy.en;

  // Use first 5 items to match your sample layout: 2 in first row, 3 in second row
  // If you want all 9, we can extend with more rows the same pattern.
  const topRow = t.highlights.slice(0, 2);
  const bottomRow = t.highlights.slice(2, 5);
  const remaining = t.highlights.slice(5);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative flex flex-col justify-between h-full max-w-6xl mx-auto xl:px-0">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-2 text-3xl md:text-5xl font-extrabold leading-tight">
  {t.title}{" "}
  <span
    className="
      inline-block
      text-transparent bg-clip-text
      bg-[url('https://images.unsplash.com/photo-1499088513455-78ed88b7a5b4?q=80&w=1078&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
      bg-[length:200%_200%] bg-center bg-no-repeat
      animate-text
      opacity-90
    "
  >
    {t.highlight}
  </span>
  ?
</h2>
           
            <p className="text-lg text-muted-foreground">{t.subtitle}</p>
          </div>

          <div className="w-full">
            {/* Row 1 (2 cards) */}
            <div className="flex flex-col w-full mb-10 sm:flex-row gap-6 sm:gap-10">
              {topRow.map((item, idx) => (
                <div key={idx} className="w-full sm:w-1/2">
                  <ServiceCard item={item} />
                </div>
              ))}
            </div>

            {/* Row 2 (3 cards) */}
            <div className="flex flex-col w-full sm:flex-row gap-6 sm:gap-10">
              {bottomRow.map((item, idx) => (
                <div key={idx} className="w-full sm:w-1/2 lg:w-1/3">
                  <ServiceCard item={item} />
                </div>
              ))}
            </div>

            {/* Optional: show remaining items in a normal grid (so you don't lose your other highlights) */}
            {remaining.length > 0 && (
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {remaining.map((item, idx) => (
                  <ServiceCard key={idx} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
