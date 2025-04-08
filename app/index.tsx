import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";
import GradientButton from "@/components/GradientButton";
import { useRouter } from "expo-router";
import Logo from "@/components/Logo";
import { FlatList } from "react-native";

const index = () => {
  const router = useRouter();

  const data: string[] = [
    "Регистрация в Платформата",
    "Получавате граждански въпроси",
    "Задавате граждански въпроси",
    "Получавате граждански отговори",
    "Получавате подкрепа!\n  • юридическа\n  • социална\n  • морална",
  ];

  return (
    <View>
      <Logo />
      <View className="bg-tab p-3">
        <Text className="text-center p-1 text-white text-base">
          Проект за пряка демокрация към Гражданите "Граждани на квартала".
        </Text>
        <Text className="text-center p-1 text-white text-base">
          Прозрачност на мнението на Гражданите.
        </Text>
        <Text className="text-center p-1 text-white text-base">
          Подръжка на гражданските инициативи и традиционните европейски
          ценности.
        </Text>
        <Text className="text-3xl text-white text-center p-5">
          ВИЕ НЕ СТЕ САМИ!!!
        </Text>
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            className="text-center"
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Image
                  source={require("../assets/images/check.png")}
                  resizeMode="contain"
                />
                <Text className="text-white text-base ml-5">{item}</Text>
              </View>
            )}
          />
        </View>
      </View>
      <Text className="text-2xl text-white bg-customOrange text-center p-4">
        Ние търсим вашето мнение
      </Text>
      <GradientButton
        title="РЕГИСТРИРАЙ СЕ"
        onPress={() => router.navigate("/questions")} // preregister
        style={{ marginTop: 15, width: "60%", margin: "auto" }}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  listContainer: {
    alignItems: "center",
  },
});
