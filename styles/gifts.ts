import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    paddingVertical: 10,
  },
  orangeText: {
    color: Colors.info,
    fontSize: 16,
    textAlign: "center",
    lineHeight: 25,
    paddingHorizontal: 35,
  },
  redText: {
    color: Colors.warning,
    fontSize: 20,
    textAlign: "center",
    lineHeight: 25,
    paddingHorizontal: 45,
    fontWeight: "500",
  },
  giftText: {
    color: Colors.primary,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "400",
    paddingVertical: 5,
  },
  imgWrapper: {
    backgroundColor: Colors.gray,
    paddingHorizontal: 10,
  },
  linkText: {
    textAlign: "center",
    padding: 10,
    color: "#74ACDA",
    textDecorationLine: "underline",
  },
});

export default styles;
