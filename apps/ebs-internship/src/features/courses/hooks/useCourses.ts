import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Api } from "@/services/apiClient";
import type { Sort as SortType } from "../types/sortTypes";
import { useQueryUrlParams } from "@/hooks";
import { useSortChangeToInitialPage, useScrollTop } from "../hooks";

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

  const filters = useMemo(
    () => ({
      order_by: sort.sortBy,
      order: sort.sortOrder,
      page: currentPage,
      per_page: PER_PAGE,
    }),
    [sort.sortBy, sort.sortOrder, currentPage]
  );

  const { data, isLoading } = useQuery({
    queryKey: ["courses", sort, currentPage],
    queryFn: () => Api.courses.fetchCourses(filters),
  });

  useSortChangeToInitialPage(sort, setCurrentPage);
  useScrollTop(currentPage);
  useQueryUrlParams(filters);

  return {
    courses: data?.data ?? [],
    total: data?.meta?.total ?? 0,
    isLoading,
    currentPage,
    setCurrentPage,
    sort,
    setSort,
    perPage: PER_PAGE,
  };
};
