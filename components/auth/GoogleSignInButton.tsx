import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import { makeRedirectUri } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
// import * as Localization from "expo-localization"; install expo-localization

WebBrowser.maybeCompleteAuthSession();

export default function GoogleSignInButton() {
  // const language = Localization.locale.split("-")[0]; // e.g., 'bg-BG' → 'bg'
  const { signIn } = useAuth();
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "305270617165-lpfncc9545mo9qobvv8b81uo7go9jqps.apps.googleusercontent.com",
    iosClientId:
      "305270617165-jvf64eggp7vogo65arfb8r9el9g3ekhl.apps.googleusercontent.com",
    androidClientId:
      "305270617165-qjbtmgg9ro0mtoudir48hsl8f7am1i0c.apps.googleusercontent.com",
    scopes: ["profile", "email", "openid"],
  });

  console.log("Redirect URI:", request?.redirectUri);

  console.log(
    "saas",
    makeRedirectUri({
      native: "com.diagrammikagk.grazhdaninakvartala:/oauthredirect",
    })
  );
  useEffect(() => {
    const getUserInfo = async () => {
      if (
        response?.type === "success" &&
        response.authentication?.accessToken
      ) {
        const idToken = response.authentication.accessToken;
        console.log("token", idToken);

        try {
          const res = await fetch(
            "https://api.citizens.asicsoft.ru/api/User/Authorization",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Accept-Language": "bg", // language
              },
              body: JSON.stringify({ idToken }),
            }
          );
          const data = await res.json();
          await AsyncStorage.setItem("jwt", data.accessToken);
          console.log("data", data);

          signIn({
            name: data.user.name,
            email: data.user.email,
            picture: data.user.picture,
          });
          router.navigate("/preregister");
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
