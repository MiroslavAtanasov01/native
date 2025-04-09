import { Text, View, Pressable, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import GradientButton from "@/components/GradientButton";
import { router } from "expo-router";
import styles from "@/styles/register";
import { ProfileInfo } from "@/types/types";
import ProfileImagePicker from "@/components/ProfileImagePicker";
import CustomPicker from "@/components/CustomPicker";
import {
  ageRanges,
  genderOptions,
  incomeRanges,
  countriesOptions,
} from "@/constants/Text";
import CustomTextInput from "@/components/CustomTextInput";
import SelectableButtonGroup from "@/components/SelectableButtonGroup";
import { Image } from "react-native";
import { Colors } from "@/constants/Colors";
import OrangeMark from "@/assets/images/orange-mark.svg";

const register = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedRange, setSelectedRange] = useState<string | null>(null);
  const [selectedIncome, setSelectedIncome] = useState<string | null>(null);
  const [showSecondView, setShowSecondView] = useState(false);

  const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
    name: "",
    lastName: "",
    email: "",
    image: "",
    gender: "",
    age: "",
    monthlyIncome: "",
    profession: "",
    interests: "",
    country: "",
    city: "",
    district: "",
    neighborhood: "",
    street: "",
    streetNumber: "",
  });

  const nextScreen = () => {
    if (
      // profileInfo.name &&
      // profileInfo.lastName &&
      // profileInfo.gender &&
      // profileInfo.profession &&
      // profileInfo.interests &&
      // selectedRange &&
      selectedIncome
    ) {
      setShowSecondView(true);
    } else {
      setShowSecondView(false);
    }
  };

  const register = () => {
    if (
      // profileInfo.country &&
      // profileInfo.city &&
      // profileInfo.district &&
      // profileInfo.neighborhood &&
      // profileInfo.street &&
      // profileInfo.streetNumber &&
      profileInfo.email
    ) {
      router.navigate("/profile");
    } else {
      console.log("error");
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <ProfileImagePicker
          profileImage={profileImage}
          setProfileImage={setProfileImage}
        />
        <Text style={styles.title}>РЕГИСТРАЦИЯ</Text>

        {/* First view */}
        {!showSecondView && (
          <>
            <View style={{ backgroundColor: Colors.gray, paddingVertical: 5 }}>
              <View style={styles.inputContainer}>
                <View style={styles.inputSide}>
                  <CustomTextInput
                    label="ИМЕ"
                    value={profileInfo.name}
                    mode="text"
                    onChangeText={(text) =>
                      setProfileInfo({ ...profileInfo, name: text })
                    }
                  />
                </View>
                <View style={styles.inputSide}>
                  <CustomTextInput
                    label="ФАМИЛИЯ"
                    value={profileInfo.lastName}
                    mode="text"
                    onChangeText={(text) =>
                      setProfileInfo({ ...profileInfo, lastName: text })
                    }
                  />
                </View>
              </View>
              <Text style={styles.label}>ПОЛ</Text>
              <View style={{ width: "50%", margin: "auto" }}>
                <CustomPicker
                  label="ПОЛ"
                  selectedValue={profileInfo.gender}
                  onValueChange={(value) =>
                    setProfileInfo({ ...profileInfo, gender: value })
                  }
                  options={genderOptions}
                />
              </View>
              <Text style={styles.label}>ВЪЗРАСТ</Text>
              <View style={styles.optionsContainer}>
                <SelectableButtonGroup
                  options={ageRanges}
                  selectedValue={selectedRange}
                  onSelect={setSelectedRange}
                />
              </View>
              <Text style={styles.label}>МЕСЕЧЕН ДОХОД В ЕВРО</Text>
              <View style={styles.optionsIncomeContainer}>
                {incomeRanges.map((range) => {
                  const isSelected = selectedIncome === range;
                  return (
                    <Pressable
                      key={range}
                      style={styles.buttonWrapper}
                      onPress={() => setSelectedIncome(range)}
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
                  <CustomPicker
                    label="ПРОФЕСИЯ"
                    selectedValue={profileInfo.profession}
                    onValueChange={(value) =>
                      setProfileInfo({ ...profileInfo, profession: value })
                    }
                    options={genderOptions}
                  />
                </View>
                <View style={styles.inputSide}>
                  <Text style={styles.label}>ИНТЕРЕСИ</Text>
                  <CustomPicker
                    label="ИНТЕРЕСИ"
                    selectedValue={profileInfo.interests}
                    onValueChange={(value) =>
                      setProfileInfo({ ...profileInfo, interests: value })
                    }
                    options={genderOptions}
                  />
                </View>
              </View>
            </View>
            <GradientButton
              title="НАПРЕД"
              onPress={nextScreen}
              style={{ marginTop: 15, width: "60%", margin: "auto" }}
            />
          </>
        )}
        {/* Second view (conditionally rendered) */}
        {showSecondView && (
          <>
            <View style={{ backgroundColor: Colors.gray, paddingVertical: 5 }}>
              <View style={styles.inputContainer}>
                <View style={styles.inputSide}>
                  <Text style={styles.label}>ДЪРЖАВА</Text>
                  <CustomPicker
                    label="ДЪРЖАВА"
                    selectedValue={profileInfo.country}
                    onValueChange={(value) =>
                      setProfileInfo({ ...profileInfo, country: value })
                    }
                    options={countriesOptions}
                  />
                </View>
                <View style={styles.inputSide}>
                  <Text style={styles.label}>ГРАД</Text>
                  <CustomPicker
                    label="ГРАД"
                    selectedValue={profileInfo.city}
                    onValueChange={(value) =>
                      setProfileInfo({ ...profileInfo, city: value })
                    }
                    options={genderOptions}
                  />
                </View>
              </View>
              <View style={styles.inputContainer}>
                <View style={styles.inputSide}>
                  <Text style={styles.label}>РАЙОН</Text>
                  <CustomPicker
                    label="РАЙОН"
                    selectedValue={profileInfo.district}
                    onValueChange={(value) =>
                      setProfileInfo({ ...profileInfo, district: value })
                    }
                    options={genderOptions}
                  />
                </View>
                <View style={styles.inputSide}>
                  <Text style={styles.label}>КВАРТАЛ</Text>
                  <CustomPicker
                    label="КВАРТАЛ"
                    selectedValue={profileInfo.neighborhood}
                    onValueChange={(value) =>
                      setProfileInfo({ ...profileInfo, neighborhood: value })
                    }
                    options={genderOptions}
                  />
                </View>
              </View>
              <View style={styles.textContainer}>
                <OrangeMark style={{ padding: 15 }} />
                <Text style={styles.text}>ВАШИТЕ ДАННИ ЩЕ БЪДАТ СКРИТИ</Text>
              </View>
              <View style={styles.inputContainer}>
                <View style={{ width: "70%" }}>
                  <CustomTextInput
                    label="УЛИЦА"
                    value={profileInfo.street}
                    mode="text"
                    onChangeText={(text) =>
                      setProfileInfo({ ...profileInfo, street: text })
                    }
                  />
                </View>
                <View style={{ width: "26%" }}>
                  <CustomTextInput
                    label="№"
                    value={profileInfo.streetNumber}
                    mode="numeric"
                    onChangeText={(text) =>
                      setProfileInfo({ ...profileInfo, streetNumber: text })
                    }
                  />
                </View>
              </View>
              <View style={{ width: "96%", margin: "auto" }}>
                <CustomTextInput
                  label="ЕЛ. ПОЩА ЗА КОМУНИКАЦИЯ"
                  value={profileInfo.email}
                  mode="email"
                  onChangeText={(text) =>
                    setProfileInfo({ ...profileInfo, email: text })
                  }
                />
              </View>
            </View>

            <GradientButton
              title="РЕГИСТРАЦИЯ"
              onPress={register}
              style={{ marginTop: 15, width: "60%", margin: "auto" }}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default register;
