import React from "react";
import Header from "@/components/Header";
import { router } from "expo-router";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Heart from "../../assets/images/heart.svg";
import GiftGoup from "../../assets/images/gift-group.svg";
import OrangeMark from "../../assets/images/orange-mark.svg";

const Gifts = () => {
  return (
    <View>
      <Header title="БЛАГОДАРНОСТ" subtitle="ИЗБЕРЕТЕ" />
      <View style={styles.imageContainer}>
        <OrangeMark />
      </View>
      <Text style={styles.orangeText}>
        Вие не сте натрупали лоялност! Моля, отговорете на въпросите и ще
        срещнете нашата гражданска благодарност!
      </Text>
      <View style={styles.imageContainer}>
        <Heart height={50} />
      </View>
      <Text style={styles.redText}>
        РАЗГЛЕДАЙТЕ С КАКВО МОЖЕМ ДА ВИ ЗАРАДВАМЕ
      </Text>
      <Text style={styles.giftText}>ПОДАРЪЦИ</Text>
      <View style={styles.imgWrapper}>
        <GiftGoup width={"100%"} />
      </View>
      {/* TODO Change path */}
      <TouchableOpacity onPress={() => router.navigate("/(tabs)/opinions")}>
        <Text style={styles.linkText}>Виж подаръци</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Gifts;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    paddingVertical: 5,
  },
  orangeText: {
    color: "#E47E1A",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 25,
    paddingHorizontal: 35,
    paddingVertical: 5,
  },
  redText: {
    color: "#E30613",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 25,
    paddingHorizontal: 45,
    paddingVertical: 5,
    fontWeight: "500",
  },
  giftText: {
    color: "#25509A",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "400",
    paddingVertical: 5,
  },
  imgWrapper: {
    backgroundColor: "#D7D8D9",
    paddingHorizontal: 10,
  },
  linkText: {
    textAlign: "center",
    padding: 10,
    color: "#74ACDA",
    textDecorationLine: "underline",
  },
});
