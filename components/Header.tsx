import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.titleSecond}>{subtitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: "#25509A",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
  },
  title: {
    color: "#74ACDA",
    fontSize: 24,
    fontWeight: "bold",
  },
  titleSecond: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
