"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

// Replace these placeholder URLs with your actual client logo paths
const clients = [
  { name: "Client One", logo: "https://cdn.worldvectorlogo.com/logos/bkash.svg" },
  { name: "Client Two", logo: "https://cdn.worldvectorlogo.com/logos/nagad-logo.svg" },
  { name: "Client Three", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Grameenphone_logo.svg/1200px-Grameenphone_logo.svg.png" },
  { name: "Client Four", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Airtel_logo.svg" },
  { name: "Client Five", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Pathao_Logo.png" },
  { name: "Client Six", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" },
  { name: "Client Seven", logo: "https://cdn.worldvectorlogo.com/logos/mastercard-2.svg" },
  { name: "Client Eight", logo: "https://cdn.worldvectorlogo.com/logos/daraz.svg" },
];

export default function PrestigiousClients() {
  const { language } = useLanguage();
  const copy = {
    en: {
      kicker: "Website Design Company in Bangladesh",
      title: "Prestigious Clients We Have Worked With",
      footer:
        "Trusted by 50+ local and international businesses in various industries.",
    },
    bn: {
      kicker: "বাংলাদেশের ওয়েবসাইট ডিজাইন কোম্পানি",
      title: "যেসব সম্মানিত ক্লায়েন্টের সাথে আমরা কাজ করেছি",
      footer:
        "বিভিন্ন ইন্ডাস্ট্রিতে ৫০+ লোকাল ও আন্তর্জাতিক ব্যবসার আস্থা অর্জন করেছি।",
    },
  };

  const t = language === "bn" ? copy.bn : copy.en;

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4">
            {t.kicker}
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {t.title}
          </h3>
          <div className="mt-4 h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group flex items-center justify-center p-8 bg-background border border-transparent hover:border-slate-200 dark:hover:border-slate-800 rounded-2xl transition-all duration-300 hover:shadow-sm"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Optional Footer Text */}
        <p className="text-center mt-12 text-muted-foreground text-sm font-medium">
          {t.footer}
        </p>
      </div>
    </section>
  );
}
