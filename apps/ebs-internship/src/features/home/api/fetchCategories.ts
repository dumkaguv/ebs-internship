import { ApiResponse } from "@/types/apiResponse";
import { ApiRoutes } from "@/config/api-routes";
import { axiosInstance } from "@/lib";
import { Category } from "@/types/category";

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
