import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ProfileInfo } from "@/types/types";
import { Colors } from "@/constants/Colors";

const profile = () => {
  const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
    name: "Иван",
    lastName: "Иванов",
    email: "vankata@gmail.com",
    image: "https://www.pexels.com/search/cat/",
    gender: "Мъж",
    age: "25-29",
    monthlyIncome: "над 5000",
    profession: "Професия",
    interests: "Интереси",
    country: "България",
    city: "Варна",
    district: "",
    neighborhood: "",
    street: "",
    streetNumber: "",
  });

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 10,
        }}
      >
        <Image source={require("../../assets/images/profile-not-found.png")} />
      </View>
      <Text style={styles.text}>
        Вие се регистрирахте на гражданската платформа “Граждани на квартала”.
        За всяко регистрирано мнение по проблемите на Вашият квартал, ще намерим
        сили и желание да Ви подкрепим!
      </Text>
      <View
        style={{
          backgroundColor: "#D7D8D9",
          paddingVertical: 5,
        }}
      >
        <Text style={styles.info}>{profileInfo.email}</Text>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../../assets/images/profile/profile.png")} />
          <Text style={styles.info}>
            {`${profileInfo.name} ${profileInfo.lastName}`}
          </Text>
        </View>
        <Text style={styles.info}>
          {`${profileInfo.gender} ${profileInfo.age}`}
        </Text>
        <Text style={styles.info}>{profileInfo.monthlyIncome}</Text>
        <Text style={styles.info}>{profileInfo.profession}</Text>
        <Text style={styles.info}>{profileInfo.interests}</Text>
      </View>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: Colors.info,
    paddingBottom: 10,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  info: {
    color: Colors.primary,
    fontSize: 18,
  },
});
