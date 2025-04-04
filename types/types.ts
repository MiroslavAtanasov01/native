export type IconType = "heart" | "questionMark";

export interface ProfileInfo {
  name: string;
  lastName: string;
  email: string;
  image: string;
  gender: string;
  age: string;
  monthlyIncome: string;
  profession: string;
  interests: string;
  country: string;
  city: string;
  district: string;
  neighborhood: string;
  street: string;
  streetNumber: string;
}

interface AnswerOption {
  id: string; // Unique ID for the answer option (e.g., "opt1", "opt2")
  text: string; // Text displayed for the answer
}

export interface Question {
  campaignId: string;
  themeId: string;
  questionId: string;
  questionText: string;
  options: AnswerOption[];
}
