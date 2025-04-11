import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import GradientButton from "@/components/GradientButton";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const { signIn } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    // --- Frontend-Only Simulation ---

    // 1. Basic Validation (check if email is entered)
    if (!email.trim()) {
      // Use trim() to catch empty spaces
      Alert.alert("Грешка", "Моля, въведете имейл адрес.");
      return;
    }
    // Optional: Add a very basic email format check if desired
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   Alert.alert("Грешка", "Моля, въведете валиден имейл адрес.");
    //   return;
    // }

    console.log("Logging in user (simulated):", { email });

    // 2. Simulate successful login (since no backend verification)
    //    Generate a mock token/flag. Using the email makes it slightly unique.
    const mockToken = `loggedInUser_${email}_${Date.now()}`;

    // 3. Call the signIn function from context
    //    This updates the auth state and saves the token to AsyncStorage.
    await signIn(mockToken);

    // 4. Navigation:
    //    The root layout's useProtectedRoute hook should automatically handle
    //    redirecting the user to '/(tabs)' now that isAuthenticated is true.
    console.log("Login successful, relying on root layout redirect.");
    // Optionally, you could force it if needed:
    // router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вход</Text>

      <TextInput
        placeholder="Имейл"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />

      {/* Password input ??? */}

      <GradientButton
        title="ВХОД"
        onPress={handleLogin}
        style={styles.button}
      />

      <Pressable
        onPress={() => router.push("/(auth)/register")}
        style={styles.link}
      >
        <Text style={styles.linkText}>Нямате акаунт? Регистрирайте се</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: Colors.primary,
  },
  input: {
    height: 50,
    borderColor: "#CED4DA",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: "#F8F9FA",
    fontSize: 16,
  },
  button: {
    marginTop: 15,
    width: "100%",
    alignSelf: "center",
  },
  link: {
    marginTop: 25,
    alignItems: "center",
  },
  linkText: {
    color: Colors.secondary,
    fontSize: 14,
  },
});

export default LoginScreen;
