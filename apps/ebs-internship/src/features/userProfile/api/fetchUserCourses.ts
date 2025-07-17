import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance, Course } from "@libs";

export const fetchUserCourses = async () => {
  try {
    const response = await axiosInstance.get<ApiResponse<Course>>(
      ApiRoutes.PROFILE.COURSES
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as Course;
  }
};
