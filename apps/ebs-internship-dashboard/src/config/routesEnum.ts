export const RoutesEnum = {
  DASHBOARD: "/",
  COURSES: {
    BASE: "/courses",
    ADD: "/courses/add",
  },
  REVENUE: "/revenue",
  SETTINGS: "/settings",
} as const;

type ExtractRoutes<T> = T extends string
  ? T
  : T extends object
  ? ExtractRoutes<T[keyof T]>
  : never;

type FlatAppRoutes = ExtractRoutes<typeof RoutesEnum>;

export const getRouteUrlById = (
  baseRoute: FlatAppRoutes,
  id: string | number
): string => `${baseRoute}/${id}`;
