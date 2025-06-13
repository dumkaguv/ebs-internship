import { axiosInstance } from "./axios";
import { Course } from "@/types/course";
import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse } from "@/types/apiResponse";

export const fetchCourses = async () => {
  try {
    const response = await axiosInstance.get<ApiResponse<Course[]>>(
      ApiRoutes.COURSES
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
