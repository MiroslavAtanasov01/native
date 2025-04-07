import React from "react";
import Header from "@/components/Header";
import { View, StyleSheet } from "react-native";

const Gifts = () => {
  return (
    <View>
      <Header title="БЛАГОДАРНОСТ" subtitle="ИЗБЕРЕТЕ" />
      <View style={styles.container}></View>
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
