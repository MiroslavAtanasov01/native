import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "@/context/AuthContext";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleSignInButton() {
  const { signIn } = useAuth();
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "440740346191-7rrhraaqlrad7j9kp1qp3cemm8aknjqe.apps.googleusercontent.com",
    iosClientId:
      "440740346191-car7l0blotkmb3jqfovpof3gcb5iqv28.apps.googleusercontent.com",
    androidClientId:
      "440740346191-s4j5850bsjvqiv5akddiv986q3cp40q2.apps.googleusercontent.com",
    scopes: ["profile", "email", "openid"],
  });

  console.log("Redirect URI:", request?.redirectUri);
  useEffect(() => {
    const getUserInfo = async () => {
      if (
        response?.type === "success" &&
        response.authentication?.accessToken
      ) {
        try {
          const res = await fetch(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: {
                Authorization: `Bearer ${response.authentication.accessToken}`,
              },
            }
          );
          const user = await res.json();
          await AsyncStorage.setItem("user", JSON.stringify(user));
          signIn({
            name: user.name,
            email: user.email,
            picture: user.picture,
          });
        } catch (error) {
          console.error("Failed to fetch user info", error);
        }
      }
    };

    getUserInfo();
  }, [response]);

  return (
    <TouchableOpacity
      disabled={!request}
      style={styles.button}
      onPress={() => {
        promptAsync();
      }}
    >
      <View style={styles.buttonContent}>
        <View style={styles.container}>
          <Image
            source={require("@/assets/images/google-bg.png")}
            style={styles.backgroundImage}
          />

          <Image
            source={require("@/assets/images/google-logo.png")}
            style={styles.logoImage}
          />
        </View>
        <Text style={styles.buttonText}>Влезте с Google</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4285F4",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 55,
    height: 55,
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    width: 55,
    height: 55,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "contain",
  },
  logoImage: {
    width: 36,
    height: 36,
    zIndex: 1,
    resizeMode: "contain",
  },
});

// async function verifyGoogleToken(token) { /* ... server-side logic ... */ }
