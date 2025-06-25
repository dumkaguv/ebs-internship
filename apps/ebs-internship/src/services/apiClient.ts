import * as courses from "./courses";
import * as tutors from "./tutors";
import * as categories from "./categories";
import * as auth from "./auth";

export const Api = {
  courses,
  tutors,
  categories,
  auth,
} as const;
