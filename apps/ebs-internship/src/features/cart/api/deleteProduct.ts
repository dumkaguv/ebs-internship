import { ApiRoutes } from "@/config/api-routes";
import { axiosInstance, ApiResponse, getApiUrlById } from "@libs";
import { Cart } from "@/features/cart/types";

export const deleteProduct = async (id: number) => {
  try {
    const response = await axiosInstance.delete<ApiResponse<Cart>>(
      getApiUrlById(ApiRoutes.CART.PRODUCTS, id)
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as Cart;
  }
};
