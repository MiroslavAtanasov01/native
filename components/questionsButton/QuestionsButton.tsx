import {
  Image,
  Text,
  View,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ImageSourcePropType,
  TextStyle,
} from "react-native";
import React from "react";
import styles from "./styles";
import { Colors } from "@/constants/Colors";

interface QuestionsButtonProps {
  title: string;
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<TextStyle>;
  icon: ImageSourcePropType;
}

const QuestionsButton: React.FC<QuestionsButtonProps> = ({
  title,
  text,
  onPress,
  style,
  icon,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <Image style={styles.icon} source={icon} />
        <View>
          <Text style={styles.text}>{title}</Text>
          <Text style={style}>{text}</Text>
        </View>
      </View>
      <View style={{ backgroundColor: Colors.primary, paddingVertical: 10 }}>
        <Image source={require("../../assets/images/right-arrow.png")} />
      </View>
    </TouchableOpacity>
  );
};

export default QuestionsButton;
