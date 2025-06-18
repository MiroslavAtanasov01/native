import { post } from "@/services/api";
import { getAuthToken } from "@/utils/getToken";

interface AddUserOpinionReq {
  title: string;
  text: string;
}

export const AddUserOpinion = async (payload: AddUserOpinionReq) => {
  const token = await getAuthToken();

  if (!token) {
    throw new Error("No auth token found");
  }

  await post<{}, AddUserOpinionReq>("/api/UserOpinion", payload, {
    Authorization: `Bearer ${token}`,
  });
};
