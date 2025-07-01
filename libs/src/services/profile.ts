import { ApiResponse, axiosInstance, Profile } from "../";
import { ApiRoutes } from "../config";

export const me = async () => {
  try {
    const response = await axiosInstance.get<ApiResponse<Profile>>(
      ApiRoutes.PROFILE.ME
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
