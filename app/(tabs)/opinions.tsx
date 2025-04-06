import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "@/components/Header";
import GradientButton from "@/components/GradientButton";
import CustomTextInput from "@/components/CustomTextInput";

const opinions = () => {
  return (
    <View>
      <Header title="НОВО" subtitle="МНЕНИЕ" />

      <Image
        style={{ alignSelf: "center", margin: 10 }}
        source={require("../../assets/images/opinions-list.png")}
      ></Image>
      <Text style={styles.title}>СПОДЕЛЕТЕ СВОЕТО МНЕНИЕ</Text>
      <View
        style={{
          backgroundColor: "#D7D8D9",
          paddingVertical: 5,
          height: "60%",
          marginBottom: 10,
        }}
      >
        //TODO Input text on couple of rows
        <View>
          <CustomTextInput
            label="ТЕМА"
            style={{
              height: 50,
              marginHorizontal: 15,
              marginVertical: 10,
              textAlignVertical: "top",
              paddingVertical: 10,
            }}
          ></CustomTextInput>
        </View>
        <View>
          <CustomTextInput
            label="МНЕНИЕ"
            style={{
              height: "80%",
              marginHorizontal: 15,
              marginVertical: 10,
              textAlignVertical: "top",
              paddingVertical: 10,
            }}
          ></CustomTextInput>
        </View>
      </View>

      <GradientButton
        title="ИЗПРАТИ СВОЕТО МНЕНИЕ"
        style={{ marginTop: 10 }}
      ></GradientButton>
    </View>
  );
};

export default opinions;
const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#25509A",
    textAlign: "center",
    marginBottom: 5,
  },
});
