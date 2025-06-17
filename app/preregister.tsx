import {
  StyleSheet,
  View,
  ScrollView,
  Modal,
  GestureResponderEvent,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import GradientButton from "@/components/GradientButton";
import { router } from "expo-router";
import Logo from "@/components/Logo";
import Answer from "@/components/answer/Answer";
import loremIpsumTexts from "@/utils/text";
import GoogleSignInButton from "@/components/auth/GoogleSignInButton";
import AppleSignInButton from "@/components/auth/AppleSignInButton";
import { useAuth } from "@/context/AuthContext";
import { Colors } from "@/constants/Colors";

const PreregisterScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const auth = useAuth();
  const user = auth?.user;

  const handlePress = (event: GestureResponderEvent) => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    if (user) {
      setIsModalVisible(false);
    }
  }, [user]);

  useEffect(() => {
    if (user?.isCharacteristicFilled) {
      router.replace("/(tabs)/questions");
    }
  }, [user]);

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      alwaysBounceVertical={false}
    >
      <Logo />

      <View>
        <Answer text={loremIpsumTexts[0]} title="Как работи приложението?" />
        <Answer text={loremIpsumTexts[1]} title="Кой какво получава?" />
        <Answer text={loremIpsumTexts[2]} title="Твоята роля в квартала?" />
        <Answer text={loremIpsumTexts[3]} title="Искаме да те мотивираме!" />
        <Answer
          text={loremIpsumTexts[4]}
          title="Защити с отговори своя квартал, град и държава"
          icon="heart"
        />
      </View>
      {user ? (
        <>
          <Text style={styles.linkText}>Изпълнено влизане чрез Google</Text>
          <GradientButton
            title="РЕГИСТРАЦИЯ"
            style={styles.registerButton}
            onPress={() => router.navigate("/register")}
          />
        </>
      ) : (
        <GradientButton
          title="ВХОД"
          style={styles.registerButton}
          onPress={handlePress}
        />
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Влизане в системата</Text>
            {/* <AppleSignInButton /> */}
            <GoogleSignInButton />
          </View>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    flexGrow: 1, // *** Allows content to grow and fill space ***
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingBottom: 20,
  },
  registerButton: {
    width: "70%",
    alignSelf: "center",
    marginTop: 27,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    maxWidth: 350,
    padding: 15,
    paddingBottom: 30,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    gap: 20,
  },
  modalTitle: {
    color: "#25509A",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  linkText: {
    textAlign: "center",
    padding: 20,
    color: Colors.primary,
  },
});

export default PreregisterScreen;
