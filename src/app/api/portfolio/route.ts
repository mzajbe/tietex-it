import {
  mapPortfolioRow,
  type PortfolioCategoryRow,
  type PortfolioRow,
} from "@/types/portfolio";
import { supabaseRestRequest } from "@/lib/supabase-rest";

export async function GET() {
  try {
    const [rows, categories] = await Promise.all([
      supabaseRestRequest<PortfolioRow[]>(
      "portfolio_projects?select=*&order=created_at.desc"
      ),
      supabaseRestRequest<PortfolioCategoryRow[]>(
        "portfolio_categories?select=id,name"
      ),
    ]);

    const categoryMap = new Map(categories.map((cat) => [cat.id, cat.name]));

    const items = rows.map((row) => {
      const item = mapPortfolioRow(
        row,
        categoryMap.get(row.category_id) ?? "Uncategorized"
      );
      return {
        id: item.id,
        title: item.title,
        description: item.description,
        imageUrl: item.imageUrl,
        projectUrl: item.projectUrl,
        categoryId: item.categoryId,
        categoryName: item.categoryName,
        createdAt: item.createdAt,
      };
    });

    return Response.json({ items });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch portfolio.";
    return Response.json({ error: message }, { status: 500 });
  }
}
