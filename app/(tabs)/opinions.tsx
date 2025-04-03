import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "@/components/Header";
import GradientButton from "@/components/GradientButton";
import CustomTextInput from "@/components/CustomTextInput";

const opinions = () => {
  return (
    <View>
      <Header title="НОВО" subtitle="МНЕНИЕ" />

      <Image source={require("../../assets/images/opinions-list.png")}></Image>
      <Text>СПОДЕЛЕТЕ СВОЕТО МНЕНИЕ</Text>
      <View>
        <CustomTextInput label="Тема"></CustomTextInput>
        <CustomTextInput label="Мнение"></CustomTextInput>
      </View>
      <GradientButton title="ИЗПРАТИ СВОЕТО МНЕНИЕ"></GradientButton>
    </View>
  );
};

export default opinions;
const styles = StyleSheet.create({});
