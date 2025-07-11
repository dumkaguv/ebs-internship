import { ApiRoutes } from "@/config/api-routes";
import { axiosInstance } from "@libs";
import type { ApiResponse } from "@libs/types";
import type { Notification } from "@/types";

interface fetchNotificationsParams {
  page?: number;
  per_page?: number;
  event?: string;
  include_read?: boolean;
  date_from?: string;
  date_to?: string;
  user?: number;
}

export const fetchNotifications = async (params?: fetchNotificationsParams) => {
  try {
    const response = await axiosInstance.get<ApiResponse<Notification[]>>(
      ApiRoutes.NOTIFICATIONS.BASE,
      { params }
    );

    return response.data;
  } catch (e) {
    console.log(e);
    return;
  }
};
