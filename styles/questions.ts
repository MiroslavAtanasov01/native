import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  exitButton: { marginTop: 5, width: "60%", margin: "auto" },
  title: {
    fontSize: 18,
    color: Colors.warning,
    textAlign: "center",
    fontWeight: "semibold",
  },
  subTItle1: {
    fontSize: 18,
    color: Colors.success,
    textAlign: "left",
    fontWeight: "bold",
  },
  subTItle2: {
    fontSize: 18,
    color: Colors.primary,
    textAlign: "left",
    fontWeight: "bold",
  },
  subTItle3: {
    fontSize: 18,
    color: Colors.info,
    textAlign: "left",
    fontWeight: "bold",
  },
  subTItle4: {
    fontSize: 18,
    color: Colors.primary,
    textAlign: "left",
    fontWeight: "bold",
  },
});

export default styles;
