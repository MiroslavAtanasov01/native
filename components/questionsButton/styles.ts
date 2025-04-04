import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: Colors.gray,
    borderRadius: 20,
    paddingVertical: 5,
    paddingRight: 5,
  },
  content: {
    flexDirection: "row",
  },
  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 23,
  },
});

export default styles;
