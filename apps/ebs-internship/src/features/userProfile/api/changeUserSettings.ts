import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance, User } from "@libs";

export const changeUserSettings = async (data: Partial<User>) => {
  try {
    const response = await axiosInstance.put<ApiResponse<User>>(
      ApiRoutes.PROFILE.SETTINGS,
      data
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as User;
  }
};
