import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>ГАЛЕРИЯ В ПОДКРЕПА</Text>
      <Text style={styles.titleSecond}>НА НАШИТЕ ГРАЖДАНИ</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 106.67,
    backgroundColor: "#25509A",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
  },
  title: {
    color: "#74ACDA",
    fontSize: 26,
    fontWeight: "bold",
  },
  titleSecond: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
});
