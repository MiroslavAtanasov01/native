import { Image, Text, View, BackHandler, ScrollView } from "react-native";
import React, { useState } from "react";
import { ProfileInfo } from "@/types/types";
import styles from "@/styles/profile";
import GradientButton from "@/components/GradientButton";
import { router } from "expo-router";
import Header from "@/components/Header";

const Profile = () => {
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

  const profileImageSource = profileInfo.image
    ? { uri: profileInfo.image }
    : require("../../assets/images/profile-not-found.png");

  return (
    <ScrollView alwaysBounceVertical={false}>
      <Header title="ГРАЖДАНИ НА КВАРТАЛА" subtitle="ИВАН ИВАНОВ" />
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <Image
            source={require("../../assets/images/profile-not-found.png")}
            // style={{ width: 120, height: 120, borderRadius: 60 }}
          />
        </View>
        <Text style={styles.text}>
          Вие се регистрирахте на гражданската платформа “Граждани на квартала”.
          За всяко регистрирано мнение по проблемите на Вашият квартал, ще
          намерим сили и желание да Ви подкрепим!
        </Text>
        {/* Grey container */}
        <View style={styles.container}>
          {/* Content wrapper with fixed width, centered */}
          <View style={styles.contentWrapper}>
            {/* Email */}
            <View style={styles.content}>
              <Image
                style={styles.icon}
                source={require("../../assets/images/profile/email.png")}
              />
              <Text style={styles.info}>{profileInfo.email}</Text>
            </View>

            {/* Name */}
            <View style={styles.content}>
              <Image
                style={styles.icon}
                source={require("../../assets/images/profile/profile.png")}
              />
              <Text
                style={styles.info}
              >{`${profileInfo.name} ${profileInfo.lastName}`}</Text>
            </View>

            {/* Gender & Age */}
            <View style={styles.content}>
              <Image
                style={styles.icon}
                source={require("../../assets/images/profile/gender.png")}
              />
              <Text
                style={styles.info}
              >{`${profileInfo.gender} ${profileInfo.age}`}</Text>
            </View>

            {/* Income */}
            <View style={styles.content}>
              <Image
                style={styles.icon}
                source={require("../../assets/images/profile/currency.png")}
              />
              <Text style={styles.info}>{profileInfo.monthlyIncome}</Text>
            </View>

            {/* Profession */}
            <View style={styles.content}>
              <Image
                style={styles.icon}
                source={require("../../assets/images/profile/profession.png")}
              />
              <Text style={styles.info}>{profileInfo.profession}</Text>
            </View>

            {/* Interests */}
            <View style={styles.content}>
              <Image
                style={styles.icon}
                source={require("../../assets/images/profile/interests.png")}
              />
              <Text style={styles.info}>{profileInfo.interests}</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <GradientButton
            title="ИЗХОД"
            onPress={() => BackHandler.exitApp()}
            style={styles.buttonStyle}
          />
          <GradientButton
            title="ПРОДЪЛЖИ"
            onPress={() => router.navigate("/questions")}
            style={styles.buttonStyle}
            icon="arrow"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
