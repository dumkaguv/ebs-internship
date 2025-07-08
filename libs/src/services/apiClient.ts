import * as auth from "./auth";
import * as categories from "./categories";
import * as profile from "./profile";
import * as tags from "./tags";

export const Api = {
  auth,
  categories,
  profile,
  tags,
} as const;
