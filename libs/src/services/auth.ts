import { ApiRoutes } from "../config";
import { axiosInstance } from "../lib";
import { ApiResponse, Token } from "@/types";

export const refreshToken = async () => {
  try {
    const response = await axiosInstance.get<ApiResponse<Token>>(
      ApiRoutes.AUTH.REFRESH
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.post<ApiResponse<null>>(
      ApiRoutes.AUTH.LOGOUT
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};
