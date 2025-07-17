import { ApiRoutes } from "@/config/api-routes";
import { axiosInstance, ApiResponse } from "@libs";

interface ApplyCouponBody {
  code: string;
}

export const applyCoupon = async (body: ApplyCouponBody) => {
  const response = await axiosInstance.post<ApiResponse<null>>(
    ApiRoutes.CART.VOUCHER,
    body
  );
  return response.data.data;
};
