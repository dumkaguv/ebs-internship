import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Api } from "@/services/apiClient";
import type { Sort as SortType } from "@/features/courses/types";
import { useDebouncedValue, useQueryUrlParams } from "@libs";
import { useScrollTop, useChangeToInitialPage } from "@/features/courses/hooks";

const PER_PAGE = 9;

export const useCourses = () => {
  const [searchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );

  const [sort, setSort] = useState<SortType>({
    sortBy:
      (searchParams.get("order_by") as SortType["sortBy"]) || "created_at",
    sortOrder: (searchParams.get("order") as SortType["sortOrder"]) || "ASC",
  });

  const [searchValue, setSearchValue] = useState(searchParams.get("title"));
  const debouncedSearch = useDebouncedValue(searchValue, 500);

  const categories = useMemo(
    () => searchParams.get("categories")?.split(",").map(Number) ?? [],
    [searchParams]
  );

  const authors = useMemo(
    () => searchParams.get("authors")?.split(",").map(Number) ?? [],
    [searchParams]
  );

  const filters = useMemo(
    () => ({
      categories,
      authors,
      title: debouncedSearch,
      order_by: sort.sortBy,
      order: sort.sortOrder,
      page: currentPage,
      per_page: PER_PAGE,
    }),
    [
      categories,
      authors,
      debouncedSearch,
      sort.sortBy,
      sort.sortOrder,
      currentPage,
    ]
  );

  const { data, isLoading } = useQuery({
    queryKey: [
      "courses",
      sort,
      debouncedSearch,
      currentPage,
      categories,
      authors,
    ],
    queryFn: () => Api.courses.fetchCourses(filters),
  });

  useChangeToInitialPage(
    sort,
    categories,
    authors,
    setCurrentPage,
    debouncedSearch
  );
  useScrollTop(currentPage);
  useQueryUrlParams(filters);

  return {
    courses: data?.data ?? [],
    total: data?.meta?.total ?? 0,
    isLoading,
    currentPage,
    setCurrentPage,
    searchValue,
    setSearchValue,
    sort,
    setSort,
    perPage: PER_PAGE,
  };
};
