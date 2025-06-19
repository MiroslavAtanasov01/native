import { get, patch } from "@/services/api";
import { UpdateUserPayload, User } from "@/types/types";

export const getUser = async (): Promise<User> => {
  return get<User>("/api/User");
};

export const updateUser = async (payload: UpdateUserPayload) => {
  return patch<User, UpdateUserPayload>("/api/User", payload);
};
