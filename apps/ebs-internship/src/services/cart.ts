import { ApiRoutes } from "@/config/api-routes";
import { Cart } from "@/features/cart/types";
import { axiosInstance, Course, ApiResponse } from "@libs";

export const addItemToCart = async (id: number, quantity?: number) => {
  const response = await axiosInstance.post<ApiResponse<Course>>(
    ApiRoutes.CART.PRODUCTS,
    { id, quantity }
  );
  return response.data.data;
};

export const fetchCart = async () => {
  try {
    const response = await axiosInstance.get<ApiResponse<Cart>>(
      ApiRoutes.CART.BASE
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as Cart;
  }
};
