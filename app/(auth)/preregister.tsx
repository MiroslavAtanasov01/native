import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import GradientButton from "@/components/GradientButton";
import { router } from "expo-router";
import Logo from "@/components/Logo";
import Answer from "@/components/answer/Answer";
import loremIpsumTexts from "@/utils/text";

const PreregisterScreen = () => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      alwaysBounceVertical={false}
    >
      <Logo />

      <View>
        <Answer text={loremIpsumTexts[0]} title="Как работи приложението?" />
        <Answer text={loremIpsumTexts[1]} title="Кой какво получава?" />
        <Answer text={loremIpsumTexts[2]} title="Твоята роля в квартала?" />
        <Answer text={loremIpsumTexts[3]} title="Искаме да те мотивираме!" />
        <Answer
          text={loremIpsumTexts[4]}
          title="Защити с отговори своя квартал, град и държава"
          icon="heart"
        />
      </View>

      <GradientButton
        title="РЕГИСТРАЦИЯ"
        style={styles.registerButton}
        onPress={() => router.navigate("/register")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    flexGrow: 1, // *** Allows content to grow and fill space ***
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingBottom: 20,
  },
  registerButton: {
    width: "70%",
    alignSelf: "center",
    marginTop: 20,
  },
});

export default PreregisterScreen;
