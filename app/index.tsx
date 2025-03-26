import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Logo />
      <Link href="/questions">Questions</Link>
    </View>
  );
};

export default index;

const Logo = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/images/svg/Logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  image: {
    height: 85,
  },
});
