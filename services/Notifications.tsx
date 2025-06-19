import { get, patch } from "@/services/api";
import { getAuthToken } from "@/utils/getToken";
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
  const token = await getAuthToken();

  if (!token) throw new Error("No auth token found");

  const endpoint = notificationEndpoints[type];
  return get<Notification[]>(endpoint, {
    Authorization: `Bearer ${token}`,
  });
};

export const updateNotification = async (
  id: string,
  payload: UpdateNotificationPayload
) => {
  const token = await getAuthToken();

  if (!token) {
    throw new Error("No auth token found");
  }

  return patch<{}, UpdateNotificationPayload>(
    `/api/Notifications/${id}`,
    payload,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};
