"use client";

import Link from "next/link";
import { 
  Facebook, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const copy = {
    en: {
      about:
        "The leading Web Design Company in Dhaka, Bangladesh. We specialize in high-performance e-commerce, custom CMS, and digital marketing solutions that drive real business growth.",
      servicesTitle: "Our Services",
      services: [
        "E-commerce Development",
        "Portfolio Websites",
        "Custom CMS Solutions",
        "Digital Marketing",
        "UI/UX Design",
      ],
      contactTitle: "Contact Us",
      address: "Your Office Address, Dhaka,\nBangladesh",
      phone: "+880 1636024975",
      email: "tietexit@gmail.com",
      newsletterTitle: "Stay Updated",
      newsletterDesc: "Subscribe to get the latest tech news and offers.",
      emailPlaceholder: "Email Address",
      subscribe: "Subscribe",
      rights: `Ac ${currentYear} Tietex IT. All Rights Reserved.`,
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      support: "Support",
    },
    bn: {
      about:
        "ঢাকা, বাংলাদেশে শীর্ষ ওয়েব ডিজাইন কোম্পানি। আমরা হাই-পারফরম্যান্স ই-কমার্স, কাস্টম CMS এবং ডিজিটাল মার্কেটিং সল্যুশনে বিশেষজ্ঞ—যা আপনার ব্যবসাকে বাস্তব বৃদ্ধি দেয়।",
      servicesTitle: "আমাদের সেবা",
      services: [
        "ই-কমার্স ডেভেলপমেন্ট",
        "পোর্টফোলিও ওয়েবসাইট",
        "কাস্টম CMS সল্যুশন",
        "ডিজিটাল মার্কেটিং",
        "UI/UX ডিজাইন",
      ],
      contactTitle: "যোগাযোগ",
      address: "আপনার অফিসের ঠিকানা, ঢাকা,\nবাংলাদেশ",
      phone: "+880 1636024975",
      email: "tietexit@gmail.com",
      newsletterTitle: "সাথে থাকুন",
      newsletterDesc: "সর্বশেষ টেক খবর ও অফার পেতে সাবস্ক্রাইব করুন।",
      emailPlaceholder: "ইমেইল ঠিকানা",
      subscribe: "সাবস্ক্রাইব",
      rights: `Ac ${currentYear} Tietex IT. সকল অধিকার সংরক্ষিত।`,
      privacy: "প্রাইভেসি পলিসি",
      terms: "সার্ভিসের শর্তাবলি",
      support: "সাপোর্ট",
    },
  };

  const t = language === "bn" ? copy.bn : copy.en;

  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tighter">
              Tietex<span className="text-primary"> IT</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.about}
            </p>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/profile.php?id=61585948863390" className="p-2 bg-slate-900 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">{t.servicesTitle}</h4>
            <ul className="space-y-4 text-sm">
              {t.services.map((service) => (
                <li key={service}>
                  <Link href="#" className="hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">{t.contactTitle}</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>
                  {t.address.split("\n")[0]},<br />
                  {t.address.split("\n")[1]}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>{t.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>{t.email}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">{t.newsletterTitle}</h4>
            <p className="text-sm text-slate-400 mb-4">{t.newsletterDesc}</p>
            <div className="space-y-2">
              <Input 
                placeholder={t.emailPlaceholder}
                className="bg-slate-900 border-slate-800 text-white focus-visible:ring-primary"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                {t.subscribe}
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-800" />

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
          <p>{t.rights}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">{t.privacy}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t.terms}</Link>
            <Link href="#" className="hover:text-white transition-colors flex items-center gap-1">
              {t.support} <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
