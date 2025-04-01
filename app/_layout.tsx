import { Stack } from "expo-router";
import "./globals.css";
import Header from "@/components/Header";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#e9ebec" />
      <Stack
        screenOptions={{
          header: () => <Header />,
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="preregister" />
        <Stack.Screen name="register" />
      </Stack>
    </>
  );
}
