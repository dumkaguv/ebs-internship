import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { Api } from "../services/apiClient";
import { ACCESS_TOKEN, EXPIRES_AT } from "../config";
import { useAuthStore } from "../stores/authStore";
import { AxiosError } from "axios";
import { ApiResponse } from "../types";

export const useLogout = () => {
  const setIsAuth = useAuthStore((state) => state.setIsAuth);

  const { mutate: logout, isPending } = useMutation({
    mutationFn: async () => await Api.auth.logout(),
    onSuccess: () => {
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(EXPIRES_AT);
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
