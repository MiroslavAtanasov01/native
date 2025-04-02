import { View, Text, TextInput } from "react-native";
import styles from "../app//styles/register";
import React from "react";

interface CustomTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  onChangeText,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomTextInput;
