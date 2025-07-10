import { ApiRoutes, getApiUrlById } from "@/config/api-routes";
import { ApiResponse, axiosInstance, Lesson } from "@libs";

export const fetchChapterDetails = async (id: string | number) => {
  try {
    const response = await axiosInstance.get<ApiResponse<Lesson>>(
      getApiUrlById(ApiRoutes.LESSONS, id)
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as Lesson;
  }
};
