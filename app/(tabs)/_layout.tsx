import React from "react";
import { Tabs } from "expo-router";
import { View, Image, StyleSheet, Text } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        header: () => <Logo />,
        tabBarStyle: {
          backgroundColor: "#74ACDA",
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          height: 90.67,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#25509A",
        tabBarShowLabel: true,
        tabBarLabel: ({ focused }) =>
          focused ? <Text>{route.name.toUpperCase()}</Text> : null,
      })}
    >
      <Tabs.Screen
        name="questions"
        options={{
          title: "ВЪПРОСИ",
          headerTitleStyle: { color: "white" },
        }}
      />
      <Tabs.Screen name="opinions" options={{ title: "МНЕНИЯ" }} />
      <Tabs.Screen name="gifts" options={{ title: "ПОДАРЪЦИ" }} />
      <Tabs.Screen name="profile" options={{ title: "ПРОФИЛ" }} />
    </Tabs>
  );
};

const Logo = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/images/svg/Logo.png")}
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

export default _layout;
