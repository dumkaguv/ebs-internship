import { ApiResponse, axiosInstance, Category } from "../";
import { ApiRoutes } from "../config";

interface FetchCategoriesParams {
  per_page?: number;
}

export const fetchCategories = async (params?: FetchCategoriesParams) => {
  try {
    const response = await axiosInstance.get<ApiResponse<Category[]>>(
      ApiRoutes.CATEGORIES,
      { params }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
