"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Handshake, Target, TrendingUp, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

import teamPhoto from "@/components/about/algoleague-yYWOYeX-jLY-unsplash.jpg";

export default function AboutPageClient() {
  const { language } = useLanguage();
  const copy = {
    en: {
      heroKicker: "About Tietex IT",
      heroTitle: "We build digital products that feel premium and perform fast.",
      heroBody:
        "We are a Dhaka-based team of designers and engineers helping ambitious brands launch websites, platforms, and experiences that convert.",
      heroImageAlt: "Our team",
      heroPrimaryCta: "Meet the Team",
      heroSecondaryCta: "View Portfolio",
      achievements: [
        "10+ Years of Excellence",
        "500+ Projects Completed",
        "50+ Team Members",
        "98% Client Satisfaction",
        "20+ Industries Served",
      ],
      teamCultureKicker: "Team culture",
      teamCultureTitle: "Driven. Curious. Fast.",
      valuesKicker: "Why us",
      valuesTitle: "A partner that blends strategy, design, and engineering.",
      valuesBody:
        "We collaborate closely with your team to craft a clear roadmap, design with intent, and ship with speed.",
      valueCardBody:
        "Built around outcomes that improve product clarity and growth.",
      values: [
        "User-first design systems",
        "Scalable, modern stack",
        "Transparent communication",
        "Measurable business impact",
      ],
      teamTitle: "Our Awesome Team",
      teamBody:
        "A multidisciplinary crew that brings clarity, creativity, and speed to every project.",
      teamMembers: [
        { name: "Ridan Kabir", role: "CEO & Founder" },
        { name: "Fahim", role: "Product Designer" },
        { name: "Nazmul", role: "Lead Engineer" },
        { name: "Fahad Ahmed", role: "Growth Strategist" },
      ],
      processTitle: "Process to Work With Us",
      processBody: "Clear phases, zero surprises - from discovery to launch.",
      processes: [
        {
          title: "Discovery",
          description: "Understand goals, users, and constraints to build a clear roadmap.",
        },
        {
          title: "Strategy",
          description: "Define structure, scope, and success metrics before we build.",
        },
        {
          title: "Design + Build",
          description: "Create a premium UI and ship a fast, scalable product.",
        },
        {
          title: "Launch + Grow",
          description: "Deploy, optimize performance, and support ongoing growth.",
        },
      ],
      clientsTitle: "Trusted by Teams Worldwide",
      clientsBody:
        "We work with startups, enterprises, and industry leaders.",
      ctaTitle:
        "Let's build something that feels premium and performs fast.",
      ctaBody:
        "Tell us about your goals and we'll map a plan to deliver.",
      ctaPrimary: "Start a Project",
      ctaSecondary: "Contact Us",
    },
    bn: {
      heroKicker: "Tietex IT সম্পর্কে",
      heroTitle: "আমরা প্রিমিয়াম অনুভূতির দ্রুত পারফর্মিং ডিজিটাল পণ্য তৈরি করি।",
      heroBody:
        "ঢাকার একটি ডিজাইনার ও ইঞ্জিনিয়ার টিম হিসেবে আমরা উচ্চাকাঙ্ক্ষী ব্র্যান্ডকে এমন ওয়েবসাইট, প্ল্যাটফর্ম ও অভিজ্ঞতা দিতে সহায়তা করি যা কনভার্ট করে।",
      heroImageAlt: "আমাদের টিম",
      heroPrimaryCta: "টিমকে জানুন",
      heroSecondaryCta: "পোর্টফোলিও দেখুন",
      achievements: [
        "১০+ বছরের এক্সেলেন্স",
        "৫০০+ প্রজেক্ট সম্পন্ন",
        "৫০+ টিম মেম্বার",
        "৯৮% ক্লায়েন্ট সন্তুষ্টি",
        "২০+ ইন্ডাস্ট্রিতে কাজ",
      ],
      teamCultureKicker: "টিম কালচার",
      teamCultureTitle: "ড্রাইভেন। কৌতূহলী। দ্রুত।",
      valuesKicker: "কেন আমরা",
      valuesTitle: "স্ট্র্যাটেজি, ডিজাইন ও ইঞ্জিনিয়ারিংকে একসাথে আনি।",
      valuesBody:
        "আপনার টিমের সাথে ঘনিষ্ঠভাবে কাজ করে আমরা রোডম্যাপ তৈরি করি, ডিজাইন করি ইন্টেনশনে, এবং দ্রুত ডেলিভারি দিই।",
      valueCardBody:
        "যেসব আউটকাম প্রোডাক্টের স্পষ্টতা ও গ্রোথ বাড়ায়।",
      values: [
        "ইউজার-ফার্স্ট ডিজাইন সিস্টেম",
        "স্কেলেবল, আধুনিক স্ট্যাক",
        "স্বচ্ছ কমিউনিকেশন",
        "মেজারেবল বিজনেস ইমপ্যাক্ট",
      ],
      teamTitle: "আমাদের দুর্দান্ত টিম",
      teamBody:
        "বহুমুখী টিম যারা প্রতিটি প্রজেক্টে স্পষ্টতা, সৃজনশীলতা ও গতি নিয়ে আসে।",
      teamMembers: [
        { name: "Ridan Kabir", role: "সিইও ও ফাউন্ডার" },
        { name: "Fahim", role: "প্রোডাক্ট ডিজাইনার" },
        { name: "Nazmul", role: "লিড ইঞ্জিনিয়ার" },
        { name: "Fahim Ahmed", role: "গ্রোথ স্ট্র্যাটেজিস্ট" },
      ],
      processTitle: "আমাদের সাথে কাজের ধাপ",
      processBody: "স্পষ্ট ধাপ, কোনো চমক নয় - ডিসকভারি থেকে লঞ্চ পর্যন্ত।",
      processes: [
        {
          title: "ডিসকভারি",
          description: "লক্ষ্য, ইউজার এবং সীমাবদ্ধতা বুঝে রোডম্যাপ তৈরি করি।",
        },
        {
          title: "স্ট্র্যাটেজি",
          description: "স্ট্রাকচার, স্কোপ ও সাকসেস মেট্রিক্স নির্ধারণ করি।",
        },
        {
          title: "ডিজাইন + বিল্ড",
          description: "প্রিমিয়াম UI তৈরি করে দ্রুত, স্কেলেবল প্রোডাক্ট শিপ করি।",
        },
        {
          title: "লঞ্চ + গ্রো",
          description: "ডেপ্লয়, পারফরম্যান্স অপ্টিমাইজ এবং চলমান সাপোর্ট।",
        },
      ],
      clientsTitle: "বিশ্বব্যাপী টিমের আস্থা",
      clientsBody:
        "স্টার্টআপ, এন্টারপ্রাইজ এবং ইন্ডাস্ট্রি লিডারদের সাথে আমরা কাজ করি।",
      ctaTitle:
        "প্রিমিয়াম অনুভূতির দ্রুত পারফর্মিং কিছু তৈরি করি।",
      ctaBody:
        "আপনার লক্ষ্য বলুন—আমরা ডেলিভারির জন্য পরিকল্পনা তৈরি করব।",
      ctaPrimary: "প্রজেক্ট শুরু করুন",
      ctaSecondary: "যোগাযোগ করুন",
    },
  };

  const t = language === "bn" ? copy.bn : copy.en;

  const teamMembers = [
    {
      name: t.teamMembers[0].name,
      role: t.teamMembers[0].role,
      image:
        "https://images.unsplash.com/photo-1735815582271-7ea29bd9b095?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: t.teamMembers[1].name,
      role: t.teamMembers[1].role,
      image:
        "https://images.unsplash.com/photo-1621778062380-13eebfd83548?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: t.teamMembers[2].name,
      role: t.teamMembers[2].role,
      image:
        "https://images.unsplash.com/photo-1621777974802-eb9c88210735?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: t.teamMembers[3].name,
      role: t.teamMembers[3].role,
      image:
        "https://images.unsplash.com/photo-1730717649068-1f46bbc45399?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const clients = [
    "UNO",
    "ForFare",
    "MasterCard",
    "CodersTrust",
    "LBSL",
    "YouthLink",
    "Prothom Alo",
    "Black Paper",
    "City Bank",
    "Mashriq",
    "DIRD",
    "Shikkha Karmo",
  ];

  const process = [
    {
      icon: <Users className="w-6 h-6" />,
      title: t.processes[0].title,
      description: t.processes[0].description,
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t.processes[1].title,
      description: t.processes[1].description,
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: t.processes[2].title,
      description: t.processes[2].description,
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t.processes[3].title,
      description: t.processes[3].description,
    },
  ];

  return (
    <main className="-mt-24">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_10%_20%,#F16F31_0%,transparent_30%),radial-gradient(circle_at_90%_10%,#F16F31_0%,transparent_35%)]" />
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-widest text-white/60">
                {t.heroKicker}
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                {t.heroTitle}
              </h1>
              <p className="text-lg text-white/75 max-w-xl">
                {t.heroBody}
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary text-slate-950 hover:opacity-90">
                  {t.heroPrimaryCta}
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  {t.heroSecondaryCta}
                </Button>
              </div> */}
              {/* <div className="flex flex-wrap gap-3 pt-4 text-sm text-white/70">
                {t.achievements.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-2"
                  >
                    {item}
                  </div>
                ))}
              </div> */}
            </div>

            <div className="relative">
              <Card className="overflow-hidden border-white/10 bg-white/5 shadow-2xl">
                <CardContent className="">
                  <div className="relative aspect-video w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1646579886741-12b59840c63f?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt={t.heroImageAlt}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-xs uppercase tracking-widest text-white/70">
                        {t.teamCultureKicker}
                      </p>
                      <p className="text-lg font-semibold">{t.teamCultureTitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-slate-400">{t.valuesKicker}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {t.valuesTitle}
            </h2>
            <p className="text-slate-600">
              {t.valuesBody}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {t.values.map((item) => (
              <div
                key={item}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <p className="mt-4 text-slate-800 font-semibold">{item}</p>
                <p className="mt-2 text-sm text-slate-600">
                  {t.valueCardBody}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{t.teamTitle}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-3">
              {t.teamBody}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-900">{member.name}</p>
                    <p className="text-sm text-slate-600">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t.processTitle}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3">
            {t.processBody}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step) => (
            <Card key={step.title} className="border bg-white">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  {step.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t.clientsTitle}
            </h2>
            <p className="text-white/70 mt-3">
              {t.clientsBody}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm font-semibold text-white/80"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-[32px] bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-12 text-white">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t.ctaTitle}
                </h2>
                <p className="mt-4 text-white/70 max-w-xl">
                  {t.ctaBody}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Button className="bg-white text-slate-900 hover:bg-white/90">
                  {t.ctaPrimary}
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  {t.ctaSecondary}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
