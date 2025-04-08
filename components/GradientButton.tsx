import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface GradientButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  title,
  onPress,
  style,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}
      style={style}
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

const styles = StyleSheet.create({
  gradient: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonPressed: {
    transform: [{ scale: 0.98 }],
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
      },
      android: {
        boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.7)",
      },
    }),
  },
});

export default GradientButton;
