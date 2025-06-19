export interface QuestionResponse {
  regionID: string;
  numberQuestionsRemaining: number;
  topicNumber: number;
  questionNumber: number;
  question: Question;
}

export interface Question {
  id: number;
  number: number;
  text: string;
  topicID: number;
  answerOptions: AnswerOption[];
  hasImageOptions?: boolean;
}

export interface AnswerOption {
  id: number;
  number: number;
  text: string;
  questionID: number;
  imageUrl?: string;
}

interface AppAnswerOption extends Omit<AnswerOption, "id"> {
  id: string;
}

export interface AppQuestion {
  campaignId: string;
  themeId: number;
  questionId: number; // This will be the question's display number
  questionDbId: number; // The actual ID from the database
  questionText: string;
  options: AppAnswerOption[];
  hasImageOptions?: boolean;
}
