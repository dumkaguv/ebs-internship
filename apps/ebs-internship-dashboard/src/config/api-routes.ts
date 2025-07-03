import { ApiRoutes as GlobalApiRoutes } from "@libs";

const ADMIN_PREFIX = "/admin";

export const ApiRoutes = {
  ...GlobalApiRoutes,
  NOTIFICATIONS: {
    BASE: `${ADMIN_PREFIX}/notifications`,
  },
};
