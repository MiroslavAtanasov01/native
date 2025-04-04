import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "../styles/register";
import React from "react";

interface CustomPickerProps {
  label: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
  options: { label: string; value: string }[];
}

const CustomPicker: React.FC<CustomPickerProps> = ({
  label,
  selectedValue,
  onValueChange,
  options,
}) => {
  return (
    <View style={styles.pickerWrapper}>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        {options.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </View>
  );
};

export default CustomPicker;
