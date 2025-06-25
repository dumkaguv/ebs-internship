export const ApiRoutes = {
  CATEGORIES: "/categories",
  COURSES: "/courses",
  TUTORS: "/tutors",
  PROFILE: {
    SETTINGS: "/profile/settings",
    AVATAR: "profile/upload-avatar",
  },
  AUTH: {
    LOGIN: "/auth/login",
  },
} as const;

export const getApiUrlById = (
  baseRoute: typeof ApiRoutes | string,
  id: string | number
): string => `${baseRoute}/${id}`;
