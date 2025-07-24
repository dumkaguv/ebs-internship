import { axiosInstance, Course, ApiResponse } from "@libs";
import { ApiRoutes } from "@/config/api-routes";

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
  ids?: number[];
  title?: string | null;
  page?: number;
  categories?: number[];
  category_id?: number;
  tag?: string;
  tags?: number[];
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
    if (params?.ids && params?.ids.length === 0) return;
    if (params?.title?.length === 0) params.title = null;

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
