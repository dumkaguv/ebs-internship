import { ACCESS_TOKEN } from "../config";

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
