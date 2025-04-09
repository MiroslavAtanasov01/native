import React, { useState } from "react";
import {
  Text,
  GestureResponderEvent,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { IconType } from "@/types/types";

// Images
import Heart from "../../assets/images/heart.svg";
import QuestionMark from "../../assets/images/question-mark.svg";

const icons: Record<
  IconType,
  React.FC<{ width?: number; height?: number; fill?: string }>
> = {
  heart: Heart,
  questionMark: QuestionMark,
};

interface GradientButtonProps {
  text: string;
  title: string;
  icon?: keyof typeof icons;
  onPress?: (event: GestureResponderEvent) => void;
}

const Answer: React.FC<GradientButtonProps> = ({
  text,
  title,
  icon,
  onPress,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePress = (event: GestureResponderEvent) => {
    setIsModalVisible(true);
    if (onPress) onPress(event);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.touchable}>
        <View style={styles.content}>
          <QuestionMark width={38} height={38} />
          <Text style={styles.text}>{title}</Text>
          {icon && React.createElement(icons[icon], { width: 20, height: 18 })}
        </View>
      </TouchableOpacity>

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
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalText}>{text}</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Answer;
