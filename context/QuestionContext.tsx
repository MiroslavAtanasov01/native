import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { SAMPLE_QUESTIONS } from "@/utils/mockData";

interface QuestionContextType {
  questionIndex: number;
  setQuestionIndex: Dispatch<SetStateAction<number>>;
  totalQuestions: number;
  isCompleted: boolean;
  resetQuestions: () => void;
}

const QuestionContext = createContext<QuestionContextType>({
  questionIndex: 0,
  setQuestionIndex: () => {},
  totalQuestions: 0,
  isCompleted: false,
  resetQuestions: () => {},
});

export const QuestionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const totalQuestions = SAMPLE_QUESTIONS.length;
  const isCompleted = questionIndex >= totalQuestions || questionIndex === -1;

  const resetQuestions = () => {
    setQuestionIndex(0);
  };

  const value = {
    questionIndex,
    setQuestionIndex,
    totalQuestions,
    isCompleted,
    resetQuestions,
  };

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = (): QuestionContextType => {
  const context = useContext(QuestionContext);
  if (context === undefined) {
    throw new Error(
      "useQuestionContext must be used within a QuestionProvider"
    );
  }
  return context;
};
