import { ApiRoutes } from "@/config/api-routes";
import { axiosInstance,ApiResponse } from "@libs";
import { User } from "@libs/types/user";

export const fetchUserProfile = async () => {
  try {
    const response = await axiosInstance.get<ApiResponse<User>>(
      ApiRoutes.PROFILE.ME
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as User;
  }
};
