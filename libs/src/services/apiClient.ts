import * as auth from "./auth";
import * as categories from "./categories";
import * as profile from "./profile";

export const Api = {
  auth,
  categories,
  profile,
} as const;
