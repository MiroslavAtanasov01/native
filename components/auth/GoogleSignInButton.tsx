import React, { useEffect } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleSignInButton() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "440740346191-b5m2samr4jn1oairv7fop56h7p6uvq2r.apps.googleusercontent.com",
    iosClientId:
      "440740346191-j1jroelkstff43lsmu72p2bak0v4dakc.apps.googleusercontent.com",
    androidClientId:
      "440740346191-cs5fp6i9qiffcsr6lnr5rd3br6u8e7i4.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      console.log("Google ID Token:", id_token);
      // ---- IMPORTANT ----
      // Send this id_token to your backend server for verification!
      // Your backend verifies the token with Google, retrieves user info,
      // and then creates a session/account in your system.
      // Example: verifyGoogleToken(id_token);
      // -----------------
    } else if (response?.type === "error") {
      console.error("Google Sign-In Error:", response.error);
    }
    // Handle other response types: 'cancel', 'dismiss', etc.
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
