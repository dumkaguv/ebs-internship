import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance, User } from "@libs";

export const changeUserEmail = async (data: { email: string }) => {
  try {
    const response = await axiosInstance.put<ApiResponse<User>>(
      ApiRoutes.PROFILE.EMAIL,
      data
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as User;
  }
};
