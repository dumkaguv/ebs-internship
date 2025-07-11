import { ApiRoutes } from "@/config/api-routes";
import { axiosInstance, Course, ApiResponse } from "@libs";

export const addItemToCart = async (id: number, quantity?: number) => {
  try {
    const response = await axiosInstance.post<ApiResponse<Course>>(
      ApiRoutes.CART.PRODUCTS,
      { id, quantity }
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as Course;
  }
};
