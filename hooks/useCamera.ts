import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

interface UseCameraProps {
  setPicture: (uri: string) => void;
}

interface OpenCameraResult {
  openCamera: () => Promise<void>;
}

const useCamera = (
  setPicture: UseCameraProps["setPicture"]
): OpenCameraResult => {
  const router = useRouter();

  const openCamera = async (): Promise<void> => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const photoUri = result.assets[0].uri;
      setPicture(photoUri);

      router.push({
        pathname: "/opinions",
        params: { imageUri: photoUri },
      });
    }
  };

  return { openCamera };
};

export default useCamera;
