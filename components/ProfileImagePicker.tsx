import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "@/styles/register";
import React from "react";
import { todayDate } from "@/utils/text";
import Camera from "@/assets/images/camera.svg";
import ProfileImageNotFound from "@/assets/images/profile-not-found.svg";
import { Colors } from "@/constants/Colors";

interface ProfileImagePickerProps {
  profileImage: string | null;
  isLoading?: boolean;
  onImagePicked: (uri: string | null) => void;
}

const ProfileImagePicker: React.FC<ProfileImagePickerProps> = ({
  profileImage,
  isLoading,
  onImagePicked,
}) => {
  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("Необходимо е разрешение за достъп до вашите снимки!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      onImagePicked(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.data}>{`ДАТА:\n ${todayDate}`}</Text>

      <View style={styles.imgContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <ProfileImageNotFound style={styles.profileImageNotFound} />
        )}
        {isLoading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={Colors.secondary} />
          </View>
        )}
      </View>
      <TouchableOpacity onPress={pickImage} disabled={isLoading}>
        <Camera width={30} height={25} />
      </TouchableOpacity>
    </View>
  );
};
export default ProfileImagePicker;
