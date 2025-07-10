import { ApiRoutes, getApiUrlById } from "@/config/api-routes";
import { ApiResponse, axiosInstance, Lesson } from "@libs";

interface ChangeChapterInput {
  id: number;
  title: string;
  summary: string;
  duration: string;
  order: number;
  course_id: number;
}

export const changeChapterInformation = async ({
  id,
  title,
  summary,
  duration,
  order,
  course_id,
}: ChangeChapterInput): Promise<Lesson> => {
  try {
    const response = await axiosInstance.put<ApiResponse<Lesson>>(
      getApiUrlById(ApiRoutes.LESSONS, id),
      {
        title,
        summary,
        duration,
        order,
        course_id,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to update chapter:", error);
    return {} as Lesson;
  }
};
