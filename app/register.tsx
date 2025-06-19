import { Text, View, Pressable, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import GradientButton from "@/components/GradientButton";
import { router } from "expo-router";
import styles from "@/styles/register";
import { User, UserCharacteristic, UserLocation } from "@/types/types";
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
import { updateUser } from "@/services/Users";
import { uploadPhoto } from "@/services/uploadUserPhoto";
import { UploadPhotoResponse } from "@/services/uploadCIvilControlFile";

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
  const [photoFileName, setPhotoFileName] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (user?.isCharacteristicFilled) {
      router.replace("/(tabs)/questions");
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setProfileImage(user.photoFileUrl || null);
      setPhotoFileName(user.photoFileName || null);
    }
  }, [user]);

  const handleImageSelected = async (uri: string | null) => {
    if (!uri) {
      setProfileImage(null);
      setPhotoFileName(null);
      return;
    }

    setProfileImage(uri);
    setIsUploading(true);

    try {
      const response = await uploadPhoto(uri);

      const name =
        typeof response === "string"
          ? response
          : (response as UploadPhotoResponse).name;
      setPhotoFileName(name);
      Alert.alert("Успех", "Снимката е качена успешно.");
    } catch (error) {
      console.error("Failed to upload photo:", error);
      Alert.alert("Грешка", "Възникна грешка при качването на снимката.");
      setProfileImage(user?.photoFileUrl || null);
    } finally {
      setIsUploading(false);
    }
  };

  const nextScreen = () => {
    if (
      userCharacteristic.gender &&
      userCharacteristic.profession &&
      userCharacteristic.belief &&
      userCharacteristic.age &&
      userCharacteristic.income
    ) {
      setShowSecondView(true);
    } else {
      Alert.alert("Моля, попълнете всички полета.");
    }
  };

  const register = async () => {
    if (
      !userLocation.country ||
      !userLocation.city ||
      !userLocation.district ||
      !userLocation.area ||
      !userLocation.street ||
      !userLocation.houseNumber
    ) {
      Alert.alert("Моля, попълнете всички полета за адрес.");
      return;
    }

    if (!user) {
      Alert.alert("Грешка", "Сесията е изтекла, моля влезте отново.");
      return;
    }

    const updatedUser: User = {
      ...user,
      photoFileName: photoFileName,
      userCharacteristic,
      userLocation,
      isCharacteristicFilled: true,
      isLocationFilled: true,
    };

    try {
      //add loading state if needed
      await updateUser(updatedUser);
      await auth.signIn(updatedUser);

      Alert.alert("Успех!", "Регистрацията е завършена.");
      router.navigate("/profile");
    } catch (error) {
      console.error("Failed to update user:", error);
      Alert.alert("Грешка", "Възникна грешка при запазване на профила ви.");
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
          onImagePicked={handleImageSelected}
          isLoading={isUploading}
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
                    value={user?.name || ""}
                    mode="text"
                  />
                </View>
                <View style={styles.inputSide}>
                  <CustomTextInput
                    label="ФАМИЛИЯ"
                    value={user?.surname || ""}
                    mode="text"
                  />
                </View>
              </View>
              <Text style={styles.label}>ПОЛ</Text>
              <View style={{ width: "50%", margin: "auto" }}>
                <CustomPicker
                  label="ПОЛ"
                  selectedValue={userCharacteristic.gender}
                  onValueChange={(value) =>
                    setUserCharacteristic({
                      ...userCharacteristic,
                      gender: value,
                    })
                  }
                  options={genderOptions}
                />
              </View>
              <Text style={styles.label}>ВЪЗРАСТ</Text>
              <View style={styles.optionsContainer}>
                <SelectableButtonGroup
                  options={ageRanges}
                  selectedValue={selectedRange}
                  onSelect={(range) => {
                    setSelectedRange(range);
                    setUserCharacteristic({
                      ...userCharacteristic,
                      age: range.value,
                    });
                  }}
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
                      onPress={() => {
                        setSelectedIncome(range);
                        setUserCharacteristic({
                          ...userCharacteristic,
                          income: range.value,
                        });
                      }}
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
                    selectedValue={userCharacteristic.profession}
                    onValueChange={(value) =>
                      setUserCharacteristic({
                        ...userCharacteristic,
                        profession: value,
                      })
                    }
                    options={professionOptions}
                  />
                </View>
                <View style={styles.inputSide}>
                  <Text style={styles.label}>ИНТЕРЕСИ</Text>
                  <CustomPicker
                    label="ИНТЕРЕСИ"
                    selectedValue={userCharacteristic.belief}
                    onValueChange={(value) =>
                      setUserCharacteristic({
                        ...userCharacteristic,
                        belief: value,
                      })
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
                    selectedValue={userLocation.country}
                    onValueChange={(value) =>
                      setUserLocation({ ...userLocation, country: value })
                    }
                    options={countriesOptions}
                  />
                </View>
                <View style={styles.inputSide}>
                  <Text style={styles.label}>ГРАД</Text>
                  <CustomPicker
                    label="ГРАД"
                    selectedValue={userLocation.city}
                    onValueChange={(value) =>
                      setUserLocation({ ...userLocation, city: value })
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
                    selectedValue={userLocation.district}
                    onValueChange={(value) =>
                      setUserLocation({ ...userLocation, district: value })
                    }
                    options={regionOptions}
                  />
                </View>
                <View style={styles.inputSide}>
                  <Text style={styles.label}>КВАРТАЛ</Text>
                  <CustomPicker
                    label="КВАРТАЛ"
                    selectedValue={userLocation.area}
                    onValueChange={(value) =>
                      setUserLocation({ ...userLocation, area: value })
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
                    value={userLocation.street}
                    mode="text"
                    onChangeText={(text) =>
                      setUserLocation({ ...userLocation, street: text })
                    }
                  />
                </View>
                <View style={{ width: "26%" }}>
                  <CustomTextInput
                    label="№"
                    value={userLocation.houseNumber}
                    mode="numeric"
                    onChangeText={(text) =>
                      setUserLocation({ ...userLocation, houseNumber: text })
                    }
                  />
                </View>
              </View>
              <View style={{ width: "96%", margin: "auto" }}>
                <CustomTextInput
                  label="ЕЛ. ПОЩА ЗА КОМУНИКАЦИЯ"
                  value={user?.email || ""}
                  mode="email"
                  editable={false}
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
