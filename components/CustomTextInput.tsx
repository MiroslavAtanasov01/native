import {
  View,
  Text,
  TextInput,
  InputModeOptions,
  StyleProp,
  TextStyle,
} from "react-native";
import styles from "../app//styles/register";
import React from "react";

//TODO remove ? after opinions is filled with props
interface CustomTextInputProps {
  label: string;
  value?: string;
  mode?: InputModeOptions;
  onChangeText?: (text: string) => void;
  style?: StyleProp<TextStyle>;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  mode,
  onChangeText,
  style,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        multiline
        numberOfLines={4}
        inputMode={mode}
        style={[styles.input, style]}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomTextInput;
