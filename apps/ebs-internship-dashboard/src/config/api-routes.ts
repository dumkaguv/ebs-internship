import { ApiRoutes as GlobalApiRoutes } from "@libs";

const ADMIN_PREFIX = "/admin";

export const ApiRoutes = {
  ...GlobalApiRoutes,
  NOTIFICATIONS: {
    BASE: `${ADMIN_PREFIX}/notifications`,
  },
  FILES: {
    UPLOAD: `${ADMIN_PREFIX}/file/upload`,
    MOVE: `${ADMIN_PREFIX}/file/move`,
  },
  COURSES: `${ADMIN_PREFIX}/courses`,
  PRODUCTS: `${ADMIN_PREFIX}/products`,
  LESSONS: `${ADMIN_PREFIX}/lessons`,
  TOPICS: `${ADMIN_PREFIX}/topics`,
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
