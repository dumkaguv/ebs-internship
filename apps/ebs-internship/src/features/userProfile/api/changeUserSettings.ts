import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance, User } from "@libs";

interface UserLinks {
  website: string;
  twitter: string;
  linkedin: string;
  youtube: string;
  facebook: string;
}

export const changeUserSettings = async (data: UserLinks) => {
  try {
    const response = await axiosInstance.put<ApiResponse<User>>(
      ApiRoutes.PROFILE.SETTINGS,
      data
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to update user settings:", error);
    return {} as User;
  }
};
