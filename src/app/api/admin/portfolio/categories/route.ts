import {
  mapPortfolioCategoryRow,
  type PortfolioCategoryRow,
} from "@/types/portfolio";
import { supabaseRestRequest } from "@/lib/supabase-rest";

type CreateCategoryPayload = {
  name?: string;
};

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

const MAX_NAME = 80;

export async function GET() {
  try {
    const rows = await supabaseRestRequest<PortfolioCategoryRow[]>(
      "portfolio_categories?select=*&order=name.asc"
    );
    return Response.json({ items: rows.map(mapPortfolioCategoryRow) });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch categories.";
    return Response.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CreateCategoryPayload;
    if (!isNonEmpty(body.name)) {
      return Response.json({ error: "Category name is required." }, { status: 400 });
    }

    const name = body.name.trim();
    if (name.length > MAX_NAME) {
      return Response.json(
        { error: "Category name is too long." },
        { status: 400 }
      );
    }

    const existing = await supabaseRestRequest<PortfolioCategoryRow[]>(
      `portfolio_categories?select=*&name=ilike.${encodeURIComponent(name)}`
    );
    if (existing.length > 0) {
      return Response.json(
        { error: "Category already exists." },
        { status: 409 }
      );
    }

    const inserted = await supabaseRestRequest<PortfolioCategoryRow[]>(
      "portfolio_categories",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify({ name }),
      }
    );

    if (!inserted[0]) {
      return Response.json(
        { error: "Failed to create category." },
        { status: 500 }
      );
    }

    return Response.json({ item: mapPortfolioCategoryRow(inserted[0]) });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create category.";
    return Response.json({ error: message }, { status: 500 });
  }
}
