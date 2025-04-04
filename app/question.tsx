import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import GradientButton from "@/components/GradientButton";
import { router } from "expo-router";
import { Question } from "@/types/types";
import { SAMPLE_QUESTIONS } from "@/utils/mockData";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "@/styles/question";
import { Colors } from "@/constants/Colors";

const QuestionScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [questionIndex, setQuestionIndex] = useState<number>(0); // To track which sample question to show

  // --- Function to Load Question Data ---
  const loadQuestion = (index: number) => {
    setIsLoading(true);
    setSelectedAnswerId(null); // Reset selection when loading new question

    // Simulate API call delay
    setTimeout(() => {
      if (index >= 0 && index < SAMPLE_QUESTIONS.length) {
        setCurrentQuestion(SAMPLE_QUESTIONS[index]);
      } else {
        // Handle case where there are no more questions or index is invalid
        setCurrentQuestion(null); // Or show a completion message
        console.log("No more questions or invalid index");
      }
      setIsLoading(false);
    }, 500); // Simulate 0.5 second loading time
  };

  // --- Load the first question on component mount ---
  useEffect(() => {
    loadQuestion(questionIndex);
  }, [questionIndex]); // Reload when questionIndex changes

  // --- Handle Answer Selection ---
  const handleSelectAnswer = (optionId: string) => {
    setSelectedAnswerId(optionId);
    // Here you would typically record the answer
    console.log(
      `Selected answer for Q${currentQuestion?.questionId}: ${optionId}`
    );

    // Automatically load next question after a short delay
    // setTimeout(() => {
    //   setQuestionIndex(prevIndex => prevIndex + 1);
    // }, 1000);
  };

  const handleNextQuestion = () => {
    if (questionIndex < SAMPLE_QUESTIONS.length - 1) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Handle end of questions
      console.log("End of questions reached");
      // Navigate away or show results
    }
  };

  // --- Render Loading State ---
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#25509A" />
      </View>
    );
  }

  // --- Render No Question State ---
  if (!currentQuestion) {
    return (
      <View style={styles.centered}>
        <Text style={styles.infoText}>Няма налични въпроси.</Text>
        {/* Add a button to retry or go back */}
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContainer}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <Text style={styles.headerText}>Кампания №</Text>
            <Text style={styles.headerTextBlack}>
              {currentQuestion.campaignId}
            </Text>
          </View>
          <Text style={styles.headerText}>
            Тема № {currentQuestion.themeId}
          </Text>
          <Text style={styles.headerText}>
            Въпрос № {currentQuestion.questionId}
          </Text>
        </View>

        {/* Question Text */}
        <Text style={styles.questionText}>{currentQuestion.questionText}</Text>

        {/* Answer Options */}
        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswerId === option.id;
            return (
              <Pressable
                key={option.id}
                style={[
                  styles.optionButton,
                  isSelected ? styles.optionSelected : styles.optionUnselected,
                ]}
                onPress={() => handleSelectAnswer(option.id)}
                accessibilityRole="radio" // Accessibility hint
                accessibilityState={{ checked: isSelected }}
              >
                <MaterialCommunityIcons
                  name={isSelected ? "check-circle" : "circle-outline"}
                  size={36}
                  color={isSelected ? "#FFFFFF" : Colors.secondary}
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.optionText,
                    isSelected
                      ? styles.optionTextSelected
                      : styles.optionTextUnselected,
                  ]}
                >
                  {option.text}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <GradientButton
          title="ИЗПРАТИ СВОЯТ ОТГОВОР"
          onPress={() => router.navigate("/questions")}
          style={styles.button}
        />
      </View>
    </ScrollView>
  );
};

export default QuestionScreen;
