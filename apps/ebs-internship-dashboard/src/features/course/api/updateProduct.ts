import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance, getApiUrlById, Product } from "@libs";

interface UpdateProductBody {
  name: string;
  price: number;
  tax_rate?: number;
  limit_total?: number;
  limit_per_user?: number;
  description?: string;
  purchasable?: boolean;
  buyable?: boolean;
}

export const updateProduct = async (id: number, body: UpdateProductBody) => {
  try {
    const response = await axiosInstance.put<ApiResponse<Product>>(
      getApiUrlById(ApiRoutes.PRODUCTS, id),
      body
    );

    return response.data.data;
  } catch (e) {
    console.log(e);
    return;
  }
};
