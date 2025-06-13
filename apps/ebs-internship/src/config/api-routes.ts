export const enum ApiRoutes {
  CATEGORIES = "/categories",
  COURSES = "/courses",
}

export const getApiUrlById = (
  baseRoute: ApiRoutes,
  id: string | number
): string => `${baseRoute}/${id}`;
