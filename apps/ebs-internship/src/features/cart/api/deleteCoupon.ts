import { ApiRoutes } from "@/config/api-routes";
import { axiosInstance, ApiResponse } from "@libs";
import { Cart } from "@/features/cart/types";

export const deleteCoupon = async () => {
  try {
    const response = await axiosInstance.delete<ApiResponse<null>>(
      ApiRoutes.CART.VOUCHER
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as Cart;
  }
};
