import { ApiRoutes, getApiUrlById } from "@/config/api-routes";
import { ApiResponse, axiosInstance } from "@libs";
import { Coupon } from "@libs/types/coupon";

export const editCouponInformation = async (
  id: number,
  data: Partial<Coupon>
): Promise<Coupon> => {
  try {
    const response = await axiosInstance.patch<ApiResponse<Coupon>>(
      getApiUrlById(ApiRoutes.COUPONS, id),
      data
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as Coupon;
  }
};
