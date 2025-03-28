import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GradientButton from "@/components/GradientButton";
import { router } from "expo-router";
import Logo from "@/components/Logo";
import Answer from "@/components/Answer";

const preregister = () => {
  return (
    <View>
      <Logo />
      <Answer title="Как работи приложението?" />
      <Answer title="Кой какво получава?" />
      <Answer title="Твоята роля в квартала?" />
      <Answer title="Искаме да те мотивираме!" />
      <Answer title="Защити с отговори своя квартал, град и държава" />
      <GradientButton
        title="РЕГИСТРАЦИЯ"
        onPress={() => router.navigate("/questions")}
      />
    </View>
  );
};

export default preregister;

const styles = StyleSheet.create({});
