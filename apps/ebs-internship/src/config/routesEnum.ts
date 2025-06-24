export const enum RoutesEnum {
  HOME = "/",
  SIGNUP = "/signup",
  SIGNIN = "/signin",
  COURSES = "/courses",
  CART = "/cart",
  CHECKOUT = "/checkout",
  MENTORS = "/mentors",
}

export const PROFILE_ROUTES = {
  ROOT: "/profile",
  COURSES: "/profile/courses",
  TEACHERS: "/profile/teachers",
  MESSAGE: "/profile/message",
  REVIEWS: "/profile/reviews",
};

export const getRouteUrlById = (
  baseRoute: RoutesEnum,
  id: string | number
): string => `${baseRoute}/${id}`;
