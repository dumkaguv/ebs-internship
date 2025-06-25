import { ApiResponse,axiosInstance,Category } from "@libs";
import { ApiRoutes } from "@/config/api-routes";

export const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get<ApiResponse<Category[]>>(
      ApiRoutes.CATEGORIES
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
