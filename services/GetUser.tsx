import { get } from "@/services/api";
import { getAuthToken } from "@/utils/getToken";
import { User } from "@/types/types";

export const getUser = async (): Promise<User> => {
  const token = await getAuthToken();

  if (!token) throw new Error("No auth token found");

  return get<User>("/api/User", {
    Authorization: `Bearer ${token}`,
    "Accept-Language": "bg",
  });
};
