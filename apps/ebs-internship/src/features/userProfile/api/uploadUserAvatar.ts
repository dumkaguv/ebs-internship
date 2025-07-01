import { ApiRoutes } from "@/config/api-routes";
import { axiosInstance,ApiResponse } from "@libs";
import { Avatar } from "@libs/types/userAvatar";

export const uploadUserAvatar = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("avatar", file);

  const response = await axiosInstance.post<ApiResponse<Avatar>>(
    ApiRoutes.PROFILE.AVATAR,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data.data.url;
};
