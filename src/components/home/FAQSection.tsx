"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus, MessageCircle, HelpCircle, Sparkles } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState([0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const faqs = [
    {
      question: "What services does Tietex IT provide?",
      answer: "We offer a comprehensive range of IT services including web development, mobile app development, UI/UX design, cloud solutions, digital marketing, and IT consulting. Our team specializes in creating custom solutions tailored to your business needs.",
      category: "Services"
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-4 months. We provide detailed timelines during the discovery phase and keep you updated throughout the development process.",
      category: "Timeline"
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile methodology with five key phases: Discovery & Planning, Research & Analysis, Design & Development, Testing & QA, and Launch & Support. This ensures transparency, flexibility, and high-quality deliverables at every stage.",
      category: "Process"
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Absolutely! We offer comprehensive post-launch support including bug fixes, updates, security patches, and feature enhancements. We provide different support packages to match your needs, from basic maintenance to dedicated development teams.",
      category: "Support"
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with cutting-edge technologies including React, Next.js, Node.js, Python, React Native, Flutter, AWS, Azure, and more. Our team stays updated with the latest tech trends to deliver modern, scalable solutions.",
      category: "Technology"
    },
    {
      question: "How much does a project cost?",
      answer: "Project costs depend on scope, complexity, and features required. We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team arrangements. Contact us for a detailed quote tailored to your specific requirements.",
      category: "Pricing"
    },
    {
      question: "Can you work with existing systems?",
      answer: "Yes! We specialize in integrating with existing systems, APIs, and databases. Whether you need to modernize legacy systems or add new features to your current platform, our team has the expertise to ensure seamless integration.",
      category: "Integration"
    },
    {
      question: "Do you sign NDAs and protect client data?",
      answer: "Client confidentiality is our top priority. We're happy to sign NDAs before any project discussion. We follow strict security protocols and industry best practices to protect your intellectual property and sensitive data.",
      category: "Security"
    }
  ];

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

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const leftColumnFaqs = faqs.filter((_, index) => index % 2 === 0);
  const rightColumnFaqs = faqs.filter((_, index) => index % 2 === 1);

  const FAQItem = ({ faq, index, originalIndex }) => {
    const isOpen = openItems.includes(originalIndex);
    const contentRef = useRef(null);

    return (
      <div
        className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div
          className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
            isOpen 
              ? 'border-blue-500 shadow-blue-100' 
              : 'border-gray-100 hover:border-blue-200'
          }`}
        >
          <button
            onClick={() => toggleItem(originalIndex)}
            className="w-full text-left p-6 flex items-start justify-between gap-4 transition-all duration-300"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 ${
                  isOpen 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                }`}>
                  {faq.category}
                </span>
              </div>
              <h3 className={`text-lg font-bold transition-colors duration-300 ${
                isOpen ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-600'
              }`}>
                {faq.question}
              </h3>
            </div>
            <div
              className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isOpen
                  ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-lg rotate-180'
                  : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600'
              }`}
            >
              {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </div>
          </button>
          
          <div
            ref={contentRef}
            style={{
              maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px'
            }}
            className="overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="px-6 pb-6">
              <div className="pt-2 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed mt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8  relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-4  px-6 py-3 rounded-full shadow-lg">
            <HelpCircle className="w-5 h-5" />
            <span className="font-semibold text-sm uppercase tracking-wider">
              Got Questions?
            </span>
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and how we can help transform your digital presence
          </p>
        </div>

        {/* Two Column Layout - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 mb-12">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumnFaqs.map((faq, index) => (
              <FAQItem 
                key={index * 2} 
                faq={faq} 
                index={index} 
                originalIndex={index * 2}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumnFaqs.map((faq, index) => (
              <FAQItem 
                key={index * 2 + 1} 
                faq={faq} 
                index={index} 
                originalIndex={index * 2 + 1}
              />
            ))}
          </div>
        </div>

        {/* Single Column Layout - Mobile */}
        <div className="md:hidden space-y-6 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              index={index} 
              originalIndex={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Still Have Questions?
            </h3>
          </div>
          <p className="text-blue-50 text-lg mb-6 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our team is here to help! Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;