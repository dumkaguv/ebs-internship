import { ApiResponse } from "@/types/apiResponse";
import { axiosInstance } from "@/lib";
import { ApiRoutes } from "@/config/api-routes";
import { AxiosError } from "axios";

export interface RegisterParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  returnUrl: string;
}

export const register = async (params: RegisterParams) => {
  try {
    const response = await axiosInstance.post<ApiResponse<null>>(
      ApiRoutes.AUTH.REGISTER,
      params
    );
    return response.data;
  } catch (e) {
    const error = e as AxiosError<ApiResponse<null>>;
    console.error(error.response?.data?.message || "Register failed");
    throw error;
  }
};
