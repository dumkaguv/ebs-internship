import { ACCESS_TOKEN, EXPIRES_AT } from "../config";

export const isAuth = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const expiresAt = localStorage.getItem(EXPIRES_AT);

  if (!token || !expiresAt) return false;

  const expiresAtTime = new Date(expiresAt).getTime();
  return expiresAtTime >= Date.now();
};
