import React from "react";
import Header from "@/components/Header";
import { router } from "expo-router";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import Heart from "../../assets/images/heart.svg";
import GiftGoup from "../../assets/images/gift-group.svg";
import OrangeMark from "../../assets/images/orange-mark.svg";
import styles from "../styles/gifts";

const Gifts = () => {
  return (
    <ScrollView>
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
        <Text style={styles.linkText}>Всички категории</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Gifts;
