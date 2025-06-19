import { get, patch } from "@/services/api";
import { Notification } from "@/types/types";

type NotificationType = "all" | "new" | "last10";

interface UpdateNotificationPayload {
  isRead: boolean;
}

const notificationEndpoints: Record<NotificationType, string> = {
  all: "/api/Notifications/All",
  new: "/api/Notifications/New",
  last10: "/api/Notifications/Last10",
};

export const getNotifications = async (
  type: NotificationType
): Promise<Notification[]> => {
  const endpoint = notificationEndpoints[type];
  return get<Notification[]>(endpoint);
};

export const updateNotification = async (
  id: string,
  payload: UpdateNotificationPayload
) => {
  return patch<{}, UpdateNotificationPayload>(
    `/api/Notifications/${id}`,
    payload
  );
};
