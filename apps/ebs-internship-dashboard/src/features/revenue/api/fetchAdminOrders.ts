import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance } from "@libs";
import { Order } from "@libs/types/order";

interface Params {
  per_page: number;
  page: number;
  search: string;
}

export const fetchAdminOrders = async (params: Params) => {
  try {
    const response = await axiosInstance.get<ApiResponse<Order[]>>(
      ApiRoutes.ORDERS,
      { params }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return { data: [], meta: { total: 0, per_page: 15 } };
  }
};
