import { SortBy, SortOrder } from "@/features/courses/types";

export const sortOptionsData = [
  {
    key: "created_at_ASC",
    name: "Date of creation 🡱",
    sortBy: "created_at",
    order: "ASC",
  },
  {
    key: "created_at_DESC",
    name: "Date of creation 🡳",
    sortBy: "created_at",
    order: "DESC",
  },
  { key: "title_ASC", name: "Title 🡱", sortBy: "title", order: "ASC" },
  { key: "title_DESC", name: "Title 🡳", sortBy: "title", order: "DESC" },
] as const satisfies ReadonlyArray<{
  key: string;
  name: string;
  sortBy: SortBy;
  order: SortOrder;
}>;

export const sortOptionsMap = Object.fromEntries(
  sortOptionsData.map(({ sortBy, name, order }) => [`${sortBy}_${order}`, name])
) as Record<string, string>;

export const sortOrderOptions = ["ASC", "DESC"] as const;
