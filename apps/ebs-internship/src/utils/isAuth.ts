import { ACCESS_TOKEN } from "@/config/constants";

export const isAuth = () => !!localStorage.getItem(ACCESS_TOKEN);
