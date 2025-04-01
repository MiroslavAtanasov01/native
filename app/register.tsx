import {
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import GradientButton from "@/components/GradientButton";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { todayDate } from "@/utils/text";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles/register";
import { ProfileInfo } from "@/types/types";

const register = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const ageRanges = ["18-24", "25-29", "30-34", "45-49"];
  const incomeRanges = ["1-1000", "1001-3000", "3001-5000", "над 5000"];
  const [selectedRange, setSelectedRange] = useState<string | null>(null);
  const [selectedIncome, setSelectedIncome] = useState<string | null>(null);
  const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
    name: "",
    lastName: "",
    email: "",
    gender: "",
    age: "",
    monthlyIncome: "",
    profession: "",
    interests: "",
    country: "",
    city: "",
  });

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleAgeRange = (range: string) => {
    // Allow deselecting if clicking the already selected item (optional)
    const newAgeRange = selectedRange === range ? null : range;
    // Or force selection (always have one selected once one is clicked)
    // const newAgeRange = range;

    setSelectedRange(newAgeRange);
  };

  const handleIncomeRange = (range: string) => {
    const newIncomeRange = range;
    setSelectedIncome(newIncomeRange);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <View style={styles.container}>
          <Text style={styles.data}>{`ДАТА:\n ${todayDate}`}</Text>
          {profileImage ? (
            <View style={styles.imgContainer}>
              <Image
                source={{ uri: profileImage }}
                style={styles.profileImage}
              />
            </View>
          ) : (
            <View style={styles.imgContainer}>
              <Image
                source={require("../assets/images/profile-not-found.png")}
                style={styles.profileImageNotFound}
              />
            </View>
          )}

          <TouchableOpacity onPress={pickImage}>
            <Image
              source={require("../assets/images/camera.png")}
              style={{ width: 30, height: 20 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>РЕГИСТРАЦИЯ</Text>
        <View style={{ backgroundColor: "#D7D8D9", paddingVertical: 5 }}>
          <View style={styles.inputContainer}>
            <View style={styles.inputSide}>
              <Text style={styles.label}>ИМЕ</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) =>
                  setProfileInfo((prev: ProfileInfo) => ({
                    ...prev,
                    name: text,
                  }))
                }
                value={profileInfo.name}
              />
            </View>
            <View style={styles.inputSide}>
              <Text style={styles.label}>ФАМИЛИЯ</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) =>
                  setProfileInfo((prev: ProfileInfo) => ({
                    ...prev,
                    lastName: text,
                  }))
                }
                value={profileInfo.lastName}
              />
            </View>
          </View>
          <Text style={styles.label}>ПОЛ</Text>
          <View style={[styles.pickerWrapper, { width: "50%" }]}>
            <Picker
              style={styles.picker}
              itemStyle={styles.pickerItem}
              selectedValue={profileInfo.gender}
              onValueChange={(itemValue: string) =>
                setProfileInfo((prev: ProfileInfo) => ({
                  ...prev,
                  gender: itemValue,
                }))
              }
            >
              <Picker.Item label="Мъж" value="man" />
              <Picker.Item label="Жена" value="women" />
            </Picker>
          </View>

          <Text style={styles.label}>ВЪЗРАСТ</Text>
          <View style={styles.optionsContainer}>
            {ageRanges.map((range) => {
              const isSelected = selectedRange === range;
              return (
                <Pressable
                  key={range}
                  style={[
                    styles.buttonBase,
                    isSelected
                      ? styles.buttonSelected
                      : styles.buttonUnselected,
                  ]}
                  onPress={() => handleAgeRange(range)}
                >
                  <Text
                    style={[
                      styles.textBase,
                      isSelected ? styles.textSelected : styles.textUnselected,
                    ]}
                  >
                    {range}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <Text style={styles.label}>МЕСЕЧЕН ДОХОД В ЕВРО</Text>
          <View style={styles.optionsIncomeContainer}>
            {incomeRanges.map((range) => {
              const isSelected = selectedIncome === range;
              return (
                <Pressable
                  key={range}
                  style={styles.buttonWrapper}
                  onPress={() => handleIncomeRange(range)}
                >
                  <View
                    style={[
                      styles.buttonIncomeBase,
                      isSelected
                        ? styles.buttonSelected
                        : styles.buttonUnselected,
                    ]}
                  >
                    <Text
                      style={[
                        styles.textBase,
                        isSelected
                          ? styles.textSelected
                          : styles.textUnselected,
                      ]}
                    >
                      {range}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.inputSide}>
              <Text style={styles.label}>ПРОФЕСИЯ</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                  selectedValue={profileInfo.gender}
                  onValueChange={(itemValue: string) =>
                    setProfileInfo((prev: ProfileInfo) => ({
                      ...prev,
                      profession: itemValue,
                    }))
                  }
                >
                  <Picker.Item label="Програмист" value="developer" />
                  <Picker.Item label="Дизайнер" value="designer" />
                </Picker>
              </View>
            </View>
            <View style={styles.inputSide}>
              <Text style={styles.label}>ИНТЕРЕСИ</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                  selectedValue={profileInfo.gender}
                  onValueChange={(itemValue: string) =>
                    setProfileInfo((prev: ProfileInfo) => ({
                      ...prev,
                      interests: itemValue,
                    }))
                  }
                >
                  <Picker.Item label="Интерес" value="interest" />
                  <Picker.Item label="Интерес2" value="interest" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputSide}>
              <Text style={styles.label}>ДЪРЖАВА</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                  selectedValue={profileInfo.gender}
                  onValueChange={(itemValue: string) =>
                    setProfileInfo((prev: ProfileInfo) => ({
                      ...prev,
                      gender: itemValue,
                    }))
                  }
                >
                  <Picker.Item label="България" value="bulgaria" />
                  <Picker.Item label="Русия" value="russia" />
                </Picker>
              </View>
            </View>
            <View style={styles.inputSide}>
              <Text style={styles.label}>ГРАД</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                  selectedValue={profileInfo.gender}
                  onValueChange={(itemValue: string) =>
                    setProfileInfo((prev: ProfileInfo) => ({
                      ...prev,
                      gender: itemValue,
                    }))
                  }
                >
                  <Picker.Item label="Варна" value="varna" />
                  <Picker.Item label="София" value="sofia" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputSide}>
              <Text style={styles.label}>РАЙОН</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                  selectedValue={profileInfo.gender}
                  onValueChange={(itemValue: string) =>
                    setProfileInfo((prev: ProfileInfo) => ({
                      ...prev,
                      gender: itemValue,
                    }))
                  }
                >
                  <Picker.Item label="Одесос" value="odesos" />
                  <Picker.Item label="Приморски" value="primorski" />
                </Picker>
              </View>
            </View>
            <View style={styles.inputSide}>
              <Text style={styles.label}>КВАРТАЛ</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                  selectedValue={profileInfo.gender}
                  onValueChange={(itemValue: string) =>
                    setProfileInfo((prev: ProfileInfo) => ({
                      ...prev,
                      gender: itemValue,
                    }))
                  }
                >
                  <Picker.Item label="Младост" value="mladost" />
                  <Picker.Item label="Владиславово" value="vladislavovo" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={{ width: "70%" }}>
              <Text style={styles.label}>УЛИЦА</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) =>
                  setProfileInfo((prev: ProfileInfo) => ({
                    ...prev,
                    name: text,
                  }))
                }
                value={profileInfo.name}
              />
            </View>
            <View style={{ width: "26%" }}>
              <Text style={styles.label}>№</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) =>
                  setProfileInfo((prev: ProfileInfo) => ({
                    ...prev,
                    lastName: text,
                  }))
                }
                value={profileInfo.lastName}
              />
            </View>
          </View>
          <View style={{ width: "96%", margin: "auto" }}>
            <Text style={styles.label}>ЕЛ. ПОЩА ЗА КОМУНИКАЦИЯ</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) =>
                setProfileInfo((prev: ProfileInfo) => ({
                  ...prev,
                  email: text,
                }))
              }
              value={profileInfo.email}
            />
          </View>
        </View>
        <GradientButton
          title="РЕГИСТРАЦИЯ"
          onPress={() => router.navigate("/questions")}
        />
      </View>
    </ScrollView>
  );
};

export default register;
