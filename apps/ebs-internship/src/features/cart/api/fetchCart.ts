import { ApiRoutes } from "@/config/api-routes";
import { axiosInstance, ApiResponse } from "@libs";
import { Cart } from "@/features/cart/types";

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
