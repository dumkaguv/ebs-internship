import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance, User } from "@libs";

interface UserInformation {
  first_name: string;
  last_name: string;
  bio: string;
}

export const changeUserInformation = async (data: UserInformation) => {
  try {
    const response = await axiosInstance.put<ApiResponse<User>>(
      ApiRoutes.PROFILE.ME,
      data
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to update user settings:", error);
    return {} as User;
  }
};
