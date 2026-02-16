"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroImageSection from "@/components/portfolio/HeroImageSection";
import PortfolioContent from "@/components/portfolio/PortfolioContent";
import type { PortfolioProject } from "@/types/portfolio";

import heroImage from "@/./../public/nasa-Q1p7bh3SHj8-unsplash.jpg";

type PortfolioApiResponse = {
  items?: Array<{
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    categoryId: string;
    categoryName: string;
    createdAt: string;
  }>;
  error?: string;
};

export default function PortfolioPageClient() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/api/portfolio", { cache: "no-store" });
        const data = (await response.json()) as PortfolioApiResponse;

        if (!response.ok) {
          throw new Error(data.error || "Failed to load portfolio projects.");
        }

        const mapped: PortfolioProject[] = (data.items ?? []).map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          imageUrl: item.imageUrl,
          projectUrl: item.projectUrl,
          categoryId: item.categoryId,
          categoryName: item.categoryName,
          cloudinaryPublicId: null,
          createdAt: item.createdAt,
          updatedAt: item.createdAt,
        }));

        if (isMounted) {
          setProjects(mapped);
        }
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to load portfolio projects.";
        if (isMounted) {
          setError(message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="-mt-24">
      <div className="relative">
        <HeroImageSection
          src={heroImage}
          alt="Tietex IT portfolio banner"
          heightClassName="h-[51vh]"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="px-4 text-white">
            <h1 className="text-4xl font-extrabold md:text-5xl">Our Portfolio</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Some of our completed projects that demonstrate the impact we deliver.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button className="bg-primary text-white">Discuss a Project</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <section className="container mx-auto px-4 py-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-600">
            Loading portfolio projects...
          </div>
        </section>
      ) : error ? (
        <section className="container mx-auto px-4 py-16">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-10 text-center text-red-700">
            {error}
          </div>
        </section>
      ) : (
        <PortfolioContent projects={projects} />
      )}
    </main>
  );
}
