export const ApiRoutes = {
  CATEGORIES: "/categories",
  COURSES: "/courses",
  TUTORS: "/tutors",
  AUTH: {
    LOGIN: "/auth/login",
  },
} as const;

export const getApiUrlById = (
  baseRoute: typeof ApiRoutes,
  id: string | number
): string => `${baseRoute}/${id}`;
