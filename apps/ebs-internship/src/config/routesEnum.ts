export const RoutesEnum = {
  HOME: "/",
  SIGNUP: "/signup",
  SIGNIN: "/signin",
  COURSES: "/courses",
  CART: "/cart",
  CHECKOUT: "/cart/checkout",
  MENTORS: "/mentors",
  WISHLIST: "/wishlist",
  PROFILE: {
    BASE: "/profile",
    COURSES: "/profile/courses",
    TEACHERS: "/profile/teachers",
    MESSAGE: "/profile/message",
    SETTINGS: "/profile/settings",
    REVIEWS: "/profile/reviews",
  },
  WISHLIST: "/wishlist",
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
