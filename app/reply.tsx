import {
  BackHandler,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Check from "@/assets/images/svg/green-check.svg";
import OrangeMark from "@/assets/images/orange-mark.svg";
import Heart from "@/assets/images/heart.svg";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import GradientButton from "@/components/GradientButton";
import { styles } from "@/styles/reply";

const Reply = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.image}>
          <Check width={120} height={120} />
        </View>
        <Text style={styles.title}>ОТГОВОР НА ВЪПРОС УСПЕШНО РЕГИСТРИРАН</Text>
        <View style={styles.textContainer}>
          <View style={styles.imageContainer}>
            <OrangeMark />
          </View>
          <Text style={styles.text}>
            Получихме Вашият отговор. Вашите лични данни са скрити!
          </Text>
        </View>
        <View style={styles.profileImgContainer}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/a3/31/a8/a331a8d0a8ff50827c6cb3437f336a30.jpg",
            }}
            style={styles.profileImg}
          />
          <Text style={{ fontSize: 16 }}>{`Иван \nИванов`}</Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.gray,
          }}
        >
          <Text style={styles.text2}>
            Благодарим за гражданската активност. Още 3 отговора и ще ви
            поздравим!
          </Text>
        </View>
        <View style={styles.heart}>
          <Heart height={50} />
        </View>
        <Text style={styles.redText}>
          РАЗГЛЕДАЙТЕ С КАКВО МОЖЕМ ДА ВИ ЗАРАДВАМЕ
        </Text>
        <TouchableOpacity onPress={() => router.navigate("/gifts")}>
          <Text style={styles.linkText}>Линк към нашите предложения</Text>
        </TouchableOpacity>
        <View style={{ backgroundColor: Colors.gray }}>
          <Text style={styles.text3}>
            Имате 3 въпроса очакващи Вашият отговор
          </Text>

          <GradientButton
            title="ПРОДЪЛЖИ"
            onPress={() => router.navigate("/questions/question")}
            style={{ width: "60%", margin: "auto", marginVertical: 15 }}
          />
        </View>
        <GradientButton
          title="ИЗХОД"
          onPress={() => BackHandler.exitApp()}
          style={{ width: "40%", margin: "auto", marginVertical: 15 }}
        />
      </View>
    </ScrollView>
  );
};

export default Reply;
