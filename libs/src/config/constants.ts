export const LOCAL_STORAGE = {
  ACCESS_TOKEN: "access_token",
  EXPIRES_AT: "expires_at",
  USER_ROLE: "user_role",
  WISHLIST: "wishlist",
  COURSE_ADD_FORM: "course_add_form",
} as const;

export const USER_ROLES = {
  ADMIN_ROLE: "admin",
  STUDENT_ROLE: "student",
} as const;

export const URLS = {
  PUBLIC_URL: "http://localhost:4200",
  ADMIN_URL: "http://localhost:4201",
} as const;

export const IMAGE_FALLBACKS = {
  USER: "https://static.vecteezy.com/system/resources/previews/046/409/821/non_2x/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg",
  COURSE:
    "https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png",
} as const;
