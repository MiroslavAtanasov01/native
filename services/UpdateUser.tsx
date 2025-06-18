import { patch } from "@/services/api";
import { UpdateUserPayload, User } from "@/types/types";
import { getAuthToken } from "@/utils/getToken";

export const updateUser = async (payload: UpdateUserPayload) => {
  const token = await getAuthToken();

  if (!token) {
    throw new Error("No auth token found");
  }

  return patch<User, UpdateUserPayload>("/api/User", payload, {
    Authorization: `Bearer ${token}`,
  });
};
