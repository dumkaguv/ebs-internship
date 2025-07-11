import { ApiRoutes } from "@/config/api-routes";
import { axiosInstance, ApiResponse } from "@libs";
import { Cart } from "@/features/cart/types";

interface ApplyCouponBody {
  code: string;
}

export const applyCoupon = async (body: ApplyCouponBody) => {
  try {
    const response = await axiosInstance.post<ApiResponse<null>>(
      ApiRoutes.CART.VOUCHER,
      body
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as Cart;
  }
};
