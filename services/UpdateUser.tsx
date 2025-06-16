import { patch } from "@/services/api";
import { UpdateUserPayload } from "@/types/types";
import { getAuthToken } from "@/utils/getToken";

export const updateUser = async (payload: UpdateUserPayload) => {
  const token = await getAuthToken();

  if (!token) {
    throw new Error("No auth token found");
  }

  return patch<any, UpdateUserPayload>("/User", payload, {
    Authorization: `Bearer ${token}`,
    "Accept-Language": "bg",
  });
};
