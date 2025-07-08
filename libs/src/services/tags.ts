import { axiosInstance } from "../lib";
import { ApiResponse, Tag } from "../types";
import { ApiRoutes } from "../config";

export const fetchTags = async () => {
  const response = await axiosInstance.get<ApiResponse<Tag[]>>(ApiRoutes.TAGS);

  return response.data.data;
};
