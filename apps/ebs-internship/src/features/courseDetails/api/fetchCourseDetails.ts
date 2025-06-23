import { ApiRoutes, getApiUrlById } from "@/config/api-routes";
import { axiosInstance } from "@/lib";
import { ApiResponse } from "@/types/apiResponse";
import { Course } from "@/types/course";

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
