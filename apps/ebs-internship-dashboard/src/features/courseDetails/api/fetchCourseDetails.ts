import { ApiRoutes, getApiUrlById } from "@/config/api-routes";
import { axiosInstance, Course, ApiResponse } from "@libs";

export const fetchCourseDetails = async (id: string | number) => {
  try {
    const response = await axiosInstance.get<ApiResponse<Course>>(
      getApiUrlById(ApiRoutes.COURSES, id)
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as Course;
  }
};
