import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  GestureResponderEvent,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";

interface GradientButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const Answer: React.FC<GradientButtonProps> = ({ title, onPress }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePress = (event: GestureResponderEvent) => {
    setIsModalVisible(true);
    if (onPress) onPress(event);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={require("../assets/images/question-mark.png")}
          resizeMode="contain"
        />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{title}</Text>
            <TouchableOpacity
              onPress={() => setIsModalVisible(false)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Answer;

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
  text: {
    color: "#25509A",
    fontSize: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#25509A",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
