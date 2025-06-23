import { ACCESS_TOKEN, EXPIRES_AT } from "@/config/constants";
import { Api } from "@/services/apiClient";

export const refreshAndSaveToken = async () => {
  try {
    const token = await Api.auth.refreshToken();

    if (token) {
      localStorage.setItem(ACCESS_TOKEN, token.token);
      localStorage.setItem(EXPIRES_AT, token.expires_at);
    }
  } catch (err) {
    console.error("Refresh token failed", err);
  }
};
