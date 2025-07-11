import { ApiResponse, axiosInstance, getApiUrlById, Topic } from "@libs";
import { ApiRoutes } from "@/config/api-routes";

interface UpdateTopicBody {
  id?: number;
  title?: string;
  active?: boolean | 1 | 0;
  can_skip?: boolean;
  preview?: boolean | 1 | 0;
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

export const updateTopic = async (id: number, body: UpdateTopicBody) => {
  try {
    const response = await axiosInstance.put<ApiResponse<Topic>>(
      getApiUrlById(ApiRoutes.TOPICS, id),
      body
    );

    return response.data.data;
  } catch (e) {
    console.log(e);
    return;
  }
};
