import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#D7D8D9",
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  touchable: {
    width: "100%",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: "#25509A",
    fontSize: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: 300,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  modalTitle: {
    color: "#25509A",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 15,
  },
});

export default styles;
