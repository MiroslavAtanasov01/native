import { View, Text, Pressable } from "react-native";
import styles from "@/styles/register";
import React from "react";

interface SelectableButtonGroupProps {
  options: Array<{ label: string; value: string }>;
  selectedValue: { label: string; value: string } | null;
  onSelect: ({ label, value }: { label: string; value: string }) => void;
}

const SelectableButtonGroup: React.FC<SelectableButtonGroupProps> = ({
  options,
  selectedValue,
  onSelect,
}) => {
  return (
    <>
      {options.map((option) => {
        const isSelected = selectedValue?.label === option.label;
        return (
          <Pressable
            key={option.value}
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
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </>
  );
};

export default SelectableButtonGroup;
