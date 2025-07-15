import { ApiRoutes, getApiUrlById } from "@/config/api-routes";
import { ApiResponse, axiosInstance } from "@libs";
import { Coupon } from "@libs/types/coupon";

export const deleteCoupon = async (id: number) => {
  try {
    const response = await axiosInstance.delete<ApiResponse<Coupon>>(
      getApiUrlById(ApiRoutes.COUPONS, id)
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as Coupon;
  }
};
