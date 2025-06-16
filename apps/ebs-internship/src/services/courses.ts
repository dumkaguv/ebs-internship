import { axiosInstance } from "../lib/axios";
import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse } from "@/types/apiResponse";
import { Course } from "@/types/course";

export const fetchCourseByName = async (title?: string) => {
  try {
    const response = await axiosInstance.get<ApiResponse<Course[]>>(
      ApiRoutes.COURSES,
      {
        params: title ? { title } : undefined,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

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
