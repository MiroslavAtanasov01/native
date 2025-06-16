import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAuthToken = async (): Promise<string | null> => {
  return await AsyncStorage.getItem("jwt");
};
