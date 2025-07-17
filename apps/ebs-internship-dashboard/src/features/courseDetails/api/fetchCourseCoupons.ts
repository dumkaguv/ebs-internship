import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance } from "@libs";
import { Coupon } from "@libs/types/coupon";

export const fetchCourseCoupons = async (page: number, perPage: number) => {
  try {
    const response = await axiosInstance.get<ApiResponse<Coupon[]>>(
      `${ApiRoutes.COUPONS}?page=${page}&per_page=${perPage}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return { data: [], meta: { total: 0, per_page: 15 } };
  }
};
