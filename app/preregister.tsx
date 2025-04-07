import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GradientButton from "@/components/GradientButton";
import { router } from "expo-router";
import Logo from "@/components/Logo";
import Answer from "@/components/answer/Answer";
import loremIpsumTexts from "@/utils/text";

const preregister = () => {
  return (
    <View>
      <Logo />
      <Answer text={loremIpsumTexts[0]} title="Как работи приложението?" />
      <Answer text={loremIpsumTexts[1]} title="Кой какво получава?" />
      <Answer text={loremIpsumTexts[2]} title="Твоята роля в квартала?" />
      <Answer text={loremIpsumTexts[3]} title="Искаме да те мотивираме!" />
      <Answer
        text={loremIpsumTexts[4]}
        title="Защити с отговори своя квартал, град и държава"
        icon="heart"
      />
      <GradientButton
        title="РЕГИСТРАЦИЯ"
        style={{ marginTop: 15, width: "60%", margin: "auto" }}
        // onPress={() => router.navigate("/register")}
        onPress={() => router.navigate("/(tabs)/opinions")}
      />
    </View>
  );
};

export default preregister;

const styles = StyleSheet.create({});
