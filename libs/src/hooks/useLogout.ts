import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { Api } from "../services/apiClient";
import { LOCAL_STORAGE } from "../config";
import { useAuthStore } from "../stores/authStore";
import { AxiosError } from "axios";
import { ApiResponse } from "../types";

export const useLogout = () => {
  const setIsAuth = useAuthStore((state) => state.setIsAuth);

  const { mutate: logout, isPending } = useMutation({
    mutationFn: async () => await Api.auth.logout(),
    onSuccess: () => {
      localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);
      localStorage.removeItem(LOCAL_STORAGE.EXPIRES_AT);
      localStorage.removeItem(LOCAL_STORAGE.USER_ROLE);
      message.success("Logout successfully");
      setIsAuth(false);
    },
    onError: (error: AxiosError<ApiResponse<null>>) => {
      message.error("Logout failed");
      console.error(error);
    },
  });

  return { logout, isPending };
};
