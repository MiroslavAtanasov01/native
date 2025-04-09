import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: Colors.gray,
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  touchable: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  text: {
    color: "#25509A",
    fontSize: 18,
    flex: 1,
    flexShrink: 1,
  },
  iconQuestionMark: {
    width: 38,
    height: 38,
    resizeMode: "contain",
  },
  iconHeart: {
    width: 20,
    height: 18,
    resizeMode: "contain",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0,0,0,0.5)", // Add semi-transparent background
  },
  modalContainer: {
    width: "85%",
    maxWidth: 350,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  modalTitle: {
    color: "#25509A",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalText: {
    fontSize: 15,
    textAlign: "center",
  },
});

export default styles;
