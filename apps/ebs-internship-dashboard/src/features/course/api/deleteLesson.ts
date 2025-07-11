import { ApiResponse, axiosInstance, getApiUrlById } from "@libs";
import { ApiRoutes } from "@/config/api-routes";

export const deleteLesson = async (id: number) => {
  try {
    const response = await axiosInstance.delete<ApiResponse<null>>(
      getApiUrlById(ApiRoutes.LESSONS, id)
    );

    return response.data.data;
  } catch (e) {
    console.log(e);
    return;
  }
};
