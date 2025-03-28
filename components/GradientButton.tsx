import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface GradientButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ title, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}
      style={styles.button}
    >
      <LinearGradient
        colors={
          isPressed
            ? ["#1D3E72", "#5B94D0", "#1D3E72"]
            : ["#25509A", "#74ACDA", "#25509A"]
        }
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={[
          styles.gradient,
          styles.shadow,
          isPressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: "90%",
    margin: "auto",
  },
  buttonPressed: {
    transform: [{ scale: 0.95 }],
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  gradient: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
});
