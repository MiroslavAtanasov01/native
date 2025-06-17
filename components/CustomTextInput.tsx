import {
  View,
  Text,
  TextInput,
  InputModeOptions,
  StyleProp,
  TextStyle,
} from "react-native";
import styles from "@/styles/register";
import React from "react";

//TODO remove ? after opinions is filled with props
interface CustomTextInputProps {
  label: string;
  value?: string;
  mode?: InputModeOptions;
  onChangeText?: (text: string) => void;
  style?: StyleProp<TextStyle>;
  counter?: Boolean;
  maxSymbols?: number;
  numSymbols?: number;
  editable?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  mode,
  onChangeText,
  style,
  counter,
  numSymbols,
  maxSymbols,
  editable,
}) => {
  return (
    <View>
      {counter ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          <Text
            style={[
              styles.label,
              { flex: 1, textAlign: "center", paddingLeft: 90 },
            ]}
          >
            {label}
          </Text>

          <Text
            style={{
              fontSize: 17,
              color: "#25509A",
              width: 90,
              textAlign: "right",
              paddingRight: 15,
            }}
          >
            {numSymbols} / {maxSymbols}
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.label}>{label}</Text>
        </View>
      )}
      <TextInput
        multiline
        numberOfLines={8}
        maxLength={maxSymbols}
        inputMode={mode}
        style={[styles.input, style]}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
      />
    </View>
  );
};

export default CustomTextInput;
