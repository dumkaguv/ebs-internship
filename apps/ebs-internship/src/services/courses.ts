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
    return undefined;
  }
};

export interface FetchCoursesParams {
  title?: string | null;
  page?: number;
  category_id?: number;
  tag?: string;
  per_page?: number;
  order_by?: "created_at" | "title";
  order?: "ASC" | "DESC";
  only_with_categories?: boolean;
  free?: boolean;
}

export const fetchCourses = async (
  params?: FetchCoursesParams
): Promise<ApiResponse<Course[]> | undefined> => {
  try {
    const response = await axiosInstance.get<ApiResponse<Course[]>>(
      ApiRoutes.COURSES,
      { params }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
