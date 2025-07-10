import { ApiResponse, Avatar, axiosInstance, User } from "../";
import { ApiRoutes } from "../config";

export const changeUserSettings = async (data: Partial<User>) => {
  try {
    const response = await axiosInstance.put<ApiResponse<User>>(
      ApiRoutes.PROFILE.SETTINGS,
      data
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to update user settings:", error);
    return {};
  }
};

export interface ChangeUserProfileInfoProps {
  first_name?: string;
  last_name?: string;
  phone?: string;
  address?: string;
  bio?: string;
}

export const changeUserProfileInfo = async (
  body: ChangeUserProfileInfoProps
): Promise<User> => {
  try {
    const response = await axiosInstance.put<ApiResponse<User>>(
      ApiRoutes.PROFILE.ME,
      body
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to update user settings:", error);
    throw error;
  }
};

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

export const me = async () => {
  try {
    const response = await axiosInstance.get<ApiResponse<User>>(
      ApiRoutes.PROFILE.ME
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export interface ChangePasswordBody {
  current_password: string;
  new_password: string;
  new_current_password: string;
}

export const changePassword = async (body: ChangePasswordBody) => {
  try {
    const response = await axiosInstance.put<ApiResponse<null>>(
      ApiRoutes.PROFILE.PASSWORD,
      body
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
