import { ImageSourcePropType } from "react-native";

export type IconType = "heart" | "questionMark" | "arrow";

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

export interface UserStatistic {
  questionsTotal: number;
  questionsAvailable: number;
  answersDone: number;
  opinionsLeft: number;
  civilControlLeft: number;
  percentageActivity: number;
}

export interface UserCharacteristic {
  gender: string;
  income: string;
  age: string;
  profession: string;
  belief: string;
}

export interface UserLocation {
  country: string;
  city: string;
  district: string;
  area: string;
  street: string;
  houseNumber: string;
}

export interface UpdateUserPayload {
  userCharacteristic: UserCharacteristic;
  userLocation: UserLocation;
}
export interface User {
  id: string;
  name: string;
  surname: string;
  patronymic: string | null;
  email: string;
  photoFileName: string | null;
  photoFileUrl: string | null;
  date: string;
  language: string;
  isCharacteristicFilled: boolean;
  isLocationFilled: boolean;
  userCharacteristic: UserCharacteristic;
  userLocation: UserLocation;
  userStatistic: UserStatistic;
}

export interface Notification {
  id: string;
  title: string;
  text: string;
  dateTime: string;
  isRead: boolean;
}
