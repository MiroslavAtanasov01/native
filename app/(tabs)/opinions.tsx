import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Alert } from "react-native";
import Header from "@/components/Header";
import GradientButton from "@/components/GradientButton";
import CustomTextInput from "@/components/CustomTextInput";
import { Colors } from "@/constants/Colors";
import OpinionsListIcon from "@/assets/images/opinions-list.svg";
import { router } from "expo-router";
import { AddUserOpinion } from "@/services/UserOpinion";

const Opinions = () => {
  const [opinionText, setOpinionText] = useState("");
  const [topicText, setTopicText] = useState("");

  const sendOpinion = async () => {
    if (!opinionText || !topicText) {
      Alert.alert("Моля, попълнете всички полета за адрес.");
      return;
    }

    try {
      await AddUserOpinion({ title: topicText, text: opinionText });

      Alert.alert("Успех!", "Мнението е изпратено.");
      // router.navigate("/questions");
      setOpinionText("");
      setTopicText("");
    } catch (error) {
      console.error("Failed to send opinion:", error);
      Alert.alert("Грешка", "Възникна грешка при изпращане на мнението ви.");
    }
  };

  return (
    <ScrollView
      style={{ backgroundColor: "#ffffff" }}
      alwaysBounceVertical={false}
    >
      <Header title="НОВО" subtitle="МНЕНИЕ" />

      <OpinionsListIcon
        width={70}
        height={70}
        style={{ alignSelf: "center", margin: 10 }}
      />

      <Text style={opinionStyles.opinionTitle}>СПОДЕЛЕТЕ СВОЕТО МНЕНИЕ</Text>
      {/* TODO Hide navbar while typing */}
      <View
        style={{
          backgroundColor: Colors.gray,
          paddingVertical: 5,
          marginBottom: 10,
        }}
      >
        {/* ТЕМА input */}
        <CustomTextInput
          label="ТЕМА"
          value={topicText}
          onChangeText={setTopicText}
          counter
          numSymbols={topicText.length}
          maxSymbols={50}
          style={{
            height: 80,
            marginHorizontal: 10,
            textAlignVertical: "top",
            paddingVertical: 10,
          }}
        />

        {/* МНЕНИЕ input */}
        {/* TODO change height for % when removing scroll */}
        <CustomTextInput
          label="МНЕНИЕ"
          value={opinionText}
          onChangeText={setOpinionText}
          counter
          numSymbols={opinionText.length}
          maxSymbols={200}
          style={{
            height: 280,
            marginHorizontal: 15,
            marginVertical: 10,
            textAlignVertical: "top",
            paddingVertical: 10,
          }}
        />
      </View>

      <GradientButton
        title="ИЗПРАТИ СВОЕТО МНЕНИЕ"
        onPress={sendOpinion}
        style={{ marginVertical: 10, marginHorizontal: 25 }}
      />
    </ScrollView>
  );
};

export default Opinions;

const opinionStyles = StyleSheet.create({
  opinionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
    marginBottom: 5,
  },
});
