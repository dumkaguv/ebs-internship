import { axiosInstance } from "../lib/axios";
import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse } from "@/types/apiResponse";
import { Author } from "@/types/author";

export const fetchTutors = async () => {
  try {
    const response = await axiosInstance.get<ApiResponse<Author[]>>(
      ApiRoutes.TUTORS
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
