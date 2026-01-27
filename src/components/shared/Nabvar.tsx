"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/context/LanguageContext";

const Nabvar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copy = {
    en: {
      brandTagline: "Innovation & Technology",
      cta: "Get Started",
      toggle: "BN",
      navItems: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
    },
    bn: {
      brandTagline: "উদ্ভাবন ও প্রযুক্তি",
      cta: "শুরু করুন",
      toggle: "EN",
      navItems: [
        { name: "হোম", href: "/" },
        { name: "সার্ভিস", href: "/services" },
        { name: "পোর্টফোলিও", href: "/portfolio" },
        { name: "আমাদের সম্পর্কে", href: "/about" },
        { name: "যোগাযোগ", href: "/contact" },
      ],
    },
  };

  const t = language === "bn" ? copy.bn : copy.en;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group">
            <div className="relative"></div>
            <div className="ml-3">
              <span
                className={`text-xl md:text-2xl font-bold ${isScrolled ? "bg-primary bg-clip-text text-transparent" : "text-white"}`}
              >
                Tietex IT
              </span>
              <p
                className={`text-xs hidden sm:block ${isScrolled ? "text-gray-600" : "text-white/70"}`}
              >
                {t.brandTagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {t.navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 font-medium text-sm lg:text-base rounded-lg transition-all duration-300 group ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-1/2 w-0 h-0.5 transform -translate-x-1/2 transition-all duration-300 group-hover:w-3/4 ${
                    isScrolled
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                      : "bg-white"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              type="button"
              onClick={toggleLanguage}
              className={`px-3 py-2 rounded-full text-xs font-semibold tracking-widest border transition-all ${
                isScrolled
                  ? "border-slate-200 text-slate-700 hover:text-blue-600"
                  : "border-white/40 text-white hover:bg-white/10"
              }`}
              aria-label="Toggle language"
            >
              {t.toggle}
            </button>
            <Link href="/contact">
              <Button
                className={`relative px-6 py-2 rounded-lg font-medium shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 ${
                  isScrolled
                    ? "bg-primary text-white"
                    : "bg-white text-slate-900"
                }`}
              >
                <span className="relative z-10">{t.cta}</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden pr-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-700 hover:text-orange-600 hover:bg-blue-50/50 mr-2"
                >
                  {isOpen ? (
                    <X className="h-6 w-6 " />
                  ) : (
                    <Menu className="h-6 w-6 " />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] p-6  bg-white/95 backdrop-blur-xl border-l border-white/20"
              >
                <div className="flex flex-col mr-6 space-y-6 mt-8">
                  <div className="flex items-center space-x-3 pb-6 border-b border-gray-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">T</span>
                    </div>
                    <div>
                      <span className="text-lg font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                        Tietex IT
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={toggleLanguage}
                      className="ml-auto rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold tracking-widest text-slate-700 "
                      aria-label="Toggle language"
                    >
                      {t.toggle}
                    </button>
                  </div>

                  {t.navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-700 font-medium text-lg hover:text-orange-600 transition-colors duration-300 flex items-center justify-between group"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4 transform -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}

                  <Button
                    className="w-full  py-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.cta}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="h opacity-50"></div>
    </nav>
  );
};

export default Nabvar;
