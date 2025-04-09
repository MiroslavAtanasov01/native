import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Header from "@/components/Header";
import GradientButton from "@/components/GradientButton";
import CustomTextInput from "@/components/CustomTextInput";
import { Colors } from "@/constants/Colors";

const Opinions = () => {
  const [opinionText, setOpinionText] = useState("");
  const [topicText, setTopicText] = useState("");

  return (
    <ScrollView alwaysBounceVertical={false}>
      <Header title="НОВО" subtitle="МНЕНИЕ" />

      <Image
        style={{ alignSelf: "center", margin: 10 }}
        source={require("../../assets/images/opinions-list.png")}
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
        style={{ marginTop: 10, marginHorizontal: 25 }}
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
