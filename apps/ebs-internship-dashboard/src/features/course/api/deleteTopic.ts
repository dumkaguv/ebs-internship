import { ApiResponse, axiosInstance, getApiUrlById } from "@libs";
import { ApiRoutes } from "@/config/api-routes";

export const deleteTopic = async (id: number) => {
  try {
    const response = await axiosInstance.delete<ApiResponse<null>>(
      getApiUrlById(ApiRoutes.TOPICS, id)
    );

    return response.data.data;
  } catch (e) {
    console.log(e);
    return;
  }
};
