import { notificationHandlers } from "@/features/notifications/utils";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface NotificationData {
  event: string;
  data: Record<string, any>;
}

export const getNotificationMessage = (
  notification: NotificationData
): string => {
  const handler = notificationHandlers[notification.event];
  return handler ? handler(notification.data) : "You have a new notification";
};
