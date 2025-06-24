import { Token } from "@/types/token";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login";
import { message } from "antd";
import { ACCESS_TOKEN, EXPIRES_AT } from "@/config/constants";
import { useAuthStore } from "@/stores/authStore";

export const useLogin = () => {
  const { setIsAuth } = useAuthStore();

  const { mutate, isPending } = useMutation<
    Token,
    Error,
    { email: string; password: string }
  >({
    mutationFn: async ({ email, password }) => await login(email, password),
    onSuccess: ({ token, expires_at }) => {
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(EXPIRES_AT);
      message.success("Login successfully!");
      localStorage.setItem(ACCESS_TOKEN, token);
      localStorage.setItem(EXPIRES_AT, expires_at);
      setIsAuth(true);
    },
    onError: () => {
      message.error("Login failed. Try again.");
    },
  });

  return { mutate, isPending };
};
