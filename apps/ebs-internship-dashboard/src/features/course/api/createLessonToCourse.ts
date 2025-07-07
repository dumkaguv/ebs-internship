import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance, Lesson } from "@libs";

interface createLessonToCourseBody {
  id?: number;
  title: string;
  duration?: string;
  summary?: string;
  order: number;
  course_id: number;
  parent_lesson_id?: number;
  active_from?: string;
  active_to?: string;
}

export const createLessonToCourse = async (body: createLessonToCourseBody) => {
  try {
    const response = await axiosInstance.post<ApiResponse<Lesson>>(
      ApiRoutes.LESSONS.CREATE,
      body
    );

    return response.data.data;
  } catch (e) {
    console.log(e);
    return;
  }
};
