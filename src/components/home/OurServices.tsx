"use client";

import { 
  Laptop, 
  ShoppingCart, 
  UserCircle, 
  Settings, 
  TrendingUp, 
  Layout 
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

const OurServices = () => {
    const { language } = useLanguage();
    const copy = {
      en: {
        kicker: "Web Design Company in Dhaka",
        title: "Discover what we can",
        titleBreak: "do for you",
        description:
          "Tietex IT empowers businesses in Bangladesh with world-class software solutions and cutting-edge digital strategies.",
        services: [
          {
            title: "E-commerce Development",
            description:
              "Launch your online shop with secure payment integration (bKash, Nagad, etc.) and a smooth checkout experience tailored for the local and global market.",
            icon: <ShoppingCart className="w-6 h-6" />,
          },
          {
            title: "Portfolio Websites",
            description:
              "Stand out in the Dhaka professional scene. We build sleek, responsive portfolios that showcase your skills and land you high-value clients.",
            icon: <UserCircle className="h-6 w-6" />,
          },
          {
            title: "CMS",
            description:
              "Take full control of your content. We build easy-to-use dashboards so you can update your website without writing a single line of code.",
            icon: <Settings className="h-6 w-6" />,
          },
          {
            title: "Digital Marketing",
            description:
              "Go beyond just a website. We help you dominate social media and search engines to drive real traffic and sales to your business.",
            icon: <TrendingUp className="h-6 w-6" />,
          },
          {
            title: "Modern UI/UX Design",
            description:
              "Clean, minimalist designs that follow modern standards. We ensure your website looks great on mobile, tablet, and desktop.",
            icon: <Layout className="h-6 w-6" />,
          },
          {
            title: "Tech Support",
            description:
              "Reliable maintenance and support right here from Dhaka. We ensure your website stays fast, secure, and always online.",
            icon: <Laptop className="h-6 w-6" />,
          },
        ],
      },
      bn: {
        kicker: "ঢাকার ওয়েব ডিজাইন কোম্পানি",
        title: "আমরা আপনার জন্য",
        titleBreak: "যা করতে পারি",
        description:
          "Tietex IT বাংলাদেশের ব্যবসাগুলিকে বিশ্বমানের সফটওয়্যার সল্যুশন ও আধুনিক ডিজিটাল স্ট্র্যাটেজিতে শক্তিশালী করে।",
        services: [
          {
            title: "ই-কমার্স ডেভেলপমেন্ট",
            description:
              "নিরাপদ পেমেন্ট ইন্টিগ্রেশন (বিকাশ, নগদ ইত্যাদি) এবং স্মুথ চেকআউটসহ আপনার অনলাইন শপ চালু করুন—লোকাল ও গ্লোবাল মার্কেটের জন্য উপযোগীভাবে।",
            icon: <ShoppingCart className="w-6 h-6" />,
          },
          {
            title: "পোর্টফোলিও ওয়েবসাইট",
            description:
              "ঢাকার প্রফেশনাল মার্কেটে আলাদা হয়ে উঠুন। আমরা রেসপনসিভ, স্মার্ট পোর্টফোলিও তৈরি করি যা আপনার স্কিল দেখায় এবং হাই-ভ্যালু ক্লায়েন্ট আনতে সাহায্য করে।",
            icon: <UserCircle className="h-6 w-6" />,
          },
          {
            title: "CMS",
            description:
              "আপনার কনটেন্টের পূর্ণ নিয়ন্ত্রণ নিন। সহজ ড্যাশবোর্ড তৈরি করি যাতে এক লাইন কোড না লিখেই ওয়েবসাইট আপডেট করতে পারেন।",
            icon: <Settings className="h-6 w-6" />,
          },
          {
            title: "ডিজিটাল মার্কেটিং",
            description:
              "শুধু ওয়েবসাইট নয়—সোশ্যাল মিডিয়া ও সার্চে আধিপত্য তৈরি করে আপনার ব্যবসায় ট্রাফিক ও সেলস বাড়াতে আমরা সাহায্য করি।",
            icon: <TrendingUp className="h-6 w-6" />,
          },
          {
            title: "মডার্ন UI/UX ডিজাইন",
            description:
              "মডার্ন স্ট্যান্ডার্ড অনুসরণ করা ক্লিন, মিনিমাল ডিজাইন। মোবাইল, ট্যাবলেট ও ডেস্কটপে দারুণ দেখায় তা নিশ্চিত করি।",
            icon: <Layout className="h-6 w-6" />,
          },
          {
            title: "টেক সাপোর্ট",
            description:
              "ঢাকা থেকেই নির্ভরযোগ্য মেইনটেন্যান্স ও সাপোর্ট। আপনার ওয়েবসাইটকে দ্রুত, নিরাপদ এবং সবসময় অনলাইনে রাখি।",
            icon: <Laptop className="h-6 w-6" />,
          },
        ],
      },
    };

    const t = language === "bn" ? copy.bn : copy.en;

    return (
        <section className="py-24 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            {t.kicker}
          </h2>
          <h3 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            {t.title} <br className="hidden md:block" /> {t.titleBreak}
          </h3>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl">
            {t.description}
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-slate-200 dark:border-slate-800 transition-all hover:border-primary/50 hover:shadow-xl hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="mt-4 text-xl font-bold leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
              {/* Subtle bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Card>
          ))}
        </div>
      </div>
    </section>
    );
};

export default OurServices;
