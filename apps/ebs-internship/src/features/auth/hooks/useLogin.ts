import { Token } from "@/types/token";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login";
import { message } from "antd";
import { ACCESS_TOKEN } from "@/config/constants";

export const useLogin = () => {
  const { mutate, isPending } = useMutation<
    Token,
    Error,
    { email: string; password: string }
  >({
    mutationFn: async ({ email, password }) => await login(email, password),
    onSuccess: ({ token }) => {
      message.success("Login successfully!");
      localStorage.setItem(ACCESS_TOKEN, token);
    },
    onError: () => {
      message.error("Login failed. Try again.");
    },
  });

  return { mutate, isPending };
};
