import { Image, Text, View, BackHandler } from "react-native";
import React, { useState } from "react";
import { ProfileInfo } from "@/types/types";
import styles from "@/styles/profile";
import GradientButton from "@/components/GradientButton";
import { router } from "expo-router";
import Header from "@/components/Header";

// Images
import ProfileImg from "@/assets/images/profile.svg";
import ProfileImgNotFound from "@/assets/images/profile-not-found.svg";
import CurrencyImg from "@/assets/images/profile/currency.svg";
import Email from "@/assets/images/profile/email.svg";
import Gender from "@/assets/images/profile/gender.svg";
import Interests from "@/assets/images/profile/interests.svg";
import Profession from "@/assets/images/profile/profession.svg";

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

  const profileImageSource = profileInfo.image ? (
    { uri: profileInfo.image }
  ) : (
    <ProfileImgNotFound />
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Header title="ГРАЖДАНИ НА КВАРТАЛА" subtitle="ИВАН ИВАНОВ" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 10,
        }}
      >
        <ProfileImgNotFound
          style={{
            width: 120,
            height: 120,
            padding: 60,
            borderRadius: "50%",
            backgroundColor: "#e9ebec",
          }}
        />
      </View>
      <Text style={styles.text}>
        Вие се регистрирахте на гражданската платформа “Граждани на квартала”.
        За всяко регистрирано мнение по проблемите на Вашият квартал, ще намерим
        сили и желание да Ви подкрепим!
      </Text>
      {/* Grey container */}
      <View style={styles.container}>
        {/* Content wrapper with fixed width, centered */}
        <View style={styles.contentWrapper}>
          {/* Email */}
          <View style={styles.content}>
            <Email height={20} width={20} style={{ marginRight: 15 }} />
            <Text style={styles.info}>{profileInfo.email}</Text>
          </View>

          {/* Name */}
          <View style={styles.content}>
            <ProfileImg height={20} width={20} style={{ marginRight: 15 }} />
            <Text
              style={styles.info}
            >{`${profileInfo.name} ${profileInfo.lastName}`}</Text>
          </View>

          {/* Gender & Age */}
          <View style={styles.content}>
            <Gender height={20} width={20} style={{ marginRight: 15 }} />
            <Text
              style={styles.info}
            >{`${profileInfo.gender} ${profileInfo.age}`}</Text>
          </View>

          {/* Income */}
          <View style={styles.content}>
            <CurrencyImg height={20} width={20} style={{ marginRight: 15 }} />
            <Text style={styles.info}>{profileInfo.monthlyIncome}</Text>
          </View>

          {/* Profession */}
          <View style={styles.content}>
            <Profession height={20} width={20} style={{ marginRight: 15 }} />
            <Text style={styles.info}>{profileInfo.profession}</Text>
          </View>

          {/* Interests */}
          <View style={styles.content}>
            <Interests height={20} width={20} style={{ marginRight: 15 }} />
            <Text style={styles.info}>{profileInfo.interests}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonRow}>
        {/* Button 1: Exit */}
        <GradientButton
          title="ИЗХОД"
          onPress={() => BackHandler.exitApp()}
          // Apply flex and margin via the style prop
          style={styles.buttonStyle}
        />

        {/* Button 2: Continue */}
        <GradientButton
          title="ПРОДЪЛЖИ"
          onPress={() => router.navigate("/questions")} // Adjust route as needed
          // Apply flex and margin via the style prop
          style={styles.buttonStyle}
        />
      </View>
    </View>
  );
};

export default Profile;
