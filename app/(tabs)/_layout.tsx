import React from "react";
import { Tabs } from "expo-router";
import { View, Image, StyleSheet, Text } from "react-native";
import QuestionIcon from "../../assets/images/questions.png";
import OpinionIcon from "../../assets/images/opinions.png";
import GiftIcon from "../../assets/images/gifts.png";
import ProfileIcon from "../../assets/images/profile.png";
import Logo from "@/components/Logo";

const _layout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        header: () => <Logo />,
        tabBarStyle: {
          backgroundColor: "#74ACDA",
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          height: 80,
          paddingTop: 20,
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
          tabBarIcon: ({ focused }) => (
            <Image
              source={QuestionIcon}
              tintColor={focused ? "white" : "#252849"}
              style={{ width: 42, height: 42 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="opinions"
        options={{
          title: "МНЕНИЯ",
          headerTitleStyle: { color: "white" },
          tabBarIcon: ({ focused }) => (
            <Image
              source={OpinionIcon}
              tintColor={focused ? "white" : "#252849"}
              style={{ width: 27, height: 42 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="gifts"
        options={{
          title: "ПОДАРЪЦИ",
          tabBarIcon: ({ focused }) => (
            <Image
              source={GiftIcon}
              tintColor={focused ? "white" : "#252849"}
              style={{ width: 45, height: 42 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "ПРОФИЛ",
          tabBarIcon: ({ focused }) => (
            <Image
              source={ProfileIcon}
              tintColor={focused ? "white" : "#252849"}
              style={{ width: 37, height: 42 }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
