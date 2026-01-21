"use client";

import { Users, Globe, Briefcase, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function StatisticsSection() {
  const { language } = useLanguage();
  const stats =
    language === "bn"
      ? [
          {
            label: "সন্তুষ্ট ক্লায়েন্ট",
            value: "৩০+",
            description: "ডিজিটাল গ্রোথের জন্য বিশ্বজুড়ে ব্যবসার আস্থা।",
            icon: <Users className="h-5 w-5 text-primary" />,
          },
          {
            label: "সম্পন্ন প্রজেক্ট",
            value: "৫০+",
            description: "ই-কমার্স ও CMS ডেপ্লয়মেন্টে সাফল্য।",
            icon: <Briefcase className="h-5 w-5 text-primary" />,
          },
          {
            label: "লাইভ ওয়েবসাইট",
            value: "৪০+",
            description: "দ্রুতগতির পোর্টফোলিও ও বিজনেস সাইট।",
            icon: <Globe className="h-5 w-5 text-primary" />,
          },
          {
            label: "রিটেনশন রেট",
            value: "৯৮%",
            description: "চলমান মার্কেটিংয়ের জন্য আবারও ফিরে আসেন।",
            icon: <Award className="h-5 w-5 text-primary" />,
          },
        ]
      : [
          {
            label: "Happy Clients",
            value: "30+",
            description: "Trusted by businesses worldwide for digital growth.",
            icon: <Users className="h-5 w-5 text-primary" />,
          },
          {
            label: "Projects Completed",
            value: "50+",
            description: "Successful e-commerce and CMS deployments.",
            icon: <Briefcase className="h-5 w-5 text-primary" />,
          },
          {
            label: "Websites Launched",
            value: "40+",
            description: "High-performance portfolio and business sites.",
            icon: <Globe className="h-5 w-5 text-primary" />,
          },
          {
            label: "Retention Rate",
            value: "98%",
            description: "Clients who return to us for ongoing marketing.",
            icon: <Award className="h-5 w-5 text-primary" />,
          },
        ];

  return (
    <section className="py-20 border-t border-b bg-slate-50/30 dark:bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-4xl font-extrabold tracking-tight text-foreground">
                  {stat.value}
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary mt-1">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground mt-2 max-w-[200px]">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
