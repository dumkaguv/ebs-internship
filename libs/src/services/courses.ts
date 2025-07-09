import {
  ApiRoutes,
  getApiUrlById,
  axiosInstance,
  Course,
  ApiResponse,
} from "../";

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
