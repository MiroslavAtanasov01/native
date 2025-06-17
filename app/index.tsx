import { Text, View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import GradientButton from "@/components/GradientButton";
import { useRouter } from "expo-router";
import Logo from "@/components/Logo";
import { FlatList } from "react-native";
import { Colors } from "@/constants/Colors";
import Check from "@/assets/images/check.svg";
import { useAuth } from "@/context/AuthContext";

const IndexScreen = () => {
  const router = useRouter();

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.replace("/(tabs)/questions");
    }
  }, [user]);

  const data: string[] = [
    "Регистрация в Платформата",
    "Получавате граждански въпроси",
    "Задавате граждански въпроси",
    "Получавате граждански отговори",
    "Получавате подкрепа!\n  • юридическа\n  • социална\n  • морална",
  ];

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.middleContent}>
        <View style={styles.blueSection}>
          <Text style={styles.sectionText}>
            Проект за пряка демокрация към Гражданите "Граждани на квартала".
          </Text>
          <Text style={styles.sectionText}>
            Прозрачност на мнението на Гражданите.
          </Text>
          <Text style={styles.sectionText}>
            Подръжка на гражданските инициативи и традиционните европейски
            ценности.
          </Text>
          <Text style={styles.highlightText}>ВИЕ НЕ СТЕ САМИ!!!</Text>
          <View style={styles.listContainer}>
            <FlatList
              data={data}
              scrollEnabled={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <Check style={styles.checkIcon} width={20} height={20} />
                  <Text style={styles.listItemText}>{item}</Text>
                </View>
              )}
            />
          </View>
        </View>

        <Text style={styles.orangeSectionText}>Ние търсим вашето мнение</Text>
      </View>

      <GradientButton
        title="РЕГИСТРИРАЙ СЕ"
        onPress={() => router.navigate("/preregister")}
        style={styles.registerButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  middleContent: {
    flex: 1,
    // justifyContent: "center", // Center content vertically if it's shorter than the space
  },

  blueSection: {
    backgroundColor: Colors.primary,
    padding: 12,
  },
  sectionText: {
    textAlign: "center",
    padding: 4,
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  highlightText: {
    fontSize: 28,
    color: "white",
    textAlign: "center",
    padding: 20,
    fontWeight: "bold",
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  checkIcon: {
    resizeMode: "contain",
    marginRight: 10,
    marginTop: 2,
  },
  listItemText: {
    color: "white",
    fontSize: 16,
    flex: 1,
    flexShrink: 1,
  },
  orangeSectionText: {
    fontSize: 24,
    color: "white",
    backgroundColor: Colors.info,
    textAlign: "center",
    padding: 16,
    fontWeight: "bold",
  },
  registerButton: {
    width: "70%",
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 20,
  },
});

export default IndexScreen;
