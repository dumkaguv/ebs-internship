import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance } from "@libs";
import { Coupon } from "@libs/types/coupon";

export const createNewCoupon = async (
  allCouponData: Omit<
    Coupon,
    | "included_products"
    | "excluded_products"
    | "included_categories"
    | "excluded_categories"
    | "exclude_promotions"
    | "users"
    | "usages"
  >
) => {
  try {
    const response = await axiosInstance.post<ApiResponse<Coupon>>(
      ApiRoutes.COUPONS,
      allCouponData
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as Coupon;
  }
};
