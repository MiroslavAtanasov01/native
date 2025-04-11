import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: { alignItems: "center", marginVertical: 10 },
  profileImg: { width: 80, height: 80, borderRadius: 40, marginRight: 10 },
  profileImgContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AACAE6",
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    paddingHorizontal: 30,
    fontWeight: "bold",
    color: Colors.success,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  heart: {
    alignItems: "center",
    paddingTop: 20,
  },
  imageContainer: {
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 20,
  },
  text: {
    color: Colors.info,
    fontSize: 17,
  },
  text2: {
    fontSize: 16,
    paddingHorizontal: 15,
    textAlign: "center",
    color: Colors.primary,
    paddingVertical: 15,
  },
  text3: {
    color: Colors.warning,
    paddingHorizontal: 10,
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 5,
  },
  redText: {
    color: Colors.warning,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 25,
    paddingHorizontal: 55,
    fontWeight: "500",
  },
  linkText: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 18,
    color: "#74ACDA",
    textDecorationLine: "underline",
  },
});
