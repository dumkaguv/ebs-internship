import { ApiRoutes, getApiUrlById } from "@/config/api-routes";
import { ApiResponse, Author, axiosInstance } from "@libs";

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
