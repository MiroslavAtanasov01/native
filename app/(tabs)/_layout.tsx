import React from "react";
import { Tabs } from "expo-router";
import { Image, Text } from "react-native";
import QuestionIcon from "../../assets/images/questions.png";
import OpinionIcon from "../../assets/images/opinions.png";
import GiftIcon from "../../assets/images/gifts.png";
import ProfileIcon from "../../assets/images/svg/profile.svg";
import ProfileWhiteIcon from "../../assets/images/svg/profile_white.svg";
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
          focused ? (
            <Text style={{ color: "white", marginTop: 5 }}>{children}</Text>
          ) : null,
      })}
    >
      <Tabs.Screen
        name="questions"
        options={{
          title: "ВЪПРОСИ",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={QuestionIcon}
              tintColor={focused ? "white" : "#252849"}
              style={{ width: 42, height: 42 }}
            />
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("questions", {
              screen: "index",
              params: {},
            });
            // resetQuestions(); //  Reset context state
          },
        })}
      />
      <Tabs.Screen
        name="opinions"
        options={{
          title: "МНЕНИЯ",
          headerShown: false,
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
          headerShown: false,
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
