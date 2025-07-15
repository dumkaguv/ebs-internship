import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance, Product } from "@libs";

interface CreateProductBody {
  courseId: number;
  name: string;
  price: number;
  tax_rate?: number;
  limit_total?: number;
  limit_per_user?: number;
  description?: string;
  purchasable?: boolean;
  buyable?: boolean;
  productablesQuantity?: number;
  type?: "single" | "bundle";
}

export const createProduct = async (body: CreateProductBody) => {
  try {
    const productables: {
      class: string;
      id: number;
      name: string;
      quantity?: number;
    }[] = [
      {
        class: "App\\Models\\Course",
        id: body.courseId,
        name: body.name ?? "new",
        quantity: body.productablesQuantity ?? 1,
      },
    ];

    const response = await axiosInstance.post<ApiResponse<Product>>(
      ApiRoutes.PRODUCTS,
      {
        ...body,
        type: body.type ?? "single",
        productables,
      }
    );

    return response.data.data;
  } catch (e) {
    console.log(e);
    return;
  }
};
