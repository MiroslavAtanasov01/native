import {
  Image,
  Text,
  View,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
} from "react-native";
import React, { ReactNode } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import ArrowR from "@/assets/images/right-arrow.svg";

interface QuestionsButtonProps {
  title: string;
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<TextStyle>;
  icon: ReactNode;
}

const QuestionsButton: React.FC<QuestionsButtonProps> = ({
  title,
  text,
  onPress,
  style,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <View style={styles.icon}>{icon}</View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
          <Text style={style}>{text}</Text>
        </View>
      </View>

      <LinearGradient
        colors={["#25509A", "#74ACDA", "#25509A"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <View style={styles.arrowContainer}>
          <ArrowR height={28} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default QuestionsButton;
