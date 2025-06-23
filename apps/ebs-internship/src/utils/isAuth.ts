import { getAccessToken } from "./getAccessToken";

export const isAuth = () => !!getAccessToken();
