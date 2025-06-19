import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "stretch",
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: Colors.gray,
    borderRadius: 20,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingLeft: 15,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  textContainer: {
    flexShrink: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  arrowContainer: {
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  arrowIcon: {
    width: 16,
    height: 27,
    resizeMode: "contain",
  },
  redIcon: {
    width: 40,
    height: 40,
    backgroundColor: Colors.red,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  redText: {
    color: "white",
    fontSize: 10,
  },
  redNumber: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
