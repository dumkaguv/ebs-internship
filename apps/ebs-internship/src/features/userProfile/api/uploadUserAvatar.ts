import { ApiResponse, ApiRoutes, Avatar, axiosInstance } from "@libs";

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
