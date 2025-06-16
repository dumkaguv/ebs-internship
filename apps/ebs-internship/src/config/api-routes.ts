export const enum ApiRoutes {
  CATEGORIES = "/categories",
  COURSES = "/courses",
  TUTORS = "/tutors",
}

export const getApiUrlById = (
  baseRoute: ApiRoutes,
  id: string | number
): string => `${baseRoute}/${id}`;
