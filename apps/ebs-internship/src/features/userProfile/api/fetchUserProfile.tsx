import { ApiRoutes } from "@/config/api-routes";
import { axiosInstance } from "@/lib";
import { ApiResponse } from "@/types";
import { User } from "@/types/user";

export const fetchUserProfile = async () => {
  try {
    const response = await axiosInstance.get<ApiResponse<User>>(
      ApiRoutes.PROFILE.SETTINGS
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as User;
  }
};
