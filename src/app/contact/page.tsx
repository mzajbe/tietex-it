"use client"
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MyMap } from '@/components/about/MyMap';
import { useLanguage } from "@/context/LanguageContext";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

export default function ContactPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copy = {
    en: {
      heroKicker: "Contact",
      heroTitle: "Let's build something bold together.",
      heroBody:
        "Tell us about your goals and we'll map a plan that fits your timeline, budget, and vision.",
      heroTags: ["24h response", "Clear scope", "Transparent pricing"],
      infoCards: [
        { label: "Email us", value: "tietexit@gmail.com", icon: Mail },
        { label: "Call us", value: "01636024975", icon: Phone },
        { label: "Office", value: "Dhaka, Bangladesh", icon: MapPin },
        { label: "Availability", value: "Mon-Sat, 9am-7pm", icon: CheckCircle2 },
      ],
      briefTitle: "Start with a quick brief",
      briefBody:
        "Share your goals, timeline, and budget. We'll respond with a clear next step.",
      briefBullets: [
        "Discovery call within 24 hours",
        "Clear scope and delivery plan",
        "Senior team on every project",
      ],
      quickContactsTitle: "Quick contacts",
      quickEmailLabel: "Email",
      quickPhoneLabel: "Phone",
      successTitle: "Message Sent!",
      successBody: "We'll get back to you within 24 hours.",
      nameLabel: "Full Name *",
      namePlaceholder: "Ridan",
      emailLabel: "Email Address *",
      emailPlaceholder: "ridan@gmail.com",
      projectLabel: "Project Details *",
      projectPlaceholder: "Tell us about your project...",
      send: "Send Message",
      sending: "Sending...",
      officeTitle: "Our Office",
      officeLocation: "Dhaka, Bangladesh",
    },
    bn: {
      heroKicker: "যোগাযোগ",
      heroTitle: "চলুন একসাথে কিছু সাহসী তৈরি করি।",
      heroBody:
        "আপনার লক্ষ্য বলুন—আমরা আপনার টাইমলাইন, বাজেট ও ভিশনের সাথে মানানসই একটি পরিকল্পনা সাজাব।",
      heroTags: ["২৪ ঘন্টায় উত্তর", "স্পষ্ট স্কোপ", "স্বচ্ছ মূল্য"],
      infoCards: [
        { label: "ইমেইল করুন", value: "tietexit@gmail.com", icon: Mail },
        { label: "কল করুন", value: "01636024975", icon: Phone },
        { label: "অফিস", value: "ঢাকা, বাংলাদেশ", icon: MapPin },
        { label: "সময়", value: "সোম-শনি, সকাল ৯টা-সন্ধ্যা ৭টা", icon: CheckCircle2 },
      ],
      briefTitle: "দ্রুত একটি ব্রিফ দিয়ে শুরু করুন",
      briefBody:
        "আপনার লক্ষ্য, টাইমলাইন ও বাজেট জানান। আমরা পরবর্তী স্পষ্ট স্টেপ জানাব।",
      briefBullets: [
        "২৪ ঘণ্টার মধ্যে ডিসকভারি কল",
        "স্পষ্ট স্কোপ ও ডেলিভারি প্ল্যান",
        "প্রতিটি প্রজেক্টে সিনিয়র টিম",
      ],
      quickContactsTitle: "দ্রুত যোগাযোগ",
      quickEmailLabel: "ইমেইল",
      quickPhoneLabel: "ফোন",
      successTitle: "মেসেজ পাঠানো হয়েছে!",
      successBody: "২৪ ঘণ্টার মধ্যে আমরা উত্তর দেব।",
      nameLabel: "পূর্ণ নাম *",
      namePlaceholder: "রিদান",
      emailLabel: "ইমেইল ঠিকানা *",
      emailPlaceholder: "ridan@gmail.com",
      projectLabel: "প্রজেক্টের বিবরণ *",
      projectPlaceholder: "আপনার প্রজেক্ট সম্পর্কে বলুন...",
      send: "মেসেজ পাঠান",
      sending: "পাঠানো হচ্ছে...",
      officeTitle: "আমাদের অফিস",
      officeLocation: "ঢাকা, বাংলাদেশ",
    },
  };

  const t = language === "bn" ? copy.bn : copy.en;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };



  return (
    <main className="bg-slate-50 -mt-24">
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
              <div className="flex flex-wrap gap-3 pt-2 text-sm text-white/70">
                {t.heroTags.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-2"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {t.infoCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/15 bg-white/5 p-5"
                  >
                    <Icon className="h-5 w-5 text-cyan-200" />
                    <p className="mt-3 text-xs uppercase tracking-widest text-white/60">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{t.briefTitle}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {t.briefBody}
                </p>
                <div className="mt-6 grid gap-3 text-sm text-slate-600">
                  {t.briefBullets.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{t.quickContactsTitle}</h3>
                <div className="mt-4 space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-slate-100 p-2">
                      <Mail className="h-4 w-4 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-slate-500">{t.quickEmailLabel}</p>
                      <p className="font-semibold text-slate-900">tietexit@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-slate-100 p-2">
                      <Phone className="h-4 w-4 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-slate-500">{t.quickPhoneLabel}</p>
                      <p className="font-semibold text-slate-900">01636024975</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border bg-white shadow-lg">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.successTitle}</h3>
                    <p className="text-slate-600">{t.successBody}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-700 font-medium mb-2">{t.nameLabel}</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                          placeholder={t.namePlaceholder}
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-medium mb-2">{t.emailLabel}</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                          placeholder={t.emailPlaceholder}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-medium mb-2">{t.projectLabel}</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                        placeholder={t.projectPlaceholder}
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          {t.sending}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          {t.send}
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="px-6 py-4 border-b border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900">{t.officeTitle}</h3>
              <p className="text-sm text-slate-500">{t.officeLocation}</p>
            </div>
            <div className="h-[360px]">
              <MyMap></MyMap>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
