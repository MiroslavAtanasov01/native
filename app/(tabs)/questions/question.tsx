import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import GradientButton from "@/components/GradientButton";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "@/styles/question";
import { Colors } from "@/constants/Colors";
import Header from "@/components/Header";
import { QuestionResponse, AppQuestion } from "@/types/questions-answers/types";

// TODO Replace it !!!
const getQuestion = async (
  regionId: string | null
): Promise<QuestionResponse | null> => {
  // --- MOCK LOGIC ---
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

  if (!regionId) {
    // Simulate the first question response
    return {
      regionID: "b914e601-b17d-4f7a-5cee-08dda3940af0",
      numberQuestionsRemaining: 1, // There's one more question after this
      topicNumber: 3,
      questionNumber: 1,
      question: {
        id: 5,
        number: 1,
        text: "Това е първият въпрос от API. Кой е любимият ви цвят?",
        topicID: 3,
        answerOptions: [
          { id: 10, number: 1, text: "Червен", questionID: 5 },
          { id: 11, number: 2, text: "Син", questionID: 5 },
          { id: 12, number: 3, text: "Зелен", questionID: 5 },
        ],
      },
    };
  } else if (regionId === "b914e601-b17d-4f7a-5cee-08dda3940af0") {
    // Simulate the second and final question response
    return {
      regionID: "b914e601-b17d-4f7a-5cee-08dda3940af0",
      numberQuestionsRemaining: 0, // This is the last question
      topicNumber: 3,
      questionNumber: 2,
      question: {
        id: 8,
        number: 2,
        text: "Това е вторият въпрос. Харесвате ли React Native?",
        topicID: 3,
        answerOptions: [
          { id: 13, number: 1, text: "Да", questionID: 8 },
          { id: 14, number: 2, text: "Не", questionID: 8 },
        ],
      },
    };
  }
  return null;
};

// delete it
const postAnswer = async (payload: {
  regionId: string;
  questionId: number;
  answerId: string;
}) => {
  console.log("Submitting answer to backend:", payload);
  await new Promise((resolve) => setTimeout(resolve, 300));
  return { success: true };
};

const QuestionScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState<AppQuestion | null>(
    null
  );
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [regionId, setRegionId] = useState<string | null>(null);
  const [questionsRemaining, setQuestionsRemaining] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);

  const fetchNextQuestion = useCallback(
    async (currentRegionId: string | null) => {
      setIsLoading(true);
      setSelectedAnswerId(null);

      try {
        //TODO change it with getQuestion
        const response = await getQuestion(currentRegionId);

        if (response && response.question) {
          const mappedQuestion: AppQuestion = {
            campaignId: response.regionID,
            themeId: response.question.topicID,
            questionId: response.question.number,
            questionDbId: response.question.id,
            questionText: response.question.text,
            options: response.question.answerOptions.map((opt) => ({
              ...opt,
              id: String(opt.id),
            })),
            hasImageOptions: response.question.hasImageOptions ?? false,
          };

          setCurrentQuestion(mappedQuestion);
          setRegionId(response.regionID);
          setQuestionsRemaining(response.numberQuestionsRemaining);

          // If this is the first question, calculate the total number for the header
          if (!currentRegionId) {
            setTotalQuestions(response.numberQuestionsRemaining + 1);
          }
        } else {
          // No more questions are available from the API
          setIsQuizFinished(true);
          setCurrentQuestion(null);
        }
      } catch (error) {
        console.error("Failed to fetch question:", error);
        setIsQuizFinished(true); // End quiz on error
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchNextQuestion(null);
  }, [fetchNextQuestion]);

  const handleSelectAnswer = (optionId: string) => {
    setSelectedAnswerId(optionId);
  };

  const handleSubmitAnswer = async () => {
    if (!selectedAnswerId || !currentQuestion || !regionId) {
      console.log("Please select an answer before submitting.");
      return;
    }

    setIsLoading(true);

    try {
      //TODO change it with answerQuestion
      await postAnswer({
        regionId: regionId,
        questionId: currentQuestion.questionDbId,
        answerId: selectedAnswerId,
      });

      // Step 2: Check if there are more questions and fetch the next one
      if (questionsRemaining > 0) {
        await fetchNextQuestion(regionId);
      } else {
        console.log("End of questions reached.");
        setIsQuizFinished(true);
        setCurrentQuestion(null);
        setIsLoading(false); // Manually set loading to false as fetch isn't called
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
      setIsQuizFinished(true);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#25509A" />
      </View>
    );
  }

  if (isQuizFinished || !currentQuestion) {
    return (
      <View style={styles.centered}>
        <Text style={styles.infoText}>
          Няма повече въпроси или сте отговорили на всички.
        </Text>
        <GradientButton
          title="ПРОДЪЛЖИ"
          onPress={() => router.navigate("/")}
          style={{ marginTop: 20 }}
        />
      </View>
    );
  }

  const useGrid = currentQuestion.hasImageOptions === true;

  return (
    <>
      <Header title="ИМАМЕ ВЪПРОСИ" subtitle={`${totalQuestions} ВЪПРОСА`} />
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.scrollContainer}
        alwaysBounceVertical={false}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerWrapper}>
              <View style={styles.headerTextWrapper}>
                <Text style={styles.headerText}>Тема №</Text>
                <Text style={styles.headerTextBlack}>
                  {currentQuestion.themeId}
                </Text>
              </View>
              <View style={styles.headerTextWrapper}>
                <Text style={styles.headerText}>Въпрос №</Text>
                <Text style={styles.headerTextBlack}>
                  {currentQuestion.questionId}
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.questionText}>
            {currentQuestion.questionText}
          </Text>

          <View
            style={[
              styles.optionsContainer,
              useGrid && styles.optionsContainerGrid,
            ]}
          >
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswerId === option.id;
              const buttonStyle = useGrid
                ? styles.optionButtonGrid
                : styles.optionButton;
              const textStyle = useGrid
                ? styles.optionTextGrid
                : styles.optionText;
              return (
                <Pressable
                  key={option.id}
                  style={[
                    buttonStyle,
                    isSelected
                      ? styles.optionSelected
                      : styles.optionUnselected,
                  ]}
                  onPress={() => handleSelectAnswer(String(option.id))}
                >
                  {!useGrid && (
                    <>
                      <MaterialCommunityIcons
                        name={isSelected ? "check-circle" : "circle-outline"}
                        size={36}
                        color={isSelected ? "#FFFFFF" : Colors.secondary}
                        style={styles.icon}
                      />
                      <Text
                        style={[
                          textStyle,
                          isSelected
                            ? styles.optionTextSelected
                            : styles.optionTextUnselected,
                        ]}
                      >
                        {option.text}
                      </Text>
                    </>
                  )}
                </Pressable>
              );
            })}
          </View>

          <GradientButton
            title="ИЗПРАТИ СВОЯТ ОТГОВОР"
            onPress={handleSubmitAnswer}
            style={styles.button}
            disabled={!selectedAnswerId || isLoading}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default QuestionScreen;
