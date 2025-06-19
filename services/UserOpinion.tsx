import { post } from "@/services/api";

interface AddUserOpinionReq {
  title: string;
  text: string;
}

export const AddUserOpinion = async (payload: AddUserOpinionReq) => {
  await post<{}, AddUserOpinionReq>("/api/UserOpinion", payload);
};
