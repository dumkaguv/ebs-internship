import { axiosInstance } from "../lib";
import { ApiResponse, Tag } from "../types";
import { ApiRoutes } from "../config";

export const fetchTags = async () => {
  const response = await axiosInstance.get<ApiResponse<Tag[]>>(
    ApiRoutes.TAGS.BASE
  );

  return response.data.data;
};

export const fetchUniqueTags = async () => {
  const response = await axiosInstance.get<ApiResponse<Tag[]>>(
    ApiRoutes.TAGS.UNIQUE
  );

  return response.data.data;
};
