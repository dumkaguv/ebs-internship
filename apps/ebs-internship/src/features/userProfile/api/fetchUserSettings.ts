import { ApiRoutes } from "@/config/api-routes";
import { ApiResponse, axiosInstance } from "@libs";
import { UserSettings } from "@libs/types/userSettings";

export const fetchUserSettings = async () => {
  try {
    const response = await axiosInstance.get<ApiResponse<UserSettings>>(
      ApiRoutes.PROFILE.SETTINGS
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to update user settings:", error);
    return {} as UserSettings;
  }
};
