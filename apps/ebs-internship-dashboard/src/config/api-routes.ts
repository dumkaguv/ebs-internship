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
  COURSES: {
    CREATE: `${ADMIN_PREFIX}/courses`,
  },
  LESSONS: {
    CREATE: `${ADMIN_PREFIX}/lessons`,
  },
  TOPICS: {
    CREATE: `${ADMIN_PREFIX}/topics`,
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
