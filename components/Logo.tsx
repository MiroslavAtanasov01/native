import { StyleSheet, View, Image } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/images/Logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
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
