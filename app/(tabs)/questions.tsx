import { View, Text } from "react-native";
import React from "react";
import Header from "@/components/Header";
import Logo from "@/components/Logo";

const questions = () => {
  return (
    <View>
      <Header title="МЕРОПРИЯТИЯ" subtitle="ПО ПРОГРАМА" />
      <Logo />
      <View>
        <Text>questions</Text>
      </View>
    </View>
  );
};

export default questions;
