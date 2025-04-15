import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "@/styles/register";
import { Colors } from "@/constants/Colors";

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
      <View>
        <Picker
          style={styles.picker}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
        >
          {/* TODO bold font  */}
          {options.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
              style={{
                fontSize: 20,
              }}
            />
          ))}
        </Picker>

        {/* Custom Icon Overlay */}
        {Platform.OS === "android" && (
          <MaterialIcons
            name="arrow-drop-down"
            size={40}
            color={Colors.secondary}
            style={customStyles.icon}
          />
        )}
      </View>
    </View>
  );
};

const customStyles = StyleSheet.create({
  icon: {
    position: "absolute",
    right: 5,
    top: Platform.OS === "android" ? -6 : 0,
    pointerEvents: "none",
  },
});

export default CustomPicker;
