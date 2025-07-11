import { ApiResponse, axiosInstance, getApiUrlById, Lesson } from "@libs";
import { ApiRoutes } from "@/config/api-routes";

interface UpdateLessonBody {
  id?: number;
  title?: string;
  duration?: string;
  summary?: string;
  order: number;
  course_id: number;
  parent_lesson_id?: number;
  active_from?: string;
  active_to?: string;
}

export const updateLesson = async (id: number, body: UpdateLessonBody) => {
  try {
    const response = await axiosInstance.put<ApiResponse<Lesson>>(
      getApiUrlById(ApiRoutes.LESSONS, id),
      body
    );

    return response.data.data;
  } catch (e) {
    console.log(e);
    return;
  }
};
