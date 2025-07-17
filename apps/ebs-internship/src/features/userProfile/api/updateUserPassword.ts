import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance, User } from "@libs";

export const updateUserPassword = async (data: {
  current_password: string;
  new_password: string;
  new_confirm_password: string;
}) => {
  const response = await axiosInstance.put<ApiResponse<User>>(
    ApiRoutes.PROFILE.PASSWORD,
    data
  );
  return response.data.data;
};
