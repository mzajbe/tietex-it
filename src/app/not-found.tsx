"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const { language } = useLanguage();
  const router = useRouter();

  const copy = {
    en: {
      title: "Page Not Found",
      description:
        "Looks like this page got lost in the code. Don\u2019t worry, even the best developers hit a 404 sometimes.",
      homeBtn: "Back to Home",
      backBtn: "Go Back",
      searchHint: "Maybe try one of these?",
      links: [
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
    },
    bn: {
      title: "\u09AA\u09C3\u09B7\u09CD\u09A0\u09BE \u0996\u09C1\u0981\u099C\u09C7 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF",
      description:
        "\u09AE\u09A8\u09C7 \u09B9\u099A\u09CD\u099B\u09C7 \u098F\u0987 \u09AA\u09C3\u09B7\u09CD\u09A0\u09BE\u099F\u09BF \u0995\u09CB\u09A1\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09B9\u09BE\u09B0\u09BF\u09DF\u09C7 \u0997\u09C7\u099B\u09C7\u0964 \u099A\u09BF\u09A8\u09CD\u09A4\u09BE \u0995\u09B0\u09AC\u09C7\u09A8 \u09A8\u09BE, \u09B8\u09C7\u09B0\u09BE \u09A1\u09C7\u09AD\u09C7\u09B2\u09AA\u09BE\u09B0\u09B0\u09BE\u0993 \u09AE\u09BE\u099D\u09C7 \u09AE\u09BE\u099D\u09C7 \u09EA\u09E6\u09EA \u09AA\u09BE\u09DF\u0964",
      homeBtn: "\u09B9\u09CB\u09AE\u09C7 \u09AB\u09BF\u09B0\u09C1\u09A8",
      backBtn: "\u09AA\u09C7\u099B\u09A8\u09C7 \u09AF\u09BE\u09A8",
      searchHint: "\u098F\u0997\u09C1\u09B2\u09CB \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8?",
      links: [
        { name: "\u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8", href: "/services" },
        { name: "\u09AA\u09CB\u09B0\u09CD\u099F\u09AB\u09CB\u09B2\u09BF\u0993", href: "/portfolio" },
        { name: "\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7", href: "/about" },
        { name: "\u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997", href: "/contact" },
      ],
    },
  };

  const t = language === "bn" ? copy.bn : copy.en;

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden -mt-20 md:-mt-24 pt-20 md:pt-24">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="nf-orb-1 absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#F16F31]/25 to-orange-300/15 blur-3xl" />
        <div className="nf-orb-2 absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-400/10 blur-3xl" />
        <div className="nf-orb-3 absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-400/10 to-teal-300/5 blur-3xl" />
      </div>

      {/* Scan line effect */}
      <div className="nf-scan-line" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Glitching 404 */}
        <div className="relative mb-4 nf-fade-up nf-fade-up-1">
          <h1
            className="nf-gradient-text text-[9rem] sm:text-[12rem] md:text-[14rem] font-black leading-none tracking-tighter select-none"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #F16F31, #f59e0b, #F16F31, #ef4444)",
            }}
          >
            404
          </h1>

          {/* Glitch shadow layers — only briefly flash */}
          <span
            className="nf-glitch-1 absolute inset-0 text-[9rem] sm:text-[12rem] md:text-[14rem] font-black leading-none tracking-tighter select-none pointer-events-none text-blue-500"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
            }}
            aria-hidden="true"
          >
            404
          </span>
          <span
            className="nf-glitch-2 absolute inset-0 text-[9rem] sm:text-[12rem] md:text-[14rem] font-black leading-none tracking-tighter select-none pointer-events-none text-[#F16F31]"
            style={{
              clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
            }}
            aria-hidden="true"
          >
            404
          </span>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-6 nf-fade-up nf-fade-up-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#F16F31]/50" />
          <div className="h-2 w-2 rounded-full bg-[#F16F31] animate-pulse" />
          <div className="h-px w-20 bg-gradient-to-r from-[#F16F31]/50 via-blue-500/30 to-transparent" />
          <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/30" />
        </div>

        {/* Title & description */}
        <div className="nf-fade-up nf-fade-up-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
            {t.title}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-md mx-auto">
            {t.description}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 nf-fade-up nf-fade-up-3">
          <Button
            asChild
            size="lg"
            className="bg-[#F16F31] hover:bg-[#d95e28] text-white px-8 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              {t.homeBtn}
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-300 text-slate-600 hover:border-[#F16F31]/40 hover:text-[#F16F31] px-8 rounded-xl transition-all duration-300 hover:-translate-y-0.5 group"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            {t.backBtn}
          </Button>
        </div>

        {/* Quick links */}
        <div className="nf-fade-up nf-fade-up-4">
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-4">
            <Search className="h-3.5 w-3.5" />
            <span>{t.searchHint}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {t.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full border border-slate-200 bg-white/60 backdrop-blur-sm text-sm font-medium text-slate-600 hover:border-[#F16F31]/40 hover:text-[#F16F31] hover:bg-orange-50/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Terminal widget */}
        <div className="mt-10 nf-fade-up nf-fade-up-5 nf-float">
          <div className="bg-slate-900 rounded-xl p-4 text-left shadow-2xl border border-slate-700/50 max-w-sm mx-auto">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="ml-2 text-[10px] text-slate-500 font-mono">
                terminal
              </span>
            </div>
            <div className="font-mono text-xs space-y-1">
              <p className="text-slate-500">
                $ <span className="text-green-400">curl</span>{" "}
                <span className="text-cyan-400">tietex-it.com/page</span>
              </p>
              <p className="text-red-400">
                Error 404: Page not found
              </p>
              <p className="text-slate-500">
                ${" "}
                <span className="nf-blink text-yellow-400">&#9608;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
