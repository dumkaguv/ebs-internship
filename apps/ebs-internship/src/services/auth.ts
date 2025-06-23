import { ApiRoutes } from "@/config/api-routes";
import { axiosInstance } from "@/lib";
import { ApiResponse } from "@/types";
import { Token } from "@/types/token";

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
