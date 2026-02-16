export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  categoryId: string;
  categoryName: string;
  cloudinaryPublicId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type PortfolioCategory = {
  id: string;
  name: string;
  createdAt: string;
};

export type PortfolioCategoryRow = {
  id: string;
  name: string;
  created_at: string;
};

export type PortfolioRow = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  project_url: string;
  category_id: string;
  cloudinary_public_id: string | null;
  created_at: string;
  updated_at: string;
};

export function mapPortfolioRow(
  row: PortfolioRow,
  categoryName: string
): PortfolioProject {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    imageUrl: row.image_url,
    projectUrl: row.project_url,
    categoryId: row.category_id,
    categoryName,
    cloudinaryPublicId: row.cloudinary_public_id,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export function mapPortfolioCategoryRow(
  row: PortfolioCategoryRow
): PortfolioCategory {
  return {
    id: row.id,
    name: row.name,
    createdAt: row.created_at,
  };
}
