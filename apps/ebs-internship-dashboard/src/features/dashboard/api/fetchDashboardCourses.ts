import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance, Course } from "@libs";

export const fetchDashboardCourses = async () => {
  try {
    const response = await axiosInstance.get<ApiResponse<Course[]>>(
      ApiRoutes.COURSES
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
