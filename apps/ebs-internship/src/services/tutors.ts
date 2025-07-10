import { axiosInstance, ApiResponse, Author } from "@libs";
import { ApiRoutes } from "@/config/api-routes";

export const fetchTutors = async () => {
  try {
    const response = await axiosInstance.get<ApiResponse<Author[]>>(
      ApiRoutes.TUTORS
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
