import { getAccessToken, LOCAL_STORAGE, URLS } from "@libs";

export const navigateToAdminProfile = () => {
  const token = getAccessToken();
  const expires_at = localStorage.getItem(LOCAL_STORAGE.EXPIRES_AT);

  window.location.href = `${URLS.ADMIN_URL}/?${LOCAL_STORAGE.ACCESS_TOKEN}=${token}&${LOCAL_STORAGE.EXPIRES_AT}=${expires_at}`;
};
