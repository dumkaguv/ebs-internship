import { ApiResponse } from "@/types/apiResponse";
import { axiosInstance } from "@/lib";
import { Token } from "@/types/token";
import { ApiRoutes } from "@/config/api-routes";
import { AxiosError } from "axios";

export const login = async (
  email: string,
  password: string
): Promise<Token> => {
  try {
    const response = await axiosInstance.post<ApiResponse<Token>>(
      ApiRoutes.AUTH.LOGIN,
      { email, password }
    );
    return response.data.data;
  } catch (e) {
    const error = e as AxiosError<ApiResponse<null>>;
    console.error(error.response?.data?.message || "Login failed");
    throw error;
  }
};
