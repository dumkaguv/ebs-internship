export interface Category {
  id: number;
  name: string;
  description?: string | null;
  name_with_breadcrumbs: string;
  slug: string;
  icon: string;
  icon_class?: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  parent_id?: number | null;
  count: number;
  order: number;
}
