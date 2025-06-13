export const enum RoutesEnum {
  HOME = "/",
  SIGNUP = "/signup",
  SIGNIN = "/signin",
  COURSES = "/courses",
  CART = "/cart",
  CHECKOUT = "/checkout",
  MENTORS = "/mentors",
  PROFILE = "/profile",
}

export const getRouteUrlById = (
  baseRoute: RoutesEnum,
  id: string | number
): string => `${baseRoute}/${id}`;
