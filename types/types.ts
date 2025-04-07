import { ImageSourcePropType } from "react-native";

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
  id: string;
  text?: string;
  imageUrl?: string;
  localImageSource?: ImageSourcePropType;
}

export interface Question {
  campaignId: string;
  themeId: string;
  questionId: string;
  questionText: string;
  options: AnswerOption[];
  hasImageOptions?: boolean;
}
