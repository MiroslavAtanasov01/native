import React from "react";
import { Stack } from "expo-router";
import Header from "@/components/Header";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => (
          <Header title="ГАЛЕРИЯ В ПОДКРЕПА" subtitle="НА НАШИТЕ ГРАЖДАНИ" />
        ),
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="preregister" />
      <Stack.Screen name="welcome" />
    </Stack>
  );
}
