import { ACCESS_TOKEN } from "@/config/constants";

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
