import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 5,
    marginRight: 30,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#25509A",
    textAlign: "center",
    marginBottom: 5,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 75,
  },
  profileImageNotFound: {
    width: 100,
    height: 110,
  },
  imgContainer: {
    width: 150,
    height: 150,
    backgroundColor: "#9F9FA3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 75,
    overflow: "hidden",
  },
  data: {
    textAlign: "right",
    color: "gray",
  },
  inputSide: {
    width: "48%",
  },
  label: {
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "#74ACDA",
    borderRadius: 25,
    paddingVertical: 0,
    textAlignVertical: "center",
    lineHeight: 32,
    height: 32,
    fontSize: 20,
    paddingHorizontal: 10,
    color: "#25509A",
    fontWeight: "bold",
    backgroundColor: "white",
    textAlign: "center",
  },
  picker: {
    color: "#25509A",
    marginTop: -16,
  },
  pickerItem: {},
  pickerWrapper: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#74ACDA",
    borderRadius: 25,
    height: 32,
    backgroundColor: "white",
    overflow: "hidden",
    margin: "auto",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  optionsIncomeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",
    marginTop: 5,
  },
  buttonIncomeBase: {
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonWrapper: {
    width: "40%",
    marginHorizontal: 5,
  },
  buttonBase: {
    borderWidth: 2,
    borderRadius: 25,
    marginHorizontal: 5,
    marginBottom: 10,
    minWidth: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonUnselected: {
    backgroundColor: "#FFFFFF",
    borderColor: "#74ACDA",
  },
  buttonSelected: {
    backgroundColor: "#25509A",
    borderColor: "#25509A",
  },
  textBase: {
    fontSize: 20,
  },
  textUnselected: {
    color: "black",
  },
  textSelected: {
    color: "#FFFFFF",
  },
  text: {
    color: Colors.info,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  gradientButton: {
    marginTop: 15,
    width: "60%",
    alignSelf: "center",
    marginBottom: 20,
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});

export default styles;
