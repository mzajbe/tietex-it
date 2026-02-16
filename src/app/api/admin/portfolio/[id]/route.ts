import { deleteCloudinaryImage } from "@/lib/cloudinary";
import { supabaseRestRequest } from "@/lib/supabase-rest";
import {
  mapPortfolioRow,
  type PortfolioCategoryRow,
  type PortfolioRow,
} from "@/types/portfolio";

type UpdatePortfolioPayload = {
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

async function getItemById(id: string) {
  const encodedId = encodeURIComponent(id);
  const rows = await supabaseRestRequest<PortfolioRow[]>(
    `portfolio_projects?select=*&id=eq.${encodedId}`
  );
  return rows[0] ?? null;
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = (await req.json()) as UpdatePortfolioPayload;

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

    const existing = await getItemById(id);
    if (!existing) {
      return Response.json({ error: "Portfolio item not found." }, { status: 404 });
    }

    const categoryRows = await supabaseRestRequest<PortfolioCategoryRow[]>(
      `portfolio_categories?select=id,name&id=eq.${encodeURIComponent(body.categoryId)}`
    );
    const category = categoryRows[0];
    if (!category) {
      return Response.json({ error: "Selected category not found." }, { status: 400 });
    }

    const encodedId = encodeURIComponent(id);
    const updatedData = await supabaseRestRequest<PortfolioRow[] | PortfolioRow>(
      `portfolio_projects?id=eq.${encodedId}`,
      {
        method: "PATCH",
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
          updated_at: new Date().toISOString(),
        }),
      }
    );

    const updated = Array.isArray(updatedData) ? updatedData[0] : updatedData;
    if (!updated) {
      return Response.json(
        { error: "Failed to update portfolio item." },
        { status: 500 }
      );
    }

    const oldPublicId = existing.cloudinary_public_id;
    const newPublicId = updated.cloudinary_public_id;
    if (oldPublicId && newPublicId && oldPublicId !== newPublicId) {
      try {
        await deleteCloudinaryImage(oldPublicId);
      } catch {
        // Do not fail the update if old image cleanup fails.
      }
    }

    return Response.json({ item: mapPortfolioRow(updated, category.name) });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update portfolio.";
    return Response.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const existing = await getItemById(id);
    if (!existing) {
      return Response.json({ error: "Portfolio item not found." }, { status: 404 });
    }

    const encodedId = encodeURIComponent(id);
    await supabaseRestRequest<null>(`portfolio_projects?id=eq.${encodedId}`, {
      method: "DELETE",
      headers: {
        Prefer: "return=minimal",
      },
    });

    if (existing.cloudinary_public_id) {
      try {
        await deleteCloudinaryImage(existing.cloudinary_public_id);
      } catch {
        // Do not fail delete response if Cloudinary cleanup fails.
      }
    }

    return Response.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete portfolio item.";
    return Response.json({ error: message }, { status: 500 });
  }
}
