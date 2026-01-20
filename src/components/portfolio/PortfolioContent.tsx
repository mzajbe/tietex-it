"use client";

import { useMemo, useState } from "react";
import Card3dDemo from "@/components/portfolio/Card3dDemo";
import { useLanguage } from "@/context/LanguageContext";

type PortfolioProject = {
  title: string;
  desc: string;
  image: string;
  liveUrl: string;
  category: string;
};

type PortfolioContentProps = {
  projects: PortfolioProject[];
};

export default function PortfolioContent({ projects }: PortfolioContentProps) {
  const { language } = useLanguage();
  const categoryLabels: Record<string, { en: string; bn: string }> = {
    All: { en: "All", bn: "সব" },
    "E-Commerce": { en: "E-Commerce", bn: "ই-কমার্স" },
    "Real Estate": { en: "Real Estate", bn: "রিয়েল এস্টেট" },
    Beauty: { en: "Beauty", bn: "বিউটি" },
  };
  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...unique];
  }, [projects]);

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-transparent bg-primary text-white shadow-md"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900"
              }`}
              aria-pressed={isActive}
            >
              {language === "bn" ? categoryLabels[category]?.bn ?? category : categoryLabels[category]?.en ?? category}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((p, i) => (
          <Card3dDemo
            key={i}
            title={p.title}
            desc={p.desc}
            image={p.image}
            liveUrl={p.liveUrl}
            imageHeightClass="h-72" // bigger preview (you can use h-80 too)
          />
        ))}
      </div>
    </section>
  );
}
