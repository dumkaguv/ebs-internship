import { ApiRoutes, getApiUrlById } from "@/config/api-routes";
import { axiosInstance } from "@/lib";
import { ApiResponse, Author } from "@/types";

export const fetchMentorDetails = async (id: number) => {
  try {
    const response = await axiosInstance.get<ApiResponse<Author>>(
      getApiUrlById(ApiRoutes.TUTORS, id)
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return {} as Author;
  }
};
