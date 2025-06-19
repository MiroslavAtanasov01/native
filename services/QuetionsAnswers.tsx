import { get, post } from "@/services/api";
import { QuestionResponse } from "@/types/questions-answers/types";

export const getQuestion = async (): Promise<QuestionResponse> => {
  return get<QuestionResponse>("/api/Question/UserQuestion");
};

export const answerQuestion = async (
  regionId: string,
  answerOptionsId: string
): Promise<{}> => {
  return post<{}, {}>(`/api/UserResponse/${regionId}/${answerOptionsId}`);
};
