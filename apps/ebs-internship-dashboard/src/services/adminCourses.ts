import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance, Course } from "@libs";

export interface FetchCoursesParams {
  page?: number;
  per_page?: number;
}

export const fetchDashboardCourses = async (
  params?: FetchCoursesParams
): Promise<ApiResponse<Course[]> | undefined> => {
  try {
    const response = await axiosInstance.get<ApiResponse<Course[]>>(
      ApiRoutes.COURSES,
      { params }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
