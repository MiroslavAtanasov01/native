import { View, Text, Pressable } from "react-native";
import styles from "../app/styles/register";
import React from "react";

interface SelectableButtonGroupProps {
  options: string[];
  selectedValue: string | null;
  onSelect: (value: string) => void;
}

const SelectableButtonGroup: React.FC<SelectableButtonGroupProps> = ({
  options,
  selectedValue,
  onSelect,
}) => {
  return (
    <>
      {options.map((option) => {
        const isSelected = selectedValue === option;
        return (
          <Pressable
            key={option}
            style={[
              styles.buttonBase,
              isSelected ? styles.buttonSelected : styles.buttonUnselected,
            ]}
            onPress={() => onSelect(option)}
          >
            <Text
              style={[
                styles.textBase,
                isSelected ? styles.textSelected : styles.textUnselected,
              ]}
            >
              {option}
            </Text>
          </Pressable>
        );
      })}
    </>
  );
};

export default SelectableButtonGroup;
