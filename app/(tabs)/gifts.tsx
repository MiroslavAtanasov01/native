import React from "react";
import { View, StyleSheet } from "react-native";
import GradientButton from "../../components/GradientButton";

const Gifts = () => {
  return (
    <View style={styles.container}>
      <GradientButton
        title="РЕГИСТРАЦИЯ"
        onPress={() => console.log("Button Pressed")}
      />
    </View>
  );
};

export default Gifts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
});
