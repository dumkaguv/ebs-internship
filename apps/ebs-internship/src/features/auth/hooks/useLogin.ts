import { Token } from "@/types/token";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login";
import { message } from "antd";

export const useLogin = () => {
  const { mutate, isPending } = useMutation<
    Token,
    Error,
    { email: string; password: string }
  >({
    mutationFn: async ({ email, password }) => await login(email, password),
    onSuccess: (data) => {
      message.success("Login successfully!");
      console.log("Response data:", data);
    },
    onError: () => {
      message.error("Login if failed. Try again later");
    },
  });

  return { mutate, isPending };
};
