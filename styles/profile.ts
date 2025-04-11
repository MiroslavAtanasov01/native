import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    paddingVertical: 15,
    paddingHorizontal: 10,
    paddingLeft: 50,
  },
  contentWrapper: {
    margin: "auto",
    width: "90%",
    gap: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 15,
  },
  info: {
    color: Colors.primary,
    fontSize: 16,
    flexShrink: 1,
  },
  text: {
    textAlign: "center",
    color: Colors.info,
    paddingBottom: 15,
    fontSize: 16,
    paddingHorizontal: 20,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonStyle: {},
});

export default styles;
