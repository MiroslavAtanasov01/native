import { View, Text, BackHandler } from "react-native";
import React, { useState } from "react";
import GradientButton from "@/components/GradientButton";
import styles from "@/styles/questions";
import QuestionsButton from "@/components/questionsButton/QuestionsButton";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import useCamera from "@/hooks/useCamera";

const questions = () => {
  const [picture, setPicture] = useState<string | null>(null);
  const { openCamera } = useCamera(setPicture);

  return (
    <View>
      <Text style={styles.title}>Отговаряйте и трупайте лоялност!</Text>
      <View>
        <QuestionsButton
          title="ВЪПРОСИ"
          text="2295/2300"
          onPress={() => router.navigate("/question")}
          style={styles.subTItle1}
          icon={require("../../assets/images/speaker.png")}
        />
        <QuestionsButton
          title="МНЕНИЯ"
          text="53 споделени"
          onPress={() => router.navigate("/opinions")}
          style={styles.subTItle2}
          icon={require("../../assets/images/lamp.png")}
        />
        <QuestionsButton
          title="БЛАГОДАРНОСТ"
          text="62% натрупана"
          onPress={() => router.navigate("/gifts")}
          style={styles.subTItle3}
          icon={require("../../assets/images/box.png")}
        />
        <QuestionsButton
          title="ГРАЖДАНСКИ"
          text="КОНТРОЛ"
          onPress={openCamera}
          style={styles.subTItle4}
          icon={require("../../assets/images/glass.png")}
        />
      </View>
      <GradientButton
        title="ИЗХОД ГК"
        onPress={() => BackHandler.exitApp()}
        style={styles.exitButton}
      />
    </View>
  );
};

export default questions;
