import React, { useEffect, useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import * as AppleAuthentication from "expo-apple-authentication";

export default function AppleSignInButton() {
  const [isAppleSignInAvailable, setIsAppleSignInAvailable] = useState(false);

  useEffect(() => {
    if (Platform.OS === "ios") {
      AppleAuthentication.isAvailableAsync().then(setIsAppleSignInAvailable);
    }
  }, []);

  if (!isAppleSignInAvailable) {
    return null;
  }

  const handleSignIn = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      console.log("Apple Sign-In Success:", credential);
      // credential contains: identityToken, authorizationCode, user, email, fullName etc.
      // NOTE: email and fullName are typically ONLY provided on the *first* sign-in attempt.
      // Store the 'user' identifier (Apple's unique ID for your app) reliably.

      // ---- IMPORTANT ----
      // Send the `identityToken` and potentially `user` to your backend server.
      // Your backend MUST verify the identityToken with Apple's public keys.
      // After verification, use the 'user' ID to find/create the user in your system.
      // Example: verifyAppleToken(credential.identityToken, credential.user);
      // -----------------
    } catch (e) {
      if (e instanceof Error && (e as any).code === "ERR_REQUEST_CANCELED") {
        console.log("User canceled Apple Sign-In.");
      } else {
        console.error("Apple Sign-In Error:", e);
      }
    }
  };

  return (
    <View style={styles.container}>
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK} // Or WHITE, WHITE_OUTLINE
        cornerRadius={5}
        style={styles.appleButton}
        onPress={handleSignIn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
  },
  appleButton: {
    width: 200,
    height: 44,
  },
});

// async function verifyAppleToken(token, appleUserId) { /* ... server-side logic ... */ }
