"use client";

import { useMemo, useState } from "react";
import Card3dDemo from "@/components/portfolio/Card3dDemo";
import type { PortfolioProject } from "@/types/portfolio";

type PortfolioContentProps = {
  projects: PortfolioProject[];
};

export default function PortfolioContent({ projects }: PortfolioContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const names = Array.from(new Set(projects.map((project) => project.categoryName)));
    return ["All", ...names.sort((a, b) => a.localeCompare(b))];
  }, [projects]);

  const grouped = useMemo(() => {
    const source =
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.categoryName === activeCategory);

    const map = new Map<string, PortfolioProject[]>();
    for (const project of source) {
      const key = project.categoryName || "Uncategorized";
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key)!.push(project);
    }

    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [activeCategory, projects]);

  return (
    <section className="container mx-auto px-4 py-16">
      {projects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
          No portfolio projects found yet.
        </div>
      ) : (
        <>
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
                  {category}
                </button>
              );
            })}
          </div>

          <div className="space-y-12">
            {grouped.map(([categoryName, categoryProjects]) => (
              <div key={categoryName}>
                <h3 className="mb-5 text-2xl font-bold text-slate-900">{categoryName}</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryProjects.map((project) => (
                    <Card3dDemo
                      key={project.id}
                      title={project.title}
                      desc={project.description}
                      image={project.imageUrl}
                      liveUrl={project.projectUrl}
                      imageHeightClass="h-72"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
