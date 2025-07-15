import { ApiRoutes as GlobalApiRoutes } from "@libs";

export const ApiRoutes = {
  ...GlobalApiRoutes,
  CATEGORIES: "/categories",
  COURSES: "/courses",
  TUTORS: "/tutors",
  PROFILE: {
    ME: "/profile/me",
    EMAIL: "/profile/me-auth",
    PASSWORD: "/profile/password",
    AVATAR: "/profile/upload-avatar",
    SETTINGS: "/profile/settings",
  },
  CART: {
    BASE: "/cart",
    PRODUCTS: "/cart/products",
    VOUCHER: "/cart/voucher",
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
