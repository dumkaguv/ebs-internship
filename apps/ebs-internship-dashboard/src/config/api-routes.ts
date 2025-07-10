import { ApiRoutes as GlobalApiRoutes } from "@libs";

export const ApiRoutes = {
  ...GlobalApiRoutes,
  COURSES: "/admin/courses",
  LESSONS: "/admin/lessons",
  COUPONS: "/admin/vouchers",
};

type ExtractRoutes<T> = T extends string
  ? T
  : T extends object
  ? ExtractRoutes<T[keyof T]>
  : never;

type FlatApiRoutes = ExtractRoutes<typeof ApiRoutes>;

export const getApiUrlById = (
  baseRoute: FlatApiRoutes,
  id: string | number
): string => `${baseRoute}/${id}`;
