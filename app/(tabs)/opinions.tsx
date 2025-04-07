import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Header from "@/components/Header";
import GradientButton from "@/components/GradientButton";
import CustomTextInput from "@/components/CustomTextInput";

const Opinions = () => {
  const [opinionText, setOpinionText] = useState("");
  const [topicText, setTopicText] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Header title="НОВО" subtitle="МНЕНИЕ" />

          <Image
            style={{ alignSelf: "center", margin: 10 }}
            source={require("../../assets/images/opinions-list.png")}
          />

          <Text style={opinionStyles.opinionTitle}>
            СПОДЕЛЕТЕ СВОЕТО МНЕНИЕ
          </Text>
          {/* TODO Hide navbar while typing */}
          <View
            style={{
              backgroundColor: "#D7D8D9",
              paddingVertical: 5,
              height: "60%",
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
            <CustomTextInput
              label="МНЕНИЕ"
              value={opinionText}
              onChangeText={setOpinionText}
              counter
              numSymbols={opinionText.length}
              maxSymbols={200}
              style={{
                height: "75%",
                marginHorizontal: 15,
                marginVertical: 10,
                textAlignVertical: "top",
                paddingVertical: 10,
              }}
            />
          </View>

          <GradientButton
            title="ИЗПРАТИ СВОЕТО МНЕНИЕ"
            style={{ marginTop: 10 }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Opinions;

const opinionStyles = StyleSheet.create({
  opinionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#25509A",
    textAlign: "center",
    marginBottom: 5,
  },
});
