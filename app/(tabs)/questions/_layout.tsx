import { Stack } from "expo-router";
import React from "react";

export default function QuestionsTabLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "#ffffff",
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="question" options={{ headerShown: false }} />
    </Stack>
  );
}
