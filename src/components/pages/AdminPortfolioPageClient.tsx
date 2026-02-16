"use client";

import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroImageSection from "@/components/portfolio/HeroImageSection";
import type { PortfolioCategory, PortfolioProject } from "@/types/portfolio";
import heroImage from "@/./../../../public/nasa-Q1p7bh3SHj8-unsplash.jpg";

type AdminResponse = {
  items?: PortfolioProject[];
  categories?: PortfolioCategory[];
  item?: PortfolioProject;
  error?: string;
};

type CategoryResponse = {
  items?: PortfolioCategory[];
  item?: PortfolioCategory;
  error?: string;
};

type PortfolioForm = {
  title: string;
  description: string;
  projectUrl: string;
  categoryId: string;
};

const initialForm: PortfolioForm = {
  title: "",
  description: "",
  projectUrl: "",
  categoryId: "",
};

export default function AdminPortfolioPageClient() {
  const [items, setItems] = useState<PortfolioProject[]>([]);
  const [categories, setCategories] = useState<PortfolioCategory[]>([]);
  const [form, setForm] = useState<PortfolioForm>(initialForm);
  const [file, setFile] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);
  const [existingCloudinaryPublicId, setExistingCloudinaryPublicId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeletingId, setIsDeletingId] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [showCreateCategory, setShowCreateCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);

  const modeLabel = useMemo(() => (editingId ? "Update Project" : "Create Project"), [editingId]);

  const loadDashboardData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("/api/admin/portfolio", { cache: "no-store" });
      const data = (await response.json()) as AdminResponse;
      if (!response.ok) {
        throw new Error(data.error || "Failed to load dashboard data.");
      }

      const nextCategories = data.categories ?? [];
      setItems(data.items ?? []);
      setCategories(nextCategories);

      setForm((prev) => {
        if (prev.categoryId) return prev;
        const firstCategoryId = nextCategories[0]?.id ?? "";
        return { ...prev, categoryId: firstCategoryId };
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to load dashboard data.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadDashboardData();
  }, []);

  const resetForm = () => {
    setForm({
      ...initialForm,
      categoryId: categories[0]?.id ?? "",
    });
    setFile(null);
    setEditingId(null);
    setExistingImageUrl(null);
    setExistingCloudinaryPublicId(null);
  };

  const handleChange =
    (key: keyof PortfolioForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const uploadImageIfNeeded = async () => {
    if (!file) {
      if (editingId && existingImageUrl) {
        return {
          imageUrl: existingImageUrl,
          cloudinaryPublicId: existingCloudinaryPublicId,
        };
      }
      throw new Error("Please select an image.");
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/admin/portfolio/upload", {
      method: "POST",
      body: formData,
    });

    const data = (await response.json()) as {
      imageUrl?: string;
      cloudinaryPublicId?: string;
      error?: string;
    };

    if (!response.ok || !data.imageUrl || !data.cloudinaryPublicId) {
      throw new Error(data.error || "Image upload failed.");
    }

    return {
      imageUrl: data.imageUrl,
      cloudinaryPublicId: data.cloudinaryPublicId,
    };
  };

  const handleCreateCategory = async () => {
    const trimmed = newCategoryName.trim();
    if (!trimmed) {
      setError("Category name is required.");
      return;
    }

    try {
      setIsCreatingCategory(true);
      setError(null);
      setStatus(null);

      const response = await fetch("/api/admin/portfolio/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmed }),
      });

      const data = (await response.json()) as CategoryResponse;
      if (!response.ok || !data.item) {
        throw new Error(data.error || "Failed to create category.");
      }

      setCategories((prev) => [...prev, data.item!].sort((a, b) => a.name.localeCompare(b.name)));
      setForm((prev) => ({ ...prev, categoryId: data.item!.id }));
      setNewCategoryName("");
      setShowCreateCategory(false);
      setStatus("Category created.");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to create category.";
      setError(message);
    } finally {
      setIsCreatingCategory(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setError(null);

    try {
      setIsSaving(true);

      const uploaded = await uploadImageIfNeeded();

      const payload = {
        title: form.title,
        description: form.description,
        projectUrl: form.projectUrl,
        categoryId: form.categoryId,
        imageUrl: uploaded.imageUrl,
        cloudinaryPublicId: uploaded.cloudinaryPublicId,
      };

      const endpoint = editingId
        ? `/api/admin/portfolio/${editingId}`
        : "/api/admin/portfolio";
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as AdminResponse;
      if (!response.ok) {
        throw new Error(data.error || "Failed to save portfolio item.");
      }

      setStatus(editingId ? "Portfolio item updated." : "Portfolio item created.");
      resetForm();
      await loadDashboardData();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to save portfolio item.";
      setError(message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleEdit = (item: PortfolioProject) => {
    setStatus(null);
    setError(null);
    setEditingId(item.id);
    setForm({
      title: item.title,
      description: item.description,
      projectUrl: item.projectUrl,
      categoryId: item.categoryId,
    });
    setExistingImageUrl(item.imageUrl);
    setExistingCloudinaryPublicId(item.cloudinaryPublicId);
    setFile(null);
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Delete this portfolio item?");
    if (!confirmed) return;

    try {
      setStatus(null);
      setError(null);
      setIsDeletingId(id);

      const response = await fetch(`/api/admin/portfolio/${id}`, {
        method: "DELETE",
      });
      const data = (await response.json()) as AdminResponse;
      if (!response.ok) {
        throw new Error(data.error || "Failed to delete portfolio item.");
      }

      if (editingId === id) {
        resetForm();
      }
      setStatus("Portfolio item deleted.");
      await loadDashboardData();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to delete portfolio item.";
      setError(message);
    } finally {
      setIsDeletingId(null);
    }
  };

  return (
    <main className="-mt-24">
      <div className="relative">
        <HeroImageSection
          src={heroImage}
          alt="Admin dashboard banner"
          heightClassName="h-[36vh]"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="px-4 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/75">
              Admin Dashboard
            </p>
            <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
              Portfolio Management
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 md:text-lg">
              Create, update, categorize, and maintain all portfolio projects from one place.
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 pb-20 pt-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Admin Portfolio Dashboard</h2>
          <p className="mt-2 text-slate-600">
            Create, update, and delete portfolio projects.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr]">
          <Card className="border bg-white shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-slate-900">{modeLabel}</h2>
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Title</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={handleChange("title")}
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Description</label>
                  <textarea
                    value={form.description}
                    onChange={handleChange("description")}
                    required
                    rows={5}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Project Link</label>
                  <input
                    type="url"
                    value={form.projectUrl}
                    onChange={handleChange("projectUrl")}
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="mb-1 block text-sm font-medium text-slate-700">Category</label>
                  <div className="flex gap-2">
                    <select
                      value={form.categoryId}
                      onChange={handleChange("categoryId")}
                      required
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
                    >
                      <option value="" disabled>
                        Select category
                      </option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    <Button type="button" variant="outline" onClick={() => setShowCreateCategory((prev) => !prev)}>
                      +
                    </Button>
                  </div>
                  {showCreateCategory && (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        placeholder="New category name"
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
                      />
                      <Button
                        type="button"
                        onClick={() => void handleCreateCategory()}
                        disabled={isCreatingCategory}
                      >
                        {isCreatingCategory ? "Creating..." : "Add"}
                      </Button>
                    </div>
                  )}
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Project Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
                  />
                  {existingImageUrl && !file && (
                    <p className="mt-2 text-xs text-slate-500">
                      Current image will be reused unless a new file is selected.
                    </p>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button type="submit" disabled={isSaving} className="bg-slate-900 text-white hover:bg-slate-800">
                    {isSaving ? "Saving..." : modeLabel}
                  </Button>
                  {editingId && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={resetForm}
                    >
                      Cancel Edit
                    </Button>
                  )}
                </div>
              </form>

              {status && <p className="mt-4 text-sm text-emerald-600">{status}</p>}
              {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
            </CardContent>
          </Card>

          <Card className="border bg-white shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-slate-900">Existing Projects</h2>

              {isLoading ? (
                <p className="mt-4 text-slate-600">Loading projects...</p>
              ) : items.length === 0 ? (
                <p className="mt-4 text-slate-600">No projects added yet.</p>
              ) : (
                <div className="mt-4 space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-xl border border-slate-200 p-4"
                    >
                      <div className="grid gap-4 md:grid-cols-[120px_1fr]">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="h-24 w-full rounded-md object-cover"
                          loading="lazy"
                        />
                        <div>
                          <h3 className="font-semibold text-slate-900">{item.title}</h3>
                          <p className="mt-1 text-xs font-medium text-slate-500">{item.categoryName}</p>
                          <p className="mt-1 line-clamp-2 text-sm text-slate-600">{item.description}</p>
                          <a
                            href={item.projectUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-2 inline-block text-sm text-blue-700 hover:underline"
                          >
                            Visit Project
                          </a>

                          <div className="mt-3 flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => handleEdit(item)}>
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => void handleDelete(item.id)}
                              disabled={isDeletingId === item.id}
                            >
                              {isDeletingId === item.id ? "Deleting..." : "Delete"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
