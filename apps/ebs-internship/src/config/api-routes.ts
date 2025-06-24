export const ApiRoutes = {
  CATEGORIES: "/categories",
  COURSES: "/courses",
  TUTORS: "/tutors",
  AUTH: {
    BASE: "/auth",
    LOGIN: "/auth/login",
    REFRESH: "/auth/refresh",
    LOGOUT: "/auth/logout",
  },
  CART: {
    BASE: "/cart",
    PRODUCTS: "/cart/products",
  },
} as const;

type ExtractRoutes<T> = T extends string
  ? T
  : T extends object
  ? { [K in keyof T]: ExtractRoutes<T[K]> }[keyof T]
  : never;

type FlatApiRoutes = ExtractRoutes<typeof ApiRoutes>;

export const getApiUrlById = (
  baseRoute: FlatApiRoutes,
  id: string | number
): string => `${baseRoute}/${id}`;
