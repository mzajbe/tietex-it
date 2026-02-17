"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, FileSearch, Code, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";

const WorkingProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { language } = useLanguage();

  const processes =
    language === "bn"
      ? [
          {
            icon: Lightbulb,
            title: "ডিসকভারি ও প্ল্যানিং",
            description:
              "আপনার ব্যবসার লক্ষ্য, টার্গেট অডিয়েন্স এবং প্রজেক্ট প্রয়োজন বুঝে স্ট্র্যাটেজিক রোডম্যাপ তৈরি করি।",
            color: "from-amber-500 to-orange-500",
            bgGradient: "from-amber-50 to-orange-50",
            delay: 0
          },
          {
            icon: FileSearch,
            title: "রিসার্চ ও অ্যানালাইসিস",
            description:
              "মার্কেট রিসার্চ ও কম্পিটিটিভ অ্যানালাইসিস করে আপনার সল্যুশনকে আলাদা করে তুলি।",
            color: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50",
            delay: 200
          },
          {
            icon: Code,
            title: "ডিজাইন ও ডেভেলপমেন্ট",
            description:
              "আধুনিক টেক ও বেস্ট প্র্যাকটিস দিয়ে সুন্দর ও কার্যকর ডিজাইন এবং শক্তিশালী সল্যুশন তৈরি করি।",
            color: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50",
            delay: 400
          },
          {
            icon: CheckCircle2,
            title: "টেস্টিং ও কোয়ালিটি অ্যাসিউরেন্স",
            description:
              "রিগোরাস টেস্টিং নিশ্চিত করে আপনার প্রোডাক্ট বাগ-ফ্রি, সিকিউর ও সব ডিভাইসে পারফেক্ট।",
            color: "from-green-500 to-emerald-500",
            bgGradient: "from-green-50 to-emerald-50",
            delay: 600
          },
          {
            icon: Rocket,
            title: "লঞ্চ ও সাপোর্ট",
            description:
              "সল্যুশন ডেপ্লয় করি এবং চলমান সাপোর্ট দিই যেন ফলাফল ধরে রাখা যায়।",
            color: "from-red-500 to-rose-500",
            bgGradient: "from-red-50 to-rose-50",
            delay: 800
          }
        ]
      : [
          {
            icon: Lightbulb,
            title: "Discovery & Planning",
            description:
              "We dive deep into understanding your business goals, target audience, and project requirements to create a strategic roadmap.",
            color: "from-amber-500 to-orange-500",
            bgGradient: "from-amber-50 to-orange-50",
            delay: 0
          },
          {
            icon: FileSearch,
            title: "Research & Analysis",
            description:
              "Our team conducts thorough market research and competitive analysis to ensure your solution stands out in the market.",
            color: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50",
            delay: 200
          },
          {
            icon: Code,
            title: "Design & Development",
            description:
              "We craft beautiful, functional designs and develop robust solutions using cutting-edge technologies and best practices.",
            color: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50",
            delay: 400
          },
          {
            icon: CheckCircle2,
            title: "Testing & Quality Assurance",
            description:
              "Rigorous testing ensures your product is bug-free, secure, and performs flawlessly across all devices and platforms.",
            color: "from-green-500 to-emerald-500",
            bgGradient: "from-green-50 to-emerald-50",
            delay: 600
          },
          {
            icon: Rocket,
            title: "Launch & Support",
            description:
              "We deploy your solution and provide ongoing support to ensure continued success and optimal performance.",
            color: "from-red-500 to-rose-500",
            bgGradient: "from-red-50 to-rose-50",
            delay: 800
          }
        ];

  const copy = {
    en: {
      kicker: "How We Work",
      title: "Our Working Process",
      subtitle:
        "A systematic approach to transform your ideas into exceptional digital solutions",
      cta: "Start Your Project",
    },
    bn: {
      kicker: "আমাদের কাজের ধাপ",
      title: "আমাদের ওয়ার্কিং প্রসেস",
      subtitle:
        "আপনার আইডিয়াকে এক্সসেপশনাল ডিজিটাল সল্যুশনে রূপ দিতে একটি সিস্টেমেটিক পদ্ধতি",
      cta: "আপনার প্রজেক্ট শুরু করুন",
    },
  };

  const t = language === "bn" ? copy.bn : copy.en;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processes.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, processes.length]);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden">
      <div
        className="relative"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15,23,42,0.7), rgba(15,23,42,0.7)), url('https://substackcdn.com/image/fetch/$s_!cT5n!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7feb4465-91ad-407f-9fb1-f9aea072aa21_1906x1065.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative px-4 sm:px-6 lg:px-8 min-h-[70vh]">
          <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            {/* <span className="text-black font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
              {t.kicker}
            </span> */}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-white  bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Desktop Timeline View */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 via-blue-200 via-purple-200 via-green-200 to-red-200 transform -translate-y-1/2">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 via-blue-500 via-purple-500 via-green-500 to-red-500 transition-all duration-1000 ease-out"
              style={{ width: isVisible ? `${((activeStep + 1) / processes.length) * 100}%` : '0%' }}
            />
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-5 gap-4 relative">
            {processes.map((process, index) => {
              const Icon = process.icon;
              const isActive = index === activeStep;
              const isPassed = index < activeStep;

              return (
                <div
                  key={index}
                  className={`transition-all duration-700 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${process.delay}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center mb-8">
                    <div
                      className={`relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 transform ${
                        isActive || isPassed
                          ? `bg-gradient-to-br ${process.color} shadow-2xl scale-110`
                          : 'bg-white shadow-lg scale-100'
                      }`}
                    >
                      <Icon
                        className={`w-10 h-10 transition-colors duration-300 ${
                          isActive || isPassed ? 'text-white' : 'text-gray-400'
                        }`}
                      />
                      {(isActive || isPassed) && (
                        <div className={`absolute inset-0 bg-gradient-to-br ${process.color} rounded-2xl blur-xl opacity-50 animate-pulse`} />
                      )}
                    </div>
                    <div
                      className={`mt-4 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        isActive || isPassed
                          ? `bg-gradient-to-br ${process.color} text-white shadow-lg`
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 border-2 ${
                      isActive
                        ? `border-transparent bg-gradient-to-br ${process.bgGradient} shadow-2xl transform scale-105`
                        : 'border-gray-100 hover:border-gray-200 hover:shadow-xl'
                    }`}
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {process.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Accordion View */}
        <div className="lg:hidden space-y-4">
          {processes.map((process, index) => {
            const Icon = process.icon;
            const isActive = index === activeStep;

            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${process.delay}ms` }}
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 cursor-pointer border-2 ${
                    isActive
                      ? `border-transparent bg-gradient-to-br ${process.bgGradient} shadow-2xl`
                      : 'border-gray-100 hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isActive
                          ? `bg-gradient-to-br ${process.color} shadow-xl`
                          : 'bg-gray-100'
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-gray-600'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-800">
                          {process.title}
                        </h3>
                        <span
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                            isActive
                              ? `bg-gradient-to-br ${process.color} text-white`
                              : 'bg-gray-200 text-gray-600'
                          }`}
                        >
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1000  pb-6 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 '
          }`}
        >
          <button className="group relative bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ">
            <span className="relative z-10 flex items-center gap-2 ">
              {t.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;
