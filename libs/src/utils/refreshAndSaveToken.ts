import { AxiosError } from "axios";
import { LOCAL_STORAGE } from "../config";
import { Api } from "../services/apiClient";
import { ApiResponse } from "@/types";

export const refreshAndSaveToken = async () => {
  try {
    const token = await Api.auth.refreshToken();

    if (token) {
      localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, token.token);
      localStorage.setItem(LOCAL_STORAGE.EXPIRES_AT, token.expires_at);
    }
  } catch (err) {
    const axiosError = err as AxiosError<ApiResponse<null>>;
    if (axiosError?.response?.status === 401) {
      localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);
      localStorage.removeItem(LOCAL_STORAGE.EXPIRES_AT);
    }

    console.error("Refresh token failed", err);
  }
};
