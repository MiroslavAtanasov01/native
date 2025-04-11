import React, { useEffect } from "react";
import { Stack, SplashScreen } from "expo-router";
import {
  AuthProvider,
  useAuth,
  useProtectedRoute,
} from "@/context/AuthContext";
import { QuestionProvider } from "@/context/QuestionContext";
import Header from "@/components/Header";
import { StatusBar } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <AuthProvider>
      <LayoutInner />
    </AuthProvider>
  );
}

function LayoutInner() {
  const auth = useAuth();
  useProtectedRoute(auth);

  useEffect(() => {
    if (!auth.isLoading) {
      SplashScreen.hideAsync();
      console.log("RootLayout: Auth loaded, hiding splash screen.");
    } else {
      console.log("RootLayout: Auth still loading...");
    }
  }, [auth.isLoading]);

  if (auth.isLoading) {
    console.log("RootLayout: Rendering null while auth is loading.");
    return null;
  }

  console.log(
    "RootLayout: Rendering main Stack. IsAuthenticated:",
    auth.isAuthenticated
  );

  return (
    <QuestionProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#e9ebec" />
      <Stack
        screenOptions={{
          header: () => (
            <Header title="ГАЛЕРИЯ В ПОДКРЕПА" subtitle="НА НАШИТЕ ГРАЖДАНИ" />
          ),
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="reply" options={{ headerShown: false }} />
      </Stack>
    </QuestionProvider>
  );
}
