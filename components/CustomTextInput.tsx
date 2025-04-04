import { View, Text, TextInput, InputModeOptions } from "react-native";
import styles from "../styles/register";
import React from "react";

interface CustomTextInputProps {
  label: string;
  value: string;
  mode: InputModeOptions;
  onChangeText: (text: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  mode,
  onChangeText,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        inputMode={mode}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomTextInput;
