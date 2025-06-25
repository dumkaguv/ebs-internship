import { ApiRoutes } from "@/config/api-routes";
import { axiosInstance } from "@/lib";
import { ApiResponse } from "@/types/apiResponse";
import { Course } from "@/types/course";

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
