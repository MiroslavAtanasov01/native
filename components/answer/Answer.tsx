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

const icons: Record<IconType, any> = {
  heart: require("../../assets/images/heart.png"),
  questionMark: require("../../assets/images/question-mark.png"),
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
          <Image
            style={styles.iconQuestionMark}
            source={icons["questionMark"]}
            resizeMode="contain"
          />
          <Text style={styles.text}>{title}</Text>
          {icon && <Image source={icons[icon]} style={styles.iconHeart} />}
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
