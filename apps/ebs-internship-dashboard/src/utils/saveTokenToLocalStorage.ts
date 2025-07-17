import { LOCAL_STORAGE } from "@libs";

export const saveTokenToLocalStorage = (
  access_token: string,
  expires_at: string
) => {
  localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, access_token);
  localStorage.setItem(LOCAL_STORAGE.EXPIRES_AT, expires_at);
};
