import { Stack } from "expo-router";
import "./globals.css";
import Header from "@/components/Header";
import { StatusBar } from "react-native";
import { QuestionProvider } from "@/context/QuestionContext";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <QuestionProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#e9ebec" />
        <Stack
          screenOptions={{
            contentStyle: {
              backgroundColor: "#ffffff",
            },
            header: () => (
              <Header
                title="ГАЛЕРИЯ В ПОДКРЕПА"
                subtitle="НА НАШИТЕ ГРАЖДАНИ"
              />
            ),
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="preregister" />
          <Stack.Screen name="register" />
          <Stack.Screen name="reply" options={{ headerShown: false }} />
        </Stack>
      </QuestionProvider>
    </AuthProvider>
  );
}
