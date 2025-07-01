import { ApiRoutes } from "@/config/api-routes";
import { axiosInstance,ApiResponse, } from "@libs";
import { User } from "@libs/types/user";

export const changeUserSettings = async (data: Partial<User>) => {
  try {
    const response = await axiosInstance.put<ApiResponse<User>>(
      ApiRoutes.PROFILE.SETTINGS,
      data
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to update user settings:", error);
    return {};
  }
};
