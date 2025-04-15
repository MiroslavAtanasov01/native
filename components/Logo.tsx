import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import LogoImg from "../assets/images/Logo.svg";

const Logo = () => {
  return (
    <View style={styles.header}>
      <LogoImg width={Dimensions.get("window").width * 1} height={70} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  header: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  image: {
    height: 70,
  },
});
