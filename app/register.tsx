import { Text, View, Pressable, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import GradientButton from "@/components/GradientButton";
import { router } from "expo-router";
import styles from "@/styles/register";
import {
  ProfileInfo,
  User,
  UserCharacteristic,
  UserLocation,
} from "@/types/types";
import ProfileImagePicker from "@/components/ProfileImagePicker";
import CustomPicker from "@/components/CustomPicker";
import {
  ageRanges,
  genderOptions,
  professionOptions,
  beliefsOptions,
  townOptions,
  regionOptions,
  districtOptions,
  incomeRanges,
  countriesOptions,
} from "@/constants/Text";
import CustomTextInput from "@/components/CustomTextInput";
import SelectableButtonGroup from "@/components/SelectableButtonGroup";
import { Colors } from "@/constants/Colors";
import OrangeMark from "@/assets/images/orange-mark.svg";
import { useAuth } from "@/context/AuthContext";
import { updateUser } from "@/services/UpdateUser";

const Register = () => {
  const auth = useAuth();
  const user = auth?.user;

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedRange, setSelectedRange] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [selectedIncome, setSelectedIncome] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [showSecondView, setShowSecondView] = useState(false);

  const [userCharacteristic, setUserCharacteristic] =
    useState<UserCharacteristic>({
      gender: "",
      income: "",
      age: "",
      profession: "",
      belief: "",
    });

  const [userLocation, setUserLocation] = useState<UserLocation>({
    country: "",
    city: "",
    district: "",
    area: "",
    street: "",
    houseNumber: "",
  });

  const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
    name: "",
    lastName: "",
    email: "",
    image: "",
    gender: "",
    age: "",
    monthlyIncome: "",
    profession: "",
    belief: "",
    country: "",
    city: "",
    district: "",
    neighborhood: "",
    street: "",
    streetNumber: "",
  });

  useEffect(() => {
    if (user) {
      setProfileImage(user.photoFileUrl || null);
      setProfileInfo((prev) => ({
        ...prev,
        name: user.name,
        lastName: user.surname,
        email: user.email,
      }));
    }
  }, [user]);

  const nextScreen = () => {
    if (
      profileInfo.name &&
      profileInfo.lastName &&
      profileInfo.gender &&
      profileInfo.profession &&
      profileInfo.belief &&
      selectedRange &&
      selectedIncome
    ) {
      setShowSecondView(true);
    } else {
      Alert.alert("Моля, попълнете всички полета.");
      setShowSecondView(false);
    }
  };

  const register = async () => {
    if (
      profileInfo.country &&
      profileInfo.city &&
      profileInfo.district &&
      profileInfo.neighborhood &&
      profileInfo.street &&
      profileInfo.streetNumber
    ) {
      const updatedUser: User = {
        ...user!,
        name: profileInfo.name,
        surname: profileInfo.lastName,
        isCharacteristicFilled: true,
        isLocationFilled: true,
        userCharacteristic: {
          gender: profileInfo.gender,
          income: selectedIncome?.value || "",
          age: selectedRange?.value || "",
          profession: profileInfo.profession,
          belief: profileInfo.belief,
        },
        userLocation: {
          country: profileInfo.country,
          city: profileInfo.city,
          district: profileInfo.district,
          area: profileInfo.neighborhood,
          street: profileInfo.street,
          houseNumber: profileInfo.streetNumber,
        },
      };

      await auth.signIn(updatedUser);
      await updateUser(updatedUser);
      router.navigate("/profile");
    } else {
      Alert.alert("Моля, попълнете всички полета.");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      alwaysBounceVertical={false}
    >
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
                  const isSelected = selectedIncome?.label === range.label;
                  return (
                    <Pressable
                      key={range.value}
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
                          {range.label}
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
                    options={professionOptions}
                  />
                </View>
                <View style={styles.inputSide}>
                  <Text style={styles.label}>ИНТЕРЕСИ</Text>
                  <CustomPicker
                    label="ИНТЕРЕСИ"
                    selectedValue={profileInfo.belief}
                    onValueChange={(value) =>
                      setProfileInfo({ ...profileInfo, belief: value })
                    }
                    options={beliefsOptions}
                  />
                </View>
              </View>
            </View>
            <GradientButton
              title="НАПРЕД"
              onPress={nextScreen}
              style={styles.gradientButton}
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
                    options={townOptions}
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
                    options={regionOptions}
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
                    options={districtOptions}
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
              style={styles.gradientButton}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Register;
