import Logo from "@/components/Logo";
import { Stack } from "expo-router";
import React from "react";

export default function QuestionsTabLayout() {
  return (
    <Stack screenOptions={{ header: () => <Logo /> }}>
      <Stack.Screen name="question" options={{ headerShown: false }} />
    </Stack>
  );
}
