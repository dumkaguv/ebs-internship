import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance, Topic } from "@libs";

interface CreateTopicToLessonBody {
  id?: number;
  title: string;
  active?: boolean;
  can_skip?: boolean;
  preview?: boolean;
  lesson_id: number;
  topicable_id?: number;
  topicable_type?: string;
  value?: string;
  summary?: string;
  introduction?: string;
  description?: string;
  order: number;
  json?: unknown;
  duration?: string;
}

export const createTopicToLesson = async (body: CreateTopicToLessonBody) => {
  try {
    const response = await axiosInstance.post<ApiResponse<Topic>>(
      ApiRoutes.TOPICS,
      body,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.data;
  } catch (e) {
    console.log(e);
    return;
  }
};
