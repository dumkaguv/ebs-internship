import { LOCAL_STORAGE } from "../config";
import { Api } from "../services/apiClient";

export const refreshAndSaveToken = async () => {
  try {
    const token = await Api.auth.refreshToken();

    if (token) {
      localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, token.token);
      localStorage.setItem(LOCAL_STORAGE.EXPIRES_AT, token.expires_at);
    }
  } catch (err) {
    console.error("Refresh token failed", err);
  }
};
