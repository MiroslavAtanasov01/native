import React from "react";
import { Tabs } from "expo-router";
import { Text } from "react-native";

import GiftBlackIcon from "../../assets/images/gifts.svg";
import GiftWhiteIcon from "../../assets/images/gift-white.svg";
import SpeakersBlackIcon from "../../assets/images/questions.svg";
import SpeakersWhiteIcon from "../../assets/images/questions-white.svg";
import OpinionsBlackIcon from "../../assets/images/opinions.svg";
import OpinionsWhiteIcon from "../../assets/images/opinions-white.svg";

import ProfileIcon from "../../assets/images/svg/profile.svg";
import ProfileWhiteIcon from "../../assets/images/svg/profile_white.svg";
import Logo from "@/components/Logo";

const _layout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        contentStyle: {
          backgroundColor: "#ffffff",
        },
        header: () => <Logo />,
        tabBarStyle: {
          backgroundColor: "#74ACDA",
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          height: 75,
          paddingTop: 10,
        },
        tapBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        },
        tabBarShowLabel: true,
        tabBarLabel: ({ focused, children }) =>
          focused ? <Text className="mt-2 text-white">{children}</Text> : null,
      })}
    >
      <Tabs.Screen
        name="questions"
        options={{
          title: "ВЪПРОСИ",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SpeakersWhiteIcon width={42} height={42} />
            ) : (
              <SpeakersBlackIcon width={42} height={42} />
            ),
        }}
      />
      <Tabs.Screen
        name="opinions"
        options={{
          title: "МНЕНИЯ",
          headerShown: false,
          headerTitleStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <OpinionsWhiteIcon width={27} height={42} />
            ) : (
              <OpinionsBlackIcon width={27} height={42} />
            ),
        }}
      />
      <Tabs.Screen
        name="gifts"
        options={{
          title: "ПОДАРЪЦИ",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <GiftWhiteIcon width={45} height={42} />
            ) : (
              <GiftBlackIcon width={45} height={42} />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "ПРОФИЛ",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ProfileWhiteIcon width={37} height={42} />
            ) : (
              <ProfileIcon width={37} height={42} />
            ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
