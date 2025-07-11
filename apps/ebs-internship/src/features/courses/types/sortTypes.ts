import { FetchCoursesParams } from "@/services/courses";

export type SortBy = NonNullable<FetchCoursesParams["order_by"]>;
export type SortOrder = NonNullable<FetchCoursesParams["order"]>;

export interface Sort {
  sortBy: SortBy;
  sortOrder: SortOrder;
}
