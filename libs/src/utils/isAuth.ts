import { LOCAL_STORAGE } from "../config";

export const isAuth = () => {
  const token = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
  const expiresAt = localStorage.getItem(LOCAL_STORAGE.EXPIRES_AT);

  if (!token || !expiresAt) return false;

  const expiresAtTime = new Date(expiresAt).getTime();
  return expiresAtTime >= Date.now();
};
