export const ApiRoutes = {
  AUTH: {
    BASE: "/auth",
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    REFRESH: "/auth/refresh",
    LOGOUT: "/auth/logout",
  },
  CATEGORIES: "/categories",
  TAGS: {
    BASE: "/tags",
    UNIQUE: "/tags/unique",
  },
  COURSES: "/courses",
  PROFILE: {
    BASE: "/profile",
    SETTINGS: "/profile/settings",
    AVATAR: "/profile/upload-avatar",
    PASSWORD: "/profile/password",
    ME: "/profile/me",
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
