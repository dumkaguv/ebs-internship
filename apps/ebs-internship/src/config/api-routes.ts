import { ApiRoutes as GlobalApiRoutes } from "@libs";

export const ApiRoutes = {
  ...GlobalApiRoutes,
  CATEGORIES: "/categories",
  COURSES: "/courses",
  TUTORS: "/tutors",
  PROFILE: {
    SETTINGS: "/profile/settings",
    AVATAR: "profile/upload-avatar",
  },
  CART: {
    BASE: "/cart",
    PRODUCTS: "/cart/products",
  },
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
