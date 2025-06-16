import { Text, View, BackHandler, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/styles/profile";
import GradientButton from "@/components/GradientButton";
import { router } from "expo-router";
import Header from "@/components/Header";
import {
  ageRangesValues,
  beliefsOptionsValues,
  genderOptionsValues,
  incomeRangesValues,
  professionOptionsValues,
} from "@/constants/Text";

// Images
import ProfileImg from "@/assets/images/profile.svg";
import ProfileImgNotFound from "@/assets/images/profile-not-found.svg";
import CurrencyImg from "@/assets/images/profile/currency.svg";
import Email from "@/assets/images/profile/email.svg";
import Gender from "@/assets/images/profile/gender.svg";
import Interests from "@/assets/images/profile/interests.svg";
import Profession from "@/assets/images/profile/profession.svg";
import { useAuth } from "@/context/AuthContext";
import { getUser } from "@/services/GetUser";

const Profile = () => {
  const { user, signOut, signIn } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const latestUser = await getUser();
        console.log(latestUser);
        await signIn(latestUser);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  const exit = () => {
    signOut();
    router.navigate("/preregister");
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      alwaysBounceVertical={false}
    >
      <Header
        title="ГРАЖДАНИ НА КВАРТАЛА"
        subtitle={`${user?.name.toUpperCase() ?? ""} ${
          user?.surname.toUpperCase() ?? ""
        }`}
      />
      <View style={styles.imgContainer}>
        {user?.photoFileUrl ? (
          <Image
            source={{ uri: user?.photoFileUrl }}
            style={styles.profileImage}
          />
        ) : (
          <ProfileImgNotFound style={styles.profileImageNotFound} />
        )}
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
            <Text style={styles.info}>{user?.email}</Text>
          </View>

          {/* Name */}
          <View style={styles.content}>
            <ProfileImg height={20} width={20} style={{ marginRight: 15 }} />
            <Text style={styles.info}>{`${user?.name} ${user?.surname}`}</Text>
          </View>

          {/* Gender & Age */}
          <View style={styles.content}>
            <Gender height={20} width={20} style={{ marginRight: 15 }} />
            <Text style={styles.info}>{`${
              genderOptionsValues[
                (user?.userCharacteristic?.gender ??
                  "") as keyof typeof genderOptionsValues
              ]
            } ${
              ageRangesValues[
                (user?.userCharacteristic?.age ??
                  "") as keyof typeof ageRangesValues
              ]
            }`}</Text>
          </View>

          {/* Income */}
          <View style={styles.content}>
            <CurrencyImg height={20} width={20} style={{ marginRight: 15 }} />
            <Text style={styles.info}>
              {
                incomeRangesValues[
                  (user?.userCharacteristic?.income ??
                    "") as keyof typeof incomeRangesValues
                ]
              }
            </Text>
          </View>

          {/* Profession */}
          <View style={styles.content}>
            <Profession height={20} width={20} style={{ marginRight: 15 }} />
            <Text style={styles.info}>
              {
                professionOptionsValues[
                  (user?.userCharacteristic?.profession ??
                    "") as keyof typeof professionOptionsValues
                ]
              }
            </Text>
          </View>

          {/* Interests */}
          <View style={styles.content}>
            <Interests height={20} width={20} style={{ marginRight: 15 }} />
            <Text style={styles.info}>
              {
                beliefsOptionsValues[
                  (user?.userCharacteristic?.belief ??
                    "") as keyof typeof beliefsOptionsValues
                ]
              }
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <GradientButton
          title="ИЗХОД"
          onPress={exit}
          style={styles.buttonStyle}
        />
        <GradientButton
          title="ПРОДЪЛЖИ"
          onPress={() => router.navigate("/questions")}
          style={styles.buttonStyle}
          icon="arrow"
        />
      </View>
    </ScrollView>
  );
};

export default Profile;
