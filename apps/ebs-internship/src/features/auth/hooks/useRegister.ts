import { useMutation } from "@tanstack/react-query";
import { register, RegisterParams } from "../api/register";
import { ApiResponse } from "@/types";
import { message } from "antd";
import { AxiosError } from "axios";

export const useRegister = () => {
  const { mutate, isPending } = useMutation<
    ApiResponse<null>,
    AxiosError<ApiResponse<null>>,
    RegisterParams
  >({
    mutationFn: async (params) => await register(params),
    onSuccess: () => message.info("ok"),
    onError: (error) => {
      const apiMessage =
        error.response?.data?.message || "Register failed. Try again.";
      message.error(apiMessage);
    },
  });

  return { mutate, isPending };
};
