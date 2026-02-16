import {
  mapPortfolioRow,
  mapPortfolioCategoryRow,
  type PortfolioCategoryRow,
  type PortfolioRow,
} from "@/types/portfolio";
import { supabaseRestRequest } from "@/lib/supabase-rest";

type CreatePortfolioPayload = {
  title?: string;
  description?: string;
  projectUrl?: string;
  categoryId?: string;
  imageUrl?: string;
  cloudinaryPublicId?: string | null;
};

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidUrl(value: string) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

function isValidUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value
  );
}

const MAX_TITLE = 180;
const MAX_DESCRIPTION = 5000;
const MAX_URL = 2000;

export async function GET() {
  try {
    const [rows, categories] = await Promise.all([
      supabaseRestRequest<PortfolioRow[]>(
        "portfolio_projects?select=*&order=created_at.desc"
      ),
      supabaseRestRequest<PortfolioCategoryRow[]>(
        "portfolio_categories?select=*&order=name.asc"
      ),
    ]);

    const categoryMap = new Map(categories.map((category) => [category.id, category.name]));
    const items = rows.map((row) =>
      mapPortfolioRow(row, categoryMap.get(row.category_id) ?? "Uncategorized")
    );

    return Response.json({
      items,
      categories: categories.map(mapPortfolioCategoryRow),
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to fetch admin portfolio data.";
    return Response.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CreatePortfolioPayload;

    if (
      !isNonEmpty(body.title) ||
      !isNonEmpty(body.description) ||
      !isNonEmpty(body.projectUrl) ||
      !isNonEmpty(body.categoryId) ||
      !isNonEmpty(body.imageUrl)
    ) {
      return Response.json(
        {
          error:
            "title, description, projectUrl, categoryId and imageUrl are required.",
        },
        { status: 400 }
      );
    }

    if (
      body.title.length > MAX_TITLE ||
      body.description.length > MAX_DESCRIPTION ||
      body.projectUrl.length > MAX_URL ||
      body.imageUrl.length > MAX_URL
    ) {
      return Response.json(
        { error: "One or more fields exceed maximum length." },
        { status: 400 }
      );
    }

    if (!isValidUrl(body.projectUrl) || !isValidUrl(body.imageUrl)) {
      return Response.json(
        { error: "projectUrl and imageUrl must be valid URLs." },
        { status: 400 }
      );
    }
    if (!isValidUuid(body.categoryId)) {
      return Response.json({ error: "Invalid categoryId." }, { status: 400 });
    }

    const categoryRows = await supabaseRestRequest<PortfolioCategoryRow[]>(
      `portfolio_categories?select=id,name&id=eq.${encodeURIComponent(body.categoryId)}`
    );
    const category = categoryRows[0];
    if (!category) {
      return Response.json({ error: "Selected category not found." }, { status: 400 });
    }

    const insertedData = await supabaseRestRequest<PortfolioRow[] | PortfolioRow>(
      "portfolio_projects",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          title: body.title.trim(),
          description: body.description.trim(),
          project_url: body.projectUrl.trim(),
          category_id: body.categoryId,
          image_url: body.imageUrl.trim(),
          cloudinary_public_id: body.cloudinaryPublicId?.trim() || null,
        }),
      }
    );

    const inserted = Array.isArray(insertedData) ? insertedData[0] : insertedData;
    if (!inserted) {
      return Response.json(
        { error: "Failed to create portfolio item." },
        { status: 500 }
      );
    }

    return Response.json({ item: mapPortfolioRow(inserted, category.name) });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create portfolio.";
    return Response.json({ error: message }, { status: 500 });
  }
}
