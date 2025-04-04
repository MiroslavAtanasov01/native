import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

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
    padding: 20, // TODO
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
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 14,
    color: Colors.secondary,
  },
  headerTextBlack: {
    fontSize: 14,
    color: "black",
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
    marginBottom: 20,
  },
  optionsContainer: {
    width: "100%",
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
  },
  optionUnselected: {
    backgroundColor: Colors.gray,
  },
  optionSelected: {
    backgroundColor: Colors.primary,
  },
  icon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 18,
    flexShrink: 1,
  },
  optionTextUnselected: {
    color: "black",
  },
  optionTextSelected: {
    color: "#FFFFFF",
  },
  nextButton: {
    marginTop: 30,
    backgroundColor: "#1E88E5", // Example color for next button
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
