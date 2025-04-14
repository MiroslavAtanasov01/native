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
import { Question } from "@/types/types";
import { SAMPLE_QUESTIONS } from "@/utils/mockData";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "@/styles/question";
import { Colors } from "@/constants/Colors";
import Header from "@/components/Header";
import { useQuestionContext } from "@/context/QuestionContext";

const QuestionScreen = () => {
  const { questionIndex, setQuestionIndex, isCompleted, totalQuestions } =
    useQuestionContext();

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadQuestion = useCallback((index: number) => {
    console.log("Context Index:", index, "Loading question...");
    setIsLoading(true);
    setSelectedAnswerId(null);

    setTimeout(() => {
      if (index >= 0 && index < SAMPLE_QUESTIONS.length) {
        setCurrentQuestion(SAMPLE_QUESTIONS[index]);
      } else {
        setCurrentQuestion(null);
        console.log("No more questions or invalid index from context:", index);
      }
      setIsLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (!isCompleted) {
      loadQuestion(questionIndex);
    } else {
      setCurrentQuestion(null);
      setIsLoading(false);
    }
  }, [questionIndex, isCompleted, loadQuestion]);

  const handleSelectAnswer = (optionId: string) => {
    setSelectedAnswerId(optionId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswerId) {
      console.log("Please select an answer before submitting.");
      return;
    }

    const nextIndex = questionIndex + 1;

    if (nextIndex < totalQuestions) {
      setQuestionIndex(nextIndex);
    } else {
      setQuestionIndex(totalQuestions);
      console.log("End of questions reached on submit.");
    }

    router.navigate("/reply");
  };

  // Show loading only if not completed and isLoading is true
  if (isLoading && !isCompleted) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#25509A" />
      </View>
    );
  }

  // Check isCompleted flag from context OR if currentQuestion became null
  if (isCompleted || !currentQuestion) {
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
      <Header title="ИМАМЕ ВЪПРОСИ" subtitle="3 ВЪПРОСА" />
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.scrollContainer}
        alwaysBounceVertical={false}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerWrapper}>
              <View style={styles.headerTextWrapper}>
                <Text style={styles.headerText}>Кампания №</Text>
                <Text style={styles.headerTextBlack}>
                  {currentQuestion.campaignId}
                </Text>
              </View>
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

          {/* Question Text */}
          <Text style={styles.questionText}>
            {currentQuestion.questionText}
          </Text>

          {/* Answer Options */}
          <View
            style={[
              styles.optionsContainer,
              useGrid && styles.optionsContainerGrid,
            ]}
          >
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswerId === option.id;
              const hasLocalImage = !!option.localImageSource;
              const hasRemoteImage = !!option.imageUrl;
              const hasAnyImage = hasLocalImage || hasRemoteImage;

              const buttonStyle = useGrid
                ? styles.optionButtonGrid
                : styles.optionButton;
              const textStyle = useGrid
                ? styles.optionTextGrid
                : styles.optionText;
              const textSelectedStyle = useGrid
                ? styles.optionTextGridSelected
                : styles.optionTextSelected;
              const textUnselectedStyle = useGrid
                ? styles.optionTextGridUnselected
                : styles.optionTextUnselected;
              const iconStyle = useGrid ? styles.iconGrid : styles.icon;

              const imageSource = hasLocalImage
                ? option.localImageSource
                : hasRemoteImage
                ? { uri: option.imageUrl }
                : null;

              return (
                <Pressable
                  key={option.id}
                  style={[
                    buttonStyle,
                    isSelected
                      ? styles.optionSelected
                      : styles.optionUnselected,
                  ]}
                  onPress={() => handleSelectAnswer(option.id)}
                  accessibilityRole="radio"
                  accessibilityState={{ checked: isSelected }}
                >
                  {/* === Conditional Rendering for Image Options === */}
                  {useGrid &&
                    imageSource &&
                    (hasLocalImage ? (
                      <View style={styles.optionImageContainer}>
                        <Image
                          source={imageSource}
                          style={styles.innerImage}
                          onError={(e) =>
                            console.log(
                              "Failed to load option image:",
                              e.nativeEvent.error
                            )
                          }
                        />
                        {/* Overlay Text View */}
                        {hasLocalImage && option.text && (
                          <View style={styles.overlayTextView}>
                            <Text style={styles.overlayText}>
                              {option.text}
                            </Text>
                          </View>
                        )}
                      </View>
                    ) : (
                      <>
                        <Image
                          source={imageSource}
                          style={styles.optionImage}
                          resizeMode="contain"
                          onError={(e) =>
                            console.log(
                              "Failed to load option image:",
                              e.nativeEvent.error
                            )
                          }
                        />
                      </>
                    ))}

                  {!useGrid && (
                    <>
                      <MaterialCommunityIcons
                        name={isSelected ? "check-circle" : "circle-outline"}
                        size={36}
                        color={isSelected ? "#FFFFFF" : Colors.secondary}
                        style={iconStyle}
                      />
                      <Text
                        style={[
                          textStyle,
                          isSelected ? textSelectedStyle : textUnselectedStyle,
                        ]}
                      >
                        {option.text}
                      </Text>
                    </>
                  )}

                  {/* === Render Text === */}
                  {/* {option.text && (
                  <Text
                    style={[
                      textStyle,
                      isSelected ? textSelectedStyle : textUnselectedStyle,
                    ]}
                  >
                    {option.text}
                  </Text>
                )} */}

                  {/* In Grid: Render icon below text if text exists, or below image if no text */}
                  {useGrid && (
                    <MaterialCommunityIcons
                      name={isSelected ? "check-circle" : "circle-outline"}
                      size={36}
                      color={isSelected ? "#FFFFFF" : Colors.secondary}
                      style={iconStyle}
                    />
                  )}
                </Pressable>
              );
            })}
          </View>
          <GradientButton
            title="ИЗПРАТИ СВОЯТ ОТГОВОР"
            onPress={handleSubmitAnswer}
            style={styles.button}
            disabled={!selectedAnswerId || isLoading} // Disable if no selection or loading
          />
        </View>
      </ScrollView>
    </>
  );
};

export default QuestionScreen;
