import { Colors } from "@/constants/Colors";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
// Calculate item width for 3 columns with some spacing
const itemMargin = 8;
const itemWidth = (screenWidth - 40 - itemMargin * 4) / 3; // 20 padding each side, margin between items

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop: 15,
  },
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    //TODO
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  infoText: {
    fontSize: 18,
    color: "#555",
  },
  header: {
    marginBottom: 10,
    alignItems: "center",
  },
  headerWrapper: {
    margin: "auto",
    width: "60%",
  },
  headerTextWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 18,
    color: Colors.secondary,
  },
  headerTextBlack: {
    fontSize: 18,
    color: "black",
  },
  questionText: {
    fontSize: 23,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
    textTransform: "uppercase",
  },
  optionsContainer: {
    width: "100%",
  },
  optionsContainerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
  },
  optionButtonGrid: {
    width: itemWidth,
    margin: itemMargin / 2,
    borderRadius: 12,
    alignItems: "center",
  },
  optionUnselected: {
    backgroundColor: Colors.gray,
  },
  optionSelected: {
    backgroundColor: Colors.primary,
  },
  icon: { marginRight: 15 },
  iconGrid: { marginBottom: 5 },
  optionText: { fontSize: 18, flexShrink: 1 },
  optionTextGrid: { fontSize: 14, textAlign: "center" },
  optionTextUnselected: { color: "black" },
  optionTextSelected: { color: "#FFFFFF" },
  optionTextGridUnselected: { color: "black" },
  optionTextGridSelected: { color: "#FFFFFF" },
  optionImage: {
    width: "100%",
    height: itemWidth,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    marginBottom: 5,
    backgroundColor: "#252849",
  },
  optionImageContainer: {
    width: "100%",
    height: itemWidth,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    marginBottom: 5,
    backgroundColor: "#252849",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  overlayTextView: {
    paddingBottom: 3,
    width: "100%",
  },
  overlayText: {
    color: "#FFFFFF",
    fontSize: 15,
    textAlign: "center",
  },
  innerImage: {
    width: "70%",
    height: "60%",
    resizeMode: "contain",
  },
});

export default styles;
