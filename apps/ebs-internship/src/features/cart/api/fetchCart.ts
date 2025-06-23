import { ApiRoutes } from "@/config/api-routes";
import { axiosInstance } from "@/lib";
import { ApiResponse } from "@/types/apiResponse";
import { Cart } from "../types/cart";

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
