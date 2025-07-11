import { useMutation } from "@tanstack/react-query";
import { login } from "@/features/auth/api";
import { message } from "antd";
import { LOCAL_STORAGE, Token, useAuthStore } from "@libs";

export const useLogin = () => {
  const setIsAuth = useAuthStore((state) => state.setIsAuth);

  const { mutate, isPending } = useMutation<
    Token,
    Error,
    { email: string; password: string }
  >({
    mutationFn: ({ email, password }) => login(email, password),
    onSuccess: ({ token, expires_at }) => {
      localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, token);
      localStorage.setItem(LOCAL_STORAGE.EXPIRES_AT, expires_at);

      message.success("Login successfully!");
      setIsAuth(true);
    },
    onError: () => {
      message.error("Login failed. Try again.");
    },
  });

  return { mutate, isPending };
};
