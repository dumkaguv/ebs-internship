import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance } from "@libs";
import { Coupon } from "@libs/types/coupon";

interface Params {
  per_page: number;
  page: number;
}

export const fetchCourseCoupons = async (params: Params) => {
  try {
    const response = await axiosInstance.get<ApiResponse<Coupon[]>>(
      ApiRoutes.COUPONS,
      { params }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return { data: [], meta: { total: 0, per_page: 15 } };
  }
};
