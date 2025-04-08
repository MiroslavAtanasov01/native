import { View, Image, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "../styles/register";
import React from "react";
import { todayDate } from "@/utils/text";

interface ProfileImagePickerProps {
  profileImage: string | null;
  setProfileImage: (image: string | null) => void;
}

const ProfileImagePicker: React.FC<ProfileImagePickerProps> = ({
  profileImage,
  setProfileImage,
}) => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.data}>{`ДАТА:\n ${todayDate}`}</Text>

      <View style={styles.imgContainer}>
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : require("../assets/images/profile-not-found.png")
          }
          style={
            profileImage ? styles.profileImage : styles.profileImageNotFound
          }
        />
      </View>
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={require("../assets/images/camera.png")}
          style={{ width: 30, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileImagePicker;
