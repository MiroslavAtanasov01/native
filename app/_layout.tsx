import { Stack } from "expo-router";
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
}
