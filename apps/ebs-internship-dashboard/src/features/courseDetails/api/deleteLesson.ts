import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance, getApiUrlById, Lesson } from "@libs";

export const deleteLesson = async (id: number) => {
  try {
    const response = await axiosInstance.delete<ApiResponse<Lesson>>(
      getApiUrlById(ApiRoutes.LESSONS, id)
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as Lesson;
  }
};
