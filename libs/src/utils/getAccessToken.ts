import { LOCAL_STORAGE } from "../config";

export const getAccessToken = () =>
  localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
