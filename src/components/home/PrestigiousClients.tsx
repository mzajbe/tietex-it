"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";

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
  const marqueeClients = [...clients, ...clients];

  return (
    <section className="">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4">
            {t.kicker}
          </h2> */}
          <div className="absolute top-20 left-30 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 "></div>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            
            {t.title}
          </h3>
          {/* <div className="mt-4 h-1 w-24 bg-primary mx-auto rounded-full" /> */}
        </div>

        {/* Marquee */}
        <div className="relative">
          
          <div className="rounded-2xl border bg-background/70 backdrop-blur overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max items-center gap-10 px-8 py-6 animate-marquee motion-reduce:animate-none">
              {marqueeClients.map((client, index) => (
                <Card
                  key={`${client.name}-${index}`}
                  className="group flex h-16 w-40 items-center justify-center border-muted/60 bg-background/60 p-0 shadow-none"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-10 w-auto object-contain filter grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Optional Footer Text */}
        {/* <p className="text-center mt-12 text-muted-foreground text-sm font-medium">
          {t.footer}
        </p> */}
      </div>
    </section>
  );
}
