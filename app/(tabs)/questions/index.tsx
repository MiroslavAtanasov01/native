import { View, Text, BackHandler } from "react-native";
import React, { useState } from "react";
import GradientButton from "@/components/GradientButton";
import styles from "@/styles/questions";
import QuestionsButton from "@/components/questionsButton/QuestionsButton";
import { router } from "expo-router";
import useCamera from "@/hooks/useCamera";
import Header from "@/components/Header";
import Logo from "@/components/Logo";

import Box from "@/assets/images/box.svg";
import Lamp from "@/assets/images/lamp.svg";
import Speaker from "@/assets/images/speaker.svg";
import Glass from "@/assets/images/glass.svg";

const questions = () => {
  const [picture, setPicture] = useState<string | null>(null);
  const { openCamera } = useCamera(setPicture);

  return (
    <View>
      <Header title="МЕРОПРИЯТИЯ" subtitle="ПО ПРОГРАМА" />
      <Logo />
      <Text style={styles.title}>Отговаряйте и трупайте лоялност!</Text>
      <View>
        <QuestionsButton
          title="ВЪПРОСИ"
          text="2295/2300"
          onPress={() => router.navigate("/questions/question")}
          style={styles.subTItle1}
          icon={<Speaker height={45} width={45} />}
        />
        <QuestionsButton
          title="МНЕНИЯ"
          text="53 споделени"
          onPress={() => router.navigate("/opinions")}
          style={styles.subTItle2}
          icon={<Lamp height={45} width={45} />}
        />
        <QuestionsButton
          title="БЛАГОДАРНОСТ"
          text="62% натрупана"
          onPress={() => router.navigate("/gifts")}
          style={styles.subTItle3}
          icon={<Box height={45} width={45} />}
        />
        <QuestionsButton
          title="ГРАЖДАНСКИ"
          text="КОНТРОЛ"
          onPress={openCamera}
          style={styles.subTItle4}
          icon={<Glass height={45} width={45} />}
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
